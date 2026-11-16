"use client";

import { Phone, ArrowRight, Shield, Clock, Star, MapPin } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { CONTACT_INFO } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="py-10 md:py-14 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E05912]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF8C00]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Trust Signals Bar */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <Shield className="w-4 h-4 text-green-400" />
            <span>Verified Fleet</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>4.8★ (500+ Trips)</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span>9+ Cities</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
              Ready to Book Your <span className="text-[#F9B250]">Premium Ride?</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              Get instant quotes and book your Force Urbania in just a few clicks. No hidden charges — best price guaranteed.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg text-sm md:text-base"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              Call Now
            </a>
            <button
              onClick={() => openWhatsApp("Hi, I want to book Force Urbania")}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E05912] to-[#FF8C00] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg text-sm md:text-base"
            >
              Book on WhatsApp
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Urgency / Social Proof */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            ✓ Free cancellation up to 24 hrs before trip &nbsp;·&nbsp; ✓ No advance payment required &nbsp;·&nbsp; ✓ Direct fleet — no middlemen
          </p>
        </div>
      </div>
    </section>
  );
}
