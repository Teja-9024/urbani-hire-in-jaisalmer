// Service types and cities data structure
export interface ServiceCity {
    name: string;
    slug: string;
    image?: string;
}

export interface ServiceType {
    id: string;
    name: string;
    icon?: string;
    cities: ServiceCity[];
}

// Mini-Bus Services Data
export const miniBusServices: ServiceType = {
    id: "mini-bus",
    name: "Mini-Bus Services",
    cities: [
        { name: "Mini-Bus Service in Jaipur", slug: "jaipur", image: "/images/mini-bus-jaipur.jpg" },
        { name: "Mini-Bus Service in Udaipur", slug: "udaipur", image: "/images/mini-bus-udaipur.jpg" },
        { name: "Mini-Bus Service in Mount Abu", slug: "mount-abu", image: "/images/mini-bus-mount-abu.jpg" },
        { name: "Mini-Bus Service in Jodhpur", slug: "jodhpur", image: "/images/mini-bus-jodhpur.jpg" },
        { name: "Mini-Bus Service in Jaisalmer", slug: "jaisalmer", image: "/images/mini-bus-jaisalmer.jpg" },
        { name: "Mini-Bus Service in Bikaner", slug: "bikaner", image: "/images/mini-bus-bikaner.jpg" },
    ]
};

// Rajasthan Tours Data
export const rajasthanTours: ServiceType = {
    id: "rajasthan-tours",
    name: "Rajasthan Tours",
    cities: [
        { name: "Jaipur Tour", slug: "jaipur", image: "/images/tour-jaipur.jpg" },
        { name: "Udaipur Tour", slug: "udaipur", image: "/images/tour-udaipur.jpg" },
        { name: "Mount Abu Tour", slug: "mount-abu", image: "/images/tour-mount-abu.jpg" },
        { name: "Jodhpur Tour", slug: "jodhpur", image: "/images/tour-jodhpur.jpg" },
        { name: "Jaisalmer Tour", slug: "jaisalmer", image: "/images/tour-jaisalmer.jpg" },
        { name: "Bikaner Tour", slug: "bikaner", image: "/images/tour-bikaner.jpg" },
        { name: "Delhi Tour", slug: "delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80" },
        { name: "Agra Tour", slug: "agra", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80" },
        { name: "Pushkar Tour", slug: "pushkar", image: "/images/destinations/pushkar.jpg" },
    ]
};

// Force Urbania Tempo Data
export const urbaniaTempo: ServiceType = {
    id: "force-urbania-tempo",
    name: "Force Urbania Tempo",
    cities: [
        { name: "Force Urbania in Delhi", slug: "delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80" },
        { name: "Force Urbania in Jaipur", slug: "jaipur", image: "/images/urbania-jaipur.jpg" },
        { name: "Force Urbania in Udaipur", slug: "udaipur", image: "/images/urbania-udaipur.jpg" },
        { name: "Force Urbania in Mount Abu", slug: "mount-abu", image: "/images/urbania-mount-abu.jpg" },
        { name: "Force Urbania in Jodhpur", slug: "jodhpur", image: "/images/urbania-jodhpur.jpg" },
        { name: "Force Urbania in Jaisalmer", slug: "jaisalmer", image: "/images/urbania-jaisalmer.jpg" },
        { name: "Force Urbania in Bikaner", slug: "bikaner", image: "/images/urbania-bikaner.jpg" },
        { name: "Force Urbania in Agra", slug: "agra", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80" },
        { name: "Force Urbania in Pushkar", slug: "pushkar", image: "/images/destinations/pushkar.jpg" },
    ]
};

// Taxi Services Data (agar existing hai to merge kar lena)
export const taxiServices: ServiceType = {
    id: "taxi",
    name: "Taxi Services",
    cities: [
        { name: "Taxi Service in Jaipur", slug: "jaipur", image: "/images/taxi-jaipur.jpg" },
        { name: "Taxi Service in Udaipur", slug: "udaipur", image: "/images/taxi-udaipur.jpg" },
        { name: "Taxi Service in Mount Abu", slug: "mount-abu", image: "/images/taxi-mount-abu.jpg" },
        { name: "Taxi Service in Jodhpur", slug: "jodhpur", image: "/images/taxi-jodhpur.jpg" },
        { name: "Taxi Service in Jaisalmer", slug: "jaisalmer", image: "/images/taxi-jaisalmer.jpg" },
        { name: "Taxi Service in Bikaner", slug: "bikaner", image: "/images/taxi-bikaner.jpg" },
    ]
};

// Tempo Traveller Services Data
export const tempoTravellerServices: ServiceType = {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    cities: [
        { name: "Tempo Traveller in Jaipur", slug: "jaipur", image: "/images/tempo-jaipur.jpg" },
        { name: "Tempo Traveller in Udaipur", slug: "udaipur", image: "/images/tempo-udaipur.jpg" },
        { name: "Tempo Traveller in Mount Abu", slug: "mount-abu", image: "/images/tempo-mount-abu.jpg" },
        { name: "Tempo Traveller in Jodhpur", slug: "jodhpur", image: "/images/tempo-jodhpur.jpg" },
        { name: "Tempo Traveller in Jaisalmer", slug: "jaisalmer", image: "/images/tempo-jaisalmer.jpg" },
        { name: "Tempo Traveller in Bikaner", slug: "bikaner", image: "/images/tempo-bikaner.jpg" },
    ]
};

// All services combined
export const allServices: ServiceType[] = [
    miniBusServices,
    rajasthanTours,
    urbaniaTempo,
    taxiServices,
    tempoTravellerServices,
];
