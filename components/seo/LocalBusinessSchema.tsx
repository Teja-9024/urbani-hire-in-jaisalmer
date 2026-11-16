// Schema component - uses native <script> for proper SSR rendering

interface LocalBusinessSchemaProps {
  cityName: string;
  serviceName: string;
  description: string;
  priceRange?: string;
  url: string;
  lat?: number;
  lng?: number;
}

export default function LocalBusinessSchema({
  cityName,
  serviceName,
  description,
  priceRange = "₹7000-₹10000",
  url,
  lat,
  lng
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    "name": `Urbania Hire India - ${serviceName}`,
    "description": description,
    "url": url,
    "telephone": "+91-89493-04824",
    "email": "ckptours@gmail.com",
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": "IN"
    },
    ...(lat && lng
      ? {
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": lat,
            "longitude": lng
          }
        }
      : {}),
    "areaServed": {
      "@type": "City",
      "name": cityName
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Rental Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Force Urbania Rental",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Vehicle Rental Service",
                "name": "12 Seater Force Urbania",
                "description": "Luxury 12 seater Force Urbania for group travel",
                "provider": {
                  "@type": "Organization",
                  "name": "Urbania Hire India"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                }
              },
              "price": "30",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://urbaniahireindia.com/12-seater-urbania"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Vehicle Rental Service",
                "name": "15 Seater Force Urbania",
                "description": "Spacious 15 seater Force Urbania for tours",
                "provider": {
                  "@type": "Organization",
                  "name": "Urbania Hire India"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                }
              },
              "price": "32",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://urbaniahireindia.com/15-seater-urbania"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Vehicle Rental Service",
                "name": "17 Seater Force Urbania",
                "description": "Large 17 seater Force Urbania for groups",
                "provider": {
                  "@type": "Organization",
                  "name": "Urbania Hire India"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                }
              },
              "price": "35",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://urbaniahireindia.com/17-seater-urbania"
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
