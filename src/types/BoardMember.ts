export interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  title: string;
  quote?: string;
  socialLinks: {
    linkedin?: string;
    email?: string;
    twitter?: string;
  };
} 