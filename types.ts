
export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  logoUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  role: string;
  githubUrl?: string;
  imageUrl?: string;
  metrics?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  certificateUrl?: string;
}
