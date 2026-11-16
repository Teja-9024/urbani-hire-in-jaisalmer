"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSchema from "@/components/seo/FAQSchema";

const faqs = [
    {
        question: "What is Force Urbania Rental?",
        answer:
            "Force Urbania rental is a premium vehicle rental service offering comfortable and spacious Force Urbania vehicles for group travel, perfect for family trips, corporate outings, and pilgrimage tours.",
    },
    {
        question: "Where can I use Force Urbania rental services?",
        answer:
            "You can use our rental services for local tours in Delhi, airport transfers, outstation trips to popular destinations like Manali, Shimla, Agra, and more. We cover all major tourist destinations across North India.",
    },
    {
        question: "What types of trips can I book a Force Urbania for?",
        answer:
            "Our Force Urbania vehicles are perfect for family vacations, corporate tours, wedding transfers, pilgrimage tours, airport pickups and drops, and weekend getaways. We cater to all your travel needs.",
    },
    {
        question: "How do I book a Force Urbania?",
        answer:
            "You can book instantly through WhatsApp by clicking the 'Book on WhatsApp' button on any vehicle page. Simply share your travel details and we'll send you a quote within minutes.",
    },
    {
        question: "What is the seating capacity of a Force Urbania?",
        answer:
            "We offer Force Urbania vehicles with seating capacities of 12-seater, 15-seater, and 17-seater options. We also have Toyota Innova (7-seater) for smaller groups. Choose the one that best fits your group size.",
    },
    {
        question: "Are drivers included with the rental?",
        answer:
            "Yes, all our rentals include an experienced and licensed driver who is well-versed with local and highway routes. Driver allowance is included in the package.",
    },
    {
        question: "What is the cost of hiring a Force Urbania?",
        answer:
            "Pricing starts from ₹18/km for smaller vehicles and goes up to ₹35/km for premium options. The final cost depends on the vehicle type, trip duration, and distance. Get an instant quote via WhatsApp.",
    },
    {
        question: "Do you offer one-way rentals for outstation trips?",
        answer:
            "Yes, we offer both one-way and round-trip rental options for outstation travel. Discuss your specific requirements with our team for the best package.",
    },
    {
        question: "Can I rent a Force Urbania for a few hours?",
        answer:
            "Absolutely! We offer flexible rental packages - hourly, daily, or for extended trips. Whether you need it for 4 hours or 10 days, we have you covered.",
    },
    {
        question: "Do you provide luxury Force Urbania rentals?",
        answer:
            "Yes, we offer premium Force Urbania with luxury features including pushback seats, advanced entertainment system, and premium interiors for an elevated travel experience.",
    },
    {
        question: "What is included in the rental price?",
        answer:
            "The rental includes the vehicle, experienced driver, fuel for the trip, driver allowance, toll and parking charges. AC and basic amenities are standard in all vehicles.",
    },
    {
        question: "How can I pay for my rental?",
        answer:
            "We accept multiple payment methods including cash, UPI, bank transfer, and online payments. Partial advance payment required for booking confirmation, with balance payable after the trip.",
    },
    {
        question: "Can I cancel or modify my booking?",
        answer:
            "Yes, we have a flexible cancellation policy. You can cancel or modify your booking based on our terms. Contact us as soon as possible for changes to minimize any applicable charges.",
    },
    {
        question: "Do you provide Force Urbania rentals for weddings?",
        answer:
            "Absolutely! Our Force Urbania vehicles are perfect for wedding guest transportation. We can arrange multiple vehicles for large wedding parties and offer special wedding packages.",
    },
    {
        question: "Why choose Urbania Hire India for Force Urbania rental?",
        answer:
            "Urbania Hire India offers well-maintained vehicles, experienced drivers, 24/7 customer support, flexible packages, competitive pricing, and a commitment to safe and comfortable travel. Customer satisfaction is our priority.",
    },
];

const FAQSection = () => {
    return (
        <>
            <FAQSchema faqs={faqs} />
            <section className="section-padding pt-12">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

                    <span className="inline-block px-5 py-2 text-[#E05912] text-sm font-bold uppercase tracking-wider mb-3">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-24 h-1 bg-[#FF8C00] rounded-full mx-auto mb-8"></div>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about booking with Urbania Hire India
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card border rounded-lg px-6"
                            >
                                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
        </>
    );
};

export default FAQSection;
