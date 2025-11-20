import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Serve static files from site/public
app.use(express.static(path.join(__dirname, '../site/public')));

// Serve distribution files
app.use('/distribution', express.static(path.join(__dirname, '../site/distribution')));

// Route all page requests to the pages directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../site/public/pages/index.html'));
});

app.get(['/home', '/home.html'], (req, res) => {
  res.sendFile(path.join(__dirname, '../site/public/pages/home.html'));
});

app.get(['/about', '/about.html'], (req, res) => {
  res.sendFile(path.join(__dirname, '../site/public/pages/about.html'));
});

app.get(['/contact', '/contact.html'], (req, res) => {
  res.sendFile(path.join(__dirname, '../site/public/pages/contact.html'));
});

app.get(['/index', '/index.html'], (req, res) => {
  res.sendFile(path.join(__dirname, '../site/public/pages/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
  console.log(`Serving files from: ${path.join(__dirname, '../site/public')}`);
});
