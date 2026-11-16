// Menu Configuration System
// Defines the navigation structure for each service type

import { type MenuType } from './serviceConfig';
import { getAllCitySlugs } from './cityConfig';

export interface SubMenuItem {
  label: string;
  citySlug: string;
  urlGenerator: (city: string) => string;
}

export interface MenuItem {
  id: string;
  label: string;
  menuType: MenuType;
  basePath?: string;
  subMenus: SubMenuItem[];
}

// Helper function generate URLs for each service type
const generateServiceUrl = (serviceSlug: string) => (city: string) => `/${serviceSlug}-in-${city}`;
const generateTourUrl = (city: string) => `/${city}-tour`;

// Bus Services Menu
export const busServicesMenu: MenuItem = {
  id: 'bus-services',
  label: 'Bus Services',
  menuType: 'bus-services',
  subMenus: getAllCitySlugs().map(city => ({
    label: `Mini Bus Service in ${city.charAt(0).toUpperCase() + city.slice(1).replace('-', ' ')}`,
    citySlug: city,
    urlGenerator: generateServiceUrl('mini-bus-service'),
  })),
};

// Rajasthan Tours Menu
const tourCities = ['jaipur', 'udaipur', 'jodhpur', 'jaisalmer', 'bikaner', 'mount-abu', 'ajmer', 'pushkar'];
export const rajasthanToursMenu: MenuItem = {
  id: 'rajasthan-tours',
  label: 'Rajasthan Tours'
,
  menuType: 'rajasthan-tours',
  subMenus: tourCities.map(city => ({
    label: `${city.charAt(0).toUpperCase() + city.slice(1).replace('-', ' ')} Tour`,
    citySlug: city,
    urlGenerator: generateTourUrl,
  })),
};

// Force Urbania Menu
export const forceUrbaniaMenu: MenuItem = {
  id: 'force-urbania',
  label: 'Force Urbania',
  menuType: 'force-urbania',
  subMenus: getAllCitySlugs().map(city => ({
    label: `Force Urbania in ${city.charAt(0).toUpperCase() + city.slice(1).replace('-', ' ')}`,
    citySlug: city,
    urlGenerator: generateServiceUrl('force-urbania'),
  })),
};

// Taxi Services Menu
export const taxiServicesMenu: MenuItem = {
  id: 'taxi-services',
  label: 'Taxi Services',
  menuType: 'taxi-services',
  subMenus: getAllCitySlugs().map(city => ({
    label: `Taxi Service in ${city.charAt(0).toUpperCase() + city.slice(1).replace('-', ' ')}`,
    citySlug: city,
    urlGenerator: generateServiceUrl('taxi-service'),
  })),
};

// Tempo Traveller Menu
export const tempoTravellerMenu: MenuItem = {
  id: 'tempo-traveller',
  label: 'Tempo Traveller',
  menuType: 'tempo-traveller',
  subMenus: getAllCitySlugs().map(city => ({
    label: `Tempo Traveller in ${city.charAt(0).toUpperCase() + city.slice(1).replace('-', ' ')}`,
    citySlug: city,
    urlGenerator: generateServiceUrl('tempo-traveller'),
  })),
};

// All menus
export const ALL_MENUS: MenuItem[] = [
  busServicesMenu,
  rajasthanToursMenu,
  forceUrbaniaMenu,
  taxiServicesMenu,
  tempoTravellerMenu,
];

/**
 * Get menu configuration by menu type
 */
export function getMenuByType(menuType: MenuType): MenuItem | null {
  return ALL_MENUS.find(menu => menu.menuType === menuType) || null;
}

/**
 * Get menu items for a specific service
 */
export function getMenuItems(menuType: MenuType): SubMenuItem[] {
  const menu = getMenuByType(menuType);
  return menu ? menu.subMenus : [];
}

/**
 * Check if a city is active in the current menu
 */
export function isActiveCity(menuType: MenuType, citySlug: string): boolean {
  const menu = getMenuByType(menuType);
  if (!menu) return false;
  return menu.subMenus.some(item => item.citySlug === citySlug);
}
