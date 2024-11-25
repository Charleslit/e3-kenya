export interface Initiative {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  impact: {
    beneficiaries: number;
    location: string;
    duration: string;
  };
  status: 'ongoing' | 'completed' | 'planned';
  highlights?: string[];
  partner?: string;
} 