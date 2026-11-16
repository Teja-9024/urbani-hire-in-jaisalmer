// City-specific data for bus service pages
export interface CityAttraction {
  name: string;
  icon?: string;
}

export interface CityInfo {
  slug: string;
  name: string;
  tagline: string;
  about: string;
  attractions: CityAttraction[];
}

export const citiesInfo: Record<string, CityInfo> = {
  jaipur: {
    slug: "jaipur",
    name: "Jaipur",
    tagline: "The Pink City of India",
    about: "Rich heritage, magnificent forts, and vibrant culture",
    attractions: [
      { name: "Amber Fort" },
      { name: "Hawa Mahal" },
      { name: "City Palace" },
      { name: "Jantar Mantar" },
    ],
  },
  udaipur: {
    slug: "udaipur",
    name: "Udaipur",
    tagline: "The City of Lakes",
    about: "Romantic palaces, serene lakes, and stunning architecture",
    attractions: [
      { name: "City Palace" },
      { name: "Lake Pichola" },
      { name: "Jag Mandir" },
      { name: "Fateh Sagar Lake" },
    ],
  },
  "mount-abu": {
    slug: "mount-abu",
    name: "Mount Abu",
    tagline: "Rajasthan's Only Hill Station",
    about: "Cool climate, scenic views, and ancient temples",
    attractions: [
      { name: "Dilwara Temples" },
      { name: "Nakki Lake" },
      { name: "Guru Shikhar" },
      { name: "Sunset Point" },
    ],
  },
  jodhpur: {
    slug: "jodhpur",
    name: "Jodhpur",
    tagline: "The Blue City",
    about: "Majestic forts, blue houses, and desert landscapes",
    attractions: [
      { name: "Mehrangarh Fort" },
      { name: "Umaid Bhawan Palace" },
      { name: "Jaswant Thada" },
      { name: "Clock Tower Market" },
    ],
  },
  jaisalmer: {
    slug: "jaisalmer",
    name: "Jaisalmer",
    tagline: "The Golden City",
    about: "Desert safaris, golden fort, and heritage havelis",
    attractions: [
      { name: "Jaisalmer Fort" },
      { name: "Sam Sand Dunes" },
      { name: "Patwon Ki Haveli" },
      { name: "Gadisar Lake" },
    ],
  },
  bikaner: {
    slug: "bikaner",
    name: "Bikaner",
    tagline: "The Camel Country",
    about: "Desert culture, camel safaris, and ancient temples",
    attractions: [
      { name: "Junagarh Fort" },
      { name: "Karni Mata Temple" },
      { name: "Lalgarh Palace" },
      { name: "Gajner Palace" },
    ],
  },
};
