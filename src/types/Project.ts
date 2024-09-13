export interface Screenshot {
    src: string;
    alt: string;
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    introduction: string;
    screenshots: Screenshot[];
    technologies: string[];
    features: string[];
    challenges: string;
    outcome: string;
    githubLink?: string;
    liveLink?: string;
    imageUrl: string;
  }