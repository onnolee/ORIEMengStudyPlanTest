// Main application logic - NO ROSTER API VERSION
let validator = null;
let cart = [];

// Time slot mapping (8am to 9pm in 30-minute blocks)
const TIME_SLOTS = [];
for (let hour = 8; hour <= 21; hour++) {
    TIME_SLOTS.push(`${hour}:00`);
    if (hour < 21) TIME_SLOTS.push(`${hour}:30`);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    validator = new RequirementsValidator(REQUIREMENTS_DATA);
    
    loadSavedData();
    setupEventListeners();
    renderSchedule();
    updateRequirements();
    populateCourseList();
});

function setupEventListeners() {
    document.getElementById('searchBtn').addEventListener('click', searchCourses);
    document.getElementById('concentration').addEventListener('change', saveAndUpdate);
    document.getElementById('semester').addEventListener('change', saveAndUpdate);
    
    // Search on Enter key
    document.getElementById('search').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchCourses();
    });
    
    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });
}

function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    document.getElementById('scheduleTab').style.display = tabName === 'schedule' ? 'block' : 'none';
    document.getElementById('requirementsTab').style.display = tabName === 'requirements' ? 'block' : 'none';
}

function loadSavedData() {
    const saved = localStorage.getItem('orieCoursePlanner');
    if (saved) {
        const data = JSON.parse(saved);
        document.getElementById('concentration').value = data.concentration || '';
        document.getElementById('semester').value = data.semester || 'SP26';
        cart = data.cart || [];
        updateCartDisplay();
        renderSchedule();
        updateRequirements();
    }
}

function saveAndUpdate() {
    const data = {
        concentration: document.getElementById('concentration').value,
        semester: document.getElementById('semester').value,
        cart: cart
    };
    localStorage.setItem('orieCoursePlanner', JSON.stringify(data));
    updateRequirements();
}

function populateCourseList() {
    // Pre-populate search results with all available courses
    displaySearchResults(validator.courses);
}

function searchCourses() {
    const query = document.getElementById('search').value.trim().toUpperCase();
    const resultsDiv = document.getElementById('searchResults');
    
    if (!query) {
        displaySearchResults(validator.courses);
        return;
    }
    
    // Filter courses by query
    const filtered = validator.courses.filter(course => {
        return course.code.includes(query) || 
               (course.name && course.name.toUpperCase().includes(query)) ||
               course.department.includes(query);
    });
    
    displaySearchResults(filtered);
}

function displaySearchResults(courses) {
    const resultsDiv = document.getElementById('searchResults');
    const concentration = document.getElementById('concentration').value;
    
    if (courses.length === 0) {
        resultsDiv.innerHTML = '<p style="padding: 10px; color: #999;">No courses found</p>';
        return;
    }
    
    // Sort courses by code
    const sorted = courses.sort((a, b) => a.code.localeCompare(b.code));
    
    let html = '';
    sorted.forEach(course => {
        const inCart = cart.some(c => c.code === course.code);
        
        // Determine what requirements this course satisfies
        const satisfies = [];
        if (course.satisfies.general) {
            satisfies.push(course.satisfies.general);
        }
        if (concentration && course.satisfies[concentration]) {
            satisfies.push(course.satisfies[concentration]);
        }
        
        const satisfiesText = satisfies.length > 0 ? 
            satisfies.join(', ') : 
            'No requirements';
        
        html += `
            <div class="course-item ${inCart ? 'selected' : ''}" onclick="toggleCourse('${course.code}')">
                <h3>${course.code}</h3>
                <p>${course.name || 'No description'}</p>
                <p style="font-size: 11px; color: #999; margin-top: 4px;">${satisfiesText}</p>
                <p class="credits">${course.credits} credits</p>
            </div>
        `;
    });
    
    resultsDiv.innerHTML = html;
}

function toggleCourse(courseCode) {
    const inCart = cart.some(c => c.code === courseCode);
    
    if (inCart) {
        removeFromCart(courseCode);
    } else {
        addToCart(courseCode);
    }
}

