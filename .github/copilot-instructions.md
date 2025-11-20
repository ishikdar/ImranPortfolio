<!-- Portfolio Project Instructions for GitHub Copilot -->

## Project Overview
This is a portfolio website project with:
- Frontend: HTML/CSS for home, about me, and contacts sections
- Backend: TypeScript server to serve data from personalData.json
- Data source: /data/personalData.json file containing personal information

## Development Guidelines
- Use TypeScript for all backend code
- Keep frontend simple, responsive for mobile, tablet and desktop with vanilla HTML/CSS
- Structure code with clear separation between frontend and backend
- Use modern ES6+ features in TypeScript
- Follow clean code practices and proper error handling

## Project Structure
```
/
├── data/
│   └── personalData.json    # Personal data source
├── src/
│   ├── server.ts           # TypeScript server entry point
│   └── routes/             # API route handlers
├── public/
│   ├── index.html          # Home page
│   ├── about.html          # About me page
│   ├── contact.html        # Contact page
│   ├── css/               # Stylesheets
│   └── js/                # Client-side JavaScript
├── package.json
└── tsconfig.json
```

## API Endpoints
- GET /api/personal - Personal information
- GET /api/skills - Skills data
- GET /api/projects - Projects data
- GET /api/experience - Work experience
- Static file serving for HTML/CSS/JS

## Development Commands
- npm run dev - Start development server
- npm run build - Build TypeScript
- npm start - Run production server