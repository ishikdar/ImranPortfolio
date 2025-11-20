// What does our JSON file look like? This tells TypeScript the structure
interface PersonalData {
  personal: {
    name: string;
    nickName: string;
    title: string;
    shortTitle: string;
    location: string;
    timezone: string;
    timezoneDisplay: string;
    email: string;
    linkedin: string;
    github: string;
    openToRemote: boolean;
    openToRelocation: boolean;
    relocationNote: string;
    summary: string;
    aboutSummary: string;
    coreStrengths: string[];
    availability: {
      notice: string;
      relocation: string;
      remote: string;
    };
    social: Array<{
      name: string;
      url: string;
      icon: string;
      label: string;
    }>;
    sourceCode: {
      url: string;
      text: string;
      icon: string;
    };
  };
  skills: {
    [category: string]: Array<{
      name: string;
      proficiency: string;
      level: number;
    }>;
  };
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    url: string;
    featured: boolean;
    category: string;
    year: string;
  }>;
  workExperience: Array<{
    company: string;
    position: string;
    subtitle: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    location: string;
    graduationDate: string;
    gpa: string;
    note?: string;
  }>;
  coursesAndCertifications: Array<{
    title: string;
    issuer: string;
    date: string;
    url?: string;
    credentialId?: string;
  }>;
  pages: {
    home: {
      title: string;
      subtitle: string;
    };
    about: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
    };
  };
}

// Simple class to load and work with your personal data
class DataLoader {
  // This holds our data once we load it
  private data: PersonalData | null = null;
  
  // Method 1: Give it data directly
  setData(jsonData: PersonalData): void {
    this.data = jsonData;
  }

  async loadFromUrl(url: string): Promise<PersonalData> {
    try {
      
      // Ask the browser to get the file
      const response = await fetch(url);
      
      // Check if we got the file successfully
      if (!response.ok) {
        throw new Error(`Could not get file! Error: ${response.status}`);
      }
      
      // Convert the file content to JavaScript object
      const jsonData = await response.json();
      
      // Save it so we can use it later
      this.data = jsonData;
      
      return jsonData;
      
    } catch (error) {
      console.log('❌ Something went wrong loading the data:', error);
      throw new Error('Could not load your personal data');
    }
  }

  // Private helper: Make sure we have data before using it
  private checkData(): PersonalData {
    if (!this.data) {
      throw new Error('No data! Please load data first using loadFromUrl()');
    }
    return this.data;
  }

  // Get your personal info (name, email, etc.)
  getPersonalInfo() {
    const data = this.checkData();
    return data.personal;
  }

  // Get your skills
  getSkills() {
    const data = this.checkData();
    return data.skills;
  }

  // Get your projects
  getProjects() {
    const data = this.checkData();
    return data.projects;
  }

  // Get your work experience
  getWorkExperience() {
    const data = this.checkData();
    return data.workExperience;
  }

  // Get your education
  getEducation() {
    const data = this.checkData();
    return data.education;
  }

  // Get your certifications
  getCertifications() {
    const data = this.checkData();
    return data.coursesAndCertifications;
  }

  // Get page content (home, about, contact)
  getPages() {
    const data = this.checkData();
    return data.pages;
  }

  // Get specific page content
  getHomePage() {
    const pages = this.getPages();
    return pages.home;
  }

  getAboutPage() {
    const pages = this.getPages();
    return pages.about;
  }

  getContactPage() {
    const pages = this.getPages();
    return pages.contact;
  }

  // Get social links
  getSocialLinks() {
    const personal = this.getPersonalInfo();
    return personal.social;
  }

  // Get availability info
  getAvailability() {
    const personal = this.getPersonalInfo();
    return personal.availability;
  }

  // Get source code info
  getSourceCode() {
    const personal = this.getPersonalInfo();
    return personal.sourceCode;
  }

  // Get skills by category
  getSkillsByCategory(category: string) {
    const skills = this.getSkills();
    return skills[category] || [];
  }

  // Get all skill categories
  getSkillCategories() {
    const skills = this.getSkills();
    return Object.keys(skills);
  }

  // Get featured projects only
  getFeaturedProjects() {
    const projects = this.getProjects();
    return projects.filter(project => project.featured);
  }

  // Get projects by category
  getProjectsByCategory(category: string) {
    const projects = this.getProjects();
    return projects.filter(project => project.category === category);
  }

  // Quick access methods for common data
  getNickName(): string {
    const personal = this.getPersonalInfo();
    return personal.nickName || 'Imran Shikdar';
  }

  getName(): string {
    const personal = this.getPersonalInfo();
    return personal.name || 'Md Al Imran Shikdar';
  }

  getTitle(): string {
    const personal = this.getPersonalInfo();
    return personal.title || 'Software Engineer in Test';
  }

  getEmail(): string {
    const personal = this.getPersonalInfo();
    return personal.email || 'shikder.imran@yahoo.com';
  }

  getLocation(): string {
    const personal = this.getPersonalInfo();
    return personal.location || 'Dhaka, Bangladesh';
  }

  getSummary(): string {
    const personal = this.getPersonalInfo();
    return personal.summary || '';
  }

  getAboutSummary(): string {
    const personal = this.getPersonalInfo();
    return personal.aboutSummary || '';
  }

  getCoreStrengths(): string[] {
    const personal = this.getPersonalInfo();
    return personal.coreStrengths || [];
  }

  // Check if we have data loaded
  hasData(): boolean {
    return this.data !== null;
  }
}

// Make these available to other files
export type { PersonalData };
export { DataLoader };

console.log('DataLoader module loaded');