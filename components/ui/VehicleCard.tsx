"use client";

import { Button } from "@/components/ui/button";
import {
  Users,
  Fuel,
  Check,
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

  // Premium card: big photo + interior thumbnails, price pill, features, CTA buttons
  if (layout === "grid" && vehicle.subtitle) {
    const thumbs = vehicle.gallery.filter((img) => img !== vehicle.image).slice(0, 2);
    return (
      <div
        style={style}
        className={`group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#D97706] focus-within:border-[#D97706] active:border-[#D97706] shadow-[0_10px_30px_-8px_rgba(15,23,42,0.15)] hover:shadow-[0_20px_45px_-10px_rgba(15,23,42,0.25)] transition-all duration-500 hover:-translate-y-1 flex flex-col h-full ${className}`}
      >
        {/* Photos */}
        <div>
          <div className="relative overflow-hidden h-52 md:h-64">
            <img
              src={vehicle.image}
              alt={imageAlt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {vehicle.passengers} seats
            </span>
            <span className="absolute top-3 right-3 bg-[#E05912] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
              {getCategoryTag(vehicle.passengers)}
            </span>
          </div>
          {thumbs.length > 0 && (
            <div className="grid grid-cols-2 gap-0.5 mt-0.5">
              {thumbs.map((img, i) => (
                <img
                  key={img}
                  src={img}
                  alt={`${imageAlt} interior ${i + 1}`}
                  loading="lazy"
                  className="w-full h-24 md:h-28 object-cover"
                />
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="px-5 pt-4 pb-5 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-2">
            {vehicle.priceDisabled ? (
              <span className="text-lg font-extrabold text-[#C44D0F]">Best Price</span>
            ) : (
              <span className="text-2xl font-extrabold text-[#C44D0F]">
                ₹{vehicle.pricePerKm}
                <span className="text-xs font-semibold text-gray-500 ml-1">/KM</span>
              </span>
            )}
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wide text-green-700 bg-green-50 px-3 py-1 rounded-md">
              {vehicle.priceDisabled ? "Call for quote" : "Min 250 KM/Day"}
            </span>
          </div>

          <h3 className="text-xl md:text-[22px] font-extrabold tracking-tight text-gray-900 mb-1.5">
            {vehicle.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {vehicle.description}
          </p>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-4 border-t border-dashed border-gray-300 mb-5 flex-grow content-start">
            {[...vehicle.features, vehicle.seatingCapacity.split(" + ")[0]].slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                <Check className="w-3.5 h-3.5 text-[#E05912] shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-3 mt-auto">
            <Button
              onClick={() => bookVehicle(vehicle.name, vehicle.subtitle || "")}
              className="h-11 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm shadow-md"
            >
              WhatsApp Book
            </Button>
            {showViewDetails && (
              <Link href={`/${vehicle.slug}`} className="block">
                <Button
                  variant="outline"
                  className="w-full h-11 rounded-xl border-gray-200 bg-gray-50 hover:bg-orange-50 hover:text-[#E05912] text-gray-900 font-bold text-sm"
                >
                  View Details
                </Button>
              </Link>
            )}
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
