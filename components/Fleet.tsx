"use client";

import { vehicles } from "@/lib/vehicleData";
import VehicleCard from "@/components/ui/VehicleCard";

const Fleet = () => {
  return (
    <section id="fleet" className="py-8 md:py-12 bg-[#FAF9F5]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 font-ubuntu">
          <span className="inline-block px-5 py-2 rounded-full bg-[#FBEBD7] border border-[#EBCB9F] text-[#B8500F] text-xs font-bold uppercase tracking-wide mb-5">
            Direct Owner Fleet in Jaisalmer
          </span>
          <h2 className="text-3xl md:text-[44px] font-bold text-[#111827] leading-tight mb-5">
            Choose Your <span className="text-[#DD7A0B]">Force Urbania On Rent In Jaisalmer</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-7 max-w-2xl mx-auto">
            Whether you need a luxury van for Jaisalmer local sightseeing, wedding guest mobility, or an outstation holiday to Jodhpur and Bikaner, we have the exact seating model ready at fixed transparent rates.
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-16">
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
