import { Metadata } from "next";
import { notFound } from "next/navigation";
import { tempoTravellerServices } from "@/lib/servicesData";
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
  return tempoTravellerServices.cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityName = cityDisplayNames[city] || city;
  const cityData = getCityById(city);

  return {
    title: cityData?.metaTitle?.replace('Force Urbania', 'Tempo Traveller') || `Tempo Traveller in ${cityName} | 12 15 17 Seater Hire | Best Rates`,
    description: `Book Tempo Traveller in ${cityName} from ₹7500/day. 12, 15, 17 seater AC tempo traveller for tours, weddings, corporate events. Professional drivers, online booking.`,
    keywords: `tempo traveller ${city}, tempo traveller hire ${city}, 12 seater tempo traveller ${city}, 15 seater tempo traveller ${city}, tempo traveller rental ${city}, ac tempo traveller ${city}, luxury tempo traveller ${city}`,
    openGraph: {
      title: `Tempo Traveller Rental in ${cityName}`,
      description: `Rent tempo traveller in ${cityName}. Best rates for 12, 15, 17 seater vehicles.`,
      type: 'website',
      locale: 'en_IN'
    },
    alternates: {
      canonical: `https://urbaniahireindia.com/tempo-traveller-in-${city}`
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;
  
  const cityData = tempoTravellerServices.cities.find((c) => c.slug === city);
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
        serviceName={`Tempo Traveller in ${cityName}`}
        description={cityInfo?.description || `Premium tempo traveller rental in ${cityName}`}
        priceRange="₹7500-₹10000"
        url={`https://urbaniahireindia.com/tempo-traveller-in-${city}`}
        lat={cityGeo?.lat}
        lng={cityGeo?.lng}
      />
      <ServicePageClient
        citySlug={city}
        cityName={cityName}
        serviceType="tempo"
        serviceName={`Tempo Traveller in ${cityName}`}
      />
    </>
  );
}
