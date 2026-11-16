import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cityData';
import { vehicles } from '@/lib/vehicleData';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import VehicleCard from '@/components/ui/VehicleCard';

type Props = {
    params: Promise<{ city: string }>;
};

// Generate metadata dynamically based on the city
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    const cityData = getCityBySlug(city);

    if (!cityData) return { title: 'City Not Found' };

    return {
        title: cityData.metaTitle,
        description: cityData.metaDescription,
        keywords: cityData.keywords,
        openGraph: {
            title: cityData.metaTitle,
            description: cityData.metaDescription,
            type: 'website',
            url: `https://urbaniahireindia.com/cities/${city}`,
        }
    };
}

export default async function CityPage({ params }: Props) {
    const { city } = await params;
    const cityData = getCityBySlug(city);

    if (!cityData) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
                <Link href="/">
                    <Button>Go Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        Luxury Vehicle Rental in <span className="text-primary">{cityData.name}</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        {cityData.description}
                    </p>
                    <Link href={`tel:+918949304824`}>
                        <Button size="lg" className="text-lg px-8">
                            <Phone className="mr-2 h-5 w-5" /> Book Now in {cityData.name}
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Vehicles List */}
            <section className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-center">Available Fleet in {cityData.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehicles.map((vehicle) => (
                        <VehicleCard
                            key={vehicle.id}
                            vehicle={vehicle}
                            cityName={cityData.name}
                            layout="list"
                            showViewDetails={true}
                        />
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-primary text-primary-foreground py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready for your trip from {cityData.name}?</h2>
                    <p className="mb-8 text-lg opacity-90">Call us now for the best rates and instant booking confirmation.</p>
                    <Link href={`tel:+918949304824`}>
                        <Button variant="secondary" size="lg" className="text-lg">
                            Call +91-8949304824
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
