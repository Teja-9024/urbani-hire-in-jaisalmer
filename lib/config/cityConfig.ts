// City Configuration System
// Contains city data, images, and metadata for all cities

export interface CityConfig {
  name: string;
  slug: string;
  state: string;
  displayName: string;
  images: {
    miniBus?: string;
    taxi?: string;
    tempo?: string;
    urbania?: string;
    tour?: string;
    hero?: string;
  };
  attractions: string[];
  description: string;
  metaDescription?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// City configurations
export const cityConfigs: Record<string, CityConfig> = {
  jaipur: {
    name: 'Jaipur',
    slug: 'jaipur',
    state: 'Rajasthan',
    displayName: 'Jaipur - The Pink City',
    images: {
      hero: '/images/cities/jaipur-hero.jpg',
      miniBus: '/images/services/mini-bus-jaipur.jpg',
      taxi: '/images/services/taxi-jaipur.jpg',
      tempo: '/images/services/tempo-jaipur.jpg',
      urbania: '/images/services/urbania-jaipur.jpg',
      tour: '/images/tours/jaipur-tour.jpg',
    },
    attractions: [
      'Amber Fort',
      'City Palace',
      'Hawa Mahal',
      'Jantar Mantar',
      'Jal Mahal',
      'Nahargarh Fort',
    ],
    description: 'Jaipur, the Pink City of India, is known for its rich history, magnificent forts, and vibrant culture. Experience royal heritage with our premium travel services.',
    metaDescription: 'Book affordable and reliable travel services in Jaipur. Mini bus, taxi, tempo traveller, and Force Urbania rental for Jaipur tours and outstation trips.',
    coordinates: { lat: 26.9124, lng: 75.7873 },
  },
  
  udaipur: {
    name: 'Udaipur',
    slug: 'udaipur',
    state: 'Rajasthan',
    displayName: 'Udaipur - The City of Lakes',
    images: {
      hero: '/images/cities/udaipur-hero.jpg',
      miniBus: '/images/services/mini-bus-udaipur.jpg',
      taxi: '/images/services/taxi-udaipur.jpg',
      tempo: '/images/services/tempo-udaipur.jpg',
      urbania: '/images/services/urbania-udaipur.jpg',
      tour: '/images/tours/udaipur-tour.jpg',
    },
    attractions: [
      'City Palace',
      'Lake Pichola',
      'Jag Mandir',
      'Fateh Sagar Lake',
      'Sajjangarh Palace',
      'Jagdish Temple',
    ],
    description: 'Udaipur, the Venice of the East, captivates visitors with its serene lakes, stunning palaces, and romantic ambiance. Explore this beautiful city with our comfortable travel options.',
    metaDescription: 'Hire mini bus, taxi, tempo traveller, and Force Urbania in Udaipur for city tours and sightseeing. Best rates and 24/7 service.',
    coordinates: { lat: 24.5854, lng: 73.7125 },
  },
  
  jodhpur: {
    name: 'Jodhpur',
    slug: 'jodhpur',
    state: 'Rajasthan',
    displayName: 'Jodhpur - The Blue City',
    images: {
      hero: '/images/cities/jodhpur-hero.jpg',
      miniBus: '/images/services/mini-bus-jodhpur.jpg',
      taxi: '/images/services/taxi-jodhpur.jpg',
      tempo: '/images/services/tempo-jodhpur.jpg',
      urbania: '/images/services/urbania-jodhpur.jpg',
      tour: '/images/tours/jodhpur-tour.jpg',
    },
    attractions: [
      'Mehrangarh Fort',
      'Umaid Bhawan Palace',
      'Jaswant Thada',
      'Clock Tower',
      'Mandore Gardens',
      'Rao Jodha Desert Park',
    ],
    description: 'Jodhpur, the Blue City, stands tall with its magnificent fort and blue-painted houses. Discover the charm of this desert city with our reliable transport services.',
    metaDescription: 'Book mini bus, taxi, and tempo traveller in Jodhpur for local and outstation travel. Comfortable vehicles at competitive prices.',
    coordinates: { lat: 26.2389, lng: 73.0243 },
  },
  
  jaisalmer: {
    name: 'Jaisalmer',
    slug: 'jaisalmer',
    state: 'Rajasthan',
    displayName: 'Jaisalmer - The Golden City',
    images: {
      hero: '/images/cities/jaisalmer-hero.jpg',
      miniBus: '/images/services/mini-bus-jaisalmer.jpg',
      taxi: '/images/services/taxi-jaisalmer.jpg',
      tempo: '/images/services/tempo-jaisalmer.jpg',
      urbania: '/images/services/urbania-jaisalmer.jpg',
      tour: '/images/tours/jaisalmer-tour.jpg',
    },
    attractions: [
      'Jaisalmer Fort',
      'Patwon Ki Haveli',
      'Sam Sand Dunes',
      'Gadisar Lake',
      'Bada Bagh',
      'Desert Safari',
    ],
    description: 'Jaisalmer, the Golden City, rises from the Thar Desert with its golden sandstone architecture. Experience desert adventures with our premium vehicle rental services.',
    metaDescription: 'Rent mini bus, taxi, or tempo traveller in Jaisalmer for desert tours and city sightseeing. Affordable rates with professional drivers.',
    coordinates: { lat: 26.9157, lng: 70.9083 },
  },
  
  bikaner: {
    name: 'Bikaner',
    slug: 'bikaner',
    state: 'Rajasthan',
    displayName: 'Bikaner - The Camel City',
    images: {
      hero: '/images/cities/bikaner-hero.jpg',
      miniBus: '/images/services/mini-bus-bikaner.jpg',
      taxi: '/images/services/taxi-bikaner.jpg',
      tempo: '/images/services/tempo-bikaner.jpg',
      urbania: '/images/services/urbania-bikaner.jpg',
      tour: '/images/tours/bikaner-tour.jpg',
    },
    attractions: [
      'Junagarh Fort',
      'Karni Mata Temple',
      'Lalgarh Palace',
      'Camel Breeding Farm',
      'Gajner Palace',
      'Rampuria Havelis',
    ],
    description: 'Bikaner, known for its majestic forts and camel safaris, offers a unique desert experience. Travel comfortably with our well-maintained vehicles.',
    metaDescription: 'Book mini bus and taxi services in Bikaner for temple visits and fort tours. Reliable transportation at best prices.',
    coordinates: { lat: 28.0229, lng: 73.3119 },
  },
  
  'mount-abu': {
    name: 'Mount Abu',
    slug: 'mount-abu',
    state: 'Rajasthan',
    displayName: 'Mount Abu - Hill Station of Rajasthan',
    images: {
      hero: '/images/cities/mount-abu-hero.jpg',
      miniBus: '/images/services/mini-bus-mount-abu.jpg',
      taxi: '/images/services/taxi-mount-abu.jpg',
      tempo: '/images/services/tempo-mount-abu.jpg',
      urbania: '/images/services/urbania-mount-abu.jpg',
      tour: '/images/tours/mount-abu-tour.jpg',
    },
    attractions: [
      'Dilwara Temples',
      'Nakki Lake',
      'Guru Shikhar',
      'Sunset Point',
      'Toad Rock',
      'Achalgarh Fort',
    ],
    description: 'Mount Abu, Rajasthan\'s only hill station, offers a cool retreat with scenic beauty and ancient temples. Enjoy hassle-free travel with our transport services.',
    metaDescription: 'Hire taxi, mini bus, or tempo traveller in Mount Abu for sightseeing. Comfortable vehicles for hill station tours.',
    coordinates: { lat: 24.5926, lng: 72.7156 },
  },
  
  ajmer: {
    name: 'Ajmer',
    slug: 'ajmer',
    state: 'Rajasthan',
    displayName: 'Ajmer - City of Devotion',
    images: {
      hero: '/images/cities/ajmer-hero.jpg',
      miniBus: '/images/services/mini-bus-ajmer.jpg',
      taxi: '/images/services/taxi-ajmer.jpg',
      tempo: '/images/services/tempo-ajmer.jpg',
      urbania: '/images/services/urbania-ajmer.jpg',
      tour: '/images/tours/ajmer-tour.jpg',
    },
    attractions: [
      'Ajmer Sharif Dargah',
      'Ana Sagar Lake',
      'Pushkar',
      'Taragarh Fort',
      'Adhai Din Ka Jhonpra',
      'Nareli Jain Temple',
    ],
    description: 'Ajmer, a spiritual hub famous for the Ajmer Sharif Dargah, attracts pilgrims from across the world. Experience comfortable pilgrimage travel with our services.',
    metaDescription: 'Book taxi and mini bus in Ajmer for Dargah visit and Pushkar tour. Affordable and reliable transportation services.',
    coordinates: { lat: 26.4499, lng: 74.6399 },
  },
  
  pushkar: {
    name: 'Pushkar',
    slug: 'pushkar',
    state: 'Rajasthan',
    displayName: 'Pushkar - Sacred Lake City',
    images: {
      hero: '/images/cities/pushkar-hero.jpg',
      miniBus: '/images/services/mini-bus-pushkar.jpg',
      taxi: '/images/services/taxi-pushkar.jpg',
      tempo: '/images/services/tempo-pushkar.jpg',
      urbania: '/images/services/urbania-pushkar.jpg',
      tour: '/images/tours/pushkar-tour.jpg',
    },
    attractions: [
      'Pushkar Lake',
      'Brahma Temple',
      'Savitri Temple',
      'Pushkar Camel Fair',
      'Rangji Temple',
      'Pushkar Bazaar',
    ],
    description: 'Pushkar, a sacred town with the only Brahma Temple, offers spiritual serenity and cultural vibrancy. Travel comfortably with our vehicle rental options.',
    metaDescription: 'Hire taxi and mini bus in Pushkar for temple visits and fair tours. Comfortable travel services in the holy city.',
    coordinates: { lat: 26.4899, lng: 74.5511 },
  },
  
  delhi: {
    name: 'Delhi',
    slug: 'delhi',
    state: 'Delhi',
    displayName: 'Delhi - The Capital City',
    images: {
      hero: '/images/cities/delhi-hero.jpg',
      miniBus: '/images/services/mini-bus-delhi.jpg',
      taxi: '/images/services/taxi-delhi.jpg',
      tempo: '/images/services/tempo-delhi.jpg',
      urbania: '/images/services/urbania-delhi.jpg',
      tour: '/images/tours/delhi-tour.jpg',
    },
    attractions: [
      'India Gate',
      'Red Fort',
      'Qutub Minar',
      'Lotus Temple',
      'Akshardham',
      'Humayun\'s Tomb',
    ],
    description: 'Delhi, India\'s capital, blends ancient history with modern infrastructure. Explore the city\'s rich heritage with our premium transport services.',
    metaDescription: 'Book mini bus, taxi, and tempo traveller in Delhi for city tours and outstation trips. Best vehicle rental services in NCR.',
    coordinates: { lat: 28.7041, lng: 77.1025 },
  },
  
  agra: {
    name: 'Agra',
    slug: 'agra',
    state: 'Uttar Pradesh',
    displayName: 'Agra - City of the Taj Mahal',
    images: {
      hero: '/images/cities/agra-hero.jpg',
      miniBus: '/images/services/mini-bus-agra.jpg',
      taxi: '/images/services/taxi-agra.jpg',
      tempo: '/images/services/tempo-agra.jpg',
      urbania: '/images/services/urbania-agra.jpg',
      tour: '/images/tours/agra-tour.jpg',
    },
    attractions: [
      'Taj Mahal',
      'Agra Fort',
      'Fatehpur Sikri',
      'Mehtab Bagh',
      'Itimad-ud-Daulah',
      'Akbar\'s Tomb',
    ],
    description: 'Agra, home to the iconic Taj Mahal, showcases Mughal architectural brilliance. Visit this wonder of the world with our comfortable travel solutions.',
    metaDescription: 'Hire taxi and mini bus in Agra for Taj Mahal tours and sightseeing. Affordable vehicle rental with professional drivers.',
    coordinates: { lat: 27.1767, lng: 78.0081 },
  },
};

// Helper function to get city config
export function getCityConfig(slug: string): CityConfig | null {
  return cityConfigs[slug] || null;
}

// Get all city slugs
export function getAllCitySlugs(): string[] {
  return Object.keys(cityConfigs);
}

// Get cities for a specific state
export function getCitiesByState(state: string): CityConfig[] {
  return Object.values(cityConfigs).filter(city => city.state === state);
}
