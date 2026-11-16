// Service Configuration System
// Defines all services, their URL patterns, and supported cities

export type LayoutType = 'service' | 'tour' | 'vehicle';
export type MenuType = 'bus-services' | 'rajasthan-tours' | 'force-urbania' | 'taxi-services' | 'tempo-traveller';
export type URLPattern = 'service-in-city' | 'city-tour' | 'vehicle-in-city' | 'seater-vehicle';

export interface ServiceConfig {
  id: string;
  name: string;
  slug: string; // Base slug for the service
  displayName: string;
  layoutType: LayoutType;
  menuType: MenuType;
  urlPattern: URLPattern;
  supportedCities: string[];
  description: string;
  icon?: string;
}

// Cities supported across all services
export const SUPPORTED_CITIES = [
  'jaipur',
  'udaipur',
  'jodhpur',
  'jaisalmer',
  'bikaner',
  'mount-abu',
  'ajmer',
  'pushkar',
  'delhi',
  'agra',
];

// Mini Bus Service Configuration
export const miniBusServiceConfig: ServiceConfig = {
  id: 'mini-bus',
  name: 'Mini Bus Service',
  slug: 'mini-bus-service',
  displayName: 'Mini Bus Service',
  layoutType: 'service',
  menuType: 'bus-services',
  urlPattern: 'service-in-city',
  supportedCities: SUPPORTED_CITIES,
  description: 'Comfortable and affordable mini bus rental services for group travel',
};

// Taxi Service Configuration
export const taxiServiceConfig: ServiceConfig = {
  id: 'taxi',
  name: 'Taxi Service',
  slug: 'taxi-service',
  displayName: 'Taxi Service',
  layoutType: 'service',
  menuType: 'taxi-services',
  urlPattern: 'service-in-city',
  supportedCities: SUPPORTED_CITIES,
  description: 'Reliable taxi services for comfortable city and outstation travel',
};

// Force Urbania Configuration
export const forceUrbaniaConfig: ServiceConfig = {
  id: 'force-urbania',
  name: 'Force Urbania',
  slug: 'force-urbania',
  displayName: 'Force Urbania',
  layoutType: 'vehicle',
  menuType: 'force-urbania',
  urlPattern: 'vehicle-in-city',
  supportedCities: SUPPORTED_CITIES,
  description: 'Premium Force Urbania rental for luxury group travel',
};

// Tempo Traveller Configuration
export const tempoTravellerConfig: ServiceConfig = {
  id: 'tempo-traveller',
  name: 'Tempo Traveller',
  slug: 'tempo-traveller',
  displayName: 'Tempo Traveller',
  layoutType: 'vehicle',
  menuType: 'tempo-traveller',
  urlPattern: 'vehicle-in-city',
  supportedCities: SUPPORTED_CITIES,
  description: 'Spacious tempo traveller on rent for group tours and travel',
};

// Rajasthan Tours Configuration
export const rajasthanToursConfig: ServiceConfig = {
  id: 'city-tour',
  name: 'City Tour',
  slug: 'tour',
  displayName: 'Rajasthan Tours',
  layoutType: 'tour',
  menuType: 'rajasthan-tours',
  urlPattern: 'city-tour',
  supportedCities: SUPPORTED_CITIES.filter(city => 
    ['jaipur', 'udaipur', 'jodhpur', 'jaisalmer', 'bikaner', 'mount-abu', 'ajmer', 'pushkar'].includes(city)
  ),
  description: 'Explore the rich heritage and culture with our guided city tours',
};

// All service configurations
export const ALL_SERVICES: ServiceConfig[] = [
  miniBusServiceConfig,
  taxiServiceConfig,
  forceUrbaniaConfig,
  tempoTravellerConfig,
  rajasthanToursConfig,
];

// Helper function to get service by slug pattern
export function getServiceBySlug(slug: string): ServiceConfig | null {
  // Check for service-in-city pattern
  for (const service of ALL_SERVICES) {
    if (service.urlPattern === 'service-in-city' || service.urlPattern === 'vehicle-in-city') {
      if (slug.startsWith(service.slug + '-in-')) {
        return service;
      }
    }
  }
  
  // Check for city-tour pattern
  if (slug.endsWith('-tour')) {
    return rajasthanToursConfig;
  }
  
  return null;
}

// Helper function to get service by ID
export function getServiceById(id: string): ServiceConfig | null {
  return ALL_SERVICES.find(s => s.id === id) || null;
}

// Generate URL for a service and city
export function generateServiceUrl(serviceId: string, city: string): string {
  const service = getServiceById(serviceId);
  if (!service) return '/';
  
  switch (service.urlPattern) {
    case 'service-in-city':
    case 'vehicle-in-city':
      return `/${service.slug}-in-${city}`;
    case 'city-tour':
      return `/${city}-tour`;
    default:
      return '/';
  }
}
