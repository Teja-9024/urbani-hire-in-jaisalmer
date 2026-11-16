"use client";

import { openWhatsApp } from "@/lib/whatsapp";

const routes = [
  {
    title: "Jaisalmer to Jodhpur & Osian Dunes",
    badge: "285 KM • 5 Hours",
    image: "/images/destinations/mehrangarh-fort.jpg",
    description:
      "Cruise the desert highway to the Blue City with a comfortable AC ride. Add a stop at the Osian temples and Mehrangarh Fort on the way.",
    highlights: "Pokhran Highway • Osian Temples • Mehrangarh Fort Drop",
  },
  {
    title: "Jaisalmer to Bikaner via Pokhran",
    badge: "330 KM • 6 Hours",
    image: "/images/destinations/junagarh-fort.jpg",
    description:
      "A smooth intercity transfer to Bikaner with a chance to visit Junagarh Fort and the famous Karni Mata Temple at Deshnok.",
    highlights: "Pokhran Fort Stop • Karni Mata Temple • Junagarh Fort",
  },
  {
    title: "Jaisalmer to Udaipur Lake City Trip",
    badge: "560 KM • 9.5 Hours",
    image: "/images/destinations/udaipur-city-palace.jpg",
    description:
      "A long-distance family holiday route with reclining seats, rest breaks and experienced highway drivers all the way to the City of Lakes.",
    highlights: "Jodhpur Break • Ranakpur Jain Temple • Lake City Drop",
  },
  {
    title: "Jaisalmer to Jaipur Pink City Journey",
    badge: "560 KM • 9 Hours",
    image: "/images/destinations/jaipur.jpg",
    description:
      "Ideal for wedding groups and tour parties heading to the Pink City. Comfortable seating, ample luggage space and on-time pickups.",
    highlights: "Jodhpur Stopover • Ajmer Highway • Pink City Drop",
  },
];

const OutstationRoutes = () => {
  return (
    <section id="outstation-routes" className="py-10 md:py-16 bg-[#F7F5F0] font-ubuntu">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="inline-block px-5 py-2 rounded-full bg-[#FBEBD7] border border-[#EBCB9F] text-[#B8500F] text-xs font-bold uppercase tracking-wide mb-5">
            Rajasthan Interstate &amp; Highway Circuits
          </span>
          <h2 className="text-3xl md:text-[44px] font-bold text-[#111827] leading-tight mb-5">
            Popular Outstation Road Trips <span className="text-[#DD7A0B]">From Jaisalmer</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-7 max-w-2xl mx-auto">
            Seamless intercity highway travel in a spacious Force Urbania with comfortable seating, plenty of luggage space and experienced highway chauffeurs from Jaisalmer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {routes.map((r) => (
            <div
              key={r.title}
              className="flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-[#D97706] shadow-[0_10px_30px_-8px_rgba(15,23,42,0.12)] transition-all duration-300"
            >
              <div className="relative sm:w-[38%] h-52 sm:h-auto shrink-0">
                <img src={r.image} alt={r.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-[#1F2937]/95 text-white text-[11px] font-semibold px-3 py-1.5 rounded-md">
                  {r.badge}
                </span>
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-2">{r.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-4">{r.description}</p>
                <p className="bg-[#F7F5F0] rounded-xl px-3.5 py-3 text-xs font-medium text-gray-600 leading-5 mb-4">
                  {r.highlights}
                </p>
                <div className="mt-auto pt-4 border-t border-dashed border-gray-200 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-[#B8500F]">Best rates • Fixed pricing</span>
                  <button
                    onClick={() =>
                      openWhatsApp(`Hi! I want to book Force Urbania for "${r.title}". Please share the quote and availability.`)
                    }
                    className="px-5 h-10 rounded-lg bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm transition-colors"
                  >
                    Book Route
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutstationRoutes;
