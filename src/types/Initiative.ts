export type Initiative = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  impact: {
    beneficiaries: number;
    location: string;
    duration: string;
  };
  status: "ongoing" | "planned" | "completed";
  highlights?: string[];
}; 