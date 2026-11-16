"use client";

import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Bus, Car, ChevronRight, ArrowRight, Send, Heart, Globe, Shield, Clock, Headphones, Sparkles, Award } from "lucide-react";
const URLOGO = "/images/footerurlogo.png";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Our Vehicles", href: "/#fleet" },
    { name: "Destinations", href: "/#destinations" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const forceUrbaniaServices = [
    { name: "Force Urbania Jaipur", href: "/force-urbania-in-jaipur" },
    { name: "Force Urbania Udaipur", href: "/force-urbania-in-udaipur" },
    { name: "Force Urbania Jodhpur", href: "/force-urbania-in-jodhpur" },
    { name: "Force Urbania Jaisalmer", href: "/force-urbania-in-jaisalmer" },
    { name: "Force Urbania Mount Abu", href: "/force-urbania-in-mount-abu" },
    { name: "Force Urbania Bikaner", href: "/force-urbania-in-bikaner" },
    { name: "Force Urbania Delhi", href: "/force-urbania-in-delhi" },
    { name: "Force Urbania Agra", href: "/force-urbania-in-agra" },
    { name: "Tempo Traveller Jaipur", href: "/tempo-traveller-in-jaipur" },
    { name: "Tempo Traveller Udaipur", href: "/tempo-traveller-in-udaipur" },
  ];

  const touristVehicles = [
    { name: "12 Seater Urbania", href: "/vehicles/12-seater-urbania" },
    { name: "15 Seater Urbania", href: "/vehicles/15-seater-urbania" },
    { name: "17 Seater Urbania", href: "/vehicles/17-seater-urbania" },
    { name: "Innova Crysta Rental", href: "/vehicles/innova-crysta" },
    { name: "Mini Bus Jaipur", href: "/mini-bus-service-in-jaipur" },
    { name: "Mini Bus Udaipur", href: "/mini-bus-service-in-udaipur" },
    { name: "Taxi Service Jaipur", href: "/taxi-service-in-jaipur" },
    { name: "Taxi Service Udaipur", href: "/taxi-service-in-udaipur" },
  ];

  const famousTours = [
    { name: "Jaipur City Tour", href: "/jaipur-tour" },
    { name: "Udaipur Lake City Tour", href: "/udaipur-tour" },
    { name: "Jodhpur Blue City Tour", href: "/jodhpur-tour" },
    { name: "Jaisalmer Desert Safari", href: "/jaisalmer-tour" },
    { name: "Mount Abu Hill Station", href: "/mount-abu-tour" },
    { name: "Bikaner Camel Safari", href: "/bikaner-tour" },
  ];

  const urbaniaFleet = [
    { name: "12 Seater Urbania", slug: "12-seater-urbania" },
    { name: "15 Seater Urbania", slug: "15-seater-urbania" },
    { name: "17 Seater Urbania", slug: "17-seater-urbania" },
    { name: "Toyota Innova", slug: "innova" },
  ];

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
      <footer id="contact" className="bg-gradient-to-b from-[#1a1a1a] via-[#151515] to-[#0a0a0a] text-gray-300 pb-10 md:pb-12">
        {/* Features Bar */}
        <div className="bg-gradient-to-r from-[#E05912] via-[#FF8C00] to-[#E05912] py-5 md:py-6">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center gap-3 text-white">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="font-bold text-sm md:text-base">Safe Travel</p>
                <p className="text-[10px] md:text-xs text-white/70">100% Secure Journey</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Clock className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="font-bold text-sm md:text-base">24/7 Service</p>
                <p className="text-[10px] md:text-xs text-white/70">Always Available</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Award className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="font-bold text-sm md:text-base">Best Price</p>
                <p className="text-[10px] md:text-xs text-white/70">Guaranteed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Globe className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="font-bold text-sm md:text-base">Pan India</p>
                <p className="text-[10px] md:text-xs text-white/70">All Major Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 md:pt-16 pb-8">
        <div className="container-custom px-4">
          
          {/* Partners Section - Moved to Top */}
          <div className="border-b border-gray-700/50 pb-8 mb-10">
            <div className="flex flex-col items-center gap-5">
              <h3 className="text-[#F9B250] text-lg md:text-xl font-bold tracking-wide">✦ Our Partners ✦</h3>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {/* CKP Parihar Tours */}
                <a 
                  href="https://ckptours.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 transition-all hover:scale-105"
                >
                  <div className="h-16 md:h-20 bg-gray-800 rounded-xl px-5 py-3 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:bg-gray-700 transition-all border border-gray-700/50 group-hover:border-[#F9B250]/50">
                    <img 
                      src="/partners/ckp-logo.png" 
                      alt="CKP Parihar Tours"
                      className="h-10 md:h-14 w-auto object-contain"
                    />
                  </div>
                </a>
                {/* Vohtrip */}
                <a 
                  href="https://vohtrip.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 transition-all hover:scale-105"
                >
                  <div className="h-16 md:h-20 bg-white rounded-xl px-5 py-3 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all border border-gray-200 group-hover:border-[#F9B250]">
                    <img 
                      src="/partners/vohtrip-logo.png" 
                      alt="Vohtrip Travel Agency"
                      className="h-10 md:h-14 w-auto object-contain"
                    />
                  </div>
                </a>
                {/* Urbania Rentals India - Commented for now */}
                {/* <a 
                  href="https://urbaniarentalsindia.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 transition-all hover:scale-105"
                >
                  <div className="h-16 md:h-20 bg-white rounded-xl px-5 py-3 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all border border-gray-200 group-hover:border-[#F9B250]">
                    <img 
                      src="/partners/urbania-logo.png" 
                      alt="Urbania Rentals India"
                      className="h-10 md:h-14 w-auto object-contain"
                    />
                  </div>
                </a> */}
              </div>
            </div>
          </div>

          {/* Top Section: Brand & Contact */}
          <div className="grid lg:grid-cols-5 gap-10 md:gap-12 mb-10 border-b border-gray-800/50 pb-10">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-5">
                <img
                  src={URLOGO}
                  alt="Urbania Hire in Jaisalmer"
                  className="h-auto w-auto object-contain"
                />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-sm text-sm">
                Your trusted partner for comfortable and reliable Urbania rentals across India. We prioritize your comfort, safety, and style.
              </p>

              {/* Contact Cards */}
              <div className="space-y-2.5 mb-6">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-800/80 to-gray-800/40 rounded-xl hover:from-[#E05912]/20 hover:to-[#E05912]/5 border border-gray-700/50 hover:border-[#E05912]/30 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E05912] to-[#FF8C00] flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Call Us Now</p>
                    <p className="text-white font-bold">{CONTACT_INFO.phoneDisplay}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#E05912] group-hover:translate-x-1 transition-all" />
                </a>
                <a href={`mailto:${CONTACT_INFO.bookingEmail}`} className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-800/80 to-gray-800/40 rounded-xl hover:from-[#E05912]/20 hover:to-[#E05912]/5 border border-gray-700/50 hover:border-[#E05912]/30 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E05912] to-[#FF8C00] flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Email Us</p>
                    <p className="text-white font-bold text-sm">{CONTACT_INFO.bookingEmail}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#E05912] group-hover:translate-x-1 transition-all" />
                </a>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-800/80 to-gray-800/40 rounded-xl border border-gray-700/50">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E05912] to-[#FF8C00] flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Our Location</p>
                    <p className="text-white font-bold text-sm">Jaisalmer, Rajasthan 345001</p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div>
                <p className="text-white font-bold mb-3 text-sm">Connect With Us</p>
                <div className="flex gap-2">
                  {[
                    { Icon: Facebook, color: "hover:bg-blue-600", label: "Facebook", link: CONTACT_INFO.facebook },
                    { Icon: Instagram, color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500", label: "Instagram", link: CONTACT_INFO.instagram },
                    { Icon: Twitter, color: "hover:bg-sky-500", label: "Twitter", link: CONTACT_INFO.twitter },
                    { Icon: Youtube, color: "hover:bg-red-600", label: "Youtube", link: CONTACT_INFO.youtube }
                  ].map(({ Icon, color, label, link }, i) => (
                    <a key={i} href={link} target="_blank" rel="noopener noreferrer" aria-label={label} className={`w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center text-gray-400 ${color} hover:text-white hover:border-transparent transition-all hover:-translate-y-1 hover:shadow-lg`}>
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">
              {/* Column 1 - Urbania Service */}
              <div>
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-[#E05912] to-[#FF8C00]"></span>
                  Urbania Service
                </h4>
                <ul className="space-y-2">
                  {forceUrbaniaServices.map((item) => (
                    <li key={item.name} className="group">
                      <Link href={item.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#E05912] transition-colors">
                        <ChevronRight className="w-3 h-3 text-[#E05912] group-hover:translate-x-1 transition-transform" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 - Tourist Vehicle */}
              <div>
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-[#E05912] to-[#FF8C00]"></span>
                  Tourist Vehicle
                </h4>
                <ul className="space-y-2">
                  {touristVehicles.map((item) => (
                    <li key={item.name} className="group">
                      <Link href={item.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#E05912] transition-colors">
                        <ChevronRight className="w-3 h-3 text-[#E05912] group-hover:translate-x-1 transition-transform" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Famous Tours */}
              <div>
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-[#E05912] to-[#FF8C00]"></span>
                  Famous Tours
                </h4>
                <ul className="space-y-2">
                  {famousTours.map((item) => (
                    <li key={item.name} className="group">
                      <Link href={item.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#E05912] transition-colors">
                        <ChevronRight className="w-3 h-3 text-[#E05912] group-hover:translate-x-1 transition-transform" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4 - Force Urbania (Clickable) + Quick Links */}
              <div>
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-[#E05912] to-[#FF8C00]"></span>
                  Force Urbania
                </h4>
                <ul className="space-y-2">
                  {urbaniaFleet.map((item) => (
                    <li key={item.name} className="group">
                      <Link href={`/vehicles/${item.slug}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#E05912] transition-colors">
                        <ChevronRight className="w-3 h-3 text-[#E05912] group-hover:translate-x-1 transition-transform" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Quick Links (Clickable) */}
                <h4 className="text-white font-bold text-sm mt-6 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-[#E05912] to-[#FF8C00]"></span>
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map((item) => (
                    <li key={item.name} className="group">
                      <Link href={item.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#E05912] transition-colors">
                        <ChevronRight className="w-3 h-3 text-[#E05912] group-hover:translate-x-1 transition-transform" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-center gap-2 pt-3 pb-1">
            <p className="text-xs md:text-sm text-gray-500 font-medium text-center">
              © {currentYear} <span className="text-white font-semibold">Urbania Hire in Jaisalmer</span>. All Rights Reserved.
            </p>
            <p className="text-xs md:text-sm text-gray-500 font-medium text-center">
              Design and Develop by{" "}
              <a
                href="https://instagram.com/tejaram__jakhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-[#E05912] transition-colors"
              >
                Teja Jakhar
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
