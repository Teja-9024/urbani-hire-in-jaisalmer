import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Fleet from "@/components/Fleet";

export const metadata: Metadata = {
  title: "Our Fleet | Force Urbania 12, 15, 17 Seater & Innova in Jaisalmer",
  description:
    "Explore our fleet in Jaisalmer: Force Urbania 12, 15 & 17 seater, Innova Crysta and luxury buses. Verified drivers, transparent pricing and 24/7 booking.",
  alternates: { canonical: "https://www.urbaniahireinjaisalmer.com/our-fleet" },
};

export default function OurFleetPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero title="Our Fleet" subtitle="Force Urbania vans, Innova Crysta and buses matched to your group size." />
      <Fleet />
    </main>
  );
}
