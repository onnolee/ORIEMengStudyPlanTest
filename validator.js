// Requirements validation engine
class RequirementsValidator {
  constructor(requirementsData) {
    this.courses = requirementsData.courses;
    this.requirements = requirementsData.requirements;
    
    // Create course lookup
    this.courseLookup = {};
    this.courses.forEach(course => {
      this.courseLookup[course.code] = course;
    });
  }

  // Main validation function
  validateStudentPlan(concentration, enrolledCourses) {
    const results = {
      concentration: concentration,
      universal: this.checkUniversalRequirements(enrolledCourses),
      concentration_specific: this.checkConcentrationRequirements(concentration, enrolledCourses),
      total_credits: this.calculateTotalCredits(enrolledCourses),
      complete: false
    };
    
    results.complete = this.isComplete(results);
    return results;
  }

  // Check universal requirements (core, project, practicum)
  checkUniversalRequirements(enrolledCourses) {
    const core = { DSSM: 0, Optimization: 0, Stochastic: 0 };
    let projectCredits = 0;
    let practicumCredits = 0;
    let projectPrepCredits = 0;
    
    enrolledCourses.forEach(code => {
      const course = this.courseLookup[code];
      if (!course) return;
      
      const genReq = course.satisfies.general;
      
      if (genReq && genReq.includes('Core: DSSM')) {
        core.DSSM += course.credits;
      }
      if (genReq && genReq.includes('Core: Optimization')) {
        core.Optimization += course.credits;
      }
      if (genReq && genReq.includes('Core: Stochastic')) {
        core.Stochastic += course.credits;
      }
      if (genReq === 'Project') {
        projectCredits += course.credits;
      }
      if (genReq === 'Practicum') {
        practicumCredits += course.credits;
      }
      if (genReq === 'Project Prep') {
        projectPrepCredits += course.credits;
      }
    });
    
    return {
      core: {
        DSSM: { earned: core.DSSM, required: 3, met: core.DSSM >= 3 },
        Optimization: { earned: core.Optimization, required: 3, met: core.Optimization >= 3 },
        Stochastic: { earned: core.Stochastic, required: 3, met: core.Stochastic >= 3 },
        total: { earned: core.DSSM + core.Optimization + core.Stochastic, required: 12, met: (core.DSSM + core.Optimization + core.Stochastic) >= 12 }
      },
      project: { earned: projectCredits, required: 5, met: projectCredits >= 5 },
      practicum: { earned: practicumCredits, required: 1, met: practicumCredits >= 1 },
      project_prep: { earned: projectPrepCredits, required: 1, met: projectPrepCredits >= 1 }
    };
  }

  // Check concentration-specific requirements
  checkConcentrationRequirements(concentration, enrolledCourses) {
    const concReq = this.requirements.concentrations[concentration];
    if (!concReq) return { error: "Invalid concentration" };
    
    const results = {
      name: concReq.name,
      rules: []
    };
    
    concReq.rules.forEach(rule => {
      const ruleResult = this.checkRule(rule, concentration, enrolledCourses);
      results.rules.push(ruleResult);
    });
    
    return results;
  }

  // Check individual rule
  checkRule(rule, concentration, enrolledCourses) {
    const result = {
      type: rule.type,
      description: rule.description,
      met: false
    };
    
    switch (rule.type) {
      case 'min_credits':
        result.earned = this.countCreditsInCategories(rule.categories, concentration, enrolledCourses);
        result.required = rule.credits;
        result.met = result.earned >= result.required;
        break;
        
      case 'min_courses':
        result.earned = this.countCoursesInCategories(rule.categories, concentration, enrolledCourses);
        result.required = rule.count;
        result.met = result.earned >= result.required;
        break;
        
      case 'required_courses':
        result.required_courses = rule.courses;
        result.taken = rule.courses.filter(code => enrolledCourses.includes(code));
        result.met = rule.courses.every(code => enrolledCourses.includes(code));
        break;
        
      case 'required_one_of':
        result.required_courses = rule.courses;
        result.taken = rule.courses.filter(code => enrolledCourses.includes(code));
        result.met = rule.courses.some(code => enrolledCourses.includes(code));
        break;
        
      case 'location_credits':
        // For FE concentration - track Ithaca vs CFEM credits
        // This would need semester data which isn't in the basic course list
        result.earned = 0;
        result.required = rule.credits;
        result.location = rule.location;
        result.met = false;
        result.note = "Location tracking requires semester enrollment data";
        break;
        
      case 'note':
        result.note = rule.description;
        result.met = null;
        break;
    }
    
    return result;
  }

  // Count credits in specific categories for a concentration
  countCreditsInCategories(categories, concentration, enrolledCourses) {
    let total = 0;
    enrolledCourses.forEach(code => {
      const course = this.courseLookup[code];
      if (!course) return;
      
      const concReq = course.satisfies[concentration];
      if (concReq && categories.some(cat => concReq.includes(cat))) {
        total += course.credits;
      }
    });
    return total;
  }

  // Count courses in specific categories for a concentration
  countCoursesInCategories(categories, concentration, enrolledCourses) {
    let count = 0;
    enrolledCourses.forEach(code => {
      const course = this.courseLookup[code];
      if (!course) return;
      
      const concReq = course.satisfies[concentration];
      if (concReq && categories.some(cat => concReq.includes(cat))) {
        count++;
      }
    });
    return count;
  }

  // Calculate total credits
  calculateTotalCredits(enrolledCourses) {
    let total = 0;
    enrolledCourses.forEach(code => {
      const course = this.courseLookup[code];
      if (course) {
        total += course.credits;
      }
    });
    return total;
  }

  // Check if all requirements are met
  isComplete(results) {
    // Check universal requirements
    const coreComplete = results.universal.core.DSSM.met && 
                        results.universal.core.Optimization.met && 
                        results.universal.core.Stochastic.met;
    const projectComplete = results.universal.project.met;
    const practicumComplete = results.universal.practicum.met;
    
    // Check concentration requirements
    const concComplete = results.concentration_specific.rules
      .filter(r => r.type !== 'note')
      .every(r => r.met);
    
    // Check total credits
    const creditsComplete = results.total_credits >= 30;
    
    return coreComplete && projectComplete && practicumComplete && concComplete && creditsComplete;
  }

  // Get courses that satisfy a specific requirement
  getCoursesForRequirement(concentration, category) {
    return this.courses.filter(course => {
      const req = course.satisfies[concentration] || course.satisfies.general;
      return req && req.includes(category);
    });
  }
}

// Export for use in browser extension
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RequirementsValidator;
}
