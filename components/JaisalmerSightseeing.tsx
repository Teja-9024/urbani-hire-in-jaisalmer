"use client";

import { openWhatsApp } from "@/lib/whatsapp";

const packages = [
  {
    title: "Classic Jaisalmer Fort & Haveli Tour",
    badge: "8 Hours • 80 KM Package",
    image: "/images/destinations/jaisalmer-fort.jpg",
    description:
      "Cover the most iconic landmarks of the Golden City in a single relaxed day trip without dealing with auto or taxi negotiations.",
    label: "Key Monuments Covered",
    stops: "Jaisalmer Fort • Patwon Ki Haveli • Nathmal Ki Haveli • Salim Singh Ki Haveli • Gadisar Lake",
    cta: "Book Full Day Tour",
  },
  {
    title: "Sam Sand Dunes & Sunset Package",
    badge: "Desert & Photography Circuit",
    image: "/images/jaisalmer-sam-dunes.jpg",
    description:
      "Specially curated for photo lovers and families wanting golden dunes, camel rides and a classic Thar desert sunset with cultural evening.",
    label: "Key Spots Covered",
    stops: "Sam Sand Dunes • Khuri Village • Lodurva Jain Temples • Bada Bagh Cenotaphs • Desert Camp Evening",
    cta: "Book Desert Circuit",
  },
  {
    title: "Jaisalmer Transit & Heritage Tour",
    badge: "4 Hours • 40 KM Transit",
    image: "/assets/destination-jaisalmer-fort.jpg",
    description:
      "Ideal for corporate teams or transit visitors having a few hours between hotel checkout and train or flight departure from Jaisalmer.",
    label: "Key Stops Covered",
    stops: "Gadisar Lake • Jaisalmer Fort View • Manak Chowk Bazaar • Desert Handicraft Emporium • Railway Station Drop",
    cta: "Book Transit Tour",
  },
];

const JaisalmerSightseeing = () => {
  return (
    <section id="jaisalmer-sightseeing" className="py-10 md:py-16 bg-[#F8F6F0] font-ubuntu">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="inline-block px-5 py-2 rounded-full bg-[#FBEBD7] border border-[#EBCB9F] text-[#B8500F] text-xs font-bold uppercase tracking-wide mb-5">
            Golden City Darshan Packages
          </span>
          <h2 className="text-3xl md:text-[44px] font-bold text-[#111827] leading-tight mb-5">
            Jaisalmer Local Sightseeing{" "}
            <span className="text-[#DD7A0B]">By Luxury Force Urbania</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-7 max-w-2xl mx-auto">
            Explore historic forts, carved havelis, royal cenotaphs and golden desert dunes with your entire family in air-conditioned comfort with dedicated local route chauffeurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-[#D97706] shadow-[0_10px_30px_-8px_rgba(15,23,42,0.12)] transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 md:h-48 overflow-hidden">
                <img src={pkg.image} alt={pkg.title} loading="lazy" className="w-full h-full object-cover" />
                <span className="absolute left-3 bottom-3 bg-[#0B1220]/90 text-white text-[11px] font-semibold px-3 py-1.5 rounded-md">
                  {pkg.badge}
                </span>
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{pkg.description}</p>
                <div className="bg-[#F7F5F0] rounded-xl p-4 mb-5 flex-grow">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#B8500F] mb-1.5">{pkg.label}</p>
                  <p className="text-xs font-semibold text-gray-800 leading-5">{pkg.stops}</p>
                </div>
                <button
                  onClick={() =>
                    openWhatsApp(`Hi! I want to book the "${pkg.title}" with Force Urbania in Jaisalmer. Please share availability and pricing.`)
                  }
                  className="w-full h-12 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm transition-colors"
                >
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JaisalmerSightseeing;
