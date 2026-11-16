// City-wise hero images configuration
// Images are stored in public/cities/[city-slug]/
// To update: just replace image files in respective city folder

export const cityImages: Record<string, string[]> = {
  jaipur: [
    '/cities/jaipur/1.jpg',
    '/cities/jaipur/2.jpg',
    '/cities/jaipur/3.jpg',
  ],
  udaipur: [
    '/cities/udaipur/1.jpg',
    '/cities/udaipur/2.jpg',
    '/cities/udaipur/3.jpg',
  ],
  'mount-abu': [
    '/cities/mount-abu/1.jpg',
    '/cities/mount-abu/2.jpg',
    '/cities/mount-abu/3.jpg',
  ],
  jodhpur: [
    '/cities/jodhpur/1.jpg',
    '/cities/jodhpur/2.jpg',
    '/cities/jodhpur/3.jpg',
  ],
  jaisalmer: [
    '/cities/jaisalmer/1.jpg',
    '/cities/jaisalmer/2.jpg',
    '/cities/jaisalmer/3.jpg',
  ],
  bikaner: [
    '/cities/bikaner/1.jpg',
    '/cities/bikaner/2.jpg',
    '/cities/bikaner/3.jpg',
  ],
};

/**
 * Get hero images for a specific city
 * @param citySlug - City slug (e.g., 'jaipur', 'udaipur')
 * @returns Array of image paths
 */
export function getCityImages(citySlug: string): string[] {
  return cityImages[citySlug] || ['/default-hero.jpg'];
}

/**
 * Check if city has custom images
 * @param citySlug - City slug
 * @returns true if city has custom images
 */
export function hasCityImages(citySlug: string): boolean {
  return citySlug in cityImages;
}
