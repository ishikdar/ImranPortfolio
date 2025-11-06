# Portfolio Website

A modern portfolio website built with TypeScript backend and HTML/CSS frontend that serves personal data dynamically.

## Project Structure
ImranPortfolio/                 ← Your main project folder
├── data/                       ← Data folder
│   └── personalData.json       ← Your existing personal info file
├── src/                        ← Source code folder (backend)
│   ├── server.ts              ← Main server file (TypeScript)
│   └── routes/                ← API routes folder
│       ├── personal.ts        ← Personal info API
│       ├── skills.ts          ← Skills API
│       └── projects.ts        ← Projects API
├── public/                     ← Frontend files (what users see)
│   ├── index.html             ← Home page
│   ├── about.html             ← About me page
│   ├── contact.html           ← Contact page
│   ├── css/                   ← Styling files
│   │   ├── main.css           ← Main styles
│   │   ├── home.css           ← Home page styles
│   │   ├── about.css          ← About page styles
│   │   └── contact.css        ← Contact page styles
│   └── js/                    ← Client-side JavaScript
│       ├── main.js            ← Common JavaScript functions
│       ├── home.js            ← Home page functionality
│       ├── about.js           ← About page functionality
│       └── contact.js         ← Contact page functionality
├── package.json               ← Project dependencies & scripts
└── tsconfig.json              ← TypeScript configuration

## Features

- **Three main sections**: Home, About Me, Contact
- **Dynamic content**: Data loaded from personalData.json via API
- **Responsive design**: Mobile-friendly CSS
- **TypeScript backend**: Express.js server with type safety
- **API endpoints**: RESTful API for different data sections

## API Endpoints

- `GET /api/personal` - Personal information (name, title, summary, etc.)
- `GET /api/skills` - Technical skills by category
- `GET /api/projects` - Project portfolio
- `GET /api/experience` - Work experience
- `GET /api/education` - Educational background
- `GET /api/certifications` - Certifications and achievements

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

## Data Management

The portfolio content is managed through the `data/personalData.json` file, which contains:
- Personal information
- Skills and proficiencies  
- Work experience
- Education history
- Projects portfolio
- Contact details
- Social media links

## Deployment

1. Build the project: `npm run build`
2. Start the production server: `npm start`
3. The application serves both API and static files

## License

MIT License - see package.json for details

## Author

Md Al Imran Shikdar - Software Engineer in Test