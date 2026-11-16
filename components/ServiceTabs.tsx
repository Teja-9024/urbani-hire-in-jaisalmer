"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { ServiceType } from "@/lib/servicesData";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceTabsProps {
    services: ServiceType[];
}

const ServiceTabs = ({ services }: ServiceTabsProps) => {
    const [activeTab, setActiveTab] = useState<string>(services[0]?.id || "");
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const activeService = services.find((s) => s.id === activeTab);

    const toggleAccordion = (citySlug: string) => {
        setOpenAccordion(openAccordion === citySlug ? null : citySlug);
    };

    return (
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Tabs Header */}
            <div className="flex border-b border-gray-200 bg-gray-50">
                {services.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => setActiveTab(service.id)}
                        className={`flex-1 px-6 py-4 text-sm font-semibold transition-all relative ${activeTab === service.id
                                ? "text-primary bg-white border-b-2 border-primary"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            }`}
                    >
                        {service.name}
                        {activeTab === service.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                initial={false}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeService && (
                            <div className="space-y-2">
                                {activeService.cities.map((city) => (
                                    <div
                                        key={city.slug}
                                        className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors"
                                    >
                                        <button
                                            onClick={() => toggleAccordion(city.slug)}
                                            className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                <span className="font-medium text-gray-900 text-left">
                                                    {city.name}
                                                </span>
                                            </div>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openAccordion === city.slug ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {openAccordion === city.slug && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden bg-gray-50"
                                                >
                                                    <div className="p-4 space-y-3">
                                                        {city.image && (
                                                            <img
                                                                src={city.image}
                                                                alt={city.name}
                                                                className="w-full h-48 object-cover rounded-lg"
                                                            />
                                                        )}
                                                        <p className="text-gray-600 text-sm">
                                                            Book premium {activeService.name.toLowerCase()} in {city.name.split(" in ")[1]}.
                                                            Best rates, verified drivers, and 24/7 support.
                                                        </p>
                                                        <div className="flex gap-2">
                                                            <button className="flex-1 bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                                                                Book Now
                                                            </button>
                                                            <button className="flex-1 border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                                                                Get Quote
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ServiceTabs;
