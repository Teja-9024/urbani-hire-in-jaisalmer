// Schema component - uses native <script> for proper SSR rendering

interface ReviewSchemaProps {
  itemName: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
}

export default function ReviewSchema({ 
  itemName, 
  ratingValue, 
  reviewCount, 
  bestRating = 5 
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Service",
      "name": itemName
    },
    "ratingValue": ratingValue.toString(),
    "bestRating": bestRating.toString(),
    "ratingCount": reviewCount.toString()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
