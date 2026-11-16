import { Metadata } from "next";
import { notFound } from "next/navigation";
import { taxiServices } from "@/lib/servicesData";
import { cityDisplayNames } from "@/lib/cityPricing";
import { getCityById } from "@/lib/cityData";
import { getCityConfig } from "@/lib/config/cityConfig";
import ServicePageClient from "@/components/ServicePageClient";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return taxiServices.cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityName = cityDisplayNames[city] || city;

  return {
    title: `Taxi Service in ${cityName} | Innova Crysta Hire | Airport Transfer`,
    description: `Book taxi service in ${cityName} from ₹15/km. Innova Crysta, Sedan hire for airport transfer, local tours, outstation. 24/7 booking available.`,
    keywords: `taxi service ${city}, innova crysta ${city}, car hire ${city}, airport taxi ${city}, outstation taxi ${city}, cab booking ${city}, taxi rental ${city}, local taxi ${city}`,
    openGraph: {
      title: `Taxi Service in ${cityName}`,
      description: `Reliable taxi service in ${cityName}. Innova, Sedan, SUV available.`,
      type: 'website',
      locale: 'en_IN'
    },
    alternates: {
      canonical: `https://www.urbaniahireinjaisalmer.com/taxi-service-in-${city}`
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;
  
  const cityData = taxiServices.cities.find((c) => c.slug === city);
  if (!cityData) {
    notFound();
  }

  const cityName = cityDisplayNames[city] || city;
  const cityInfo = getCityById(city);
  const cityGeo = getCityConfig(city)?.coordinates;

  return (
    <>
      <LocalBusinessSchema
        cityName={cityName}
        serviceName={`Taxi Service in ${cityName}`}
        description={cityInfo?.description || `Professional taxi service in ${cityName}`}
        priceRange="₹15-₹25/km"
        url={`https://www.urbaniahireinjaisalmer.com/taxi-service-in-${city}`}
        lat={cityGeo?.lat}
        lng={cityGeo?.lng}
      />
      <ServicePageClient
        citySlug={city}
        cityName={cityName}
        serviceType="taxi"
        serviceName={`Taxi Service in ${cityName}`}
      />
    </>
  );
}
