import { cityPricing } from "../cityPricing";

/**
 * Calculate city-specific price for a vehicle
 * @param basePrice - The base price per km from vehicle data
 * @param citySlug - The city slug (e.g., "jaipur", "udaipur")
 * @returns Calculated price for the city
 */
export function getCityPrice(basePrice: number, citySlug: string): number {
  const config = cityPricing[citySlug];
  
  if (!config) {
    // If city not found, return base price
    console.warn(`City pricing not found for: ${citySlug}, using base price`);
    return basePrice;
  }

  const calculatedPrice = Math.round(basePrice * config.multiplier);
  
  // Apply minimum price if set
  if (config.minPrice && calculatedPrice < config.minPrice) {
    return config.minPrice;
  }

  return calculatedPrice;
}

/**
 * Format price for display
 * @param pricePerKm - Price per kilometer
 * @returns Formatted price string like "Starting ₹18/km"
 */
export function formatPrice(pricePerKm: number): string {
  return `Starting ₹${pricePerKm}/km`;
}

/**
 * Get all vehicles with city-specific pricing
 * @param vehicles - Array of vehicles
 * @param citySlug - City slug
 * @returns Vehicles with updated pricing
 */
export function getVehiclesWithCityPricing<T extends { pricePerKm: number }>(
  vehicles: T[],
  citySlug: string
): (T & { cityPricePerKm: number; cityPrice: string })[] {
  return vehicles.map((vehicle) => ({
    ...vehicle,
    cityPricePerKm: getCityPrice(vehicle.pricePerKm, citySlug),
    cityPrice: formatPrice(getCityPrice(vehicle.pricePerKm, citySlug)),
  }));
}
