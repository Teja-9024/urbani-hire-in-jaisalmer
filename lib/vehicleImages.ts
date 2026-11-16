/**
 * Vehicle Images Configuration
 * ============================
 * All vehicle images are stored in public/vehicles/{vehicle-slug}/
 * 
 * To update images:
 * 1. Add your images to the respective folder in public/vehicles/
 * 2. Update the image names in this file
 * 
 * Folder Structure:
 * public/
 *   vehicles/
 *     7-seater/
 *       main.webp
 *       interior-1.webp
 *       interior-2.webp
 *       exterior.webp
 *     9-seater/
 *       main.webp
 *       ...
 */

// Base path for all vehicle images
const VEHICLE_IMAGES_BASE = "/vehicles";

// Image configuration for each vehicle
export const vehicleImages = {
  "12-seater": {
    main: `${VEHICLE_IMAGES_BASE}/12-seater/main.jpeg`,
    gallery: [
      `${VEHICLE_IMAGES_BASE}/12-seater/main.jpeg`,
      `${VEHICLE_IMAGES_BASE}/12-seater/interior-1.jpeg`,
      `${VEHICLE_IMAGES_BASE}/12-seater/interior-2.jpeg`,
    ],
  },
  "15-seater": {
    main: `${VEHICLE_IMAGES_BASE}/15-seater/main.jpeg`,
    gallery: [
      `${VEHICLE_IMAGES_BASE}/15-seater/main.jpeg`,
      `${VEHICLE_IMAGES_BASE}/15-seater/interior-1.jpeg`,
      `${VEHICLE_IMAGES_BASE}/15-seater/interior-2.jpeg`,
    ],
  },
  "17-seater": {
    main: `${VEHICLE_IMAGES_BASE}/17-seater/main.jpeg`,
    gallery: [
      `${VEHICLE_IMAGES_BASE}/17-seater/main.jpeg`,
      `${VEHICLE_IMAGES_BASE}/17-seater/interior-1.jpeg`,
      `${VEHICLE_IMAGES_BASE}/17-seater/interior-2.jpeg`,
    ],
  },
   "25-seater": {
    main: `${VEHICLE_IMAGES_BASE}/25-seater/main.jpeg`,
    gallery: [
      `${VEHICLE_IMAGES_BASE}/25-seater/main.jpeg`,
      `${VEHICLE_IMAGES_BASE}/25-seater/interior-1.jpeg`,
      `${VEHICLE_IMAGES_BASE}/25-seater/interior-2.jpeg`,
    ],
  },
  "30-seater": {
    main: `${VEHICLE_IMAGES_BASE}/30-seater/main.jpeg`,
    gallery: [
      `${VEHICLE_IMAGES_BASE}/30-seater/main.jpeg`,
      `${VEHICLE_IMAGES_BASE}/30-seater/interior-1.jpeg`,
      `${VEHICLE_IMAGES_BASE}/30-seater/interior-2.jpeg`,
    ],
  },
  "35-seater": {
    main: `${VEHICLE_IMAGES_BASE}/35-seater/main.jpeg`,
    gallery: [
      `${VEHICLE_IMAGES_BASE}/35-seater/main.jpeg`,
      `${VEHICLE_IMAGES_BASE}/35-seater/interior-1.jpeg`,
      `${VEHICLE_IMAGES_BASE}/35-seater/interior-2.jpeg`,
    ],
  },
  "40-seater": {
    main: `${VEHICLE_IMAGES_BASE}/40-seater/main.jpeg`,
    gallery: [
      `${VEHICLE_IMAGES_BASE}/40-seater/main.jpeg`,
      `${VEHICLE_IMAGES_BASE}/40-seater/interior-1.jpeg`,
      `${VEHICLE_IMAGES_BASE}/40-seater/interior-2.jpeg`,
    ],
  },
  "45-seater": {
    main: `${VEHICLE_IMAGES_BASE}/45-seater/main.jpeg`,
    gallery: [
      `${VEHICLE_IMAGES_BASE}/45-seater/main.jpeg`,
      `${VEHICLE_IMAGES_BASE}/45-seater/interior-1.jpeg`,
      `${VEHICLE_IMAGES_BASE}/45-seater/interior-2.jpeg`,
    ],
  },
  "50-seater": {
    main: `${VEHICLE_IMAGES_BASE}/50-seater/main.jpeg`,
    gallery: [
      `${VEHICLE_IMAGES_BASE}/50-seater/main.jpeg`,
      `${VEHICLE_IMAGES_BASE}/50-seater/interior-1.jpeg`,
      `${VEHICLE_IMAGES_BASE}/50-seater/interior-2.jpeg`,
    ],
  }, 
  "innova": {
    main: `${VEHICLE_IMAGES_BASE}/innova/main.jpeg`,
    gallery: [
      `${VEHICLE_IMAGES_BASE}/innova/main.jpeg`,
      `${VEHICLE_IMAGES_BASE}/innova/interior-1.jpeg`,
      `${VEHICLE_IMAGES_BASE}/innova/interior-2.jpeg`,
    ],
  },
  "innova-crysta": {
    main: `${VEHICLE_IMAGES_BASE}/innova/main.jpeg`,
    gallery: [
      `${VEHICLE_IMAGES_BASE}/innova/main.jpeg`,
      `${VEHICLE_IMAGES_BASE}/innova/interior-1.jpeg`,
      `${VEHICLE_IMAGES_BASE}/innova/interior-2.jpeg`,
    ],
  },
};

// Helper function to get images by vehicle slug
export function getVehicleImages(slug: string) {
  return vehicleImages[slug as keyof typeof vehicleImages] || {
    main: `${VEHICLE_IMAGES_BASE}/default/main.jpeg`,
    gallery: [`${VEHICLE_IMAGES_BASE}/default/main.jpeg`],
  };
}

// Export type for vehicle image keys
export type VehicleSlug = keyof typeof vehicleImages;
