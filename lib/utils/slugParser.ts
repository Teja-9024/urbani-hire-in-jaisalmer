// Slug Parser - Extracts service and city information from URL slugs
// Supports multiple URL patterns for SEO-optimized flat URLs

import { getServiceBySlug, ALL_SERVICES, type ServiceConfig } from '../config/serviceConfig';
import { getCityConfig, type CityConfig } from '../config/cityConfig';
import { vehicles, type Vehicle } from '../vehicleData';

export interface ParsedSlug {
  service: ServiceConfig;
  city: CityConfig | null;
  vehicle?: Vehicle;
  type: 'service-city' | 'tour' | 'vehicle-only';
  isValid: boolean;
}

/**
 * Parse a URL slug and extract service and city information
 * Supported patterns:
 * - service-in-city (e.g., "mini-bus-service-in-jaipur")
 * - city-tour (e.g., "jaipur-tour")
 * - vehicle-in-city (e.g., "force-urbania-in-udaipur")
 * - vehicle-only (e.g., "9-seater", "crysta")
 */
export function parseSlug(slug: string): ParsedSlug | null {
  // Pattern 1: city-tour (e.g., "jaipur-tour")
  if (slug.endsWith('-tour')) {
    const city = slug.replace('-tour', '');
    const cityConfig = getCityConfig(city);
    const tourService = ALL_SERVICES.find(s => s.urlPattern === 'city-tour');
    
    if (cityConfig && tourService && tourService.supportedCities.includes(city)) {
      return {
        service: tourService,
        city: cityConfig,
        type: 'tour',
        isValid: true,
      };
    }
  }
  
  // Pattern 2: service-in-city or vehicle-in-city
  const inIndex = slug.lastIndexOf('-in-');
  if (inIndex !== -1) {
    const servicePart = slug.substring(0, inIndex);
    const cityPart = slug.substring(inIndex + 4); // Skip '-in-'
    
    const cityConfig = getCityConfig(cityPart);
    if (!cityConfig) return null;
    
    // Check which service matches this slug pattern
    for (const service of ALL_SERVICES) {
      if (service.slug === servicePart && service.supportedCities.includes(cityPart)) {
        return {
          service,
          city: cityConfig,
          type: 'service-city',
          isValid: true,
        };
      }
    }
  }
  
  // Pattern 3: vehicle-only (e.g., "9-seater", "crysta", "innova")
  const vehicle = vehicles.find(v => v.slug === slug);
  if (vehicle) {
    // Create a pseudo-service for vehicle pages
    const vehicleService: ServiceConfig = {
      id: 'vehicle-detail',
      name: vehicle.name,
      slug: vehicle.slug,
      displayName: vehicle.name,
      layoutType: 'vehicle',
      menuType: 'force-urbania', // Default menu type
      urlPattern: 'seater-vehicle',
      supportedCities: [],
      description: vehicle.description || `Premium ${vehicle.name} rental service`,
    };
    
    return {
      service: vehicleService,
      city: null,
      vehicle,
      type: 'vehicle-only',
      isValid: true,
    };
  }
  
  return null;
}

/**
 * Validate if a slug is valid and supported
 */
export function validateSlug(slug: string): boolean {
  const parsed = parseSlug(slug);
  return parsed !== null && parsed.isValid;
}

/**
 * Generate a slug from service ID and city slug
 */
export function generateSlug(serviceId: string, city: string): string | null {
  const service = ALL_SERVICES.find(s => s.id === serviceId);
  if (!service) return null;
  
  if (service.urlPattern === 'city-tour') {
    return `${city}-tour`;
  }
  
  if (service.urlPattern === 'service-in-city' || service.urlPattern === 'vehicle-in-city') {
    return `${service.slug}-in-${city}`;
  }
  
  return null;
}

/**
 * Get all possible slugs for sitemap generation
 */
export function generateAllSlugs(): string[] {
  const slugs: string[] = [];
  
  // Service-city combinations
  for (const service of ALL_SERVICES) {
    for (const city of service.supportedCities) {
      const slug = generateSlug(service.id, city);
      if (slug) slugs.push(slug);
    }
  }
  
  // Vehicle-only slugs
  for (const vehicle of vehicles) {
    slugs.push(vehicle.slug);
  }
  
  return slugs;
}

/**
 * Get slugs by service type
 */
export function getSlugsByService(serviceId: string): string[] {
  const service = ALL_SERVICES.find(s => s.id === serviceId);
  if (!service) return [];
  
  return service.supportedCities.map(city => generateSlug(serviceId, city)).filter(Boolean) as string[];
}

/**
 * Get slugs by city
 */
export function getSlugsByCity(citySlug: string): string[] {
  const slugs: string[] = [];
  
  for (const service of ALL_SERVICES) {
    if (service.supportedCities.includes(citySlug)) {
      const slug = generateSlug(service.id, citySlug);
      if (slug) slugs.push(slug);
    }
  }
  
  return slugs;
}

