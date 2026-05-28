export interface Project {
  id: string;
  number: string;
  category: 'Web' | 'Design';
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  url?: string;
}

export interface WorkExperience {
  id: string;
  type: 'experience' | 'education';
  title: string;
  subtitle: string;
  year: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  description: string;
  role: string;
}

export type AccentColor = 'cyan' | 'emerald' | 'violet' | 'amber' | 'rose';

export interface AccentOption {
  id: AccentColor;
  name: string;
  primaryClass: string; // Tailwind values
  bgGlow: string;
  colorHex: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  description?: string;
  url?: string;
}
