import { Metadata } from "next";
import { notFound } from "next/navigation";
import { rajasthanTours } from "@/lib/servicesData";
import { cityDisplayNames } from "@/lib/cityPricing";
import ServicePageClient from "@/components/ServicePageClient";
import TourSchema from "@/components/seo/TourSchema";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return rajasthanTours.cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityName = cityDisplayNames[city] || city;

  return {
    title: `${cityName} Tour Package | Rajasthan Tours with Force Urbania | Urbania Hire in Jaisalmer`,
    description: `Explore ${cityName} with premium Force Urbania guided tour packages. Book 12, 15, 17 seater Urbania for ${cityName} sightseeing, heritage tours, and group travel. Best rates, professional drivers, 24/7 support.`,
    keywords: `${cityName} tour package, ${cityName} sightseeing urbania, force urbania ${cityName} tour, urbania hire ${cityName}, rajasthan tour urbania`,
    alternates: {
      canonical: `https://www.urbaniahireinjaisalmer.com/${city}-tour`,
    },
    openGraph: {
      title: `${cityName} Tour Package | Force Urbania Rental`,
      description: `Book Force Urbania for ${cityName} tours. Best rates for group sightseeing.`,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Urbania Hire in Jaisalmer',
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;
  
  const cityData = rajasthanTours.cities.find((c) => c.slug === city);
  if (!cityData) {
    notFound();
  }

  const cityName = cityDisplayNames[city] || city;

  return (
    <>
      <TourSchema
        name={`${cityName} City Tour Package`}
        description={`Explore the beautiful city of ${cityName} with our premium Force Urbania. Visit famous landmarks, historical sites, and local attractions with experienced drivers.`}
        cityName={cityName}
        price="Starting from ₹5000"
        duration="1-3 days"
        url={`https://www.urbaniahireinjaisalmer.com/${city}-tour`}
      />
      <ServicePageClient
        citySlug={city}
        cityName={cityName}
        serviceType="tour"
        serviceName={`${cityName} Tour`}
      />
    </>
  );
}
