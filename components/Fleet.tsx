"use client";

import { vehicles } from "@/lib/vehicleData";
import VehicleCard from "@/components/ui/VehicleCard";

const Fleet = () => {
  return (
    <section id="fleet" className="py-8 md:py-12 bg-gray-50/50">
      <div className="container-custom px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block px-5 py-2 text-[#E05912] text-sm font-bold uppercase tracking-wider mb-3">
            Luxury Rentals
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Force Urbania &amp; Luxury Vehicle Fleet
          </h2>
          <div className="w-24 h-1 bg-[#FF8C00] rounded-full mx-auto mb-6 md:mb-8"></div>
          <p className="text-sm md:text-lg text-gray-600 font-light leading-relaxed">
            Choose from our exclusive collection of Force Urbania 12, 15, 17 seater vans and luxury vehicles. Available for hire across India.
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              layout="grid"
              showViewDetails={true}
              className=""
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
