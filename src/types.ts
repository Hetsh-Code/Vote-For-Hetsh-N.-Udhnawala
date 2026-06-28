export interface Pledge {
  id: string;
  name: string;
  grade: string;
  message: string;
  timestamp: string;
}

export interface ManifestoItem {
  id: string;
  title: string;
  category: string;
  iconName: string; // From lucide-react names
  description: string;
  details: string[];
  color: string; // CSS color string or Tailwind class for color accents
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
