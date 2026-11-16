"use client";

import Image from "next/image";
import { Clock, MapPin, Calendar } from "lucide-react";
import TourBookingCard from "@/components/TourBookingCard";
import { TourDestination } from "@/lib/tourData";

interface TourTemplateProps {
    tour: TourDestination;
}

export default function TourTemplate({ tour }: TourTemplateProps) {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px]">
                <Image
                    src={tour.image}
                    alt={tour.destination}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="absolute inset-0 flex items-end">
                    <div className="container-custom pb-16">
                        <div className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-4">
                            {tour.price}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
                            {tour.destination}
                        </h1>
                        <p className="text-xl text-white/90 mb-6 max-w-2xl">
                            {tour.description}
                        </p>

                        {/* Quick Info */}
                        <div className="flex flex-wrap gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{tour.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                <span>{tour.distance}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>Best: {tour.bestTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Tour Highlights */}
                            <div>
                                <h2 className="text-3xl font-display font-bold mb-6">Tour Highlights</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {tour.highlights.map((highlight, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-4 rounded-lg bg-muted hover:bg-muted/70 transition-colors"
                                        >
                                            <div className="mt-1">
                                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <span className="text-primary font-semibold text-sm">
                                                        {index + 1}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="font-medium">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* About Tour */}
                            <div>
                                <h2 className="text-3xl font-display font-bold mb-4">About This Tour</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    {tour.description}
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our experienced drivers will ensure a comfortable and safe journey. The vehicle
                                    comes equipped with all modern amenities including AC, music system, and ample
                                    luggage space. Perfect for families, groups, and solo travelers alike.
                                </p>
                            </div>

                            {/* Inclusions */}
                            <div>
                                <h2 className="text-3xl font-display font-bold mb-6">Package Includes</h2>
                                <div className="grid gap-3">
                                    {[
                                        "Comfortable Force Urbania vehicle",
                                        "Experienced and licensed driver",
                                        "Fuel charges for the entire trip",
                                        "Driver allowance included",
                                        "Toll and parking charges",
                                        "24/7 customer support",
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Booking Card */}
                        <div className="lg:col-span-1">
                            <TourBookingCard
                                tourName={tour.name}
                                destination={tour.destination}
                                price={tour.price}
                                duration={tour.duration}
                                distance={tour.distance}
                                bestTime={tour.bestTime}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
