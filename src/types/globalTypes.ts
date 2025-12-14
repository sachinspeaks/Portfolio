export interface StarType {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

export interface MeteorType {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillsType {
  name: string;
  category: string[];
  iconName: string;
}

export interface ProjectsType {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubLink: string;
}

export interface ProfilesType {
  id: number;
  name: string;
  link: string;
  image: string;
  description: string;
}

export interface sectionPropType {
  sectionRef: React.RefObject<HTMLElement | null>;
}
