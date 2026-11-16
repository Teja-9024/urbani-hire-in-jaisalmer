// Enhanced city details with attractions and rental information
export interface CityAttraction {
    name: string;
}

export interface RentalRate {
    vehicleType: string;
    seats: string;
    pricePerDay: number;
    kmPerDay: number;
}

export interface EnhancedCityData {
    slug: string;
    name: string;
    title: string;
    tagline: string;
    description: string;
    heroImage: string;
    attractions: CityAttraction[];
    rentalRates: RentalRate[];
}

// Complete city data for all Rajasthan cities
export const enhancedCityData: Record<string, EnhancedCityData> = {
    "jaipur": {
        slug: "jaipur",
        name: "Jaipur",
        title: "Force Urbania in Jaipur",
        tagline: "Royal Rajasthan's Crown Jewel",
        description: "Majestic forts, palaces, and traditional Rajasthani culture",
        heroImage: "/images/jaipur-hero.jpg",
        attractions: [
            { name: "Hawa Mahal" },
            { name: "Amber Fort" },
            { name: "City Palace" },
            { name: "Jantar Mantar" },
        ],
        rentalRates: [
            { vehicleType: "12 Seater Urbania", seats: "12+1", pricePerDay: 7500, kmPerDay: 250 },
            { vehicleType: "15 Seater Urbania", seats: "15+1", pricePerDay: 8500, kmPerDay: 250 },
            { vehicleType: "17 Seater Urbania", seats: "17+1", pricePerDay: 9500, kmPerDay: 250 },
        ],
    },
    "udaipur": {
        slug: "udaipur",
        name: "Udaipur",
        title: "Force Urbania in Udaipur",
        tagline: "The City of Lakes",
        description: "Romantic palaces, serene lakes, and stunning architecture",
        heroImage: "/images/udaipur-hero.jpg",
        attractions: [
            { name: "City Palace" },
            { name: "Lake Pichola" },
            { name: "Jag Mandir" },
            { name: "Fateh Sagar Lake" },
        ],
        rentalRates: [
            { vehicleType: "12 Seater Urbania", seats: "12+1", pricePerDay: 7500, kmPerDay: 250 },
            { vehicleType: "15 Seater Urbania", seats: "15+1", pricePerDay: 8500, kmPerDay: 250 },
            { vehicleType: "17 Seater Urbania", seats: "17+1", pricePerDay: 9500, kmPerDay: 250 },
        ],
    },
    "mount-abu": {
        slug: "mount-abu",
        name: "Mount Abu",
        title: "Force Urbania in Mount Abu",
        tagline: "Rajasthan's Only Hill Station",
        description: "Cool climate, scenic views, and ancient temples",
        heroImage: "/images/mount-abu-hero.jpg",
        attractions: [
            { name: "Dilwara Temples" },
            { name: "Nakki Lake" },
            { name: "Guru Shikhar" },
            { name: "Sunset Point" },
        ],
        rentalRates: [
            { vehicleType: "12 Seater Urbania", seats: "12+1", pricePerDay: 7500, kmPerDay: 250 },
            { vehicleType: "15 Seater Urbania", seats: "15+1", pricePerDay: 8500, kmPerDay: 250 },
            { vehicleType: "17 Seater Urbania", seats: "17+1", pricePerDay: 9500, kmPerDay: 250 },
        ],
    },
    "jodhpur": {
        slug: "jodhpur",
        name: "Jodhpur",
        title: "Force Urbania in Jodhpur",
        tagline: "The Blue City",
        description: "Majestic forts, blue houses, and desert culture",
        heroImage: "/images/jodhpur-hero.jpg",
        attractions: [
            { name: "Mehrangarh Fort" },
            { name: "Umaid Bhawan Palace" },
            { name: "Jaswant Thada" },
            { name: "Clock Tower" },
        ],
        rentalRates: [
            { vehicleType: "12 Seater Urbania", seats: "12+1", pricePerDay: 7500, kmPerDay: 250 },
            { vehicleType: "15 Seater Urbania", seats: "15+1", pricePerDay: 8500, kmPerDay: 250 },
            { vehicleType: "17 Seater Urbania", seats: "17+1", pricePerDay: 9500, kmPerDay: 250 },
        ],
    },
    "jaisalmer": {
        slug: "jaisalmer",
        name: "Jaisalmer",
        title: "Force Urbania in Jaisalmer",
        tagline: "The Golden City",
        description: "Desert safaris, golden fort, and sand dunes",
        heroImage: "/images/jaisalmer-hero.jpg",
        attractions: [
            { name: "Jaisalmer Fort" },
            { name: "Sam Sand Dunes" },
            { name: "Patwon Ki Haveli" },
            { name: "Gadisar Lake" },
        ],
        rentalRates: [
            { vehicleType: "12 Seater Urbania", seats: "12+1", pricePerDay: 7500, kmPerDay: 250 },
            { vehicleType: "15 Seater Urbania", seats: "15+1", pricePerDay: 8500, kmPerDay: 250 },
            { vehicleType: "17 Seater Urbania", seats: "17+1", pricePerDay: 9500, kmPerDay: 250 },
        ],
    },
    "bikaner": {
        slug: "bikaner",
        name: "Bikaner",
        title: "Force Urbania in Bikaner",
        tagline: "The Camel Country",
        description: "Desert landscapes, camel safaris, and royal heritage",
        heroImage: "/images/bikaner-hero.jpg",
        attractions: [
            { name: "Junagarh Fort" },
            { name: "Karni Mata Temple" },
            { name: "Lalgarh Palace" },
            { name: "Camel Breeding Farm" },
        ],
        rentalRates: [
            { vehicleType: "12 Seater Urbania", seats: "12+1", pricePerDay: 7500, kmPerDay: 250 },
            { vehicleType: "15 Seater Urbania", seats: "15+1", pricePerDay: 8500, kmPerDay: 250 },
            { vehicleType: "17 Seater Urbania", seats: "17+1", pricePerDay: 9500, kmPerDay: 250 },
        ],
    },
};
