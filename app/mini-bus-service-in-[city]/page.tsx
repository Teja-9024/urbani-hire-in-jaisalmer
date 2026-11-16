import { Metadata } from "next";
import { notFound } from "next/navigation";
import { miniBusServices } from "@/lib/servicesData";
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
  return miniBusServices.cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityName = cityDisplayNames[city] || city;

  return {
    title: `Mini-Bus Service in ${cityName} | 25 30 35 Seater Bus Rental`,
    description: `Book mini-bus service in ${cityName} from ₹40/km. 25, 30, 35 seater AC buses for tours, corporate events, weddings. Professional drivers, online booking.`,
    keywords: `mini bus ${city}, bus rental ${city}, 25 seater bus ${city}, 30 seater bus ${city}, 35 seater bus ${city}, tour bus ${city}, coach rental ${city}, group travel bus ${city}`,
    openGraph: {
      title: `Mini-Bus Service in ${cityName}`,
      description: `Rent mini-bus in ${cityName}. Best rates for 25-50 seater buses.`,
      type: 'website',
      locale: 'en_IN'
    },
    alternates: {
      canonical: `https://urbaniahireindia.com/mini-bus-service-in-${city}`
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;
  
  const cityData = miniBusServices.cities.find((c) => c.slug === city);
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
        serviceName={`Mini-Bus Service in ${cityName}`}
        description={cityInfo?.description || `Premium mini-bus rental in ${cityName}`}
        priceRange="₹40-₹55/km"
        url={`https://urbaniahireindia.com/mini-bus-service-in-${city}`}
        lat={cityGeo?.lat}
        lng={cityGeo?.lng}
      />
      <ServicePageClient
        citySlug={city}
        cityName={cityName}
        serviceType="bus"
        serviceName={`Mini-Bus Service in ${cityName}`}
      />
    </>
  );
}
