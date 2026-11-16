"use client";

import ServiceTabs from "./ServiceTabs";
import { allServices } from "@/lib/servicesData";

const ServicesSection = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container-custom px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our premium transportation services across major cities in India.
                        Book now for the best rates and verified drivers.
                    </p>
                </div>

                {/* Dynamic Service Tabs */}
                <div className="max-w-4xl mx-auto">
                    <ServiceTabs services={allServices} />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
