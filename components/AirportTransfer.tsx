"use client";

import { Luggage, Timer, Handshake, Snowflake, Check } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { CONTACT_INFO } from "@/lib/constants";

const perks = [
  { Icon: Luggage, title: "Spacious Luggage Boot", text: "Accommodates 10-16 large trolley bags", color: "text-blue-600" },
  { Icon: Timer, title: "Real-Time Flight Tracking", text: "Zero extra waiting charges for delays", color: "text-gray-500" },
  { Icon: Handshake, title: "Nameboard Gate Meet", text: "Chauffeur waits with guest name card", color: "text-amber-500" },
  { Icon: Snowflake, title: "Pre-Cooled AC Cabin", text: "Cabin cooled before you step in", color: "text-sky-500" },
];

const transit = [
  "Jaisalmer Airport (JSA) Pickup",
  "Jaisalmer Railway Station (JSM) Drop",
  "Hotels, Havelis & Fort Stay Transit",
  "Sam & Khuri Desert Camp Transfer",
  "Fixed Transparent Transfer Tariff",
];

const AirportTransfer = () => {
  return (
    <section id="airport-transfer" className="py-10 md:py-16 bg-white font-ubuntu">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="inline-block px-5 py-2 rounded-full bg-[#FBEBD7] border border-[#EBCB9F] text-[#B8500F] text-xs font-bold uppercase tracking-wide mb-5">
            Punctual Station &amp; Airport Mobility
          </span>
          <h2 className="text-3xl md:text-[44px] font-bold text-[#111827] leading-tight mb-5">
            Jaisalmer Airport &amp; Railway{" "}
            <span className="text-[#DD7A0B]">Transfer In Force Urbania</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-7 max-w-2xl mx-auto">
            Skip the chaos of crowded taxi queues. Land at Jaisalmer Airport (JSA) or arrive at Jaisalmer Railway Station with a guaranteed luxury van pickup and massive luggage boot space.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.45fr_1fr] bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.2)]">
          {/* Left */}
          <div className="bg-[#FAF9F5] p-6 md:p-10">
            <h3 className="text-2xl md:text-[28px] font-bold text-[#111827] mb-3">Airport Pickup With Zero Waiting Time</h3>
            <p className="text-sm md:text-[15px] text-gray-600 leading-7 mb-7">
              Whether arriving on a flight or travelling by train, our verified chauffeurs monitor arrival timings in real-time. We provide a placarded greeting at the arrival point and a direct transfer to your hotel, haveli or desert camp.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {perks.map(({ Icon, title, text, color }) => (
                <div key={title} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
                  <Icon className={`w-5 h-5 shrink-0 ${color}`} />
                  <div>
                    <p className="text-[13px] font-bold text-gray-900 leading-tight">{title}</p>
                    <p className="text-[11px] text-gray-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="p-6 md:p-10 flex flex-col lg:border-l-2 lg:border-dashed lg:border-gray-200 border-t-2 border-dashed border-gray-200 lg:border-t-0">
            <p className="text-[11px] font-bold uppercase tracking-wide text-[#B8500F] mb-2">Direct Gate Transit</p>
            <h4 className="text-lg md:text-xl font-bold text-[#111827] mb-5">Airport / Station → Hotels &amp; Camps</h4>
            <ul className="space-y-3 mb-8">
              {transit.map((t) => (
                <li key={t} className="flex items-center gap-2 text-[13px] font-semibold text-gray-800">
                  <Check className="w-4 h-4 text-[#E05912] shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                openWhatsApp("Hi! I need a Force Urbania pickup from Jaisalmer Airport / Railway Station. Please share the details and quote.")
              }
              className="mt-auto w-full h-12 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm transition-colors"
            >
              Reserve Airport Pickup ({CONTACT_INFO.phoneDisplay})
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirportTransfer;
