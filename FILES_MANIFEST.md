# ATS Pro - File Manifest & Reference

## Project Structure Overview

### 📄 Root Level Files

| File | Purpose | Type |
|------|---------|------|
| `index.html` | Home page - landing page with feature cards | HTML Entry Point |
| `analyzer.html` | Resume upload and AI analysis | HTML Page |
| `results.html` | ATS analysis results display | HTML Page |
| `chat.html` | AI Career Coach conversation | HTML Page |
| `dashboard.html` | Student dashboard with stats & history | HTML Page |
| `recruiter.html` | Recruiter dashboard with candidates | HTML Page |
| `jobs.html` | Job listings and search (NEW) | HTML Page |
| `legacy-index.html` | Archive of old monolithic version | Archive |
| `.env.example` | API keys and configuration template | Config |
| `README.md` | Complete project documentation | Docs |
| `CHANGES.md` | Detailed changelog of transformation | Docs |
| `START.sh` | Quick start guide script | Guide |

---

## 🎨 CSS Files (`/css`)

| File | Purpose | Lines | Status |
|------|---------|-------|--------|
| `main.css` | Global styles, colors, animations | 2000+ | Core |
| `home.css` | Home page specific styles | 150+ | Page |
| `analyzer.css` | Resume analyzer styles | 100+ | Page |
| `results.css` | Results page styles | 120+ | Page |
| `chat.css` | Chat interface styles | 150+ | Page |
| `dashboard.css` | Dashboard styles | 100+ | Page |
| `recruiter.css` | Recruiter page styles | 120+ | Page |
| `jobs.css` | Jobs page styles (NEW) | 80+ | NEW |

**Total CSS**: ~3000 lines of professional styling

---

## 🔧 JavaScript Files (`/js`)

### Core Module Files

| File | Purpose | Lines | Status | Dependencies |
|------|---------|-------|--------|--------------|
| `main.js` | Utilities & helpers | 100+ | Core | None |
| `navigation.js` | Navbar component | 40+ | Core | main.js |
| `charts.js` | Chart.js wrappers | 80+ | Core | Chart.js |

### Page Logic Files

| File | Purpose | Lines | Status | Dependencies |
|------|---------|-------|--------|--------------|
| `analyzer.js` | Resume analysis logic | 250+ | Active | gemini.js, storage.js, jobs.js |
| `results.js` | Results rendering | 200+ | Active | storage.js, charts.js |
| `chat.js` | Chat interface logic | 150+ | Active | gemini.js, storage.js |
| `dashboard.js` | Dashboard logic | 250+ | REWRITTEN | storage.js, charts.js |
| `recruiter.js` | Recruiter logic | 200+ | REWRITTEN | storage.js, charts.js |
| `jobs.js` | Jobs page logic | 300+ | NEW | jobs.js (API), storage.js |

### Service Layer Files (`/js/services/`)

| File | Purpose | Lines | Status | Note |
|------|---------|-------|--------|------|
| `storage.js` | Centralized data management | 420+ | NEW | 50+ functions |
| `gemini.js` | Google Gemini API integration | 200+ | NEW | Resume analysis, chat, jobs rec |
| `jobs.js` | Jooble Jobs API integration | 150+ | NEW | Search, recommendations, caching |

**Total JavaScript**: ~2500 lines of business logic

---

## 📦 External Libraries (`/libs`)

| Folder | Purpose | Status |
|--------|---------|--------|
| `/libs/pdf` | PDF.js library | Loaded via CDN |
| `/libs/docx` | Mammoth.js library | Loaded via CDN |

### CDN Dependencies

```html
<!-- Charts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js"></script>

<!-- PDF Processing -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<!-- DOCX Processing -->
<script src="https://unpkg.com/mammoth/mammoth.browser.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap">
```

---

## 🗂️ Asset Directories

```
/assets/
├── /icons/        - Icon images (not used in CSS currently)
├── /images/       - Background images, graphics
└── /animations/   - SVG animations
```

---

## 📊 Data Storage Architecture

### localStorage Keys (Managed by `storage.js`)

```
atspro:currentUser          → User profile object
atspro:currentAnalysis      → Latest analysis result
atspro:analysisHistory      → Array of 50 previous analyses
atspro:recommendedJobs      → Array of recommended jobs
atspro:savedJobs            → Array of user saved jobs
atspro:favoriteJobs         → Array of favorite job IDs
atspro:candidates           → Array of candidate profiles
```

**Total Storage**: ~5MB capacity (varies by browser)

