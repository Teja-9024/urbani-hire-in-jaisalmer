"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Star, Shield, Clock, Phone, Users, ThumbsUp, MapPin, Zap } from "lucide-react";
import { vehicles } from "@/lib/vehicleData";
import { getVehiclesWithCityPricing } from "@/lib/utils/pricing";
import { citiesInfo } from "@/lib/cityInfo";
import { citiesData } from "@/lib/cityData";
import { getCityImages } from "@/lib/cityImages";
import { Button } from "@/components/ui/button";
import { bookVehicle, openWhatsApp } from "@/lib/whatsapp";
import VehicleCard from "@/components/ui/VehicleCard";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ServicePageClientProps {
  citySlug: string;
  cityName: string;
  serviceType: "bus" | "tour" | "urbania" | "taxi" | "tempo";
  serviceName: string;
}

export default function ServicePageClient({
  citySlug,
  cityName,
  serviceType,
  serviceName,
}: ServicePageClientProps) {
  // Get vehicles with city-specific pricing
  const vehiclesWithCityPricing = getVehiclesWithCityPricing(
    vehicles,
    citySlug,
  );
  const cityInfo = citiesInfo[citySlug];

  // Sort vehicles based on service type
  const sortVehiclesByServiceType = (vehicleList: typeof vehiclesWithCityPricing) => {
    const sorted = [...vehicleList];
    
    switch (serviceType) {
      case "bus":
        // For bus service: Buses first, then Urbania, then Innova
        sorted.sort((a, b) => {
          const getOrder = (id: string) => {
            if (id.startsWith("bus-")) return 1;
            if (id.startsWith("urbania-")) return 2;
            if (id === "innova") return 3;
            return 4;
          };
          return getOrder(a.id) - getOrder(b.id);
        });
        break;
      case "tour":
      case "urbania":
      case "tempo":
        // For tour/urbania/tempo service: Urbania first, then Innova, then Buses
        sorted.sort((a, b) => {
          const getOrder = (id: string) => {
            if (id.startsWith("urbania-")) return 1;
            if (id === "innova") return 2;
            if (id.startsWith("bus-")) return 3;
            return 4;
          };
          return getOrder(a.id) - getOrder(b.id);
        });
        break;
      case "taxi":
        // For taxi service: Innova first, then Urbania, then Buses
        sorted.sort((a, b) => {
          const getOrder = (id: string) => {
            if (id === "innova") return 1;
            if (id.startsWith("urbania-")) return 2;
            if (id.startsWith("bus-")) return 3;
            return 4;
          };
          return getOrder(a.id) - getOrder(b.id);
        });
        break;
      default:
        // Default order
        break;
    }
    
    return sorted;
  };

  // Apply sorting
  const sortedVehicles = sortVehiclesByServiceType(vehiclesWithCityPricing);

  // Image slider state
  const cityHeroImages = getCityImages(citySlug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate slider
  useEffect(() => {
    if (cityHeroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % cityHeroImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [cityHeroImages.length]);

  // Service-specific content
  const getServiceContent = () => {
    switch (serviceType) {
      case "tour":
        return {
          sectionTitle: `Tour Packages in ${cityName}`,
          description:
            "Explore heritage sites and local culture with our guided tour packages",
        };
      case "urbania":
        return {
          sectionTitle: `Force Urbania Rental Rates in ${cityName}`,
          description: "Luxurious Force Urbania vehicles with modern amenities",
        };
      case "taxi":
        return {
          sectionTitle: `Taxi Rental Rates in ${cityName}`,
          description: "Comfortable cars for local and outstation trips",
        };
      case "tempo":
        return {
          sectionTitle: `Tempo Traveller Rental Rates in ${cityName}`,
          description: "Spacious vehicles perfect for group travel",
        };
      default: // bus
        return {
          sectionTitle: `Mini-Bus Rental Rates in ${cityName}`,
          description: "Premium mini-bus services for group travel and events",
        };
    }
  };

  const serviceContent = getServiceContent();

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: "https://www.urbaniahireinjaisalmer.com/" },
    { name: cityName, url: `https://www.urbaniahireinjaisalmer.com/${serviceType === 'urbania' ? 'force-urbania-in' : serviceType === 'tempo' ? 'tempo-traveller-in' : serviceType === 'taxi' ? 'taxi-service-in' : 'mini-bus-service-in'}-${citySlug}` }
  ];

  return (
    <main className="min-h-screen bg-gray-50 ">
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero Section with Image Slider */}
      <section className="relative w-full pt-[80px] bg-[#1a1a1a]">
        {/* Background Images with Slider Wrapper */}
        <div className="relative">
          {cityHeroImages.map((image, index) => (
            <div
              key={image}
              className={`${index === currentImageIndex ? "block" : "hidden"}`}
            >
              <div className="relative w-full hidden md:block ">
                <Image
                  src={image}
                  alt={`${cityName} hero ${index + 1}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority={index === 0}
                  quality={95}
                />
              </div>
              <div className="relative w-full md:hidden">
                <Image
                  src={image}
                  alt={`${cityName} hero ${index + 1}`}
                  width={800}
                  height={533}
                  className="w-full h-auto"
                  priority={index === 0}
                  quality={95}
                />
              </div>
            </div>
          ))}

          {/* Dark Overlay for text readability (Always visible) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

          {/* Content: Always absolute over the image */}
          <div className="container-custom absolute bottom-0 left-0 right-0 pb-4 md:pb-12 px-4 z-10">
            <h1 className="text-xl md:text-5xl font-bold text-white mb-1 md:mb-3 drop-shadow-2xl leading-tight">
              {serviceName}
            </h1>
            {cityInfo && (
              <p className="text-sm md:text-xl text-gray-100 drop-shadow-lg opacity-90">
                {cityInfo.tagline}
              </p>
            )}
          </div>

          {/* Slider Indicators */}
          {cityHeroImages.length > 1 && (
            <div className="absolute bottom-1.5 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-20">
              {cityHeroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white w-6 md:w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{cityName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container-custom px-4 py-3 md:py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">4.9 ★ Rated</div>
                <div className="text-xs text-gray-500">500+ Reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">Verified Safe</div>
                <div className="text-xs text-gray-500">GPS Tracked</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">24/7 Support</div>
                <div className="text-xs text-gray-500">Always Available</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                <ThumbsUp className="w-4 h-4 text-[#E05912]" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">Best Rates</div>
                <div className="text-xs text-gray-500">No Hidden Charges</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom px-4 py-12">
        {/* About City Section */}
        {cityInfo && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              About {cityName}
            </h2>
            <p className="text-lg text-gray-600">{cityInfo.about}</p>
          </section>
        )}

        {/* Popular Attractions */}
        {cityInfo && cityInfo.attractions.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Popular Attractions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cityInfo.attractions.map((attraction) => (
                <div
                  key={attraction.name}
                  className="flex items-center gap-3 bg-orange-50 border border-orange-100 rounded-lg p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-800 font-medium">
                    {attraction.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Vehicle Showcase Section - Similar to Home Page Fleet */}
        <section className="mb-12">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="inline-block px-5 py-2 text-[#E05912] text-sm font-bold uppercase tracking-wider mb-3">
              Our Vehicles
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Available Vehicles in {cityName}
            </h2>
            <div className="w-24 h-1 bg-[#FF8C00] rounded-full mx-auto mb-6 md:mb-8"></div>
            <p className="text-sm md:text-lg text-gray-600 font-light leading-relaxed">
              Choose from our exclusive collection of well-maintained vehicles. Designed for comfort, safety, and style.
            </p>
          </div>

          {/* Vehicle Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
            {sortedVehicles.map((vehicle, index) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                cityName={cityName}
                layout="grid"
                showViewDetails={true}
                className=""
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </section>

        {/* Vehicle Rental Rates Table */}
        <section className="mb-16">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {serviceContent.sectionTitle}
              </h2>
              <p className="text-gray-500 text-sm mt-1">{serviceContent.description}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live Availability
            </span>
          </div>

          {/* Unified Responsive Table — card-rows on all screens */}
          <div className="rounded-2xl border border-gray-200 shadow-lg overflow-hidden bg-white">

            {/* Table Header — hidden on mobile */}
            <div className="hidden md:grid md:grid-cols-[2fr_1.2fr_1.4fr_auto] bg-gradient-to-r from-[#E05912] to-[#FF8C00] text-white text-sm font-bold">
              <div className="px-6 py-4 flex items-center gap-2">
                <span>🚐</span> Vehicle
              </div>
              <div className="px-4 py-4 flex items-center gap-2">
                <Users className="w-4 h-4" /> Capacity
              </div>
              <div className="px-4 py-4 flex items-center gap-2">
                💰 Rate / Day
              </div>
              <div className="px-6 py-4 flex items-center justify-center gap-2">
                Action
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {sortedVehicles.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  className={`group transition-colors hover:bg-orange-50/30 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                  }`}
                >
                  {/* === MOBILE layout (< md) === */}
                  <div className="md:hidden flex gap-3 p-4">
                    {/* Vehicle thumbnail */}
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Name + capacity row */}
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm leading-tight">{vehicle.name}</h3>
                          <p className="text-xs text-gray-500">{vehicle.subtitle}</p>
                        </div>
                        <span className="flex-shrink-0 bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {vehicle.passengers}+1 Seats
                        </span>
                      </div>

                      {/* Features chips */}
                      {vehicle.features && vehicle.features.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {vehicle.features.slice(0, 3).map((f) => (
                            <span key={f} className="text-[10px] bg-orange-50 text-orange-700 border border-orange-100 px-1.5 py-0.5 rounded-md">
                              {f}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Price + Button */}
                      <div className="flex items-center justify-between gap-2">
                        {vehicle.priceDisabled ? (
                          <div className="text-xs font-semibold text-gray-500">Call for Price</div>
                        ) : (
                          <div>
                            <span className="text-base font-bold text-[#E05912]">{vehicle.cityPrice}</span>
                            <span className="text-[10px] text-gray-400 ml-1">/day</span>
                          </div>
                        )}
                        <Button
                          size="sm"
                          onClick={() => bookVehicle(vehicle.name, cityName)}
                          className="bg-gradient-to-r from-[#E05912] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#E05912] text-white font-bold text-xs h-8 px-4 rounded-full flex-shrink-0"
                        >
                          {vehicle.priceDisabled ? "Enquire" : "Book Now"}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* === DESKTOP layout (md+) === */}
                  <div className="hidden md:grid md:grid-cols-[2fr_1.2fr_1.4fr_auto] items-center">
                    {/* Vehicle name + image + features */}
                    <div className="px-6 py-4 flex items-center gap-4">
                      <div className="relative w-16 h-12 flex-shrink-0 rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{vehicle.name}</div>
                        <div className="text-xs text-gray-500 mb-1.5">{vehicle.subtitle}</div>
                        {vehicle.features && vehicle.features.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {vehicle.features.slice(0, 3).map((f) => (
                              <span key={f} className="text-[10px] bg-orange-50 text-orange-700 border border-orange-100 px-2 py-0.5 rounded-md font-medium">
                                {f}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Capacity */}
                    <div className="px-4 py-4">
                      <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-sm font-semibold">
                        <Users className="w-3.5 h-3.5" />
                        {vehicle.seatingCapacity}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="px-4 py-4">
                      {vehicle.priceDisabled ? (
                        <div>
                          <div className="text-sm font-bold text-gray-500">Contact for Price</div>
                          <div className="text-xs text-gray-400 mt-0.5">Custom quote available</div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-2xl font-bold text-[#E05912] leading-none">{vehicle.cityPrice}</div>
                          <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            incl. driver · fuel extra
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action */}
                    <div className="px-6 py-4 flex items-center justify-center">
                      <Button
                        onClick={() => bookVehicle(vehicle.name, cityName)}
                        className="bg-gradient-to-r from-[#E05912] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#E05912] text-white font-bold px-6 h-10 rounded-full shadow-md shadow-orange-300/30 transition-all group-hover:scale-105"
                      >
                        {vehicle.priceDisabled ? "Enquire Now" : "Book Now"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="bg-gray-50 border-t border-gray-100 px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
              <span>✅ All prices are per day rates &nbsp;·&nbsp; ✅ AC included &nbsp;·&nbsp; ✅ Professional drivers</span>
              <span className="text-[#E05912] font-semibold">📞 +91-8949304824</span>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <span className="inline-block px-5 py-2 text-[#E05912] text-sm font-bold uppercase tracking-wider mb-3">Why Us</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3">
              Why Book With Us?
            </h2>
            <div className="w-16 h-1 bg-[#FF8C00] rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Star, color: "yellow", bg: "bg-yellow-50", iconColor: "text-yellow-500", title: "Top Rated Service", desc: "4.9★ from 500+ happy customers across India" },
              { icon: Shield, color: "green", bg: "bg-green-50", iconColor: "text-green-600", title: "Safe & Insured", desc: "GPS-tracked, fully insured vehicles for peace of mind" },
              { icon: Zap, color: "blue", bg: "bg-blue-50", iconColor: "text-blue-600", title: "Instant Booking", desc: "Confirm your ride in under 5 minutes via WhatsApp" },
              { icon: ThumbsUp, color: "orange", bg: "bg-orange-50", iconColor: "text-[#E05912]", title: "No Hidden Charges", desc: "Transparent pricing with all-inclusive rates" },
            ].map(({ icon: Icon, bg, iconColor, title, desc }, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all text-center">
                <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-[#2d1a0e] relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/assets/pattern.png)', backgroundSize: '200px' }} />
          <div className="relative px-6 py-10 md:py-14 text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-3">
              Ready to Book {serviceName}?
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Get instant confirmation. Our team is available 24/7 for your travel needs in {cityName}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openWhatsApp(`Hi! I want to book ${serviceName}. Please share availability and pricing.`)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 h-13 rounded-full text-base shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Now
              </Button>
              <Button
                onClick={() => openWhatsApp(`Hi! I need a quote for ${serviceName} in ${cityName}.`)}
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20 font-bold px-8 h-13 rounded-full text-base"
              >
                Get Free Quote
              </Button>
            </div>
            <p className="text-white/50 text-xs mt-6">📞 +91-8949304824 &nbsp;|&nbsp; ⚡ Instant Response &nbsp;|&nbsp; ✓ No Advance Payment</p>
          </div>
        </section>

        {/* Other Popular Cities Section */}
        <section className="mb-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Other Popular Cities
            </h2>
            <span className="text-xs text-gray-400 flex items-center gap-1"><MapPin className="w-3 h-3" /> Pan India Service</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {citiesData
              .filter(city => city.id !== citySlug)
              .slice(0, 4)
              .map(city => {
                const cityHref = (() => {
                  switch (serviceType) {
                    case "bus": return `/mini-bus-service-in-${city.id}`;
                    case "tour": return `/${city.id}-tour`;
                    case "taxi": return `/taxi-service-in-${city.id}`;
                    case "tempo": return `/tempo-traveller-in-${city.id}`;
                    default: return `/force-urbania-in-${city.id}`;
                  }
                })();
                return (
                  <Link
                    key={city.id}
                    href={cityHref}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
                  >
                    <div className="relative h-32 md:h-40">
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <h3 className="text-white font-bold text-base">{city.name}</h3>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-xs text-gray-500 mb-2 line-clamp-2">{city.description}</p>
                      <span className="text-[#E05912] text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Rates <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                );
              })
            }
          </div>
        </section>
      </div>
    </main>
  );
}
