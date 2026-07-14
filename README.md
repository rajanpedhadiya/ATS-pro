# 🚀 ATS Pro - AI-Powered Resume Analyzer & SaaS Platform

> Transform resumes into insights with AI-powered analysis, dynamic job recommendations, and comprehensive recruiter dashboards.

## ✨ Features

### 1. **Resume Analysis Engine**
- **AI-Powered Analysis**: Uses Google Gemini 2.0-flash for intelligent resume evaluation
- **Dynamic ATS Scoring**: Real-time ATS score calculation (0-100)
- **Skill Detection**: Automatic extraction of skills and keywords
- **Gap Analysis**: Identifies missing keywords and improvement areas
- **Interview Tips**: Personalized interview preparation suggestions

### 2. **Smart Job Recommendations**
- **Jooble Integration**: Access 100,000+ job listings
- **Skill-Based Matching**: Recommendations based on detected skills
- **Location Filtering**: Search by location or remote opportunities
- **Job Saving**: Save and favorite jobs for later
- **Market Insights**: Salary ranges, common roles, and location trends

### 3. **Dynamic Dashboard**
- **Real Analysis History**: Track all resume analyses
- **Score Progression**: Visualize improvements over time
- **Skills Breakdown**: Interactive breakdown of skill scores
- **Recommended Jobs**: Personalized job matches
- **Profile Strength**: Overall professional profile rating

### 4. **Recruiter System**
- **Candidate Database**: Automatically builds from analyzed resumes
- **Advanced Filtering**: Search and filter by skills, domain, experience
- **Analytics**: Domain distribution and candidate statistics
- **Ranking System**: Automatic candidate ranking by ATS score

### 5. **AI Career Coach**
- **Context-Aware Advice**: Uses your resume context for guidance
- **Resume Optimization**: Tips for improving ATS scores
- **Interview Preparation**: Role-specific interview prep
- **Career Guidance**: Professional development recommendations

## 📋 Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Glassmorphism design with animations
- **JavaScript** - Modern ES6+ with modules
- **Chart.js** - Beautiful data visualization
- **Fonts**: Plus Jakarta Sans, Syne, JetBrains Mono

### File Processing
- **PDF.js** - In-browser PDF text extraction
- **Mammoth.js** - DOCX file parsing

### APIs
- **Google Gemini 2.0-flash** - Resume analysis and AI assistant
- **Jooble Jobs API** - Job listings and market data

### Storage
- **localStorage** - Persistent user data storage
- **sessionStorage** - Temporary session data

## 🎯 Architecture

### Directory Structure
```
├── index.html                    # Home page
├── analyzer.html                 # Resume analyzer
├── results.html                  # Analysis results
├── chat.html                     # AI assistant
├── dashboard.html                # Student dashboard
├── recruiter.html                # Recruiter dashboard
├── jobs.html                     # Job listings (NEW)
│
├── css/
│   ├── main.css                 # Global styles
│   ├── home.css                 # Home page styles
│   ├── analyzer.css             # Analyzer styles
│   ├── results.css              # Results styles
│   ├── chat.css                 # Chat styles
│   ├── dashboard.css            # Dashboard styles
│   ├── recruiter.css            # Recruiter styles
│   └── jobs.css                 # Jobs page styles (NEW)
│
├── js/
│   ├── main.js                  # Utilities & helpers
│   ├── navigation.js            # Navbar component
│   ├── charts.js                # Chart.js wrappers
│   ├── analyzer.js              # Analyzer logic
│   ├── results.js               # Results rendering
│   ├── chat.js                  # Chat logic
│   ├── dashboard.js             # Dashboard logic
│   ├── recruiter.js             # Recruiter logic
│   ├── jobs.js                  # Jobs page logic (NEW)
│   │
│   └── services/                # New service layer
│       ├── storage.js           # Centralized data management
│       ├── gemini.js            # Google Gemini API
│       └── jobs.js              # Jooble Jobs API
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── animations/
│
├── libs/
│   ├── pdf/
│   └── docx/
│
└── .env.example                 # Environment variables template
```

## 🔄 Data Flow

### Resume Analysis Workflow
```
User Input Resume
     ↓
File Parsing (PDF/DOCX)
     ↓
Gemini AI Analysis
     ↓
ATSStorage Service
     ├─→ Save current analysis
     ├─→ Add to history
     ├─→ Create candidate profile
     └─→ Get job recommendations
     ↓
Update Dashboard, Results, Recruiter pages
```

### Centralized Storage (ATSStorage)
```
localStorage
├── Current User Profile
├── Current Analysis Result
├── Analysis History (up to 50)
├── Recommended Jobs
├── Saved Jobs
├── Favorite Jobs
└── Candidate Database (Recruiter)
```

