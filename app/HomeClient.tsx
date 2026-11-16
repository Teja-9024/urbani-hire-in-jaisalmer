"use client";

import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import Fleet from "@/components/Fleet";
import Destinations from "@/components/Destinations";
import CTABanner from "@/components/CTABanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import BenefitsSection from "@/components/BenefitsSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import FloatingButtons from "@/components/FloatingButtons";
import ServiceLocations from "@/components/ServiceLocations";

export default function HomeClient() {
  return (
    <>
      <main className="min-h-screen">
        <article>
          <Hero />
          <StatsSection />
          <section aria-label="Our Fleet">
            <Fleet />
          </section>
          <section aria-label="Popular Destinations">
            <Destinations />
          </section>
          <section aria-label="Service Locations">
            <ServiceLocations />
          </section>
          <CTABanner />
          <section aria-label="Why Choose Us">
            <WhyChooseUs />
          </section>
          <section aria-label="Benefits">
            <BenefitsSection />
          </section>
          <section aria-label="Customer Testimonials">
            <Testimonials />
          </section>
          <section aria-label="Frequently Asked Questions">
            <FAQSection />
          </section>
        </article>
        <FloatingButtons />
      </main>
    </>
  );
}
