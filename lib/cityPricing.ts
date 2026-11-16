// City-wise pricing configuration for vehicles
// This centralizes all pricing so it's easy to update

export interface CityPricingConfig {
  multiplier: number;  // Price multiplier compared to base price
  minPrice?: number;   // Optional minimum price override
}

export const cityPricing: Record<string, CityPricingConfig> = {
  jaipur: {
    multiplier: 1.0,  // Base price (reference city)
  },
  udaipur: {
    multiplier: 1.15,  // 15% higher than Jaipur
  },
  "mount-abu": {
    multiplier: 1.25,  // 25% higher (hill station premium)
  },
  jodhpur: {
    multiplier: 1.1,   // 10% higher
  },
  jaisalmer: {
    multiplier: 1.3,   // 30% higher (desert location, longer distances)
  },
  bikaner: {
    multiplier: 1.12,  // 12% higher
  },
  delhi: {
    multiplier: 1.2,   // 20% higher (metro premium)
  },
  agra: {
    multiplier: 1.15,  // 15% higher
  },
  pushkar: {
    multiplier: 1.05,  // 5% higher
  },
  "force-urbania": {
    multiplier: 1.0,   // Same as base
  },
};

// Get city display name from slug
export const cityDisplayNames: Record<string, string> = {
  jaipur: "Jaipur",
  udaipur: "Udaipur",
  "mount-abu": "Mount Abu",
  jodhpur: "Jodhpur",
  jaisalmer: "Jaisalmer",
  bikaner: "Bikaner",
  delhi: "Delhi NCR",
  agra: "Agra",
  pushkar: "Pushkar",
  "force-urbania": "Force Urbania",
};