---

## 🔐 API Keys Configuration

### Google Gemini 2.0-flash

**Location**: `js/services/gemini.js` (Line ~3)

```javascript
const GEMINI_API_KEY = 'AIzaSyCpSEbZk5kS_PlA2eS3a0OfcLH1CxAJBXY';
const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
```

### Jooble Jobs API

**Location**: `js/services/jobs.js` (Line ~4)

```javascript
const JOOBLE_API_KEY = '73020c71-2095-408b-a6f3-addc4f224a3f';
const JOOBLE_ENDPOINT = 'https://jooble.org/api/API_KEY';
```

**Note**: For production, move these to .env and use backend proxy

---

## 🔄 File Dependencies Graph

```
index.html
├── main.js
├── navigation.js
├── storage.js
├── gemini.js
└── jobs.js

analyzer.html
├── main.js
├── navigation.js
├── charts.js
├── storage.js
├── gemini.js
├── jobs.js
└── analyzer.js

results.html
├── main.js
├── navigation.js
├── charts.js
├── storage.js
├── gemini.js
├── jobs.js
└── results.js

chat.html
├── main.js
├── navigation.js
├── storage.js
├── gemini.js
├── jobs.js
└── chat.js

dashboard.html
├── main.js
├── navigation.js
├── charts.js
├── storage.js
├── gemini.js
├── jobs.js
└── dashboard.js

recruiter.html
├── main.js
├── navigation.js
├── charts.js
├── storage.js
├── gemini.js
├── jobs.js
└── recruiter.js

jobs.html
├── main.js
├── navigation.js
├── storage.js
├── gemini.js
├── jobs.js
└── jobs.js (page logic)
```

---

## 🎯 What Each File Does

### `main.js` (Core Utilities)
- `scoreColor()` - Returns color based on ATS score
- `scoreLabel()` - Returns label ('Excellent', 'Good', etc.)
- `makeBadge()` - Creates badge HTML elements
- `getPageName()` - Gets current page from data-page attribute
- `setActiveNav()` - Highlights current page in navbar

### `navigation.js` (Navbar Component)
- `renderNavbar()` - Renders navbar on every page
- Links: Home, Analyze, Jobs, Chat, Dashboard, Recruiter
- Scroll effect (navbar background on scroll)
- Active link highlighting

### `charts.js` (Chart Helpers)
- `createLineChart()` - Time series visualization
- `createBarChart()` - Category comparison
- `createRadarChart()` - Multi-dimensional comparison
- `createPieChart()` - Proportion visualization

### `analyzer.js` (Resume Analysis)
- `loadSampleResume()` - Load demo resume text
- `handleFileUpload()` - Parse PDF/DOCX files
- `extractTextFromFile()` - Extract text from uploaded files
- `analyzeResume()` - Call Gemini API, save to storage
- `updateCharCount()` - Update character counter

### `results.js` (Results Display)
- `renderResults()` - Generate results HTML
- Displays ATS score, breakdown, skills, keywords
- Creates radar chart for skill visualization
- Shows job match if JD provided

### `chat.js` (AI Assistant)
- `initChat()` - Initialize greeting message
- `sendChat()` - Send message to Gemini API
- `appendChatMsg()` - Add message to chat bubble
- `showTyping()` / `removeTyping()` - Typing indicator

### `dashboard.js` (Dashboard Logic)
- `getScoreHistory()` - Build chart data from history
- `getSkillsBreakdown()` - Build skills chart data
- `getUserStats()` - Calculate dashboard stats
- `updateDashboardStats()` - Update stat cards
- `initStudentCharts()` - Initialize Chart.js instances
- Storage event listeners for auto-updates

### `recruiter.js` (Recruiter Dashboard)
- `getCandidatesFromStorage()` - Load real candidates
- `renderCandidates()` - Display candidate table
- `filterCandidates()` - Filter by domain/search
- `getDomainBreakdown()` - Calculate domain statistics
- `initDomainChart()` - Initialize domain chart

### `jobs.js` (Jobs Page)
- `searchJobs()` - Call Jooble API
- `renderJobs()` - Display job cards
- `toggleSave()` / `toggleFavorite()` - Manage job lists
- `updateStats()` - Calculate market insights
- `showLoading()` / `showError()` / `showEmpty()` - State management

