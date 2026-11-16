"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Check, ArrowRight, Star, Shield, Clock, Phone, ChevronRight, Home } from "lucide-react";
import { getVehicleBySlug, vehicles } from "@/lib/vehicleData";
import { bookVehicle } from "@/lib/whatsapp";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export default function VehiclePage({ slug }: { slug: string }) {
    const vehicle = getVehicleBySlug(slug);
    const [selectedImage, setSelectedImage] = useState(0);

    if (!vehicle) {
        notFound();
    }

    // Get other vehicles for recommendations
    const otherVehicles = vehicles.filter(v => v.slug !== vehicle.slug).slice(0, 3);

    return (
        <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Breadcrumbs for SEO and Navigation */}
            <nav aria-label="Breadcrumb" className="bg-white border-b">
                <div className="container-custom px-4 md:px-6 py-3">
                    <ol className="flex items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <Link href="/" className="flex items-center gap-1 text-gray-600 hover:text-[#E05912] transition-colors" itemProp="item">
                                <Home className="w-4 h-4" />
                                <span itemProp="name">Home</span>
                            </Link>
                            <meta itemProp="position" content="1" />
                        </li>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <span className="text-gray-900 font-medium" itemProp="name">{vehicle.name}</span>
                            <meta itemProp="position" content="2" />
                        </li>
                    </ol>
                </div>
            </nav>

            <main className="pt-20 md:pt-24 pb-12 md:pb-16">
                <div className="container-custom px-4 md:px-6">
                    
                    {/* Main Content Card */}
                    <section aria-label="Vehicle Details" className="bg-white rounded-2xl md:rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-0">

                            {/* Left Column: Gallery */}
                            <div className="p-4 md:p-8 lg:p-10 bg-gray-50/50">
                                {/* Main Image */}
                                <figure className="relative aspect-[4/3] md:aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-lg">
                                    <Image
                                        src={vehicle.gallery[selectedImage]}
                                        alt={`${vehicle.name} - Professional view showing interior and seating arrangement`}
                                        fill
                                        className="object-cover transition-all duration-700 hover:scale-105"
                                        priority
                                    />
                                    {/* Image Counter */}
                                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-medium">
                                        {selectedImage + 1} / {vehicle.gallery.length}
                                    </div>
                                </figure>
                                
                                {/* Thumbnail Gallery */}
                                <nav aria-label="Image gallery thumbnails" className="grid grid-cols-4 gap-2 md:gap-3 mt-3 md:mt-4">
                                    {vehicle.gallery.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            aria-label={`View image ${index + 1} of ${vehicle.gallery.length}`}
                                            className={`relative aspect-square rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 ${
                                                selectedImage === index
                                                    ? "ring-2 ring-[#E05912] shadow-lg scale-95"
                                                    : "opacity-60 hover:opacity-100 hover:shadow-md"
                                            }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${vehicle.name} thumbnail ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Right Column: Details */}
                            <motion.div
                                className="p-5 md:p-8 lg:p-10 flex flex-col"
                                initial="hidden"
                                animate="visible"
                                variants={staggerContainer}
                            >
                                {/* Price Badge */}
                                <motion.div variants={fadeIn} className="mb-4">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#E05912] to-[#FF8C00] text-white text-sm font-bold shadow-lg shadow-orange-500/25">
                                        Starting ₹{vehicle.pricePerKm}/km
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <motion.h1
                                    variants={fadeIn}
                                    className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-2"
                                >
                                    {vehicle.name}
                                </motion.h1>
                                <motion.p
                                    variants={fadeIn}
                                    className="text-base md:text-xl text-[#E05912] font-medium mb-6"
                                >
                                    {vehicle.subtitle}
                                </motion.p>

                                {/* Quick Stats */}
                                <motion.div
                                    variants={fadeIn}
                                    className="grid grid-cols-2 gap-3 md:gap-4 mb-6"
                                >
                                    <div className="p-4 md:p-5 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Users className="w-4 h-4 md:w-5 md:h-5 text-[#E05912]" />
                                            <p className="text-xs md:text-sm text-gray-600 font-medium">Capacity</p>
                                        </div>
                                        <p className="font-bold text-lg md:text-xl text-gray-900">
                                            {vehicle.seatingCapacity}
                                        </p>
                                    </div>
                                    <div className="p-4 md:p-5 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-green-600 font-bold text-sm">₹</span>
                                            <p className="text-xs md:text-sm text-gray-600 font-medium">Price</p>
                                        </div>
                                        <p className="font-bold text-lg md:text-xl text-gray-900">₹{vehicle.pricePerKm}/km</p>
                                    </div>
                                </motion.div>

                                {/* Features Pills */}
                                <motion.div variants={fadeIn} className="mb-6">
                                    <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Features</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {vehicle.features.map((feature, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs md:text-sm font-medium text-gray-700"
                                            >
                                                <Check className="w-3 h-3 text-green-500" />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Action Buttons */}
                                <motion.div
                                    variants={fadeIn}
                                    className="flex flex-col gap-3 mt-auto pt-4 border-t border-gray-100"
                                >
                                    <Button
                                        onClick={() => bookVehicle(vehicle.name, vehicle.subtitle)}
                                        className="w-full h-12 md:h-14 text-sm md:text-base bg-gradient-to-r from-[#E05912] to-[#FF8C00] hover:from-[#C44D0F] hover:to-[#E05912] text-white font-bold shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all rounded-xl"
                                    >
                                        <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                        Book Now via WhatsApp
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full h-12 md:h-14 text-sm md:text-base border-2 border-gray-200 text-gray-700 font-bold hover:bg-gray-50 hover:text-[#E05912] hover:border-[#E05912] transition-all rounded-xl"
                                    >
                                        Get Custom Quote
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Trust Badges */}
                        <div className="px-4 md:px-10 py-6 bg-gray-50 border-t border-gray-100">
                            <div className="grid grid-cols-3 gap-4 md:gap-8">
                                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-center md:text-left">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-xs md:text-sm">Fully Insured</p>
                                        <p className="text-[10px] md:text-xs text-gray-500 hidden md:block">Complete coverage</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-center md:text-left">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Clock className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-xs md:text-sm">24/7 Support</p>
                                        <p className="text-[10px] md:text-xs text-gray-500 hidden md:block">Always available</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-center md:text-left">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-xs md:text-sm">Top Rated</p>
                                        <p className="text-[10px] md:text-xs text-gray-500 hidden md:block">5-star service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About & Specifications Section */}
                    <div className="mt-6 md:mt-10 grid md:grid-cols-3 gap-4 md:gap-6">
                        {/* About */}
                        <section aria-labelledby="about-heading" className="md:col-span-2 bg-white rounded-2xl p-5 md:p-8 shadow-lg border border-gray-100">
                            <h2 id="about-heading" className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-1 h-6 md:h-8 bg-[#E05912] rounded-full"></span>
                                About this Vehicle
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
                                {vehicle.description}
                            </p>
                        </section>

                        {/* Specifications */}
                        <section aria-labelledby="specs-heading" className="bg-white rounded-2xl p-5 md:p-8 shadow-lg border border-gray-100">
                            <h2 id="specs-heading" className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-1 h-6 md:h-8 bg-[#E05912] rounded-full"></span>
                                Specifications
                            </h2>
                            <dl className="space-y-0">
                                <div className="flex justify-between py-3 md:py-4 border-b border-gray-100">
                                    <dt className="text-gray-500 text-sm md:text-base">AC / Heating</dt>
                                    <dd className="font-bold text-gray-900 text-sm md:text-base">{vehicle.specifications.ac ? "Yes ✓" : "No"}</dd>
                                </div>
                                <div className="flex justify-between py-3 md:py-4 border-b border-gray-100">
                                    <dt className="text-gray-500 text-sm md:text-base">Luggage Space</dt>
                                    <dd className="font-bold text-gray-900 text-sm md:text-base">{vehicle.specifications.luggage} Bags</dd>
                                </div>
                                <div className="flex justify-between py-3 md:py-4 border-b border-gray-100">
                                    <dt className="text-gray-500 text-sm md:text-base">Fuel Type</dt>
                                    <dd className="font-bold text-gray-900 text-sm md:text-base">Diesel</dd>
                                </div>
                                <div className="flex justify-between py-3 md:py-4">
                                    <dt className="text-gray-500 text-sm md:text-base">Driver</dt>
                                    <dd className="font-bold text-gray-900 text-sm md:text-base">Included</dd>
                                </div>
                            </dl>
                        </section>
                    </div>

                    {/* Other Vehicles */}
                    {otherVehicles.length > 0 && (
                        <section aria-labelledby="other-vehicles-heading" className="mt-10 md:mt-16">
                            <h2 id="other-vehicles-heading" className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                                Explore Other Vehicles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                {otherVehicles.map((v) => (
                                    <Link href={`/${v.slug}`} key={v.id}>
                                        <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                            <div className="relative h-40 md:h-48 overflow-hidden">
                                                <Image
                                                    src={v.image}
                                                    alt={`${v.name} - ${v.subtitle}`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#E05912] px-3 py-1 rounded-full text-xs font-bold">
                                                    {v.price}
                                                </div>
                                            </div>
                                            <div className="p-4 md:p-5">
                                                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#E05912] transition-colors">{v.name}</h3>
                                                <p className="text-gray-500 text-sm">{v.subtitle}</p>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                </div>
            </main>
        </article>
    );
}
