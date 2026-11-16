import { Metadata } from "next";
import { notFound } from "next/navigation";
import { urbaniaTempo } from "@/lib/servicesData";
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
  return urbaniaTempo.cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityName = cityDisplayNames[city] || city;
  const cityData = getCityById(city);

  return {
    title: cityData?.metaTitle || `Force Urbania Rental in ${cityName} | 12 15 17 Seater | Urbania Hire India`,
    description: cityData?.metaDescription || `Book Force Urbania in ${cityName}. Premium 12, 15, 17 seater luxury van rental starting ₹7500/day. Professional drivers, best rates. Online booking available.`,
    keywords: cityData?.keywords?.join(', ') || `force urbania ${city}, urbania rental ${city}, tempo traveller ${city}, luxury van ${city}`,
    openGraph: {
      title: `Force Urbania Rental in ${cityName}`,
      description: `Rent luxury Force Urbania in ${cityName}. Best rates for 12, 15, 17 seater vehicles.`,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Urbania Hire India'
    },
    twitter: {
      card: 'summary_large_image',
      title: `Force Urbania in ${cityName}`,
      description: `Premium Force Urbania rental in ${cityName}. Book now!`
    },
    alternates: {
      canonical: `https://urbaniahireindia.com/force-urbania-in-${city}`
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;
  
  const cityData = urbaniaTempo.cities.find((c) => c.slug === city);
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
        serviceName={`Force Urbania Rental in ${cityName}`}
        description={cityInfo?.description || `Premium Force Urbania rental service in ${cityName}`}
        priceRange="₹7500-₹10000"
        url={`https://urbaniahireindia.com/force-urbania-in-${city}`}
        lat={cityGeo?.lat}
        lng={cityGeo?.lng}
      />
      <ServicePageClient
        citySlug={city}
        cityName={cityName}
        serviceType="urbania"
        serviceName={`Force Urbania in ${cityName}`}
      />
    </>
  );
}
