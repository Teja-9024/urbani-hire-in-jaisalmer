// Schema component - uses native <script> for proper SSR rendering

interface TourSchemaProps {
  name: string;
  description: string;
  cityName: string;
  price: string;
  duration?: string;
  url: string;
}

export default function TourSchema({
  name,
  description,
  cityName,
  price,
  duration = "1-10 days",
  url
}: TourSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": name,
    "description": description,
    "url": url,
    "touristType": "Family, Groups, Corporate",
    "itinerary": {
      "@type": "ItemList",
      "name": `${cityName} Tour Itinerary`
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Urbania Hire India",
      "telephone": "+91-89493-04824",
      "email": "ckptours@gmail.com"
    },
    "duration": duration
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
