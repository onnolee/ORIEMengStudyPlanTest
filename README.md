# ORIE M.Eng Course Planner - Web Application

A web application that integrates with Cornell's Class Roster API to help students plan their courses and track graduation requirements.

## Features

### Course Search & Cart
- **Live Roster Search**: Search Cornell's class roster by subject (ORIE, CS, etc.) or course number
- **Shopping Cart**: Add courses to your cart to plan your semester
- **Requirements Matching**: Only shows courses that count toward ORIE M.Eng requirements

### Visual Schedule Builder
- **Weekly Calendar View**: See your courses laid out Monday-Friday, 9am-6pm
- **Conflict Detection**: Automatically detects time conflicts between courses
- **Color Coding**: Visual warnings when courses overlap

### Requirements Tracking
- **Real-time Progress**: See which requirements you've met as you add courses
- **All Concentrations**: Supports AOR, DA, FE, IT, MIE, SSO
- **Universal Requirements**: Tracks core courses, project, practicum, credits

## Installation

### Option 1: Simple File Open
1. Extract the zip file to a folder
2. Open `index.html` in your web browser
3. **Note**: Roster API may not work due to CORS restrictions with file:// protocol

### Option 2: Local Web Server (Recommended)
1. Extract the zip file to a folder
2. Open a terminal in that folder
3. Run a local web server:
   
   **Python 3:**
   ```bash
   python3 -m http.server 8080
   ```
   
   **Python 2:**
   ```bash
   python -m SimpleHTTPServer 8080
   ```
   
   **Node.js (if you have npx):**
   ```bash
   npx http-server -p 8080
   ```

4. Open your browser to `http://localhost:8080`

## Usage

1. **Select Your Concentration**: Choose from the dropdown in the left sidebar
2. **Choose Semester**: Select which semester you're planning for
3. **Search Courses**: 
   - Enter a subject code (e.g., "ORIE", "CS") to see all courses
   - Or enter a course number (e.g., "5580") to search
4. **Add to Cart**: Click on courses in search results to add them
5. **View Schedule**: See your weekly schedule and check for conflicts
6. **Check Requirements**: Switch to Requirements tab to see your progress

## Cornell Roster API Integration

The app uses Cornell's public Class Roster API:
- Base URL: `https://classes.cornell.edu/api/2.0`
- Endpoint: `/search/classes.json`

### API Parameters
- `roster`: Semester code (e.g., "2026SP", "2025FA")
- `subject`: Department code (e.g., "ORIE", "CS")
- `q`: General search query

### Example Searches
- All ORIE courses: Search "ORIE"
- All CS courses: Search "CS"
- Specific course: Search "5580"

## Data Persistence

Your concentration, semester, and cart are saved to browser localStorage and persist between sessions.

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design, full functionality

## Known Limitations

### CORS Issues
If you open `index.html` directly (file:// protocol), the roster API calls will fail due to CORS. Use a local web server instead.

### Schedule Accuracy
- Meeting times come from the roster API
- Multiple sections may have different times - the app shows what's in the API
- Lab sections may not always be included

### Requirements Coverage
- Only shows courses that exist in our requirements database (172 courses)
- If a roster course isn't in our database, it won't appear in search results
- This ensures you only see ORIE-relevant courses

## Troubleshooting

### "No courses found" when searching
- Make sure you're connected to the internet
- Try a different search term (e.g., "ORIE" instead of specific numbers)
- Check that the semester is correct
- If using file://, switch to a local web server

### Schedule not showing courses
- Make sure courses have meeting times in the roster
- Some courses (especially projects/practicum) may not have scheduled times

### Requirements not updating
- Make sure you've selected a concentration
- Check that your cart has courses added
- Try removing and re-adding courses

## Files

- `index.html`: Main application interface
- `app.js`: Application logic and roster API integration
- `validator.js`: Requirements validation engine
- `requirements_data.js`: Course catalog and requirements (172 courses)

## API Details

The app makes GET requests to:
```
https://classes.cornell.edu/api/2.0/search/classes.json?roster=2026SP&subject=ORIE
```

Response format:
```json
{
  "data": {
    "classes": [
      {
        "subject": "ORIE",
        "catalogNbr": "5580",
        "titleLong": "Simulation Modeling and Analysis",
        "enrollGroups": [...]
      }
    ]
  }
}
```

## Future Enhancements

- Export schedule as PDF/image
- Multi-semester planning
- Course recommendations based on missing requirements
- Historical enrollment data
- Professor ratings integration
- Mobile app version

## Support

For issues with:
- **Requirements data**: Contact ORIE M.Eng program office
- **Roster API**: See Cornell's Class Roster API documentation
- **Technical bugs**: Check browser console for errors

## Credits

Built for Cornell ORIE M.Eng students to simplify course planning and requirements tracking.
