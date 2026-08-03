export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Backend" | "Full Stack" | "Frontend" | "Featured";
  image: string;
  tags: string[];
  architecture?: string[];
  challenges?: string[];
  learnings?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  category: "Education" | "Career" | "Backend Transition" | "Architecture";
  description: string;
  keyTakeaways: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  filename: string;
  description: string;
  code: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}
