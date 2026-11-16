"use client";

import { type ServiceConfig } from "@/lib/config/serviceConfig";
import { type CityConfig } from "@/lib/config/cityConfig";
import { type LayoutType, type MenuType } from "@/lib/config/serviceConfig";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Car, Users } from "lucide-react";
import { openWhatsApp, requestQuote } from "@/lib/whatsapp";
import Link from "next/link";
import DynamicMenu from "../menus/DynamicMenu";

interface CityServiceTemplateProps {
  service: ServiceConfig;
  city: CityConfig | null;
  layoutType: LayoutType;
  menuType: MenuType;
}

export default function CityServiceTemplate({
  service,
  city,
  layoutType,
  menuType,
}: CityServiceTemplateProps) {
  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">City information not available</h1>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    const message = `Hi! I want to book ${service.name} in ${city.name}. Please share availability and pricing.`;
    openWhatsApp(message);
  };

  const handleGetQuote = () => {
    requestQuote("", city.name, service.name, "");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dynamic Menu */}
      <DynamicMenu menuType={menuType} activeCity={city.slug} />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-primary/20 to-orange-900/30">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: city.images.hero ? `url(${city.images.hero})` : undefined,
            filter: 'brightness(0.7)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="container-custom relative h-full flex flex-col justify-end pb-12 md:pb-16 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3 md:mb-4">
            {service.name} in {city.name}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl">
            {service.description}. Available 24/7 with professional drivers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-to-r from-[#F9B250] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#F9B250] text-white font-bold px-8 h-14 rounded-full text-lg shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Now
            </Button>
            <Button
              onClick={handleGetQuote}
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 font-bold px-8 h-14 rounded-full text-lg"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 container-custom px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            About {city.name}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {city.description}
          </p>
          
          {/* City Info Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700">{city.state}</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              <Car className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Professional Drivers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section (for tour type) */}
      {layoutType === 'tour' && city.attractions && city.attractions.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Popular Attractions in {city.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {city.attractions.map((attraction, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-orange-50 rounded-lg p-4 border border-orange-100"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{attraction}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Details */}
      <section className="py-12 md:py-16 container-custom px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Why Choose Our {service.name}?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Best Rates</h3>
                <p className="text-gray-600">Competitive pricing with no hidden charges. Get the best value for your money.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Professional Drivers</h3>
                <p className="text-gray-600">Experienced and courteous drivers who know the local routes well.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">24/7 Service</h3>
                <p className="text-gray-600">Round-the-clock availability for your convenience. Book anytime, anywhere.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Well-Maintained Vehicles</h3>
                <p className="text-gray-600">Clean, comfortable, and regularly serviced vehicles for a smooth journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-orange-600">
        <div className="container-custom px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book {service.name} in {city.name}?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us now for instant booking and best rates. Available 24/7 for your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBookNow}
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-bold px-8 h-14 rounded-full text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +91-8949304824
            </Button>
            <Button
              onClick={() => openWhatsApp(`Hi! I want to book ${service.name} in ${city.name}`)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 h-14 rounded-full text-lg"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
