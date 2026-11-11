export interface CakeItem {
  id: string;
  name: string;
  category: 'birthday' | 'chocolate' | 'wedding' | 'eggless' | 'pastries';
  description: string;
  image: string;
  basePrice: number; // in INR for standard weight
  weights: { weight: string; price: number; serves: string }[];
  isEggless: boolean;
  popular?: boolean;
  flavorNotes: string[];
}

export interface CustomInquiry {
  name: string;
  phone: string;
  cakeType: string;
  weight: string;
  sponge: 'eggless' | 'regular';
  messageOnCake: string;
  eventDate: string;
  deliveryType: 'delivery' | 'pickup';
  deliveryAddress: string;
  specialInstructions: string;
}

export interface DeliveryZone {
  name: string;
  area: string;
  deliveryTime: string;
  freeDeliveryMin: number;
}
