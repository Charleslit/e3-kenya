export interface BoardMember {
  image?: string;
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
    email?: string;
    twitter?: string;
  };
} 