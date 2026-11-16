import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Book Force Urbania in Jaisalmer",
  description:
    "Contact Urbania Hire in Jaisalmer for Force Urbania, Innova and Tempo Traveller bookings. Call, WhatsApp or email us for instant quotes. Available 24/7.",
  alternates: { canonical: "https://www.urbaniahireinjaisalmer.com/contact" },
};

export default function ContactPage() {
  const cards = [
    { Icon: Phone, label: "Call Us (24×7)", value: CONTACT_INFO.phoneDisplay, href: `tel:${CONTACT_INFO.phone}` },
    { Icon: MessageCircle, label: "WhatsApp", value: "Chat for instant quote", href: `https://wa.me/${CONTACT_INFO.whatsappNumber}` },
    { Icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { Icon: MapPin, label: "Address", value: CONTACT_INFO.addressFull },
    { Icon: Clock, label: "Booking Hours", value: "Open 24 hours, 7 days" },
  ];
  return (
    <main className="min-h-screen bg-white font-ubuntu">
      <PageHero title="Contact Us" subtitle="Tell us your route and group size and we will share the best quote right away." />
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {cards.map(({ Icon, label, value, href }) => {
            const body = (
              <div className="flex items-center gap-4 bg-[#FAF9F5] border border-gray-200 rounded-2xl p-5 hover:border-[#D97706] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E05912] to-[#FF8C00] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">{label}</p>
                  <p className="font-bold text-gray-900 break-all">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{body}</a>
            ) : (
              <div key={label}>{body}</div>
            );
          })}
        </div>
        <div className="rounded-3xl overflow-hidden border border-gray-200 min-h-[380px]">
          <iframe
            title="Jaisalmer location map"
            src="https://www.google.com/maps?q=Jaisalmer,Rajasthan&output=embed"
            className="w-full h-full min-h-[380px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
