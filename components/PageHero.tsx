import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

const PageHero = ({ title, subtitle, image = "/images/destinations/jaisalmer-hero.jpg" }: PageHeroProps) => (
  <section className="relative isolate text-white pt-28 md:pt-40 pb-16 md:pb-24 overflow-hidden">
    <Image src={image} alt="" fill priority className="object-cover object-center -z-20" sizes="100vw" />
    <div className="absolute inset-0 bg-gradient-to-br from-orange-700/90 via-orange-600/85 to-yellow-600/80 -z-10" />
    <div className="relative container mx-auto px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
      <p className="text-base md:text-xl max-w-2xl mx-auto opacity-90">{subtitle}</p>
    </div>
  </section>
);

export default PageHero;
