import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { parseSlug, generateAllSlugs } from '@/lib/utils/slugParser';
import { getCityById } from '@/lib/cityData';
import ServicePageClient from '@/components/ServicePageClient';
import VehiclePageClient from '@/app/vehicles/[slug]/VehiclePageClient';

type Props = {
  params: Promise<{ slug: string }>;
};

// Map service IDs to service types
const serviceTypeMap: Record<string, "bus" | "tour" | "urbania" | "taxi" | "tempo"> = {
  'mini-bus': 'bus',
  'city-tour': 'tour',
  'rajasthan-tours': 'tour',
  'force-urbania': 'urbania',
  'force-urbania-tempo': 'urbania',
  'taxi': 'taxi',
  'tempo-traveller': 'tempo',
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed || !parsed.isValid) {
    return {
      title: 'Page Not Found | Urbania Hire India',
      description: 'The page you are looking for could not be found.',
    };
  }

  const { service, city, vehicle, type } = parsed;
  
  // Handle vehicle-only pages
  if (type === 'vehicle-only' && vehicle) {
    const title = `${vehicle.name} Rental | ${vehicle.seatingCapacity} | Book Now ₹${vehicle.pricePerKm}/km`;
    const description = `Book ${vehicle.name} - ${vehicle.subtitle}. ${vehicle.seatingCapacity}. Features: ${vehicle.features.join(', ')}. Starting ₹${vehicle.pricePerKm}/km. Best rates for weddings, tours, corporate events across India.`;

    return {
      title,
      description,
      keywords: [
        vehicle.name,
        `${vehicle.passengers} seater rental`,
        'Force Urbania rental',
        'tempo traveller hire',
        'luxury van rental India',
        `${vehicle.name} price`,
        `${vehicle.name} booking`,
      ],
      alternates: {
        canonical: `/${vehicle.slug}`,
      },
      openGraph: {
        title,
        description,
        url: `/${vehicle.slug}`,
        type: 'website',
        siteName: 'Urbania Hire India',
        locale: 'en_IN',
        images: vehicle.image ? [
          {
            url: vehicle.image,
            width: 1200,
            height: 630,
            alt: vehicle.name,
          },
        ] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: vehicle.image ? [vehicle.image] : [],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  }

  // Handle service-city pages
  if (!city) {
    return {
      title: service.displayName,
      description: service.description,
    };
  }

  // Prefer the hand-written, keyword-researched SEO content per city when available
  // (see lib/cityData.ts) - that data is Force Urbania specific, so only use it
  // for that service, and strip any hardcoded "Urbania Hire India" suffix since
  // the root layout's title template already appends it.
  const cityInfo = service.id === 'force-urbania' ? getCityById(city.slug) : null;
  const cleanTitle = cityInfo?.metaTitle?.replace(/\s*\|\s*Urbania Hire India\s*$/i, '');

  const title = cleanTitle || `${service.name} in ${city.name} | Best Rates`;
  const description =
    cityInfo?.metaDescription ||
    `Book ${service.name} in ${city.name} - ${service.description}. Affordable rates, professional drivers, 24/7 service. Call now for instant booking!`;

  const keywords = cityInfo?.keywords?.length
    ? cityInfo.keywords
    : [
        service.name.toLowerCase(),
        city.name.toLowerCase(),
        `${service.name.toLowerCase()} in ${city.name.toLowerCase()}`,
        'book now',
        'best rates',
        'affordable',
        city.state.toLowerCase(),
        'instant booking',
        '24/7 service',
      ];

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/${slug}`,
      type: 'website',
      siteName: 'Urbania Hire India',
      locale: 'en_IN',
      images: city.images.hero ? [
        {
          url: city.images.hero,
          width: 1200,
          height: 630,
          alt: `${service.name} in ${city.name}`,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: city.images.hero ? [city.images.hero] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Generate static params for all possible slugs
// EXCLUDE specific route patterns that have their own dedicated routes
export async function generateStaticParams() {
  const slugs = generateAllSlugs();
  
  // Filter out slugs that are handled by specific routes
  const excludedPatterns = [
    /^mini-bus-service-in-/,
    /^force-urbania-in-/,
    /^taxi-service-in-/,
    /^tempo-traveller-in-/,
    /-tour$/,
  ];
  
  const filteredSlugs = slugs.filter(slug => {
    return !excludedPatterns.some(pattern => pattern.test(slug));
  });
  
  return filteredSlugs.map((slug) => ({
    slug,
  }));
}

// Main page component
export default async function ServiceCityPage({ params }: Props) {
  const { slug } = await params;
  
  // Don't handle new SEO-friendly routes - they have their own dedicated routes
  const newRoutePatterns = [
    /^bus-services\//,
    /^taxi-services\//,
    /^tempo-traveller\//,
    /^force-urbania\//,
    /^rajasthan-tours\//,
  ];
  
  if (newRoutePatterns.some(pattern => pattern.test(slug))) {
    notFound(); // Let the specific routes handle these
  }
  
  const parsed = parseSlug(slug);

  // Show 404 for invalid slugs
  if (!parsed || !parsed.isValid) {
    notFound();
  }

  const { service, city, vehicle, type } = parsed;

  // Handle vehicle-only pages
  if (type === 'vehicle-only' && vehicle) {
    // JSON-LD for Product schema
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: vehicle.name,
      description: vehicle.description,
      image: vehicle.gallery,
      brand: {
        '@type': 'Organization',
        name: 'Urbania Hire India',
      },
      offers: {
        '@type': 'Offer',
        price: vehicle.pricePerKm,
        priceCurrency: 'INR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        url: `https://urbaniahireindia.com/${slug}`,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <VehiclePageClient slug={slug} />
      </>
    );
  }

  // Handle service-city pages with new ServicePageClient
  if (!city) {
    notFound();
  }

  // Determine service type from service ID
  const serviceType = serviceTypeMap[service.id] || 'bus';
  
  // JSON-LD for Local Business schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Urbania Hire India - ${service.name} in ${city.name}`,
    description: `${service.description} in ${city.name}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: 'IN',
    },
    geo: city.coordinates ? {
      '@type': 'GeoCoordinates',
      latitude: city.coordinates.lat,
      longitude: city.coordinates.lng,
    } : undefined,
    url: `https://urbaniahireindia.com/${slug}`,
    telephone: '+91-8949304824',
    priceRange: '₹₹',
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://urbaniahireindia.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: `${service.name} in ${city.name}`,
          item: `https://urbaniahireindia.com/${slug}`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageClient
        citySlug={city.slug}
        cityName={city.name}
        serviceType={serviceType}
        serviceName={`${service.name} in ${city.name}`}
      />
    </>
  );
}
