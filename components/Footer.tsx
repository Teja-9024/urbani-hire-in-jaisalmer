"use client";

import { Instagram, Facebook, MessageCircle } from "lucide-react";
const URLOGO = "/images/footerurlogo.png";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Force Urbania", href: "/force-urbania-in-jaisalmer" },
    { name: "Tempo Traveller", href: "/tempo-traveller-in-jaisalmer" },
    { name: "Taxi Service", href: "/taxi-service-in-jaisalmer" },
    { name: "Mini Bus Service", href: "/mini-bus-service-in-jaisalmer" },
    { name: "Innova Crysta", href: "/vehicles/innova-crysta" },
    { name: "12 Seater Urbania", href: "/vehicles/12-seater-urbania" },
    { name: "15 Seater Urbania", href: "/vehicles/15-seater-urbania" },
    { name: "17 Seater Urbania", href: "/vehicles/17-seater-urbania" },
  ];

  const tours = [
    { name: "Jaipur Tour", href: "/jaipur-tour" },
    { name: "Udaipur Tour", href: "/udaipur-tour" },
    { name: "Mount Abu Tour", href: "/mount-abu-tour" },
    { name: "Jodhpur Tour", href: "/jodhpur-tour" },
    { name: "Jaisalmer Tour", href: "/jaisalmer-tour" },
    { name: "Bikaner Tour", href: "/bikaner-tour" },
    { name: "Delhi Tour", href: "/delhi-tour" },
    { name: "Agra Tour", href: "/agra-tour" },
    { name: "Pushkar Tour", href: "/pushkar-tour" },
  ];

  const bottomLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Pricing", href: "/#fleet" },
    { name: "FAQ", href: "/#faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  const headingCls = "text-white font-bold text-base uppercase tracking-wide pb-3 mb-5 border-b border-[#D9992B]";
  const linkCls = "text-sm uppercase text-gray-200 hover:text-[#F9B250] transition-colors";
  const socialCls = "w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-[#E05912] hover:border-[#E05912] transition-colors";

  return (
    <>
      {/* Fixed Road Animation Section */}
      <div className="fixed bottom-0 left-0 right-0 z-40 overflow-visible h-10 md:h-12">
        
        {/* Road */}
        <div className="absolute bottom-0 left-0 right-0 h-5 md:h-6 bg-gradient-to-b from-gray-600 to-gray-700">
          {/* Road markings */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-around px-4">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-8 md:w-12 h-0.5 bg-yellow-400 rounded"></div>
            ))}
          </div>
        </div>
        
        {/* Urbania Van - SVG Animated */}
        <div className="absolute bottom-4 md:bottom-5 animate-drive z-10">
          <svg viewBox="0 0 120 50" className="w-12 h-6 md:w-16 md:h-8 drop-shadow-xl">
            {/* Van body */}
            <rect x="5" y="15" width="105" height="28" rx="4" fill="#E05912"/>
            {/* Roof */}
            <path d="M10,15 Q15,5 30,5 L90,5 Q105,5 110,15" fill="#C44D0F"/>
            {/* Windows */}
            <rect x="15" y="8" width="22" height="12" rx="2" fill="#a8d5f7"/>
            <rect x="42" y="8" width="18" height="12" rx="2" fill="#a8d5f7"/>
            <rect x="65" y="8" width="18" height="12" rx="2" fill="#a8d5f7"/>
            <rect x="88" y="8" width="18" height="12" rx="2" fill="#a8d5f7"/>
            {/* Window reflections */}
            <rect x="17" y="10" width="2" height="8" rx="1" fill="white" fillOpacity="0.4"/>
            <rect x="44" y="10" width="2" height="8" rx="1" fill="white" fillOpacity="0.4"/>
            <rect x="67" y="10" width="2" height="8" rx="1" fill="white" fillOpacity="0.4"/>
            <rect x="90" y="10" width="2" height="8" rx="1" fill="white" fillOpacity="0.4"/>
            {/* Front light */}
            <rect x="108" y="25" width="4" height="6" rx="1" fill="#FFD700"/>
            {/* Back light */}
            <rect x="5" y="26" width="3" height="5" rx="1" fill="#FF4444"/>
            {/* Wheels */}
            <circle cx="30" cy="43" r="7" fill="#222"/>
            <circle cx="30" cy="43" r="4" fill="#444"/>
            <circle cx="30" cy="43" r="1.5" fill="#666"/>
            <circle cx="90" cy="43" r="7" fill="#222"/>
            <circle cx="90" cy="43" r="4" fill="#444"/>
            <circle cx="90" cy="43" r="1.5" fill="#666"/>
            {/* URBANIA text */}
            <text x="48" y="32" fill="white" fontSize="6" fontWeight="bold" fontFamily="Arial">URBANIA</text>
          </svg>
        </div>
      </div>

      {/* Footer with bottom padding to account for fixed road section */}
      <footer id="contact" className="bg-[#3a3a3a] text-gray-200 pb-10 md:pb-12">
        <div className="container-custom px-4 pt-12 md:pt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About Us */}
            <div>
              <h4 className={headingCls}>About Us</h4>
              <Link href="/" className="inline-block mb-4">
                <img src={URLOGO} alt="Urbania Hire in Jaisalmer" className="h-14 w-auto object-contain" />
              </Link>
              <p className="text-sm leading-8 text-gray-200">
                Urbania Hire in Jaisalmer: Force Urbania 12, 15 &amp; 17 seater, Innova and Tempo Traveller on rent for weddings, corporate travel, family tours and outstation trips across Rajasthan, Delhi, Agra and more. Verified drivers, transparent pricing, 24/7 booking support.
              </p>
            </div>

            {/* Our Services */}
            <div>
              <h4 className={headingCls}>Our Services</h4>
              <ul className="space-y-3.5">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className={linkCls}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rajasthan Tours */}
            <div>
              <h4 className={headingCls}>Rajasthan Tours</h4>
              <ul className="space-y-3.5">
                {tours.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className={linkCls}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className={headingCls}>Contact Info</h4>
              <p className="text-sm leading-7 mb-4">
                <strong className="text-white">Address:</strong> {CONTACT_INFO.addressFull}
              </p>
              <p className="text-sm leading-7 mb-4">
                <strong className="text-white">For Booking (24×7):</strong>
                <br />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#F9B250] transition-colors">{CONTACT_INFO.phoneDisplay}</a>
              </p>
              <p className="text-sm leading-7 mb-5">
                Email:{" "}
                <a href={`mailto:${CONTACT_INFO.bookingEmail}`} className="hover:text-[#F9B250] transition-colors">{CONTACT_INFO.bookingEmail}</a>
              </p>
              <div className="flex gap-3">
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialCls}>
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialCls}>
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={socialCls}>
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom links */}
          <nav aria-label="Footer" className="mt-12 border-y border-gray-500/60 py-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {bottomLinks.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm text-white hover:text-[#F9B250] transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="pt-6 text-center text-sm text-white">
            Copyright © {currentYear} <span className="text-[#F9B250]">Urbania Hire in Jaisalmer</span> All Right Reserved.
            <span className="mx-3 text-gray-500">|</span>
            Created By:{" "}
            <a href="https://instagram.com/tejaram__jakhar" target="_blank" rel="noopener noreferrer" className="text-[#F9B250] hover:underline">
              Teja
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
