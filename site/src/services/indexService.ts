// This file loads data and updates the home page HTML elements

import { DataLoader } from '../dataLoader/dataLoader.js';

// Class that loads data and updates the home page
class IndexService {
  private dataLoader: DataLoader;

  constructor() {
    // Create our data loader
    this.dataLoader = new DataLoader();
  }

  // Main function: Load data and update HTML elements (detects page type)
  async loadAndRenderIndexPage(dataUrl: string): Promise<void> {
    try {
      
      // Step 1: Load the JSON file
      await this.dataLoader.loadFromUrl(dataUrl);
      
      // Step 2: Detect which page we're on and update accordingly
      if (this.isSimpleIndexPage()) {
        console.log('Detected index page');
        this.updateSimpleIndexPage();
      } else {
        console.log('Detected home page');
        this.updateDetailedHomePage();
      }
      
    } catch (error) {
      console.log('❌ IndexService: Could not load page data');
      throw new Error('Could not load page data');
    }
  }

  // Check if this is the simple index page (has heroName and heroRole)
  private isSimpleIndexPage(): boolean {
    const heroName = document.getElementById('heroName');
    const heroRole = document.getElementById('heroRole');
    const profileName = document.getElementById('profileName');
    
    // If heroName/heroRole exist but profileName doesn't, it's the simple index page
    return (heroName !== null && heroRole !== null && profileName === null);
  }

  // Update simple index page (only heroName and heroRole)
  private updateSimpleIndexPage(): void {
    const personal = this.dataLoader.getPersonalInfo();
    
    // Update simple hero section
    this.updateElement('heroName', personal.nickName || personal.name);
    this.updateElement('heroRole', personal.shortTitle || personal.title);
  }

  // Update detailed home page (all sections)
  private updateDetailedHomePage(): void {
    this.updatePersonalInfo();
    this.updateCurrentRole();
    this.updateSkills();
    this.updateFooter();
  }

  // Update personal information section
  private updatePersonalInfo(): void {
    const personal = this.dataLoader.getPersonalInfo();
    
    // Basic personal info
    this.updateElement('logoText', personal.nickName);
    this.updateElement('profileName', personal.name);
    this.updateElement('profileTitle', personal.title);
    this.updateElement('profileLocation', personal.location);
    this.updateElement('profileTimeDisplay', personal.timezoneDisplay);
    this.updateElement('profileSummary', personal.summary);
    
    // Contact links
    this.updateElement('profileEmail', personal.email);
    this.updateLinkElement('profileEmail', `mailto:${personal.email}`);
    this.updateLinkElement('profileLinkedIn', personal.linkedin);
    this.updateLinkElement('profileGitHub', personal.github);
    
    // Relocation info
    this.updateElement('relocationText', personal.relocationNote);
  }

  // Update current role section
  private updateCurrentRole(): void {
    const workExperience = this.dataLoader.getWorkExperience();
    
    if (workExperience && workExperience.length > 0) {
      const currentJob = workExperience[0]; // First job is current
      
      if (currentJob) {
        this.updateElement('currentPosition', currentJob.position);
        this.updateElement('currentCompany', currentJob.company);
        this.updateElement('currentSubtitle', currentJob.subtitle);
        this.updateElement('currentLocation', currentJob.location);
        this.updateElement('currentPeriod', currentJob.period);
        this.updateElement('currentDescription', currentJob.description);
        
        // Update achievements list
        this.updateListElement('currentAchievements', currentJob.achievements);
      }
    }
  }

  // Update skills sections
  private updateSkills(): void {
    const skills = this.dataLoader.getSkills();
    
    // Manual Testing
    this.updateSkillCategory('manualTestingTitle', 'manualTestingList', 'Manual Testing', skills);
    
    // Performance Testing Tools
    this.updateSkillCategory('performanceTestingTitle', 'performanceTestingList', 'Performance Testing Tools', skills);
    
    // API Testing Tools
    this.updateSkillCategory('apiTestingTitle', 'apiTestingList', 'API Testing Tools', skills);
    
    // Cloud & DevOps
    this.updateSkillCategory('cloudDevopsTitle', 'cloudDevopsList', 'Cloud & DevOps', skills);
    
    // Project Management Tools
    this.updateSkillCategory('projectManagementTitle', 'projectManagementList', 'Project Management Tools', skills);
    
    // Programming Languages
    this.updateSkillCategory('programmingTitle', 'programmingList', 'Programming Languages', skills);
    
    // Databases
    this.updateSkillCategory('databaseTitle', 'databaseList', 'Databases', skills);
    
    // Version Control
    this.updateSkillCategory('versionControlTitle', 'versionControlList', 'Version Control', skills);
  }

  // Update footer section
  private updateFooter(): void {
    const personal = this.dataLoader.getPersonalInfo();
    const sourceCode = this.dataLoader.getSourceCode();
    
    // Footer social links
    this.updateLinkElement('footerGitHub', personal.github);
    this.updateLinkElement('footerLinkedIn', personal.linkedin);
    this.updateLinkElement('footerEmail', `mailto:${personal.email}`);
    
    // Source code link
    this.updateLinkElement('sourceCodeLink', sourceCode.url);
  }

  // Helper function: Update skill category
  private updateSkillCategory(titleId: string, listId: string, categoryName: string, skills: any): void {
    // Update category title
    this.updateElement(titleId, categoryName);
    
    // Update skills list
    const categorySkills = skills[categoryName];
    if (categorySkills && categorySkills.length > 0) {
      const listElement = document.getElementById(listId);
      if (listElement) {
        // Clear existing content
        listElement.innerHTML = '';
        
        // Add each skill (only skill name)
        categorySkills.forEach((skill: any) => {
          const skillSpan = document.createElement('span');
          skillSpan.className = 'skill-item';
          skillSpan.textContent = skill.name;
          listElement.appendChild(skillSpan);
        });
      }
    }
  }

  // Helper function: Update text content
  private updateElement(id: string, content: string): void {
    const element = document.getElementById(id);
    if (element && content) {
      element.textContent = content;
    }
  }

  // Helper function: Update link href
  private updateLinkElement(id: string, href: string): void {
    const element = document.getElementById(id) as HTMLAnchorElement;
    if (element && href) {
      element.href = href;
    }
  }

  // Helper function: Update list with array items
  private updateListElement(id: string, items: string[]): void {
    const element = document.getElementById(id);
    if (element && items && items.length > 0) {
      // Clear existing content
      element.innerHTML = '';
      
      // Add each item as <li>
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        element.appendChild(li);
      });
    }
  }
}

// Make this available to other files
export { IndexService };

console.log('IndexService module loaded');