function addToCart(courseCode) {
    const course = validator.courseLookup[courseCode];
    if (!course) return;
    
    // Check if already in cart
    if (cart.some(c => c.code === courseCode)) {
        return;
    }
    
    // Add with placeholder meeting times (users can add times via modal later)
    cart.push({
        code: courseCode,
        name: course.name,
        credits: course.credits,
        meetingTimes: []
    });
    
    updateCartDisplay();
    renderSchedule();
    updateRequirements();
    saveAndUpdate();
    
    // Refresh search results to show selected state
    searchCourses();
}

function removeFromCart(courseCode) {
    cart = cart.filter(c => c.code !== courseCode);
    updateCartDisplay();
    renderSchedule();
    updateRequirements();
    saveAndUpdate();
    
    // Refresh search results to show deselected state
    searchCourses();
}

function updateCartDisplay() {
    const cartDiv = document.getElementById('cartItems');
    const countSpan = document.getElementById('cartCount');
    
    countSpan.textContent = cart.length;
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<div class="empty-state" style="padding: 20px 0;"><p style="font-size: 13px;">No courses added</p></div>';
        return;
    }
    
    let html = '';
    cart.forEach(course => {
        const timeInfo = course.meetingTimes.length > 0 ? 
            `${course.meetingTimes.length} meeting time(s)` : 
            'No times added';
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h3>${course.code}</h3>
                    <p>${course.credits} credits • ${timeInfo}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${course.code}')">Remove</button>
            </div>
        `;
    });
    
    cartDiv.innerHTML = html;
}

function renderSchedule() {
    const gridDiv = document.getElementById('scheduleGrid');
    
    // Create grid headers
    let html = '<div class="time-label"></div>';
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].forEach(day => {
        html += `<div class="day-header">${day}</div>`;
    });
    
    // Create time slots
    const dayColumns = [[], [], [], [], []]; // Mon-Fri
    
    // Place courses in schedule
    cart.forEach(course => {
        course.meetingTimes.forEach(meeting => {
            meeting.days.forEach(dayIndex => {
                dayColumns[dayIndex].push({
                    course: course,
                    startTime: meeting.startTime,
                    endTime: meeting.endTime,
                    type: meeting.type
                });
            });
        });
    });
    
    // Check for conflicts
    const conflicts = detectConflicts(dayColumns);
    if (conflicts.length > 0) {
        displayConflictWarning(conflicts);
    } else {
        document.getElementById('conflictWarning').innerHTML = '';
    }
    
    // Render grid (simplified - showing 9am-6pm)
    const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    
    hours.forEach(hour => {
        const timeStr = hour > 12 ? `${hour-12}:00 PM` : `${hour}:00 AM`;
        html += `<div class="time-label">${timeStr}</div>`;
        
        for (let day = 0; day < 5; day++) {
            html += '<div class="time-slot" style="position: relative;">';
            
            // Find courses that overlap this hour
            const coursesHere = dayColumns[day].filter(item => {
                const start = parseTime(item.startTime);
                const end = parseTime(item.endTime);
                return start <= hour && end > hour;
            });
            
            // Only render block at the start hour
            coursesHere.forEach(item => {
                const start = parseTime(item.startTime);
                if (Math.floor(start) === hour) {
                    const duration = parseTime(item.endTime) - start;
                    const heightPercent = duration * 60; // pixels per hour
                    
                    const hasConflict = conflicts.some(c => 
                        c.day === day && 
                        c.courses.includes(item.course.code)
                    );
                    
                    html += `
                        <div class="course-block ${hasConflict ? 'conflict' : ''}" style="height: ${heightPercent}px; top: 0;">
                            <strong>${item.course.code}</strong>
                            <div style="font-size: 10px;">${formatTime(item.startTime)}-${formatTime(item.endTime)}</div>
                        </div>
                    `;
                }
            });
            
            html += '</div>';
        }
    });
    
    // Add message if no meeting times
    if (cart.length > 0 && cart.every(c => c.meetingTimes.length === 0)) {
        html = '<div style="padding: 40px; text-align: center; color: #666;">' +
               '<p>No meeting times added yet.</p>' +
               '<p style="margin-top: 10px; font-size: 14px;">Course times can be added by looking them up on the <a href="https://classes.cornell.edu" target="_blank">Class Roster</a> and entering them manually.</p>' +
               '</div>';
    }
    
    gridDiv.innerHTML = html;
}

function parseTime(timeStr) {
    // Parse "09:30" to 9.5
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours + minutes / 60;
}

function formatTime(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const h = hours > 12 ? hours - 12 : hours;
    const suffix = hours >= 12 ? 'PM' : 'AM';
    return `${h}:${minutes.toString().padStart(2, '0')}${suffix}`;
}

function detectConflicts(dayColumns) {
    const conflicts = [];
    
    dayColumns.forEach((courses, dayIndex) => {
        for (let i = 0; i < courses.length; i++) {
            for (let j = i + 1; j < courses.length; j++) {
                const a = courses[i];
                const b = courses[j];
                
                const aStart = parseTime(a.startTime);
                const aEnd = parseTime(a.endTime);
                const bStart = parseTime(b.startTime);
                const bEnd = parseTime(b.endTime);
                
                // Check overlap
                if (aStart < bEnd && bStart < aEnd) {
                    conflicts.push({
                        day: dayIndex,
                        courses: [a.course.code, b.course.code],
                        time: `${formatTime(a.startTime)}-${formatTime(a.endTime)}`
                    });
                }
            }
        }
    });
    
    return conflicts;
}

function displayConflictWarning(conflicts) {
    const warningDiv = document.getElementById('conflictWarning');
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    
    let html = '<div class="conflict-warning"><strong>⚠ Schedule Conflicts Detected</strong>';
    conflicts.forEach(conflict => {
        html += `<p>${days[conflict.day]}: ${conflict.courses.join(' and ')} overlap</p>`;
    });
    html += '</div>';
    
    warningDiv.innerHTML = html;
}

function updateRequirements() {
    const concentration = document.getElementById('concentration').value;
    const contentDiv = document.getElementById('requirementsContent');
    
    if (!concentration || cart.length === 0) {
        contentDiv.innerHTML = '<div class="empty-state"><p>Select a concentration and add courses to see your progress</p></div>';
        return;
    }
    
    const courseCodes = cart.map(c => c.code);
    const results = validator.validateStudentPlan(concentration, courseCodes);
    
    let html = '';
    
    // Overall status
    const statusClass = results.complete ? 'complete' : 'incomplete';
    const statusText = results.complete ? 
        '✓ All Requirements Met' : 
        '⚠ Requirements Incomplete';
    html += `<div class="overall-status ${statusClass}">${statusText}</div>`;
    
    // Total credits
    html += `<div class="req-item ${results.total_credits >= 30 ? 'met' : 'unmet'}">`;
    html += `Total Credits: ${results.total_credits} / 30`;
    html += `</div>`;
    
    // Core requirements
    html += '<div class="req-group"><h3>Core Requirements</h3>';
    const core = results.universal.core;
    html += createReqItem('DSSM', core.DSSM);
    html += createReqItem('Optimization', core.Optimization);
    html += createReqItem('Stochastic', core.Stochastic);
    html += '</div>';
    
    // Other universal
    html += '<div class="req-group"><h3>Other Requirements</h3>';
    html += createReqItem('Project', results.universal.project);
    html += createReqItem('Practicum', results.universal.practicum);
    if (concentration !== 'FE') {
        html += createReqItem('Project Prep', results.universal.project_prep);
    }
    html += '</div>';
    
    // Concentration requirements
    const concReq = results.concentration_specific;
    html += `<div class="req-group"><h3>${concReq.name} Requirements</h3>`;
    
    concReq.rules.forEach(rule => {
        if (rule.type === 'min_credits' || rule.type === 'min_courses') {
            html += `<div class="req-item ${rule.met ? 'met' : 'unmet'}">`;
            html += `${rule.description}: ${rule.earned} / ${rule.required}`;
            html += `</div>`;
        } else if (rule.type === 'required_courses' || rule.type === 'required_one_of') {
            html += `<div class="req-item ${rule.met ? 'met' : 'unmet'}">`;
            html += `${rule.description}<br>`;
            html += `<small>Taken: ${rule.taken.length > 0 ? rule.taken.join(', ') : 'None'}</small>`;
            html += `</div>`;
        }
    });
    
    html += '</div>';
    
    contentDiv.innerHTML = html;
}

function createReqItem(label, data) {
    return `<div class="req-item ${data.met ? 'met' : 'unmet'}">
        ${label}: ${data.earned} / ${data.required}
    </div>`;
}
