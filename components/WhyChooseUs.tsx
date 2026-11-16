import { Shield, Clock, Wallet, HeadphonesIcon, MapPin, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Reliable",
    description: "All vehicles undergo regular maintenance with experienced, verified drivers ensuring your safety.",
  },
  {
    icon: Wallet,
    title: "Best Price Guarantee",
    description: "Transparent pricing with no hidden charges. Get the best rates for premium travel experiences.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Punctuality is our priority. We ensure timely pickups and drops for all your journeys.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you before, during, and after your trip.",
  },
  {
    icon: MapPin,
    title: "Pan India Coverage",
    description: "From Kashmir to Kanyakumari, we provide services across all major cities and tourist destinations.",
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "Luxury amenities, comfortable seating, and top-notch service for an unforgettable journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding pt-12 bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 text-primary text-sm font-medium mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground mb-4">
            Why Choose Urbania Hire India
          </h2>
          <div className="w-24 h-1 bg-[#FF8C00] rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-secondary-foreground/70">
            We're committed to making your journey comfortable, safe, and memorable with our premium services and dedicated team.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 md:p-8 hover:bg-secondary-foreground/10 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
