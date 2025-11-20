#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Building static version for GitHub Pages...');

// Create build directory
if (fs.existsSync('_site')) {
  fs.rmSync('_site', { recursive: true });
}
fs.mkdirSync('_site', { recursive: true });

// Copy files
console.log('📁 Copying files...');
fs.cpSync('site/public/pages', '_site', { recursive: true });
fs.cpSync('site/public/css', '_site/css', { recursive: true });
fs.cpSync('site/public/js', '_site/js', { recursive: true });
fs.cpSync('site/public/data', '_site/data', { recursive: true });

// Copy assets if they exist
if (fs.existsSync('site/public/assets')) {
  fs.cpSync('site/public/assets', '_site/assets', { recursive: true });
} else {
  fs.mkdirSync('_site/assets', { recursive: true });
}

// Load data
console.log('📄 Loading personal data...');
const data = JSON.parse(fs.readFileSync('site/public/data/personalData.json', 'utf8'));

// Create static data script
console.log('⚡ Creating static data API...');
const staticDataScript = `
// Static data for GitHub Pages (fallback when backend is not available)
window.STATIC_DATA = ${JSON.stringify(data, null, 2)};

// Override fetch for API calls to use static data
const originalFetch = window.fetch;
window.fetch = function(url, options) {
  if (url.includes('/api/home') || url.includes('/api/index')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(window.STATIC_DATA)
    });
  }
  if (url.includes('/api/about')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(window.STATIC_DATA)
    });
  }
  if (url.includes('/api/contact')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(window.STATIC_DATA)
    });
  }
  // For other URLs, use original fetch (will fail gracefully on GitHub Pages)
  return originalFetch.apply(this, arguments).catch(() => ({
    ok: false,
    json: () => Promise.resolve({})
  }));
};

console.log('✅ Static data API loaded for GitHub Pages');
`;

fs.writeFileSync('_site/static-data.js', staticDataScript);

// Update HTML files
console.log('🔧 Updating HTML files...');
const htmlFiles = ['index.html', 'home.html', 'about.html', 'contact.html'];

htmlFiles.forEach(filename => {
  if (fs.existsSync(`_site/${filename}`)) {
    let html = fs.readFileSync(`_site/${filename}`, 'utf8');
    
    // Fix CSS paths
    html = html.replace(/\.\.\/css\//g, 'css/');
    // Fix asset paths
    html = html.replace(/\.\.\/assets\//g, 'assets/');
    // Fix JS paths
    html = html.replace(/\.\.\/js\//g, 'js/');
    
    // Add static data script before other scripts
    html = html.replace('<script', '<script src="static-data.js"></script>\n    <script');
    
    // If no scripts found, add before closing body tag
    if (!html.includes('<script')) {
      html = html.replace('</body>', '    <script src="static-data.js"></script>\n</body>');
    }
    
    // Remove backend script references
    html = html.replace(/<script type="module" src="[^"]*main\.js"><\/script>/g, '');
    
    fs.writeFileSync(`_site/${filename}`, html);
    console.log(`   ✅ Updated ${filename}`);
  }
});

console.log('\n🎉 Static build complete!');
console.log('📁 Output directory: _site/');
console.log('🌐 Test locally: npm run preview:static');
console.log('🔗 Visit: http://localhost:8080');
console.log('\n💡 Your local dev server (npm run dev) still works with the full TypeScript backend!');