import { allServices, ServiceType, ServiceCity } from './servicesData';
import { tourDestinations, TourDestination, getTourBySlug } from './tourData';

export function normalizeSlug(text: string): string {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function generateServiceSlug(service: ServiceType, city: ServiceCity): string {
    // Custom logic to match user's preferences
    // User wants "force-urbania-in-jaipur" for Urbania
    // "jaipur-tour" for Rajasthan Tours

    if (service.id === 'force-urbania-tempo') {
        return `force-urbania-in-${normalizeSlug(city.slug)}`;
    }

    if (service.id === 'rajasthan-tours') {
        return `${normalizeSlug(city.slug)}-tour`;
    }

    if (service.id === 'mini-bus') {
        return `mini-bus-service-in-${normalizeSlug(city.slug)}`;
    }

    if (service.id === 'taxi') {
        return `taxi-service-in-${normalizeSlug(city.slug)}`;
    }

    if (service.id === 'tempo-traveller') {
        return `tempo-traveller-in-${normalizeSlug(city.slug)}`;
    }

    // Default fallback
    return `${normalizeSlug(service.name)}-in-${normalizeSlug(city.slug)}`;
}

export interface RouteData {
    type: 'service' | 'tour' | 'itinerary';
    data: { service: ServiceType; city: ServiceCity } | TourDestination;
}

export function getModelBySlug(slug: string): RouteData | null {
    // 1. Check for Service/City matches (ServicesData)
    for (const service of allServices) {
        for (const city of service.cities) {
            const generatedSlug = generateServiceSlug(service, city);

            if (generatedSlug === slug) {
                return {
                    type: 'service',
                    data: { service, city }
                };
            }
        }
    }

    // 2. Check for Tour Itineraries (TourData) - e.g. "delhi-to-manali"
    const tour = getTourBySlug(slug);
    if (tour) {
        return {
            type: 'itinerary',
            data: tour
        };
    }

    return null;
}

export function getAllSlugs(): string[] {
    const slugs: string[] = [];

    // Services
    for (const service of allServices) {
        for (const city of service.cities) {
            slugs.push(generateServiceSlug(service, city));
        }
    }

    // Tour Itineraries
    for (const tour of tourDestinations) {
        slugs.push(tour.slug);
    }

    return slugs;
}
