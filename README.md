# Imran's Portfolio Website 👋

A modern portfolio website showcasing my experience as a **Software Engineer in Test** with TypeScript backend and HTML/CSS frontend that serves personal data dynamically.

## About Me

**Md Al Imran Shikdar** - Software Engineer in Test with 3+ years of experience in manual testing and automation across fintech and media asset management platforms. Currently learning Playwright with TypeScript for test automation.

## Project Structure
```
ImranPortfolio/
├── .github/
│   └── copilot-instructions.md ← GitHub Copilot configuration
├── site/                      ← Main application directory
│   ├── data/
│   │   └── personalData.json  ← Complete personal information, skills, projects
│   ├── src/
│   │   ├── main.ts           ← Main TypeScript server entry point
│   │   ├── Interfaces/
│   │   │   └── personalDataInterface.ts ← TypeScript interfaces
│   │   └── routes/
│   │       ├── homeDataRouter.ts        ← Home page data API
│   │       ├── aboutDataRouter.ts       ← About page data API
│   │       └── contactDatarouter.ts     ← Contact page data API
│   ├── public/
│   │   ├── assets/           ← Static assets (images, icons, etc.)
│   │   ├── css/
│   │   │   └── styles.css    ← Main stylesheet
│   │   └── pages/
│   │       ├── index.html    ← Home page
│   │       ├── about.html    ← About me page
│   │       └── contact.html  ← Contact page
│   └── distribution/         ← Build output directory (gitignored)
├── node_modules/             ← Dependencies (gitignored)
├── package.json             ← Project configuration & scripts
├── tsconfig.json            ← TypeScript configuration
├── .gitignore              ← Git ignore rules
└── README.md               ← This file
```

## 🚀 Features

- **Professional Portfolio**: Showcasing 3+ years of Software Testing experience
- **Three main sections**: Home ("Hi, I'm Imran! 👋"), About Me, Contact
- **Dynamic content**: All data loaded from personalData.json via TypeScript API
- **Testing Focus**: Highlights manual testing, API testing, and automation projects
- **Work Experience**: Features roles at Craftsmen Software, REVE Systems, Orangetools.com, Walton Digi-Tech
- **Skills Section**: Comprehensive testing tools and methodologies
- **TypeScript backend**: Express.js server with type safety
- **GitHub Copilot Integration**: Configured with project-specific instructions in `.github/`
- **Organized Structure**: Clean separation with all source code in `site/` directory

## 🛠️ Skills & Technologies Showcased

### Testing Skills
- **Manual Testing**: Test planning, execution, bug reporting
- **API Testing**: Postman, Newman
- **Performance Testing**: JMeter
- **Automation**: Cypress, Selenium WebDriver (Java)
- **Project Management**: Jira, ClickUp, Trello
- **CI/CD**: Jenkins
- **Version Control**: Git

### Technical Skills
- **Programming**: Java
- **Databases**: MySQL
- **Tools**: BrowserStack, Vysor, XMind
- **Currently Learning**: Playwright with TypeScript

## 📋 API Endpoints

- `GET /api/home` - Home page data (personal intro, core strengths)
- `GET /api/about` - About page data (detailed background, skills, experience)
- `GET /api/contact` - Contact information and social links

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation
```bash
npm install
```

### Development Commands
```bash
# Start development server with hot reload
npm run dev

# Build TypeScript to JavaScript
npm run build

# Start production server
npm start

# Watch mode for TypeScript compilation
npm run watch
```

### Development Server
The development server runs on `http://localhost:3000` by default.

- Home page: `http://localhost:3000/`
- About page: `http://localhost:3000/about`
- Contact page: `http://localhost:3000/contact`

### File Locations
- **Source code**: All TypeScript and frontend files are in the `site/` directory
- **Personal data**: Located at `site/data/personalData.json`
- **Static files**: HTML, CSS, and assets in `site/public/`
- **Build output**: Compiled files go to `site/distribution/` (auto-generated)

## Technologies Used

### Backend
- **TypeScript** - Type-safe JavaScript
- **Express.js** - Web application framework
- **Node.js** - Runtime environment
- **CORS** - Cross-origin resource sharing

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid
- **Vanilla JavaScript** - Client-side interactivity
- **Fetch API** - HTTP requests to backend

## 📊 Portfolio Content

The `data/personalData.json` file contains comprehensive information about:

### Personal Information
- **Name**: Md Al Imran Shikdar
- **Title**: Software Engineer in Test | Manual & Automation Testing
- **Location**: Dhaka, Bangladesh
- **Summary**: 3+ years testing experience in fintech and media asset management

### Work Experience
1. **Craftsmen Software** (Aug 2025 - Present) - Software Engineer In Test I
2. **REVE Systems** (Nov 2023 - Jul 2025) - Associate Software QA Engineer
3. **Orangetools.com** (Oct 2022 - Oct 2023) - Junior Software QA Engineer
4. **Walton Digi-Tech** (Jan - Apr 2022) - SQA Engineer Intern

### Projects
- **Media Asset Management Testing** - Current work project
- **Fintech Application Testing** - Payment processing and security testing
- **bKash Livechat Testing** - Successfully tested with minimal production issues
- **Test Case Project** - Manual testing with comprehensive documentation
- **API Testing Project** - CRUD operations with Postman/Newman
- **WebAutomation Projects** - Selenium (Java) and Cypress frameworks

### Education
- **University of East London** - B.Sc. in Software Engineering (2018)
- **Lion Ferdous Alam Firoz College** - Higher Secondary Certificate (2013)

### Certifications
- **Performance Testing** - Udemy (May 2025)
- **API Testing** - Udemy (Apr 2025)
- **Hands-on SQA & Cyber Security Course** - IT Training BD (Jun 2023)

## 🚀 Deployment

1. **Build the project**: `npm run build`
2. **Start the server**: `npm start`
3. **Access locally**: `http://localhost:3000`

## 📞 Contact

- **Email**: shikder.imran@yahoo.com
- **LinkedIn**: [linkedin.com/in/ishikdar](https://www.linkedin.com/in/ishikdar/)
- **GitHub**: [github.com/ishikdar](https://github.com/ishikdar)

## 🎯 Career Objective

Seeking opportunities as a **Software Engineer in Test** to leverage manual testing expertise and growing automation skills in quality assurance roles. Open to remote work and relocation opportunities (Visa sponsorship required).

---

**Built with ❤️ by Imran** - Showcasing 3+ years of Software Testing Excellence