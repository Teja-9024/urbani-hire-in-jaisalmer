"use client";

import { Button } from "@/components/ui/button";
import {
  Users,
  Fuel,
  Phone,
  ArrowUpRight,
  Snowflake,
  Armchair,
  Music2,
  Luggage,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { bookVehicle } from "@/lib/whatsapp";
import Link from "next/link";
import Image from "next/image";
import { Vehicle } from "@/lib/vehicleData";

interface VehicleCardProps {
  vehicle: Vehicle;
  cityName?: string;
  layout?: "grid" | "list";
  showViewDetails?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function getCategoryTag(passengers: number): string {
  if (passengers <= 7) return "Family & Couple";
  if (passengers <= 17) return "Group Travel";
  return "Large Group";
}

function getFeatureIcon(feature: string): LucideIcon {
  const f = feature.toLowerCase();
  if (f.includes("ac")) return Snowflake;
  if (f.includes("seat")) return Armchair;
  if (f.includes("music") || f.includes("sound")) return Music2;
  if (f.includes("luggage") || f.includes("space")) return Luggage;
  return CheckCircle2;
}

export default function VehicleCard({
  vehicle,
  cityName,
  layout = "grid",
  showViewDetails = true,
  className = "",
  style,
}: VehicleCardProps) {
  const imageAlt = cityName
    ? `${vehicle.name} in ${cityName}`
    : vehicle.name;

  // For home page (Fleet component) with premium styling
  if (layout === "grid" && vehicle.subtitle) {
    return (
      <div
        style={style}
        className={`group bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-[0_10px_30px_-8px_rgba(15,23,42,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(15,23,42,0.28)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ${className}`}
      >
        <div className="relative overflow-hidden h-44 md:h-64">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
          <img
            src={vehicle.image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-white/90 backdrop-blur-sm text-[#E05912] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-md">
            {vehicle.price}
          </div>
        </div>

        <div className="px-4 py-3  md:py-4 flex flex-col flex-grow">
          <div className="mb-3 md:mb-4 flex-grow">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-[#E05912] text-[10px] md:text-xs font-bold uppercase tracking-wide mb-2">
              {getCategoryTag(vehicle.passengers)}
            </span>

            <h3 className="text-lg md:text-2xl font-extrabold tracking-tight text-gray-900 mb-1 group-hover:text-[#E05912] transition-colors">
              {vehicle.name}
            </h3>
            <p className="text-gray-500 font-medium text-sm md:text-base mb-2.5 md:mb-3">
              {vehicle.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 md:gap-x-4 text-xs md:text-sm text-gray-600">
              <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#E05912]" />
                {vehicle.seatingCapacity}
              </span>
              {vehicle.features.slice(0, 3).map((feature) => {
                const Icon = getFeatureIcon(feature);
                return (
                  <span key={feature} className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#E05912]" />
                    {feature}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex sm:flex-row gap-3 md:gap-4 pt-2.5 md:pt-3 border-t border-gray-50 mt-auto">
            {showViewDetails && (
              <Link href={`/${vehicle.slug}`} className="flex-1">
                <Button
                  className="w-full gap-1.5 bg-gradient-to-r from-[#F9B250] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#F9B250] text-white font-bold h-10 rounded-full shadow-md hover:shadow-lg transition-all text-sm md:text-base"
                >
                  View Details
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
            <Button
              onClick={() =>
                bookVehicle(vehicle.name, vehicle.subtitle || "")
              }
              variant="outline"
              className="flex-1 gap-1.5 border-2 border-gray-900 hover:border-[#E05912] bg-white hover:bg-orange-50 text-gray-900 hover:text-[#E05912] font-bold h-10 rounded-full transition-all text-sm md:text-base"
            >
              <Phone className="w-4 h-4" />
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // For city pages with Card component styling
  return (
    <div
      className={`overflow-hidden hover:shadow-lg transition-shadow bg-white rounded-lg border border-gray-200 ${className}`}
    >
      <div className="aspect-video relative">
        <Image
          src={vehicle.image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-gray-900">
            {vehicle.name}
          </span>
          <span className="text-sm font-normal text-muted-foreground">
            {vehicle.seatingCapacity}
          </span>
        </div>
        {vehicle.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {vehicle.description}
          </p>
        )}
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {vehicle.passengers} Seats
          </div>
          {vehicle.specifications && (
            <div className="flex items-center">
              <Fuel className="h-4 w-4 mr-1" />
              {vehicle.specifications.ac ? "AC" : "Non-AC"}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center bg-gray-50/50 -mx-4 -mb-4 px-4 py-3 border-t">
          <span className="font-semibold text-primary">{vehicle.price}</span>
          {showViewDetails && (
            <Link href={`/${vehicle.slug}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
