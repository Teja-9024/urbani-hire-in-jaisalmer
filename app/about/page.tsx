import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Clock, Wallet, Users, MapPin, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import { COMPANY_INFO, CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Urbania Hire in Jaisalmer",
  description:
    "About Urbania Hire in Jaisalmer: Force Urbania 12, 15 & 17 seater, Innova and Tempo Traveller rental with verified drivers, transparent pricing and 24/7 booking support across Rajasthan.",
  alternates: { canonical: "https://www.urbaniahireinjaisalmer.com/about" },
};

const values = [
  { Icon: Shield, title: "Safe & Reliable", text: "Well-maintained vehicles and verified, experienced drivers on every trip." },
  { Icon: Wallet, title: "Transparent Pricing", text: "Fixed, upfront quotes with no hidden charges." },
  { Icon: Clock, title: "On-Time Service", text: "Punctual pickups and drops for airport, station and tour transfers." },
  { Icon: Users, title: "Group Travel Experts", text: "12, 15 and 17 seater vans for families, weddings and corporate groups." },
  { Icon: MapPin, title: "Rajasthan Coverage", text: "Local sightseeing in Jaisalmer and outstation trips across Rajasthan and India." },
  { Icon: Star, title: "24/7 Support", text: "Talk to us any time for bookings, changes and on-trip help." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-ubuntu">
      <PageHero
        title="About Urbania Hire in Jaisalmer"
        subtitle="Comfortable, reliable Force Urbania rentals for Jaisalmer and every road beyond."
      />
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-8 mb-4">
          {COMPANY_INFO.name} provides Force Urbania 12, 15 and 17 seater vans, Toyota Innova Crysta and Tempo Traveller on rent from Jaisalmer, the Golden City of Rajasthan.
          We serve families, wedding parties, corporate teams and tour groups for local sightseeing, Sam Sand Dunes trips, airport and railway transfers, and outstation journeys.
        </p>
        <p className="text-gray-600 leading-8">
          Every booking comes with a verified chauffeur, a clean air-conditioned cabin and a fixed, transparent quote, so you can focus on the journey.
        </p>
      </section>
      <section className="bg-[#FAF9F5] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Why Travellers Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#E05912]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600 leading-6">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/our-fleet" className="px-6 h-12 inline-flex items-center rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm">View Our Fleet</Link>
            <Link href="/contact" className="px-6 h-12 inline-flex items-center rounded-xl border border-gray-300 bg-white font-bold text-sm text-gray-900 hover:border-[#D97706]">Contact Us</Link>
            <a href={`tel:${CONTACT_INFO.phone}`} className="px-6 h-12 inline-flex items-center rounded-xl border border-gray-300 bg-white font-bold text-sm text-gray-900 hover:border-[#D97706]">Call {CONTACT_INFO.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
