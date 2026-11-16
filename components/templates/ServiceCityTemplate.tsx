"use client";

import { Button } from "@/components/ui/button";
import { Car, Users, Phone, CheckCircle2 } from "lucide-react";
import { openWhatsApp, requestQuote } from "@/lib/whatsapp";

// Define the interface for props
interface ServiceCityTemplateProps {
    cityData: {
        name: string;
        title?: string;
        tagline?: string;
        description: string;
        attractions: { name: string }[];
        rentalRates: {
            vehicleType: string;
            seats: string;
            pricePerDay: number;
            kmPerDay: string | number;
        }[];
    };
}

export default function ServiceCityTemplate({ cityData }: ServiceCityTemplateProps) {
    const handleBookNow = (vehicleType: string, price: number) => {
        const message = `Hi! I want to book ${vehicleType} for ${cityData.name}. Price: \u20B9${price.toLocaleString()}/day. Please share availability.`;
        openWhatsApp(message);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-br from-primary/20 to-orange-900/30">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="container-custom relative h-full flex flex-col justify-end pb-12 px-4">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                        {cityData.title || `Rent a Vehicle in ${cityData.name}`}
                    </h1>
                    <p className="text-xl text-white/90">
                        {cityData.tagline || "Premium travel experience at affordable rates."}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container-custom px-4 py-12">
                {/* About Section */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        About {cityData.name}
                    </h2>
                    <p className="text-lg text-gray-600">{cityData.description}</p>
                </section>

                {/* Popular Attractions */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        Popular Attractions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cityData.attractions.map((attraction, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-orange-50 rounded-lg p-4 border border-orange-100"
                            >
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-900 font-medium">{attraction.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Rental Rates Table */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        Urbania Rental Rates in {cityData.name}
                    </h2>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                        <table className="w-full">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="text-left py-4 px-6 font-bold">
                                        <div className="flex items-center gap-2">
                                            <Car className="w-5 h-5" />
                                            Vehicle
                                        </div>
                                    </th>
                                    <th className="text-left py-4 px-6 font-bold">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-5 h-5" />
                                            Seats
                                        </div>
                                    </th>
                                    <th className="text-left py-4 px-6 font-bold">Per Day</th>
                                    <th className="text-center py-4 px-6 font-bold">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {cityData.rentalRates.map((rate, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                                            }`}
                                    >
                                        <td className="py-4 px-6 font-medium text-gray-900">
                                            {rate.vehicleType}
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                                {rate.seats}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div>
                                                <div className="text-2xl font-bold text-primary">
                                                    ₹{rate.pricePerDay.toLocaleString()}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {rate.kmPerDay} km/day
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <Button
                                                onClick={() => handleBookNow(rate.vehicleType, rate.pricePerDay)}
                                                className="bg-primary hover:bg-orange-600 text-white font-bold px-6 rounded-full"
                                            >
                                                Book Now
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                        {cityData.rentalRates.map((rate, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-gray-200 p-5 shadow-md"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        {rate.vehicleType}
                                    </h3>
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        {rate.seats}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-3xl font-bold text-primary">
                                        ₹{rate.pricePerDay.toLocaleString()}
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        {rate.kmPerDay} km/day
                                    </span>
                                </div>
                                <Button
                                    onClick={() => handleBookNow(rate.vehicleType, rate.pricePerDay)}
                                    className="w-full bg-primary hover:bg-orange-600 text-white font-bold h-12 rounded-full"
                                >
                                    Book Now
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mt-16 bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Explore {cityData.name}?
                    </h2>
                    <p className="text-lg mb-8 text-white/90">
                        Book your Force Urbania today and travel in comfort and style
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => requestQuote("", cityData.name, "", "")}
                            variant="secondary"
                            className="bg-white text-primary hover:bg-gray-100 font-bold px-8 h-14 rounded-full text-lg"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Get Quote
                        </Button>
                        <Button
                            onClick={() => openWhatsApp(`Hi! I want to book Force Urbania for ${cityData.name}. Please share details.`)}
                            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 h-14 rounded-full text-lg"
                        >
                            WhatsApp Us
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
