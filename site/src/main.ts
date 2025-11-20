// Import services
import { IndexService } from './services/indexService.js';

// Main app class - controls everything
class PortfolioApp {
  // Services (add more here in the future)
  private indexService: IndexService;
  
  // Current page info
  private currentPage: string;

  constructor() {
    // Initialize services
    this.indexService = new IndexService();
    
    // Figure out which page we're on
    this.currentPage = this.getCurrentPage();
  }

  // Helper: Figure out which page we're on
  private getCurrentPage(): string {
    const path = window.location.pathname;
    
    if (path.includes('about')) return 'about';
    if (path.includes('contact')) return 'contact';
    if (path.includes('index') || path.endsWith('/')) return 'index';
    
    return 'index'; // default
  }

  // Load data and update the current page
  async loadCurrentPage(): Promise<void> {
    
    switch (this.currentPage) {
      case 'index':
        await this.loadIndexPage();
        break;
      case 'about':
        await this.loadAboutPage();
        break;
      case 'contact':
        await this.loadContactPage();
        break;
      default:
        console.log('Unknown page, loading index as default');
        await this.loadIndexPage();
    }
  }

  // Load home/index page
  private async loadIndexPage(): Promise<void> {
    try {
      
      // Load data and update all page elements
      // Detect environment and use appropriate path
      let dataPath = '/data/personalData.json';
      
      // Check if running on GitHub Pages
      if (window.location.hostname.includes('github.io')) {
        dataPath = '/ImranPortfolio/data/personalData.json';
      }
      
      await this.indexService.loadAndRenderIndexPage(dataPath);
      
    } catch (error) {
      console.log('❌ Home page failed to load:', error);
    }
  }

  // Load about page (placeholder for future)
  private async loadAboutPage(): Promise<void> {
    // TODO: Add AboutService here later
  }

  // Load contact page (placeholder for future)
  private async loadContactPage(): Promise<void> {
    console.log('📞 Contact page - ready for future ContactService');
    // TODO: Add ContactService here later
  }

  // Helper: Update any element on the page
  private updateElement(id: string, text: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = text;
    } else {
      console.log(`⚠️ Element '${id}' not found on page`);
    }
  }
}

// ===================
// APP INITIALIZATION
// ===================

// Start the app when page is ready
async function startApp(): Promise<void> {
  try {
    
    // Create the main app
    const app = new PortfolioApp();
    
    // Load the current page
    await app.loadCurrentPage();
    
  } catch (error) {
    console.error('❌ App failed to start:', error);
  }
}

// Wait for page to be ready, then start app
function initializeWhenReady(): void {
  if (document.readyState === 'loading') {
    // Page still loading - wait for it
    document.addEventListener('DOMContentLoaded', startApp);
  } else {
    // Page already loaded - start immediately
    startApp();
  }
}

// Start everything
initializeWhenReady();
