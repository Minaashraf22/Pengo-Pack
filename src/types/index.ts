export type Lang = 'ar' | 'en';

export interface BilingualText {
  ar: string;
  en: string;
}

export interface Service {
  id: string;
  icon: string;
  title: BilingualText;
  shortDesc: BilingualText;
  fullDesc: BilingualText;
  suitableFor: BilingualText;
  typicalOutputs: BilingualText[];
  whyChoose: BilingualText[];
  benefits: BilingualText[];
  process: BilingualText[];
  finishingOptions?: BilingualText[];
  tags: BilingualText[];
  imageUrl: string;
  ctaLink?: string;
}

export interface Industry {
  id: string;
  icon: string;
  title: BilingualText;
  subtitle: BilingualText;
  description: BilingualText;
  needs: BilingualText;
  support: BilingualText;
  whyPrecision: BilingualText;
  features: BilingualText[];
  imageUrl: string;
  color: string;
  iconColor: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  industry: string;
  title: BilingualText;
  summary: BilingualText;
  packagingType: BilingualText;
  finishingTags: BilingualText[];
  featuredImage: string;
  galleryImages: string[];
  challenge?: BilingualText;
  solution?: BilingualText;
  outcome?: BilingualText;
  specs?: BilingualText;
}

export interface Testimonial {
  id: string;
  name: BilingualText;
  role: BilingualText;
  company: BilingualText;
  text: BilingualText;
  rating: number;
  sector: string;
}

export interface Partner {
  id: string;
  name: string;
  sector: BilingualText;
  type?: 'client' | 'supplier' | 'strategic';
}

export interface MaterialFinish {
  id: string;
  title: BilingualText;
  description: BilingualText;
  category: 'material' | 'finish' | 'process';
  tags?: BilingualText[];
}

export interface FAQItem {
  id: string;
  question: BilingualText;
  answer: BilingualText;
  category: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: number;
  title: BilingualText;
  description: BilingualText;
  deliverables: BilingualText[];
}

export interface QuoteFormField {
  id: string;
  label: BilingualText;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'number' | 'file';
  required: boolean;
  placeholder?: BilingualText;
  options?: BilingualText[];
}

// CMS integration markers — replace these data files with API calls when backend is ready
// TODO: Replace src/data/*.ts imports with Supabase API calls:
//   - services table
//   - industries table
//   - portfolio_items table
//   - testimonials table
//   - partners table
//   - materials_finishes table
//   - faq_items table
//   - process_steps table
