
export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string; // HTML content for responsibilities/achievements
  logoUrl?: string; // Optional company logo
}

export interface CareerOutlook {
  title: string;
  content: string; // HTML content
}

export interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  tags: string[];
  content: string;
  imageUrl?: string;
}
