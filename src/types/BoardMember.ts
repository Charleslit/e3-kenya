export interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  expertise?: string[];
  quote?: string;
  location?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
} 