import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getModelBySlug } from '@/lib/slugHelper';
import TourTemplate from '@/components/templates/TourTemplate';
import TourSchema from '@/components/seo/TourSchema';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const model = getModelBySlug(slug);

    if (!model || model.type !== 'itinerary') {
        return {
            title: "Tour Not Found - Urbania Hire in Jaisalmer",
        };
    }

    const tour = model.data as import('@/lib/tourData').TourDestination;
    const title = `${tour.name} Tour Package | Force Urbania Rental`;
    const description = `${tour.description} | ${tour.duration} trip.`;

    return {
        title,
        description,
        alternates: { canonical: `/${slug}` }, // Canonical points to the flat URL
        openGraph: { title, description, url: `/${slug}` },
    };
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const model = getModelBySlug(slug);

    if (!model || model.type !== 'itinerary') {
        notFound();
    }

    const tour = model.data as import('@/lib/tourData').TourDestination;

    return (
        <>
            <TourSchema
                name={tour.name}
                description={tour.description}
                cityName={tour.destination}
                price={tour.price}
                duration={tour.duration}
                url={`https://urbaniahireindia.com/${slug}`}
            />
            <TourTemplate tour={tour} />
        </>
    );
}
