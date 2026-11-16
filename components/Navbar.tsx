"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Facebook, Instagram, ChevronDown } from "lucide-react";
import TopBar from "@/components/TopBar";
import { CONTACT_INFO } from "@/lib/constants";
import { openWhatsApp } from "@/lib/whatsapp";
import { miniBusServices, rajasthanTours, urbaniaTempo, taxiServices, tempoTravellerServices } from "@/lib/servicesData";
import { DesktopSubmenu } from "@/components/Navbar/DesktopSubmenu";
import { MobileSubmenu } from "@/components/Navbar/MobileSubmenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const [urbaniaDropdownOpen, setUrbaniaDropdownOpen] = useState(false);
  const [taxiDropdownOpen, setTaxiDropdownOpen] = useState(false);
  const [tempoDropdownOpen, setTempoDropdownOpen] = useState(false);
  // Mobile dropdown states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);
  const [mobileUrbaniaOpen, setMobileUrbaniaOpen] = useState(false);
  const [mobileTaxiOpen, setMobileTaxiOpen] = useState(false);
  const [mobileTempoOpen, setMobileTempoOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: isHomePage ? "#home" : "/", isAnchor: isHomePage },
    // { name: "Our Vehicles", href: isHomePage ? "#fleet" : "/#fleet", isAnchor: isHomePage },
    // { name: "Destinations", href: isHomePage ? "#destinations" : "/#destinations", isAnchor: isHomePage },
    // { name: "About", href: isHomePage ? "#about" : "/#about", isAnchor: isHomePage },
    // { name: "Contact", href: isHomePage ? "#contact" : "/#contact", isAnchor: isHomePage },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <TopBar />
      <nav
        className={`transition-all duration-300 border-b border-border ${isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md animate-slide-down"
          : "bg-white/95 backdrop-blur-md"
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/images/urlogo.png"
                alt="Urbania Hire in Jaisalmer Logo"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                )
              ))}

              {/* Bus-Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1">
                  Bus-Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <DesktopSubmenu
                  service={miniBusServices}
                  isOpen={servicesDropdownOpen}
                  urlPattern={(citySlug) => `/mini-bus-service-in-${citySlug}`}
                />
              </div>

              {/* Rajasthan Tours Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setToursDropdownOpen(true)}
                onMouseLeave={() => setToursDropdownOpen(false)}
              >
                <button className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1 ">
                  Rajasthan Tours
                  <ChevronDown className={`w-4 h-4 transition-transform ${toursDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <DesktopSubmenu
                  service={rajasthanTours}
                  isOpen={toursDropdownOpen}
                  urlPattern={(citySlug) => `/${citySlug}-tour`}
                />
              </div>

              {/* Force Urbania Tempo Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setUrbaniaDropdownOpen(true)}
                onMouseLeave={() => setUrbaniaDropdownOpen(false)}
              >
                <button className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1">
                  Force Urbania
                  <ChevronDown className={`w-4 h-4 transition-transform ${urbaniaDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <DesktopSubmenu
                  service={urbaniaTempo}
                  isOpen={urbaniaDropdownOpen}
                  urlPattern={(citySlug) => `/force-urbania-in-${citySlug}`}
                />
              </div>

              {/* Taxi Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setTaxiDropdownOpen(true)}
                onMouseLeave={() => setTaxiDropdownOpen(false)}
              >
                <button className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1">
                  Taxi Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${taxiDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <DesktopSubmenu
                  service={taxiServices}
                  isOpen={taxiDropdownOpen}
                  urlPattern={(citySlug) => `/taxi-service-in-${citySlug}`}
                />
              </div>

              {/* Tempo Traveller Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setTempoDropdownOpen(true)}
                onMouseLeave={() => setTempoDropdownOpen(false)}
              >
                <button className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1">
                  Tempo Traveller
                  <ChevronDown className={`w-4 h-4 transition-transform ${tempoDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <DesktopSubmenu
                  service={tempoTravellerServices}
                  isOpen={tempoDropdownOpen}
                  urlPattern={(citySlug) => `/tempo-traveller-in-${citySlug}`}
                />
              </div>

              {/* Blog Link */}
              <Link
                href="/blog"
                className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Blog
              </Link>

              {/* Contact Link (Last Item) */}
              {isHomePage ? (
                <a
                  href="#contact"
                  className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  Contact
                </a>
              ) : (
                <Link
                  href="/#contact"
                  className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  Contact
                </Link>
              )}
            </div>

            {/* CTA Button */}
            {/* <div className="hidden md:flex items-center gap-6">
              <Button
                onClick={() => openWhatsApp("Hi! I want to book a Force Urbania vehicle. Please share availability and pricing details.")}
                variant="default"
                className="bg-primary hover:bg-orange-600 text-white font-bold px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Book Now
              </Button>
            </div> */}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-border bg-white animate-fade-in absolute left-0 right-0 shadow-xl h-screen overflow-y-auto pb-20">
              <div className="flex flex-col py-6 px-6 gap-6">
                {navLinks.map((link) => (
                  link.isAnchor ? (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-bold text-foreground hover:text-primary transition-colors border-b border-gray-100 pb-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-bold text-foreground hover:text-primary transition-colors border-b border-gray-100 pb-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ))}

                {/* Mobile Bus-Services Dropdown */}
                <MobileSubmenu
                  service={miniBusServices}
                  label="Bus-Services"
                  isOpen={mobileServicesOpen}
                  onToggle={() => setMobileServicesOpen(!mobileServicesOpen)}
                  onLinkClick={() => setIsOpen(false)}
                  urlPattern={(citySlug) => `/mini-bus-service-in-${citySlug}`}
                />

                {/* Mobile Rajasthan Tours Dropdown */}
                <MobileSubmenu
                  service={rajasthanTours}
                  label="Rajasthan Tours"
                  isOpen={mobileToursOpen}
                  onToggle={() => setMobileToursOpen(!mobileToursOpen)}
                  onLinkClick={() => setIsOpen(false)}
                  urlPattern={(citySlug) => `/${citySlug}-tour`}
                />

                {/* Mobile Force Urbania Dropdown */}
                <MobileSubmenu
                  service={urbaniaTempo}
                  label="Force Urbania"
                  isOpen={mobileUrbaniaOpen}
                  onToggle={() => setMobileUrbaniaOpen(!mobileUrbaniaOpen)}
                  onLinkClick={() => setIsOpen(false)}
                  urlPattern={(citySlug) => `/force-urbania-in-${citySlug}`}
                />

                {/* Mobile Taxi Services Dropdown */}
                <MobileSubmenu
                  service={taxiServices}
                  label="Taxi Services"
                  isOpen={mobileTaxiOpen}
                  onToggle={() => setMobileTaxiOpen(!mobileTaxiOpen)}
                  onLinkClick={() => setIsOpen(false)}
                  urlPattern={(citySlug) => `/taxi-service-in-${citySlug}`}
                />

                {/* Mobile Tempo Traveller Dropdown */}
                <MobileSubmenu
                  service={tempoTravellerServices}
                  label="Tempo Traveller"
                  isOpen={mobileTempoOpen}
                  onToggle={() => setMobileTempoOpen(!mobileTempoOpen)}
                  onLinkClick={() => setIsOpen(false)}
                  urlPattern={(citySlug) => `/tempo-traveller-in-${citySlug}`}
                />

                {/* Mobile Blog Link */}
                <Link
                  href="/blog"
                  className="text-lg font-bold text-foreground hover:text-primary transition-colors border-b border-gray-100 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>

                {/* Mobile Contact Link (Last Item Logic) */}
                {isHomePage ? (
                  <a
                    href="#contact"
                    className="text-lg font-bold text-foreground hover:text-primary transition-colors border-b border-gray-100 pb-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                ) : (
                  <Link
                    href="/#contact"
                    className="text-lg font-bold text-foreground hover:text-primary transition-colors border-b border-gray-100 pb-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                )}

                {/* Mobile Contact & Socials */}
                <div className="flex flex-col gap-4 pt-4 mt-2">
                  <div className="flex flex-col gap-3 text-base font-medium text-foreground/80">
                    <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                      {CONTACT_INFO.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-6 py-2">
                    <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>

                  <Button
                    onClick={() => openWhatsApp("Hi! I want to book a Force Urbania vehicle. Please share availability and pricing details.")}
                    variant="default"
                    className="w-full bg-primary hover:bg-orange-600 text-white font-bold h-12 rounded-full shadow-md mt-2"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
