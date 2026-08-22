export interface ProgramPricing {
  name: string;
  originalPrice: number;
  salePrice: number;
  badge?: string;
  sessions: number;
  description: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  durationMinutes: number;
  targetArea: string;
  category: 'neck-shoulder' | 'fascia-lifting' | 'scalp' | string;
  keyEffects: string[];
  anatomicalPoints: {
    name: string;
    description: string;
    koreanTerm: string;
  }[];
  procedureSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  pricingPlans: ProgramPricing[];
  recommendedFor: string[];
  badgeText: string;
  image: string;
}

export interface Salon {
  id: string;
  name: string;
  branch: string;
  directorName: string;
  directorTitle: string;
  address: string;
  detailAddress: string;
  district: string; // e.g., '강남구', '서초구', '분당구', '해운대구'
  city: string; // '서울', '경기', '부산'
  lat: number;
  lng: number;
  phone: string;
  businessHours: string;
  closedDay: string;
  rating: number;
  reviewCount: number;
  reservationCount: number;
  isCertifiedMaster: boolean;
  image: string;
  features: string[];
  supportedProgramIds: string[];
  parkingInfo: string;
  nearestStation: string;
  shortIntro: string;
}

export interface ReservationFormData {
  customerName: string;
  customerPhone: string;
  salonId: string;
  programId: string;
  pricingPlanIndex: number;
  date: string;
  time: string;
  focusAreas: string[];
  specialRequests: string;
}

export interface ConfirmedReservation extends ReservationFormData {
  id: string;
  salonName: string;
  salonBranch: string;
  salonAddress: string;
  salonPhone: string;
  programTitle: string;
  planName: string;
  totalPrice: number;
  createdAt: string;
  status: 'confirmed' | 'pending';
}

export interface AcademyApplicationData {
  id: string;
  directorName: string;
  salonName: string;
  phone: string;
  email?: string;
  region: string;
  trainingType: 'regular_academy' | 'visit_1on1' | 'group_seminar';
  preferredDay: string;
  inquiry?: string;
  businessNumber?: string;
  address?: string;
  chairCount?: number;
  designerCount?: number;
  currentScalpMenu?: 'none' | 'basic' | 'premium';
  submittedAt: string;
  status: 'submitted' | 'confirmed';
}

export interface Review {
  id: string;
  authorName: string;
  authorRole: 'customer' | 'director';
  authorAffiliation?: string;
  salonName: string;
  programName: string;
  rating: number;
  date: string;
  content: string;
  tags: string[];
  highlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'customer' | 'director' | 'fascia';
}

export interface FooterInfo {
  brand: string;
  brandDesc: string;
  company: string;
  companyName: string;
  ceo: string;
  address: string;
  phone: string;
  mobilePhone: string;
  email: string;
  hours: string;
  businessNumber: string;
  telecomNumber: string;
  disclaimer: string;
  copyright: string;
}
