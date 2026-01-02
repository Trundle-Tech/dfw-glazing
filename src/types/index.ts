export interface TeamMember {
  id: string;
  name: string;
  title: string;
  category: 'executive' | 'management' | 'administration' | 'field';
  image?: string;
  career?: string;
  favoriteMemory?: string;
  personal?: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  category: 'hotel' | 'school' | 'healthcare' | 'commercial' | 'other';
  image: string;
  description?: string;
  video?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface Supplier {
  name: string;
  url: string;
  category: 'aluminum' | 'glass';
  subcategory?: 'storefront' | 'windows';
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  project?: string;
  rating?: number;
}
