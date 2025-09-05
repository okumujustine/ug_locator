import { Business, BusinessCategory } from '../types';

export const MOCK_BUSINESSES: Business[] = [
  {
    id: '1',
    name: 'Mama Africa Restaurant',
    category: 'restaurant',
    rating: 4.7,
    reviewCount: 234,
    services: ['Local Cuisine', 'Outdoor Seating', 'Takeaway'],
    travelTime: {
      duration: 12,
      mode: 'car'
    },
    location: {
      lat: -1.2921,
      lng: 36.8219,
      address: '197 Kenyatta Avenue',
      city: 'Nairobi',
      country: 'Kenya'
    },
    imageUrl: 'https://images.pexels.com/photos/6127362/pexels-photo-6127362.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '2',
    name: 'First National Bank',
    category: 'bank',
    rating: 4.2,
    reviewCount: 156,
    services: ['ATM', 'Currency Exchange', 'Loans'],
    travelTime: {
      duration: 8,
      mode: 'car'
    },
    location: {
      lat: -1.2864,
      lng: 36.8172,
      address: '45 Kimathi Street',
      city: 'Nairobi',
      country: 'Kenya'
    },
    imageUrl: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '3',
    name: 'Nakumatt Supermarket',
    category: 'supermarket',
    rating: 4.0,
    reviewCount: 312,
    services: ['Groceries', 'Pharmacy', 'Electronics'],
    travelTime: {
      duration: 15,
      mode: 'car'
    },
    location: {
      lat: -1.2982,
      lng: 36.8084,
      address: '208 Ngong Road',
      city: 'Nairobi',
      country: 'Kenya'
    },
    imageUrl: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '4',
    name: 'Cape Town Coffee House',
    category: 'cafe',
    rating: 4.8,
    reviewCount: 178,
    services: ['Coffee', 'Pastries', 'Free WiFi'],
    travelTime: {
      duration: 6,
      mode: 'walk'
    },
    location: {
      lat: -1.2742,
      lng: 36.8136,
      address: '12 Westlands Road',
      city: 'Nairobi',
      country: 'Kenya'
    },
    imageUrl: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '5',
    name: 'Kenyatta National Hospital',
    category: 'hospital',
    rating: 3.9,
    reviewCount: 425,
    services: ['Emergency', 'Surgery', 'Outpatient'],
    travelTime: {
      duration: 20,
      mode: 'car'
    },
    location: {
      lat: -1.3015,
      lng: 36.8058,
      address: 'Hospital Road, Upper Hill',
      city: 'Nairobi',
      country: 'Kenya'
    },
    imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '6',
    name: 'Safari Gym & Fitness',
    category: 'gym',
    rating: 4.5,
    reviewCount: 87,
    services: ['Personal Training', 'Cardio', 'Weights'],
    travelTime: {
      duration: 10,
      mode: 'car'
    },
    location: {
      lat: -1.2678,
      lng: 36.8123,
      address: '56 Parklands Road',
      city: 'Nairobi',
      country: 'Kenya'
    },
    imageUrl: 'https://images.pexels.com/photos/4164512/pexels-photo-4164512.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '7',
    name: 'Lagos Continental Hotel',
    category: 'hotel',
    rating: 4.6,
    reviewCount: 312,
    services: ['Luxury Rooms', 'Restaurant', 'Pool'],
    travelTime: {
      duration: 18,
      mode: 'car'
    },
    location: {
      lat: 6.4281,
      lng: 3.4219,
      address: 'Victoria Island',
      city: 'Lagos',
      country: 'Nigeria'
    },
    imageUrl: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '8',
    name: 'Accra Mall Pharmacy',
    category: 'pharmacy',
    rating: 4.3,
    reviewCount: 156,
    services: ['Prescriptions', 'Healthcare Products', '24/7 Service'],
    travelTime: {
      duration: 5,
      mode: 'walk'
    },
    location: {
      lat: 5.6037,
      lng: -0.1870,
      address: 'Spintex Road',
      city: 'Accra',
      country: 'Ghana'
    },
    imageUrl: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '9',
    name: 'Ethiopian Coffee House',
    category: 'cafe',
    rating: 4.9,
    reviewCount: 203,
    services: ['Traditional Coffee', 'Pastries', 'Cultural Experience'],
    travelTime: {
      duration: 7,
      mode: 'walk'
    },
    location: {
      lat: 9.0320,
      lng: 38.7500,
      address: 'Bole Road',
      city: 'Addis Ababa',
      country: 'Ethiopia'
    },
    imageUrl: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '10',
    name: 'Cairo Medical Center',
    category: 'hospital',
    rating: 4.4,
    reviewCount: 378,
    services: ['Emergency Care', 'Specialists', 'Modern Equipment'],
    travelTime: {
      duration: 15,
      mode: 'car'
    },
    location: {
      lat: 30.0444,
      lng: 31.2357,
      address: 'Maadi',
      city: 'Cairo',
      country: 'Egypt'
    },
    imageUrl: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '11',
    name: 'Marrakech Fitness Club',
    category: 'gym',
    rating: 4.7,
    reviewCount: 145,
    services: ['Modern Equipment', 'Classes', 'Personal Training'],
    travelTime: {
      duration: 12,
      mode: 'car'
    },
    location: {
      lat: 31.6295,
      lng: -7.9811,
      address: 'Gueliz District',
      city: 'Marrakech',
      country: 'Morocco'
    },
    imageUrl: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '12',
    name: 'Zanzibar Spice Market',
    category: 'supermarket',
    rating: 4.8,
    reviewCount: 267,
    services: ['Local Spices', 'Fresh Produce', 'Souvenirs'],
    travelTime: {
      duration: 8,
      mode: 'walk'
    },
    location: {
      lat: -6.1659,
      lng: 39.1988,
      address: 'Stone Town',
      city: 'Zanzibar City',
      country: 'Tanzania'
    },
    imageUrl: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '13',
    name: 'Abidjan Royal Bank',
    category: 'bank',
    rating: 4.1,
    reviewCount: 189,
    services: ['Personal Banking', 'Business Services', 'International Transfers'],
    travelTime: {
      duration: 10,
      mode: 'car'
    },
    location: {
      lat: 5.3600,
      lng: -4.0083,
      address: 'Plateau District',
      city: 'Abidjan',
      country: 'Ivory Coast'
    },
    imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '14',
    name: 'Kigali Green Pharmacy',
    category: 'pharmacy',
    rating: 4.6,
    reviewCount: 134,
    services: ['Prescriptions', 'Health Advice', 'Beauty Products'],
    travelTime: {
      duration: 6,
      mode: 'walk'
    },
    location: {
      lat: -1.9441,
      lng: 30.0619,
      address: 'City Center',
      city: 'Kigali',
      country: 'Rwanda'
    },
    imageUrl: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '15',
    name: 'Maputo Seafood Restaurant',
    category: 'restaurant',
    rating: 4.8,
    reviewCount: 223,
    services: ['Fresh Seafood', 'Ocean View', 'Live Music'],
    travelTime: {
      duration: 14,
      mode: 'car'
    },
    location: {
      lat: -25.9692,
      lng: 32.5732,
      address: 'Marginal Avenue',
      city: 'Maputo',
      country: 'Mozambique'
    },
    imageUrl: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '16',
    name: 'Windhoek Wellness Center',
    category: 'gym',
    rating: 4.4,
    reviewCount: 98,
    services: ['Yoga Classes', 'Spa', 'Fitness Equipment'],
    travelTime: {
      duration: 9,
      mode: 'car'
    },
    location: {
      lat: -22.5609,
      lng: 17.0658,
      address: 'Independence Avenue',
      city: 'Windhoek',
      country: 'Namibia'
    },
    imageUrl: 'https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '17',
    name: 'Luanda Luxury Hotel',
    category: 'hotel',
    rating: 4.7,
    reviewCount: 276,
    services: ['Sea View Rooms', 'Fine Dining', 'Conference Facilities'],
    travelTime: {
      duration: 16,
      mode: 'car'
    },
    location: {
      lat: -8.8147,
      lng: 13.2302,
      address: 'Marginal Promenade',
      city: 'Luanda',
      country: 'Angola'
    },
    imageUrl: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '18',
    name: 'Dakar Fresh Market',
    category: 'supermarket',
    rating: 4.3,
    reviewCount: 167,
    services: ['Local Produce', 'Imported Goods', 'Deli Counter'],
    travelTime: {
      duration: 7,
      mode: 'walk'
    },
    location: {
      lat: 14.7167,
      lng: -17.4677,
      address: 'Plateau District',
      city: 'Dakar',
      country: 'Senegal'
    },
    imageUrl: 'https://images.pexels.com/photos/375897/pexels-photo-375897.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '19',
    name: 'Kampala Medical Plaza',
    category: 'hospital',
    rating: 4.5,
    reviewCount: 289,
    services: ['Emergency Care', 'Specialized Clinics', 'Laboratory'],
    travelTime: {
      duration: 13,
      mode: 'car'
    },
    location: {
      lat: 0.3476,
      lng: 32.5825,
      address: 'Kololo Hill',
      city: 'Kampala',
      country: 'Uganda'
    },
    imageUrl: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: '20',
    name: 'Casablanca Café & Bistro',
    category: 'cafe',
    rating: 4.6,
    reviewCount: 198,
    services: ['Moroccan Coffee', 'French Pastries', 'Breakfast'],
    travelTime: {
      duration: 5,
      mode: 'walk'
    },
    location: {
      lat: 33.5731,
      lng: -7.5898,
      address: 'Mohammed V Boulevard',
      city: 'Casablanca',
      country: 'Morocco'
    },
    imageUrl: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&h=350'
  }
];

