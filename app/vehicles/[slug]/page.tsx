import { Metadata } from 'next';
import { getVehicleBySlug, vehicles } from '@/lib/vehicleData';
import VehiclePageClient from './VehiclePageClient';

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate static params for all vehicles
export async function generateStaticParams() {
    return vehicles.map((vehicle) => ({
        slug: vehicle.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const vehicle = getVehicleBySlug(slug);
    
    if (!vehicle) {
        return {
            title: 'Vehicle Not Found',
            description: 'The requested vehicle could not be found.',
        };
    }

    const priceText = vehicle.pricePerKm > 0 ? `₹${vehicle.pricePerKm}/km` : 'Contact for Price';
    const title = `${vehicle.name} Rental | ${vehicle.seatingCapacity} | Book Now ${priceText}`;
    const description = `Book ${vehicle.name} - ${vehicle.subtitle}. ${vehicle.seatingCapacity}. Features: ${vehicle.features.join(', ')}. ${vehicle.pricePerKm > 0 ? `Starting ₹${vehicle.pricePerKm}/km.` : 'Contact for best price.'} Best rates for weddings, tours, corporate events across India.`;

    return {
        title,
        description,
        keywords: [
            vehicle.name,
            `${vehicle.passengers} seater rental`,
            'Force Urbania rental',
            'tempo traveller hire',
            'luxury van rental India',
            'wedding bus rental',
            'corporate bus hire',
            `${vehicle.name} price`,
            `${vehicle.name} booking`,
        ],
        alternates: {
            canonical: `/vehicles/${vehicle.slug}`,
        },
        openGraph: {
            title,
            description,
            url: `/vehicles/${vehicle.slug}`,
            type: 'website',
            images: [
                {
                    url: vehicle.image,
                    width: 1200,
                    height: 630,
                    alt: vehicle.name,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [vehicle.image],
        },
    };
}

// JSON-LD for Service
function generateJsonLd(vehicle: ReturnType<typeof getVehicleBySlug>) {
    if (!vehicle) return null;
    
    const schemaBase: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: vehicle.name,
        description: vehicle.description,
        image: vehicle.gallery,
        brand: {
            '@type': 'Organization',
            name: 'Urbania Hire in Jaisalmer',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '150',
            bestRating: '5',
        },
    };

    // Only include offers with valid price
    if (vehicle.pricePerKm > 0) {
        schemaBase.offers = {
            '@type': 'Offer',
            price: vehicle.pricePerKm,
            priceCurrency: 'INR',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
            url: `https://urbaniahireindia.com/vehicles/${vehicle.slug}`,
        };
    }

    return schemaBase;
}

export default async function VehiclePage({ params }: Props) {
    const { slug } = await params;
    const vehicle = getVehicleBySlug(slug);
    const jsonLd = generateJsonLd(vehicle);

    return (
        <>
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <VehiclePageClient slug={slug} />
        </>
    );
}