### `storage.js` (Data Management)
- **User Functions**: `getCurrentUser()`, `setCurrentUser()`, etc.
- **Analysis Functions**: `getCurrentAnalysis()`, `setCurrentAnalysis()`, etc.
- **History Functions**: `getAnalysisHistory()`, `addToAnalysisHistory()`, etc.
- **Jobs Functions**: `getRecommendedJobs()`, `getSavedJobs()`, `addSavedJob()`, etc.
- **Candidate Functions**: `getCandidates()`, `addCandidate()`, `updateCandidate()`, etc.
- **Event Dispatch**: `dispatchStorageUpdate()`, `onStorageUpdate()`
- **Import/Export**: `exportData()`, `importData()`

### `gemini.js` (AI API)
- `callGemini()` - Generic Gemini API call
- `analyzeResume()` - Resume analysis with JSON parsing
- `getJobRecommendations()` - Suggest jobs from skills
- `getInterviewPrep()` - Interview preparation tips
- `chat()` - AI assistant conversation
- `validateApiKey()` - Test API connectivity

### `jobs.js` (Jobs API)
- `searchJobs()` - Search Jooble API
- `getRecommendedJobs()` - Get recommendations from skills
- `getSuggestedJobTitles()` - Domain-based suggestions
- `formatJobForDisplay()` - Standardize job format
- Job caching for performance
- `buildSearchQuery()` - Build query from skills

---

## 📈 Statistics

### Codebase Size

| Type | Files | Lines | Status |
|------|-------|-------|--------|
| HTML | 7 | 1500+ | Active |
| CSS | 8 | 3000+ | Active |
| JavaScript | 12 | 2500+ | Active |
| Config | 2 | 70+ | Config |
| Docs | 3 | 1500+ | Docs |
| **Total** | **32** | **8500+** | Complete |

### API Endpoints

| API | Endpoint | Method | Purpose |
|-----|----------|--------|---------|
| Gemini | `generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent` | POST | AI Analysis |
| Jooble | `jooble.org/api/API_KEY` | POST | Job Search |

### Storage Capacity

- **localStorage**: ~5MB per domain
- **Current Usage**: ~500KB-1MB (50 analyses)
- **Available**: 4-4.5MB for growth

---

## 🔄 Data Flow Summary

### Resume → Analysis → Dashboard Update

1. User uploads resume
2. `analyzer.js` calls `GeminiAPI.analyzeResume()`
3. Gemini returns JSON analysis
4. `analyzer.js` saves to `ATSStorage`
5. Storage fires `analysisUpdated` event
6. `dashboard.js` listens and updates charts
7. `recruiter.js` adds candidate profile
8. `jobs.js` gets recommendations
9. All pages auto-update in real-time

---

## ✅ File Status Overview

### Production Ready ✅
- All 7 HTML pages
- All 8 CSS files
- Core utilities (main.js, navigation.js, charts.js)
- All service files (storage.js, gemini.js, jobs.js)
- All page logic files (analyzer, results, chat, dashboard, recruiter, jobs)

### Well Documented ✅
- README.md (450+ lines)
- CHANGES.md (comprehensive changelog)
- Code comments throughout
- START.sh (quick start guide)

### Error Handling ✅
- Network error handling
- Loading states
- Empty states
- Error retry buttons
- User-friendly error messages

### Performance ✅
- Caching for jobs API
- Efficient chart rendering
- Event-based updates (not polling)
- Minimal re-renders

---

## 🎯 Quick Reference

### Want to find...

**The data storage?**  
→ `js/services/storage.js`

**Resume analysis logic?**  
→ `js/analyzer.js` calls `js/services/gemini.js`

**Job recommendations?**  
→ `js/services/jobs.js` (Jooble API)

**Dashboard statistics?**  
→ `js/dashboard.js` reads from `ATSStorage`

**Recruiter candidates?**  
→ `js/recruiter.js` reads from `ATSStorage.getCandidates()`

**Chat AI?**  
→ `js/chat.js` calls `GeminiAPI.chat()`

**API keys?**  
→ `js/services/gemini.js` line 3, `js/services/jobs.js` line 4

**Global styles?**  
→ `css/main.css`

**Page-specific styles?**  
→ `css/{pagename}.css`

---

## 📋 Maintenance Checklist

- [x] All files created
- [x] All files updated
- [x] Dependencies tracked
- [x] API keys configured
- [x] Storage schema defined
- [x] Error handling added
- [x] Documentation complete
- [x] No breaking changes
- [x] Backward compatible
- [x] Ready for production*

*Except API keys should be hidden in backend for true production

---

**File Manifest Complete**

All 32 files documented and organized for easy reference and maintenance.
