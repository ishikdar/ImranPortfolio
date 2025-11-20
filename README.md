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
- **HTML5** - Semantic markup with accessibility in mind
- **CSS3** - Modern responsive styling with CSS Grid/Flexbox
- **Responsive Design** - Mobile-first approach with breakpoints (480px, 768px, 1024px)
- **Vanilla JavaScript** - Clean client-side interactivity and dynamic content loading
- **Fetch API** - Async HTTP requests to TypeScript backend

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

## ✨ Recent Updates

### UI/UX Improvements (November 2025)
- **Fully Responsive Design**: Complete mobile-first redesign with optimized layouts
- **Consistent Typography**: Standardized section titles (28px) across all pages
- **Enhanced About Page**: 
  - Core Strengths: 4-card responsive grid layout
  - Availability: 3-card optimized display
  - Education: 2-card clean presentation  
  - Certifications: 3-card responsive grid with proper badge positioning
- **Contact Page Optimization**: Areas of Interest section now displays all 4 cards in one row on desktop
- **CSS Architecture**: Migration from inline styles to external CSS for better maintainability
- **Cross-device Testing**: Verified compatibility across desktop, tablet, and mobile breakpoints

### Technical Enhancements
- **Clean Code**: Removed all hardcoded inline styles in favor of CSS classes
- **Performance**: Optimized CSS with proper inheritance and reduced redundancy
- **Accessibility**: Improved semantic HTML structure and consistent styling patterns
- **Maintainability**: Centralized styling in external CSS files with organized structure

## 🚀 Deployment

1. **Build the project**: `npm run build`
2. **Start the server**: `npm start`
3. **Access locally**: `http://localhost:3000`
4. **Test responsiveness**: Verify layouts on different screen sizes

## 📞 Contact

- **Email**: shikder.imran@yahoo.com
- **LinkedIn**: [linkedin.com/in/ishikdar](https://www.linkedin.com/in/ishikdar/)
- **GitHub**: [github.com/ishikdar](https://github.com/ishikdar)

## 🎯 Career Objective

Seeking opportunities as a **Software Engineer in Test** to leverage manual testing expertise and growing automation skills in quality assurance roles. Open to remote work and relocation opportunities (Visa sponsorship required).

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+ (4-card grids, full layouts)
- **Tablet**: 768px-1024px (2-card grids, adapted layouts)  
- **Mobile**: 480px-768px (single column, optimized spacing)
- **Small Mobile**: <480px (minimal padding, stacked layouts)

## 🎨 Design System

- **Color Scheme**: Professional gradient (FF0057 to e0004d) with black typography
- **Typography**: Consistent font sizes, left-aligned titles, clean hierarchy
- **Layout**: CSS Grid/Flexbox responsive patterns throughout
- **Interactions**: Smooth hover effects, transform animations, professional transitions

---

**Built with ❤️ by Imran** - A Modern, Responsive Portfolio Showcasing 3+ Years of Software Testing Excellence