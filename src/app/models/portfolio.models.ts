export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  profileImage: string;
  resumeUrl: string;
  yearsOfExperience: number;
  email: string;
  phone: string;
  location: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  logo?: string;
  logoDark?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  iconDark?: string;
}

export interface NavLink {
  label: string;
  sectionId: string;
}