## 🔑 API Configuration

### Google Gemini API
```javascript
const GEMINI_API_KEY = 'AIzaSyCpSEbZk5kS_PlA2eS3a0OfcLH1CxAJBXY';
const GEMINI_MODEL = 'gemini-2.0-flash';
const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
```

### Jooble Jobs API
```javascript
const JOOBLE_API_KEY = '73020c71-2095-408b-a6f3-addc4f224a3f';
const JOOBLE_ENDPOINT = 'https://jooble.org/api/API_KEY';
```

## 🚀 Getting Started

### 1. Clone & Setup
```bash
# Clone repository
git clone <repo-url>
cd ATS-Pro

# No build step required - vanilla JavaScript project
```

### 2. Local Development
```bash
# Start a local server (Python)
python -m http.server 8000

# Or using Node.js
npx http-server

# Open browser
http://localhost:8000
```

### 3. First Run
1. Visit `http://localhost:8000`
2. Click "Analyze My Resume"
3. Paste sample resume or upload PDF/DOCX
4. Wait for AI analysis
5. View results with ATS score and recommendations
6. Check Dashboard for history
7. Find jobs on Jobs page
8. Review candidates on Recruiter page

## 💾 Storage Management

### Clear All Data
```javascript
window.ATSStorage.clearAllData();
```

### Export Data
```javascript
const json = window.ATSStorage.exportData();
console.log(json);
```

### Import Data
```javascript
const jsonString = '{"currentUser": {...}, ...}';
window.ATSStorage.importData(jsonString);
```

## 🎨 UI Features

### Design System
- **Glassmorphism**: Frosted glass effect cards
- **Gradient Text**: Eye-catching headings
- **Smooth Animations**: Fade-in, slide-in, glow effects
- **Color Palette**: 
  - Cyan: #00D4FF
  - Violet: #A855F7
  - Emerald: #10B981
  - Amber: #F59E0B

### Components
- Animated navbar with active link highlighting
- Floating action buttons
- Progress bars with color coding
- Badge system for skills/domains
- Charts (line, bar, radar, pie)
- Loading skeletons and spinners
- Error states with retry buttons

## 📊 Dynamic Data Binding

### Dashboard
- ✅ Real ATS scores from analysis
- ✅ Analysis history (Last 50)
- ✅ Skills breakdown from latest analysis
- ✅ Score progression chart
- ✅ Recommended jobs list
- ✅ Profile strength metric

### Recruiter Dashboard
- ✅ Real candidate profiles from analyzed resumes
- ✅ Domain-based filtering
- ✅ Search by name/skills
- ✅ Dynamic domain breakdown chart
- ✅ Candidate statistics

### Jobs Page
- ✅ Skill-based job recommendations
- ✅ Real-time search with Jooble API
- ✅ Location filtering
- ✅ Save/favorite functionality
- ✅ Market insights and statistics

### Results Page
- ✅ Real analysis data from storage
- ✅ Persistent across page reloads
- ✅ Radar chart for skill breakdown
- ✅ Downloadable report (print)

## 🔒 Security Notes

### Frontend API Keys
The project currently uses frontend API keys for demonstration. For production:

```
❌ Current: Keys exposed in browser
✅ Better: Backend proxy to hide keys
✅ Best: Use environment variables on deployment platform
```

### Recommended Production Setup
1. Create backend proxy (Node.js, Python, etc.)
2. Frontend calls backend endpoint
3. Backend makes API calls with hidden keys
4. Data passes through backend
5. API keys never exposed to client

## 🐛 Troubleshooting

### Issue: "AI service not initialized"
**Solution**: Reload the page to ensure all service scripts load

### Issue: "No analysis result found"
**Solution**: Analyze a resume first by going to Analyzer page

### Issue: "Jobs API error"
**Solution**: Check internet connection, Jooble API might be rate-limited

### Issue: "PDF/DOCX parsing failed"
**Solution**: Ensure file is valid and not corrupted

## 📈 Future Enhancements

- [ ] Backend API with Express/Node.js
- [ ] User authentication & profiles
- [ ] Email notifications for jobs
- [ ] Resume templates and builder
- [ ] Portfolio linking
- [ ] Interview scheduling
- [ ] Salary negotiation guides
- [ ] Company reviews and ratings
- [ ] Direct apply integration
- [ ] Mobile app version

## 📝 License

This project is licensed under MIT License.

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit pull requests.

## 📧 Support

For issues and questions, please open an issue on GitHub.

---

**Built with ❤️ using AI and cutting-edge web technologies**
