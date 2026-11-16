"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import TourDetailsDialog from "@/components/TourDetailsDialog";

// Destination images from public/images/destinations/
const DESTINATION_IMAGES = {
  tajmahal: "/images/destinations/tajmahal.jpg",
  jaipur: "/images/destinations/jaipur.jpg",
  kerala: "/images/destinations/kerala.jpg",
  varanasi: "/images/destinations/varanasi.jpg",
  mehrangarhFort: "/images/destinations/mehrangarh-fort.jpg",
  jaisalmerFort: "/images/destinations/jaisalmer-fort.jpg",
  udaipurPalace: "/images/destinations/udaipur-city-palace.jpg",
  junagarhFort: "/images/destinations/junagarh-fort.jpg",
};


const destinations = [
  {
    id: 1,
    name: "Taj Mahal",
    landmark: "Taj Mahal",
    image: DESTINATION_IMAGES.tajmahal,
    description: "Visit the iconic symbol of eternal love",
    popular: true,
    href: "/agra-tour",
  },
  {
    id: 2,
    name: "Hawa Mahal",
    landmark: "Hawa Mahal",
    image: DESTINATION_IMAGES.jaipur,
    description: "Explore the magnificent Pink City palace",
    popular: true,
    href: "/jaipur-tour",
  },
  {
    id: 3,
    name: "Mysore Palace",
    landmark: "Mysore Palace",
    image: DESTINATION_IMAGES.kerala,
    description: "Marvel at royal architectural splendor",
    popular: false,
    href: "/tours",
  },
  {
    id: 4,
    name: "Varanasi",
    landmark: "Varanasi",
    image: DESTINATION_IMAGES.varanasi,
    description: "Witness the spiritual heart of India",
    popular: false,
    href: "/tours",
  },
  {
    id: 5,
    name: "MehranGarh Fort",
    landmark: "MehranGarh Fort",
    image: DESTINATION_IMAGES.mehrangarhFort,
    description: "Majestic fort overlooking Jodhpur",
    popular: true,
    href: "/jodhpur-tour",
  },
  {
    id: 6,
    name: "Jaisalmer Fort",
    landmark: "Jaisalmer Fort",
    image: DESTINATION_IMAGES.jaisalmerFort,
    description: "Golden fort in the Thar Desert",
    popular: true,
    href: "/jaisalmer-tour",
  },
  {
    id: 7,
    name: "Udaipur City Palace",
    landmark: "Udaipur City Palace",
    image: DESTINATION_IMAGES.udaipurPalace,
    description: "Stunning lakeside palace in Udaipur",
    popular: true,
    href: "/udaipur-tour",
  },
  {
    id: 8,
    name: "Junagarh Fort",
    landmark: "Junagarh Fort",
    image: DESTINATION_IMAGES.junagarhFort,
    description: "Magnificent fort in Bikaner",
    popular: true,
    href: "/bikaner-tour",
  },
];

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="destinations" className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 px-4">
          <span className="inline-block px-5 py-2 text-[#E05912] text-sm font-bold uppercase tracking-wider mb-3">
            Most Popular
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Explore Our Top Destinations
          </h2>
          <div className="w-24 h-1 bg-[#FF8C00] rounded-full mx-auto mb-6 md:mb-8"></div>
          <p className="text-sm md:text-lg text-gray-600 font-light leading-relaxed">
            Explore India&apos;s most popular landmarks with premium Force Urbania rental
          </p>
        </div>

        {/* Slider Container - Full width with overflow hidden */}
        <div className="relative overflow-hidden">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 md:gap-10 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-8 md:px-16 cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                href={destination.href}
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedDestination(destination);
                  setDialogOpen(true);
                }}
              >
                {/* Circular Image */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  <Image
                    src={destination.image}
                    alt={`${destination.name} - Force Urbania tour destination`}
                    fill
                    sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, 160px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Destination Name */}
                <h3 className="mt-4 text-base md:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-[#FF8C00] transition-colors duration-300 text-center whitespace-nowrap">
                  {destination.name}
                </h3>
              </Link>
            ))}
          </div>

          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent pointer-events-none z-10"></div>
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      <TourDetailsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        destination={selectedDestination}
      />
    </section>
  );
};

export default Destinations;
