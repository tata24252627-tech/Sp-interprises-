import { CakeItem, DeliveryZone } from '../types/bakery';

export const BUSINESS_INFO = {
  name: 'Sp Interprises',
  tagline: 'Handcrafted Celebration Cakes & Gourmet Pastries',
  address: 'Navde, Panvel, Maharashtra 410208',
  landmark: 'Near Navde Railway Station / Old Mumbai-Pune Highway Corridor',
  phone: '8108360585',
  phoneDisplay: '+91 8108360585',
  hours: 'Open 8 Hours Daily: 10:00 AM – 6:00 PM',
  openHour: 10,
  closeHour: 18,
  email: 'spinterprisespanvel@gmail.com',
  whatsappUrl: (message: string) =>
    `https://wa.me/918108360585?text=${encodeURIComponent(message)}`,
};

export const CAKE_ITEMS: CakeItem[] = [
  {
    id: 'signature-belgian-truffle',
    name: 'Royal Belgian Dark Truffle Cake',
    category: 'chocolate',
    description: 'Silky layers of 55% Belgian dark chocolate ganache, moist Dutch cocoa sponge, and 24K edible gold dust flakes.',
    image: '/src/assets/images/cake_belgian_truffle_1794384754194.jpg',
    basePrice: 550,
    weights: [
      { weight: '0.5 kg', price: 550, serves: '4–6 guests' },
      { weight: '1.0 kg', price: 1050, serves: '8–12 guests' },
      { weight: '1.5 kg', price: 1550, serves: '12–16 guests' },
      { weight: '2.0 kg', price: 2000, serves: '18–22 guests' },
    ],
    isEggless: true,
    popular: true,
    flavorNotes: ['Belgian Ganache', 'Dutch Cocoa', 'Gold Flakes'],
  },
  {
    id: 'bespoke-wedding-tier',
    name: 'Opulent Two-Tier Celebration Cake',
    category: 'wedding',
    description: 'Handcrafted double tier with velvet ivory buttercream, edible gold leaf veining, and hand-selected fresh organic roses.',
    image: '/src/assets/images/cake_custom_wedding_1794384754655.jpg',
    basePrice: 1800,
    weights: [
      { weight: '1.5 kg (2 Tier)', price: 1800, serves: '14–18 guests' },
      { weight: '2.5 kg (2 Tier)', price: 2900, serves: '24–28 guests' },
      { weight: '4.0 kg (3 Tier)', price: 4600, serves: '40–50 guests' },
    ],
    isEggless: true,
    popular: true,
    flavorNotes: ['Madagascar Vanilla', 'Ivory Buttercream', 'Bespoke Floral'],
  },
  {
    id: 'eggless-fruit-gateau',
    name: 'Exotic Fresh Fruit Gateau (100% Eggless)',
    category: 'eggless',
    description: 'Featherlight eggless sponge layered with fresh Alphonso mango compote, New Zealand kiwi, fresh strawberries, and toasted almond flakes.',
    image: '/src/assets/images/cake_eggless_fresh_fruit_1794384755397.jpg',
    basePrice: 500,
    weights: [
      { weight: '0.5 kg', price: 500, serves: '4–6 guests' },
      { weight: '1.0 kg', price: 950, serves: '8–12 guests' },
      { weight: '1.5 kg', price: 1400, serves: '12–16 guests' },
      { weight: '2.0 kg', price: 1850, serves: '18–22 guests' },
    ],
    isEggless: true,
    popular: true,
    flavorNotes: ['Seasonal Fresh Fruits', 'Pure Dairy Cream', 'Almond Flakes'],
  },
  {
    id: 'gourmet-pastries-cupcakes',
    name: 'Artisan Cupcakes & Parisian Tartlet Box',
    category: 'pastries',
    description: 'Assortment of Belgian chocolate mousse tartlets, raspberry swirl cupcakes, and fresh cream pastries baked fresh this morning.',
    image: '/src/assets/images/cake_pastries_cupcakes_1794384756065.jpg',
    basePrice: 380,
    weights: [
      { weight: 'Box of 4', price: 380, serves: '2–4 guests' },
      { weight: 'Box of 6', price: 540, serves: '4–6 guests' },
      { weight: 'Box of 12 (Party Pack)', price: 980, serves: '8–12 guests' },
    ],
    isEggless: true,
    popular: false,
    flavorNotes: ['Belgian Mousse', 'Raspberry Ganache', 'Crisp Butter Shells'],
  },
  {
    id: 'grand-celebration-drip',
    name: 'Signature Chocolate Drip Celebration Cake',
    category: 'birthday',
    description: 'Decadent 3-layer chocolate fudge cake crowned with rich chocolate drip glaze, edible gold foil, and forest berry medley.',
    image: '/src/assets/images/hero_artisan_cake_1794384753259.jpg',
    basePrice: 650,
    weights: [
      { weight: '0.5 kg', price: 650, serves: '4–6 guests' },
      { weight: '1.0 kg', price: 1200, serves: '8–12 guests' },
      { weight: '2.0 kg', price: 2300, serves: '18–22 guests' },
      { weight: '3.0 kg', price: 3400, serves: '28–34 guests' },
    ],
    isEggless: true,
    popular: true,
    flavorNotes: ['Dark Chocolate Drip', 'Forest Berries', 'Gold Flakes'],
  },
];

export const DELIVERY_ZONES: DeliveryZone[] = [
  { name: 'Navde Village & Navde Colony', area: 'Navde 410208', deliveryTime: '20–35 mins', freeDeliveryMin: 499 },
  { name: 'New Panvel (East & West)', area: 'Panvel 410206', deliveryTime: '30–45 mins', freeDeliveryMin: 699 },
  { name: 'Old Panvel Town & Market', area: 'Panvel 410206', deliveryTime: '30–45 mins', freeDeliveryMin: 699 },
  { name: 'Kalamboli & Steel Market', area: 'Kalamboli 410218', deliveryTime: '25–40 mins', freeDeliveryMin: 599 },
  { name: 'Kamothe & Khandeshwar', area: 'Kamothe 410209', deliveryTime: '30–45 mins', freeDeliveryMin: 699 },
  { name: 'Taloja MIDC & Phase 1/2', area: 'Taloja 410208', deliveryTime: '25–40 mins', freeDeliveryMin: 599 },
];

export const FLAVOR_OPTIONS = [
  'Royal Belgian Dark Truffle',
  'Exotic Fresh Fruit Gateau',
  'Dutch Chocolate Fudge',
  'Classic Red Velvet Cream Cheese',
  'Butterscotch Caramel Crunch',
  'Royal Rasmalai Fusion',
  'Black Forest Classic Cherry',
  'Nutella Hazelnut Praline',
  'White Forest Strawberry',
];
