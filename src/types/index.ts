export interface Product {
  _id: string;
  name: string;
  description: string;
  images: string[];
  buyPrice?: number; // optional because some products may only be rentable
  rentPrices?: {     // optional because some products may only be for buy
    daily: number;
    
  };
  category: string;
  availability: 'available' | 'booked' | 'out_of_stock';
  specifications?: Record<string, string>;
  features?: string[];
  locations?: string[];
}

// Rent duration type
export type RentDuration = 'daily' | 'weekly' | 'monthly';

// Review interface
export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  location: string;
  date: string;
}

// FAQ interface
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Booking form interface
export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  productId: string;
  duration: RentDuration;
  startDate: string;
  message: string;
}

// Location interface
export interface Location {
  id: string;
  name: string;
  isActive: boolean;
}