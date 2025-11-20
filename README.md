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