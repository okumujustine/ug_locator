export interface Business {
  id: string;
  name: string;
  category: BusinessCategory;
  rating: number;
  reviewCount: number;
  services: string[];
  travelTime: {
    duration: number;
    mode: 'walk' | 'car' | 'transit';
  };
  location: {
    lat: number;
    lng: number;
    address: string;
    city: string;
    country: string;
  };
  imageUrl: string;
}

export type BusinessCategory = 
  | 'restaurant' 
  | 'cafe' 
  | 'bank' 
  | 'supermarket' 
  | 'hospital'
  | 'pharmacy'
  | 'hotel'
  | 'gym';

export interface SearchFiltersType {
  query: string;
  category: BusinessCategory | 'all';
  distance: number;
}

export interface UserLocation {
  lat: number | null;
  lng: number | null;
  loading: boolean;
  error: string | null;
}