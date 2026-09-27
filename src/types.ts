export interface ProjectCardData {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imagePlaceholder: string;
  liveUrlPlaceholder: string;
  codeUrlPlaceholder: string;
}

export interface SkillItem {
  id: number;
  label: string;
  categoryPlaceholder?: string;
}

export interface FunFactItem {
  id: number;
  text: string;
}

export interface FavoriteThingItem {
  id: number;
  text: string;
}