export const CATEGORIES: { value: BusinessCategory | 'all', label: string }[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'restaurant', label: 'Restaurants' },
  { value: 'cafe', label: 'Cafes' },
  { value: 'bank', label: 'Banks' },
  { value: 'supermarket', label: 'Supermarkets' },
  { value: 'hospital', label: 'Hospitals' },
  { value: 'pharmacy', label: 'Pharmacies' },
  { value: 'hotel', label: 'Hotels' },
  { value: 'gym', label: 'Gyms' }
];

export const filterBusinesses = (
  businesses: Business[],
  filters: { query: string; category: string; distance: number }
): Business[] => {
  return businesses.filter(business => {
    // Filter by search query
    const matchesQuery = filters.query 
      ? business.name.toLowerCase().includes(filters.query.toLowerCase()) ||
        business.location.city.toLowerCase().includes(filters.query.toLowerCase()) ||
        business.location.country.toLowerCase().includes(filters.query.toLowerCase())
      : true;
    
    // Filter by category
    const matchesCategory = filters.category === 'all' 
      ? true 
      : business.category === filters.category;
    
    // Filter by distance (using travel time as a proxy)
    const matchesDistance = filters.distance 
      ? business.travelTime.duration <= filters.distance
      : true;
    
    return matchesQuery && matchesCategory && matchesDistance;
  });
};