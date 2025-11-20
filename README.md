# Imran's Portfolio Website �

A modern, fully responsive portfolio website showcasing my experience as a **Software Engineer in Test** with a TypeScript backend and clean HTML/CSS frontend. Features dynamic content loading, professional design, and optimal user experience across all devices.

## About Me

**Md Al Imran Shikdar** - Software Engineer in Test with 3+ years of experience in manual testing and automation across fintech and media asset management platforms. Currently learning Playwright with TypeScript for test automation. Passionate about quality assurance, API testing, and creating robust testing frameworks.

## Project Structure
```
ImranPortfolio/
├── .github/
│   └── copilot-instructions.md ← GitHub Copilot configuration
├── site/                      ← Main application directory
│   ├── src/
│   │   ├── main.ts           ← Main TypeScript server entry point
│   │   ├── dataLoader/
│   │   │   └── dataLoader.ts ← Data loading utilities
│   │   └── services/
│   │       ├── indexService.ts   ← Home page service
│   │       ├── aboutService.ts   ← About page service
│   │       └── contactService.ts ← Contact page service
│   ├── public/
│   │   ├── data/
│   │   │   └── personalData.json ← Complete personal information, skills, projects
│   │   ├── assets/           ← Static assets (images, icons, etc.)
│   │   ├── css/
│   │   │   └── styles.css    ← Main responsive stylesheet
│   │   ├── js/
│   │   │   ├── home.js       ← Home page JavaScript
│   │   │   ├── about.js      ← About page JavaScript
│   │   │   └── contact.js    ← Contact page JavaScript
│   │   └── pages/
│   │       ├── index.html    ← Landing page
│   │       ├── home.html     ← Home page
│   │       ├── about.html    ← About me page
│   │       └── contact.html  ← Contact page
│   └── distribution/         ← Build output directory (gitignored)
├── node_modules/             ← Dependencies (gitignored)
├── package.json             ← Project configuration & scripts
├── package-lock.json        ← Dependency lock file
├── tsconfig.json            ← TypeScript configuration
├── .gitignore              ← Git ignore rules
└── README.md               ← This file
```

## 🚀 Features

### Core Functionality
- **Professional Portfolio**: Showcasing 3+ years of Software Testing experience
- **Three main sections**: Home ("Hi, I'm Imran! 👋"), About Me, Contact
- **Dynamic Content Loading**: All data served from personalData.json via TypeScript API
- **TypeScript Backend**: Express.js server with complete type safety
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

### Design & User Experience
- **Modern UI/UX**: Clean, professional design with gradient accents and hover effects
- **Fully Responsive**: CSS Grid/Flexbox layouts with mobile-first approach
- **Cross-device Compatibility**: Consistent experience on all screen sizes (480px-1440px+)
- **Optimized Performance**: External CSS, minimal JavaScript, fast loading times
- **Professional Styling**: Left-aligned sections, consistent typography, modern card layouts

### Content Highlights
- **Work Experience Timeline**: Clean, professional experience presentation
- **Skills & Certifications**: Organized display of technical competencies
- **Project Showcase**: Testing projects with detailed descriptions
- **Contact Information**: Professional contact methods and availability status
- **Areas of Interest**: 4-card responsive grid showcasing specializations

### Technical Excellence
- **GitHub Copilot Integration**: Configured with project-specific instructions
- **Clean Architecture**: Organized separation between backend, frontend, and data
- **Modern Development**: ES6+, TypeScript, and best practices throughout

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

**Built with ❤️ by Imran** - A Modern, Responsive Portfolio Showcasing 3+ Years of Software Testing Excellence