"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
const HERO_IMAGE = "/images/hero-urbania.jpg";
import { requestQuote, openWhatsApp } from "@/lib/whatsapp";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Hero = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    requestQuote(pickup, drop, date, passengers);
  };

  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] flex flex-col justify-center pt-20" aria-label="Hero Section - Force Urbania Hire India">
      {/* Background Image - Layered Approach */}
      <div className="absolute inset-0 z-0">
        {/* Base Layer - Blurred background to fill gaps */}
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover blur-2xl scale-110 brightness-110 saturate-150"
        />
        {/* Warm color overlay for better aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-blue-900/20" />

        {/* Top Layer - Full Instagram image */}
        <Image
          src={HERO_IMAGE}
          alt="Force Urbania luxury tour - DDLJ pose recreation by guests exploring India"
          fill
          priority
          sizes="100vw"
          className="object-contain drop-shadow-2xl"
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 pt-12 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={slideInRight}
              className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs md:text-sm font-bold uppercase tracking-wider mb-4 shadow-lg"
            >
              Premium Rental Services
            </motion.span>
            <motion.h1
              variants={slideInRight}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg"
            >
              <span className="text-[#F9B250]">Urbania</span> Hire <br />
              in India
            </motion.h1>
            <motion.p
              variants={slideInRight}
              className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed drop-shadow-md"
            >
              Book premium <strong>Force Urbania 12, 15, 17 seater</strong> for weddings, corporate events, pilgrimages and family tours across Rajasthan &amp; India. Best rates guaranteed.
            </motion.p>
            <motion.div
              variants={slideInRight}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => openWhatsApp("Hi! I want to book a Force Urbania vehicle. Please share availability and pricing details.")}
                className="bg-gradient-to-r from-[#F9B250] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#F9B250] text-white gap-2 text-base px-8 py-6 rounded-md font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                aria-label="Book Force Urbania Vehicle"
              >
                Book a Vehicle
              </Button>
              <Button
                size="lg"
                onClick={() => window.location.href = 'tel:+918949304824'}
                className="bg-[#E05912] hover:bg-[#C44D0F] text-white gap-2 text-base px-8 py-6 rounded-md font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                aria-label="Contact Urbania Hire India"
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={slideInRight}
              className="flex flex-wrap items-center gap-4 md:gap-6 mt-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-medium">Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-sm font-medium">4.9★ Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-medium">Safe & Insured</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-t-4 border-primary max-w-md mx-auto lg:ml-auto"
          >

            <div className="mb-8">
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">
                Quick <span className="text-primary">Quote</span>
              </h3>
              <p className="text-gray-500">Plan your trip with us today.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Pickup</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary group-focus-within:scale-110 transition-transform" />
                  <input
                    type="text"
                    placeholder="City or Location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Drop</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary group-focus-within:scale-110 transition-transform" />
                  <input
                    type="text"
                    placeholder="Destination"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Date</label>
                  <div className="relative group">

                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-12 pr-2 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium text-gray-600"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">People</label>
                  <div className="relative group">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium text-gray-600 appearance-none"
                    >
                      <option value="">No.</option>
                      <option value="1-10">1-10</option>
                      <option value="11-17">11-17</option>
                      <option value="18-26">18-26</option>
                      <option value="27-40">27-40</option>
                      <option value="41+">41+</option>
                    </select>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-orange-600 text-white py-7 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4"
              >
                Get Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </motion.div> */}
        </div>
      </div>

      {/* Stats Bar/Features - Optional, keeping minimal or matching expected layout */}
    </section >
  );
};

export default Hero;
