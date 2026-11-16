/**
 * City-wise Data Configuration
 * ============================
 * All city data including pricing is managed here.
 * Update pricing or city info in one place.
 */

export interface CityPricing {
  vehicle: string;
  seating: string;
  perDay: string;
  perKm: string;
  driverCharge: string;
}

export interface CityData {
  id: string; // Acts as the slug for routing
  name: string;
  description: string;
  tagline: string;
  image: string;
  popular: boolean;
  highlights: string[];
  famousFor: string;
  pricing: CityPricing[];
  // SEO Fields
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

// Base pricing - you can modify per city
const basePricing: CityPricing[] = [
  { vehicle: "12 Seater Urbania", seating: "12+1", perDay: "8,000", perKm: "22", driverCharge: "500" },
  { vehicle: "15 Seater Urbania", seating: "15+1", perDay: "9,000", perKm: "24", driverCharge: "500" },
  { vehicle: "17 Seater Urbania", seating: "17+1", perDay: "10,000", perKm: "26", driverCharge: "500" },
];

// City-specific data with images and pricing
export const citiesData: CityData[] = [
  {
    id: "delhi",
    name: "Delhi NCR",
    description: "Premium Force Urbania and luxury van rental services in Delhi NCR. Perfect for corporate events, weddings, and tours to Agra, Jaipur, and Manali.",
    tagline: "The Heart of India",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    popular: true,
    highlights: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple"],
    famousFor: "Historical monuments, vibrant markets, and rich cultural heritage",
    pricing: basePricing,
    metaTitle: 'Force Urbania Rental Delhi NCR | 12 15 17 Seater Hire | Urbania Hire India',
    metaDescription: 'Book Force Urbania in Delhi NCR - 12, 15, 17 seater luxury van rental starting ₹8000/day. Best rates for Manali, Shimla, Agra tours. Professional drivers. Online booking.',
    keywords: [
      'force urbania rental delhi',
      'urbania hire delhi ncr',
      '12 seater urbania delhi',
      '15 seater urbania rent delhi',
      '17 seater force urbania delhi',
      'tempo traveller hire delhi',
      'luxury van rental delhi',
      'force urbania on rent in delhi',
      'urbania booking delhi online',
      'delhi to manali urbania',
      'delhi to shimla force urbania',
      'urbania for wedding delhi',
      'corporate travel urbania delhi',
      'airport transfer urbania delhi',
      'outstation urbania rental delhi',
      'force urbania price delhi',
      'urbania hire near me delhi',
      'innova crysta rental delhi',
      'tempo traveller 12 seater delhi',
      'luxury bus on rent delhi'
    ]
  },
  {
    id: "jaipur",
    name: "Jaipur",
    description: "Experience the Pink City in comfort with our luxury Force Urbania and Crysta rentals. Ideal for Rajasthan tours and detailed sightseeing.",
    tagline: "Royal Rajasthan's Crown Jewel",
    image: "/images/destinations/jaipur.jpg",
    popular: true,
    highlights: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar"],
    famousFor: "Majestic forts, palaces, and traditional Rajasthani culture",
    pricing: [
      { vehicle: "12 Seater Urbania", seating: "12+1", perDay: "7,500", perKm: "20", driverCharge: "500" },
      { vehicle: "15 Seater Urbania", seating: "15+1", perDay: "8,500", perKm: "22", driverCharge: "500" },
      { vehicle: "17 Seater Urbania", seating: "17+1", perDay: "9,500", perKm: "24", driverCharge: "500" },
    ],
    metaTitle: 'Force Urbania Rental Jaipur | 12 15 17 Seater Pink City Tour | Urbania Hire India',
    metaDescription: 'Rent Force Urbania in Jaipur from ₹7500/day - 12, 15, 17 seater for Rajasthan tours. Hawa Mahal, Amber Fort sightseeing. Best rates, professional drivers.',
    keywords: [
      'force urbania rental jaipur',
      'urbania hire jaipur',
      '12 seater urbania jaipur',
      '15 seater force urbania jaipur',
      '17 seater urbania rent jaipur',
      'tempo traveller jaipur',
      'jaipur sightseeing urbania',
      'pink city tour urbania',
      'jaipur to udaipur urbania',
      'jaipur to jodhpur force urbania',
      'rajasthan tour urbania jaipur',
      'amber fort tour vehicle',
      'hawa mahal visit urbania',
      'jaipur wedding car rental',
      'luxury van hire jaipur',
      'force urbania booking jaipur',
      'tempo traveller 15 seater jaipur',
      'jaipur local sightseeing bus',
      'rajasthan heritage tour urbania',
      'innova crysta jaipur'
    ]
  },
  {
    id: "udaipur",
    name: "Udaipur",
    description: "Luxury tempo traveller and car rental in Udaipur. Perfect for romantic tours, wedding travel, and exploring the City of Lakes.",
    tagline: "Venice of the East",
    image: "/images/destinations/udaipur-city-palace.jpg",
    popular: true,
    highlights: ["Lake Pichola", "City Palace", "Jag Mandir", "Fateh Sagar"],
    famousFor: "Romantic lakes, royal palaces, and scenic beauty",
    pricing: [
      { vehicle: "12 Seater Urbania", seating: "12+1", perDay: "8,000", perKm: "21", driverCharge: "500" },
      { vehicle: "15 Seater Urbania", seating: "15+1", perDay: "9,000", perKm: "23", driverCharge: "500" },
      { vehicle: "17 Seater Urbania", seating: "17+1", perDay: "10,000", perKm: "25", driverCharge: "500" },
    ],
    metaTitle: 'Force Urbania Rental Udaipur | City of Lakes Tour | Wedding Transport',
    metaDescription: 'Rent Force Urbania in Udaipur from ₹8000/day. 12, 15, 17 seater for Lake Pichola, City Palace tours. Perfect for weddings, romantic getaways. Book now.',
    keywords: [
      'force urbania rental udaipur',
      'urbania hire udaipur',
      '12 seater urbania udaipur',
      '15 seater force urbania udaipur',
      '17 seater urbania rent udaipur',
      'tempo traveller udaipur',
      'city of lakes tour vehicle',
      'lake pichola tour urbania',
      'udaipur city palace visit',
      'udaipur to mount abu urbania',
      'udaipur wedding car rental',
      'luxury van hire udaipur',
      'udaipur sightseeing bus',
      'romantic tour urbania udaipur',
      'udaipur local tour vehicle',
      'force urbania booking udaipur',
      'udaipur to jaipur urbania',
      'venice of east tour bus',
      'innova crysta udaipur',
      'tempo traveller 12 seater udaipur'
    ]
  },
  {
    id: "jodhpur",
    name: "Jodhpur",
    description: "Book Force Urbania, Toyota Crysta, and luxury tempo travellers in Jodhpur. Best rates for local sightseeing, outstation trips to Jaisalmer, Udaipur, and weddings.",
    tagline: "Gateway to Thar Desert",
    image: "/images/destinations/mehrangarh-fort.jpg",
    popular: true,
    highlights: ["Mehrangarh Fort", "Umaid Bhawan", "Jaswant Thada", "Clock Tower"],
    famousFor: "Blue painted houses, mighty forts, and desert landscapes",
    pricing: [
      { vehicle: "12 Seater Urbania", seating: "12+1", perDay: "7,500", perKm: "20", driverCharge: "500" },
      { vehicle: "15 Seater Urbania", seating: "15+1", perDay: "8,500", perKm: "22", driverCharge: "500" },
      { vehicle: "17 Seater Urbania", seating: "17+1", perDay: "9,500", perKm: "24", driverCharge: "500" },
    ],
    metaTitle: 'Force Urbania Rental Jodhpur | Blue City Tour | Mehrangarh Fort Visit',
    metaDescription: 'Book Force Urbania in Jodhpur from ₹7500/day. 12, 15, 17 seater for Mehrangarh Fort, Blue City tours, Jaisalmer trips. Best rates, AC vehicles.',
    keywords: [
      'force urbania rental jodhpur',
      'urbania hire jodhpur',
      '12 seater urbania jodhpur',
      '15 seater force urbania jodhpur',
      '17 seater urbania rent jodhpur',
      'tempo traveller jodhpur',
      'blue city tour vehicle',
      'mehrangarh fort tour urbania',
      'jodhpur to jaisalmer urbania',
      'jodhpur to udaipur force urbania',
      'jodhpur sightseeing bus',
      'umaid bhawan tour vehicle',
      'jodhpur desert tour urbania',
      'luxury van hire jodhpur',
      'force urbania booking jodhpur',
      'jodhpur wedding car rental',
      'tempo traveller 15 seater jodhpur',
      'innova crysta jodhpur',
      'jodhpur local sightseeing',
      'clock tower tour vehicle'
    ]
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    description: "Rent luxury vehicles in Jaisalmer for desert safari, fort tours, and outstation travel. Best prices for Force Urbania and tempo travellers.",
    tagline: "The Desert Wonder",
    image: "/images/destinations/jaisalmer-fort.jpg",
    popular: true,
    highlights: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli", "Desert Safari"],
    famousFor: "Golden sandstone architecture and Thar desert experiences",
    pricing: [
      { vehicle: "12 Seater Urbania", seating: "12+1", perDay: "8,000", perKm: "21", driverCharge: "500" },
      { vehicle: "15 Seater Urbania", seating: "15+1", perDay: "9,000", perKm: "23", driverCharge: "500" },
      { vehicle: "17 Seater Urbania", seating: "17+1", perDay: "10,000", perKm: "25", driverCharge: "500" },
    ],
    metaTitle: 'Force Urbania Rental Jaisalmer | Golden City | Sam Sand Dunes Safari',
    metaDescription: 'Rent Force Urbania in Jaisalmer from ₹8000/day. 12, 15, 17 seater for Sam Sand Dunes safari, Golden Fort tours. Desert trip specialist. Book online.',
    keywords: [
      'force urbania rental jaisalmer',
      'urbania hire jaisalmer',
      '12 seater urbania jaisalmer',
      '15 seater force urbania jaisalmer',
      '17 seater urbania rent jaisalmer',
      'tempo traveller jaisalmer',
      'sam sand dunes tour vehicle',
      'jaisalmer fort visit urbania',
      'golden city tour bus',
      'desert safari urbania jaisalmer',
      'jaisalmer to jodhpur urbania',
      'thar desert tour vehicle',
      'patwon ki haveli tour',
      'jaisalmer wedding car rental',
      'luxury van hire jaisalmer',
      'force urbania booking jaisalmer',
      'jaisalmer sightseeing bus',
      'desert tour package vehicle',
      'camel safari tour transport',
      'innova crysta jaisalmer'
    ]
  },
  {
    id: "agra",
    name: "Agra",
    description: "Premium Force Urbania rental in Agra for Taj Mahal tours, Agra Fort visits, and Delhi-Agra day trips. Luxury 12, 15, 17 seater vans with professional drivers.",
    tagline: "Home of Eternal Love",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    popular: false,
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"],
    famousFor: "Iconic Taj Mahal and Mughal architecture",
    pricing: basePricing,
    metaTitle: 'Force Urbania Rental Agra | Taj Mahal Tour | Delhi Agra Day Trip',
    metaDescription: 'Book Force Urbania in Agra from ₹8000/day. 12, 15, 17 seater for Taj Mahal, Agra Fort tours. Perfect for Delhi-Agra same day trips. Online booking.',
    keywords: [
      'force urbania rental agra',
      'urbania hire agra',
      'taj mahal tour vehicle',
      'agra fort visit urbania',
      'delhi to agra urbania',
      'same day agra tour bus',
      '12 seater urbania agra',
      '15 seater force urbania agra',
      'fatehpur sikri tour vehicle',
      'agra sightseeing bus',
      'tempo traveller agra',
      'taj mahal sunrise tour urbania',
      'luxury van hire agra',
      'agra day trip vehicle',
      'mughal heritage tour bus'
    ]
  },
  {
    id: "pushkar",
    name: "Pushkar",
    description: "Rent Force Urbania in Pushkar for sacred temple visits, Camel Fair, and Ajmer Sharif tours. Premium 12, 15, 17 seater tempo travellers for pilgrimage groups.",
    tagline: "Sacred Pilgrimage Destination",
    image: "/images/destinations/pushkar.jpg",
    popular: false,
    highlights: ["Brahma Temple", "Pushkar Lake", "Savitri Temple", "Camel Fair"],
    famousFor: "Only Brahma temple in world and sacred lake",
    pricing: [
      { vehicle: "12 Seater Urbania", seating: "12+1", perDay: "7,000", perKm: "19", driverCharge: "500" },
      { vehicle: "15 Seater Urbania", seating: "15+1", perDay: "8,000", perKm: "21", driverCharge: "500" },
      { vehicle: "17 Seater Urbania", seating: "17+1", perDay: "9,000", perKm: "23", driverCharge: "500" },
    ],
    metaTitle: 'Force Urbania Rental Pushkar | Brahma Temple | Camel Fair Transport',
    metaDescription: 'Book Force Urbania in Pushkar from ₹7000/day. 12, 15, 17 seater for Brahma Temple, Pushkar Lake visits, Camel Fair. Pilgrimage trip specialist.',
    keywords: [
      'force urbania rental pushkar',
      'urbania hire pushkar',
      'brahma temple tour vehicle',
      'pushkar lake visit urbania',
      'pushkar camel fair transport',
      'ajmer pushkar tour bus',
      '12 seater urbania pushkar',
      '15 seater force urbania pushkar',
      'pilgrimage tour vehicle pushkar',
      'tempo traveller pushkar',
      'pushkar to jaipur urbania',
      'savitri temple tour',
      'luxury van hire pushkar'
    ]
  },
  {
    id: "mount-abu",
    name: "Mount Abu",
    description: "Book Force Urbania in Mount Abu for Dilwara Temples, Nakki Lake, and hill station tours. Luxury 12, 15, 17 seater for Rajasthan's only hill station.",
    tagline: "Oasis in the Desert",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    popular: false,
    highlights: ["Dilwara Temples", "Nakki Lake", "Guru Shikhar", "Sunset Point"],
    famousFor: "Cool climate, marble temples, and scenic viewpoints",
    pricing: [
      { vehicle: "12 Seater Urbania", seating: "12+1", perDay: "7,500", perKm: "20", driverCharge: "500" },
      { vehicle: "15 Seater Urbania", seating: "15+1", perDay: "8,500", perKm: "22", driverCharge: "500" },
      { vehicle: "17 Seater Urbania", seating: "17+1", perDay: "9,500", perKm: "24", driverCharge: "500" },
    ],
    metaTitle: 'Force Urbania Rental Mount Abu | Hill Station Tour | Dilwara Temples',
    metaDescription: 'Rent Force Urbania in Mount Abu from ₹7500/day. 12, 15, 17 seater for Dilwara Temples, Nakki Lake, Guru Shikhar tours. Rajasthan hill station specialist.',
    keywords: [
      'force urbania rental mount abu',
      'urbania hire mount abu',
      'dilwara temples tour vehicle',
      'nakki lake visit urbania',
      'guru shikhar tour bus',
      'mount abu hill station vehicle',
      '12 seater urbania mount abu',
      '15 seater force urbania mount abu',
      'rajasthan hill station tour',
      'tempo traveller mount abu',
      'udaipur to mount abu urbania',
      'sunset point tour vehicle',
      'luxury van hire mount abu',
      'mount abu sightseeing bus'
    ]
  },
  {
    id: "bikaner",
    name: "Bikaner",
    description: "Premium Force Urbania rental in Bikaner for Junagarh Fort tours, camel safari, desert city exploration, and outstation trips across Rajasthan.",
    tagline: "Camel Country of Rajasthan",
    image: "/images/destinations/junagarh-fort.jpg",
    popular: true,
    highlights: ["Junagarh Fort", "Karni Mata Temple", "Lalgarh Palace", "Camel Festival"],
    famousFor: "Junagarh Fort, Karni Mata Temple, and camel breeding traditions",
    pricing: [
      { vehicle: "12 Seater Urbania", seating: "12+1", perDay: "7,000", perKm: "19", driverCharge: "500" },
      { vehicle: "15 Seater Urbania", seating: "15+1", perDay: "8,000", perKm: "21", driverCharge: "500" },
      { vehicle: "17 Seater Urbania", seating: "17+1", perDay: "9,000", perKm: "23", driverCharge: "500" },
    ],
    metaTitle: 'Force Urbania Rental Bikaner | Junagarh Fort Tour | Camel Safari',
    metaDescription: 'Book Force Urbania in Bikaner from ₹7000/day. 12, 15, 17 seater for Junagarh Fort, Karni Mata Temple, camel safari. Desert city specialist. Book online.',
    keywords: [
      'force urbania rental bikaner',
      'urbania hire bikaner',
      'junagarh fort tour vehicle',
      'karni mata temple visit urbania',
      'bikaner camel safari transport',
      'lalgarh palace tour bus',
      '12 seater urbania bikaner',
      '15 seater force urbania bikaner',
      '17 seater urbania rent bikaner',
      'tempo traveller bikaner',
      'bikaner to jaisalmer urbania',
      'bikaner to jaipur force urbania',
      'desert city tour vehicle',
      'bikaner sightseeing bus',
      'luxury van hire bikaner',
      'force urbania booking bikaner',
      'bikaner wedding car rental',
      'camel festival transport bikaner'
    ]
  },
];

// Helper function to get city by ID (acts as Slug)
export function getCityById(id: string): CityData | undefined {
  return citiesData.find((city) => city.id === id);
}

// Helper alias for dynamic route compatibility
export function getCityBySlug(slug: string): CityData | undefined {
  return getCityById(slug);
}

export function getPopularCities(): CityData[] {
  return citiesData.filter((city) => city.popular);
}

export function getAllCitySlugs(): string[] {
  return citiesData.map(city => city.id);
}
