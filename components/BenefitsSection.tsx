"use client";

import { Shield, Users, Clock, MapPin, DollarSign, Heart, Sparkles, PhoneCall } from "lucide-react";

const benefits = [
    {
        icon: Users,
        title: "Ample Space",
        description: "Browse Force Urbania with various seating capacities, accommodating small to large groups comfortably with enough room for luggage storage.",
    },
    {
        icon: Heart,
        title: "Comfort and Convenience",
        description: "Designed for a smooth and comfortable ride with air conditioning, comfortable seats with headrests, and spacious interiors.",
    },
    {
        icon: Shield,
        title: "Experienced Drivers",
        description: "We provide experienced and trained drivers who are well-versed with local routes and traffic conditions, ensuring a safe journey.",
    },
    {
        icon: MapPin,
        title: "Customized Itineraries",
        description: "Create a customized itinerary based on your preferences. Explore multiple destinations and plan sightseeing tours at your own pace.",
    },
    {
        icon: DollarSign,
        title: "Cost-Effective",
        description: "Renting a Force Urbania is cost-effective for group travel. Split the rental cost among passengers for an affordable option.",
    },
    {
        icon: Sparkles,
        title: "Safe and Sanitized",
        description: "We maintain our Force Urbania in top-notch condition. Vehicles are regularly serviced, sanitized, and equipped with safety features.",
    },
    {
        icon: Clock,
        title: "Flexibility",
        description: "Whether you need a vehicle for a few hours, a day, or an extended trip, we offer flexible packages to suit your requirements.",
    },
    {
        icon: PhoneCall,
        title: "24/7 Availability",
        description: "We operate 24/7, providing round-the-clock availability for airport transfers, emergency travel needs, and last-minute bookings.",
    },
];

const BenefitsSection = () => {
    return (
        <section className="section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <span className="inline-block px-5 py-2 text-[#E05912] text-sm font-bold uppercase tracking-wider mb-3">
                        WHY CHOOSE US
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                        Benefits of Booking with Urbania Hire India
                    </h2>
                    <div className="w-24 h-1 bg-[#FF8C00] rounded-full mx-auto mb-8"></div>
                    <p className="text-lg text-muted-foreground">
                        Experience the difference with our premium service and well-maintained fleet
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-card border hover:border-primary/50 hover:shadow-card transition-all duration-300 group"
                            >
                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-display font-bold mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
