import { vehicleImages } from "./vehicleImages";

export interface Vehicle {
    id: string;
    slug: string;
    name: string;
    subtitle: string;
    seatingCapacity: string;
    passengers: number;
    image: string;
    gallery: string[];
    features: string[];
    price: string;
    pricePerKm: number;
    description: string;
    specifications: {
        luggage: string;
        ac: boolean;
        music: boolean;
        wifi?: boolean;
        pushbackSeats?: boolean;
    };
    priceDisabled?: boolean; // Flag for vehicles with TBD pricing
}

export const vehicles: Vehicle[] = [
    // Force Urbania - 12, 15, 17 Seater (Prices TBD)
    {
        id: "urbania-12",
        slug: "12-seater-urbania",
        name: "12 Seater Force Urbania",
        subtitle: "Premium Luxury Travel",
        seatingCapacity: "12 Passengers + 1 Driver",
        passengers: 12,
        image: vehicleImages["12-seater"]?.main || "/vehicles/urbania/12-seater.jpg",
        gallery: vehicleImages["12-seater"]?.gallery || [],
        features: ["Full AC", "Premium Seats", "Music System", "Spacious"],
        price: "Contact for Price",
        pricePerKm: 0,
        priceDisabled: true,
        description: "Luxury Force Urbania perfect for group tours and corporate travel.",
        specifications: {
            luggage: "Large",
            ac: true,
            music: true,
        },
    },
    {
        id: "urbania-15",
        slug: "15-seater-urbania",
        name: "15 Seater Force Urbania",
        subtitle: "Spacious Premium Vehicle",
        seatingCapacity: "15 Passengers + 1 Driver",
        passengers: 15,
        image: vehicleImages["15-seater"]?.main || "/vehicles/urbania/15-seater.jpg",
        gallery: vehicleImages["15-seater"]?.gallery || [],
        features: ["Full AC", "Reclining Seats", "Music System", "Extra Luggage"],
        price: "Contact for Price",
        pricePerKm: 0,
        priceDisabled: true,
        description: "Spacious Force Urbania ideal for large groups and family tours.",
        specifications: {
            luggage: "Extra Large",
            ac: true,
            music: true,
        },
    },
    {
        id: "urbania-17",
        slug: "17-seater-urbania",
        name: "17 Seater Force Urbania",
        subtitle: "Maximum Capacity Luxury",
        seatingCapacity: "17 Passengers + 1 Driver",
        passengers: 17,
        image: vehicleImages["17-seater"]?.main || "/vehicles/urbania/17-seater.jpg",
        gallery: vehicleImages["17-seater"]?.gallery || [],
        features: ["Full AC", "Comfortable Seats", "Music System", "Maximum Space"],
        price: "Contact for Price",
        pricePerKm: 0,
        priceDisabled: true,
        description: "Maximum capacity Force Urbania for large group travel.",
        specifications: {
            luggage: "Extra Large",
            ac: true,
            music: true,
        },
    },
    
    // Buses - 25 to 50 Seater
    {
        id: "bus-25",
        slug: "25-seater-bus",
        name: "25 Seater Bus",
        subtitle: "Compact Bus for Groups",
        seatingCapacity: "25 Passengers + 1 Driver",
        passengers: 25,
        image: vehicleImages["25-seater"]?.main || "/vehicles/buses/25-seater.jpg",
        gallery: vehicleImages["25-seater"]?.gallery || [],
        features: ["Full AC", "Pushback Seats", "Music System", "Spacious"],
        price: "₹40/km",
        pricePerKm: 40,
        description: "Comfortable 25-seater bus perfect for medium-sized groups.",
        specifications: {
            luggage: "Large",
            ac: true,
            music: true,
            pushbackSeats: true,
        },
    },
    {
        id: "bus-30",
        slug: "30-seater-bus",
        name: "30 Seater Bus",
        subtitle: "Mid-Size Group Travel",
        seatingCapacity: "30 Passengers + 1 Driver",
        passengers: 30,
        image: vehicleImages["30-seater"]?.main || "/vehicles/buses/30-seater.jpg",
        gallery: vehicleImages["30-seater"]?.gallery || [],
        features: ["Full AC", "Pushback Seats", "Music System", "Luggage Space"],
        price: "₹45/km",
        pricePerKm: 45,
        description: "Ideal 30-seater bus for group tours and corporate events.",
        specifications: {
            luggage: "Extra Large",
            ac: true,
            music: true,
            pushbackSeats: true,
        },
    },
    {
        id: "bus-35",
        slug: "35-seater-bus",
        name: "35 Seater Bus",
        subtitle: "Large Group Comfort",
        seatingCapacity: "35 Passengers + 1 Driver",
        passengers: 35,
        image: vehicleImages["35-seater"]?.main || "/vehicles/buses/35-seater.jpg",
        gallery: vehicleImages["35-seater"]?.gallery || [],
        features: ["Full AC", "Pushback Seats", "Music System", "Extra Space"],
        price: "₹45/km",
        pricePerKm: 45,
        description: "Spacious 35-seater bus for large group travel.",
        specifications: {
            luggage: "Extra Large",
            ac: true,
            music: true,
            pushbackSeats: true,
        },
    },
    {
        id: "bus-40",
        slug: "40-seater-bus",
        name: "40 Seater Bus",
        subtitle: "Premium Large Bus",
        seatingCapacity: "40 Passengers + 1 Driver",
        passengers: 40,
        image: vehicleImages["40-seater"]?.main || "/vehicles/buses/40-seater.jpg",
        gallery: vehicleImages["40-seater"]?.gallery || [],
        features: ["Full AC", "Reclining Seats", "Music System", "Maximum Comfort"],
        price: "₹50/km",
        pricePerKm: 50,
        description: "Premium 40-seater bus for large group tours.",
        specifications: {
            luggage: "Extra Large",
            ac: true,
            music: true,
            pushbackSeats: true,
        },
    },
    {
        id: "bus-45",
        slug: "45-seater-bus",
        name: "45 Seater Bus",
        subtitle: "Extra Large Capacity",
        seatingCapacity: "45 Passengers + 1 Driver",
        passengers: 45,
        image: vehicleImages["45-seater"]?.main || "/vehicles/buses/45-seater.jpg",
        gallery: vehicleImages["45-seater"]?.gallery || [],
        features: ["Full AC", "Reclining Seats", "Music System", "Maximum Space"],
        price: "₹50/km",
        pricePerKm: 50,
        description: "Extra large 45-seater bus for maximum group capacity.",
        specifications: {
            luggage: "Extra Large",
            ac: true,
            music: true,
            pushbackSeats: true,
        },
    },
    {
        id: "bus-50",
        slug: "50-seater-bus",
        name: "50 Seater Bus",
        subtitle: "Maximum Capacity Bus",
        seatingCapacity: "50 Passengers + 1 Driver",
        passengers: 50,
        image: vehicleImages["50-seater"]?.main || "/vehicles/buses/50-seater.jpg",
        gallery: vehicleImages["50-seater"]?.gallery || [],
        features: ["Full AC", "Reclining Seats", "Music System", "Maximum Capacity"],
        price: "₹55/km",
        pricePerKm: 55,
        description: "Maximum capacity 50-seater bus for large events and tours.",
        specifications: {
            luggage: "Extra Large",
            ac: true,
            music: true,
            pushbackSeats: true,
        },
    },
    
    {
        id: "innova",
        slug: "innova",
        name: "Toyota Innova",
        subtitle: "Premium 7 Seater SUV",
        seatingCapacity: "7 Passengers + 1 Driver",
        passengers: 7,
        image: vehicleImages["innova"]?.main || "/vehicles/innova/main.jpeg",
        gallery: vehicleImages["innova"]?.gallery || [],
        features: ["Full AC", "Premium Seats", "Music System", "Luggage Space"],
        price: "₹17/km",
        pricePerKm: 17,
        description: "Comfortable Toyota Innova for family trips and small groups. Perfect for airport transfers, local tours, and outstation trips.",
        specifications: {
            luggage: "Moderate",
            ac: true,
            music: true,
        },
    },
    {
        id: "innova-crysta",
        slug: "innova-crysta",
        name: "Toyota Innova Crysta",
        subtitle: "Premium 7 Seater Luxury SUV",
        seatingCapacity: "7 Passengers + 1 Driver",
        passengers: 7,
        image: vehicleImages["innova-crysta"]?.main || "/vehicles/innova/main.jpeg",
        gallery: vehicleImages["innova-crysta"]?.gallery || [],
        features: ["Full AC", "Leather Seats", "Premium Sound System", "Extra Legroom", "Ambient Lighting"],
        price: "₹20/km",
        pricePerKm: 20,
        description: "Luxury Toyota Innova Crysta with premium features. Ideal for corporate travel, wedding guests, airport pickups, and family tours with superior comfort.",
        specifications: {
            luggage: "Large",
            ac: true,
            music: true,
            wifi: true,
        },
    },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
    return vehicles.find((vehicle) => vehicle.slug === slug);
}

