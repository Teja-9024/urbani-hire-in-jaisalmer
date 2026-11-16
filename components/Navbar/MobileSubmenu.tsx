import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";

interface City {
  name: string;
  slug: string;
}

interface ServiceData {
  name: string;
  cities: City[];
}

interface MobileSubmenuProps {
  service: ServiceData;
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
  urlPattern: (citySlug: string) => string;
}

export function MobileSubmenu({
  service,
  label,
  isOpen,
  onToggle,
  onLinkClick,
  urlPattern,
}: MobileSubmenuProps) {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="w-full text-lg font-bold uppercase text-foreground hover:text-primary transition-colors pb-2 flex items-center justify-between"
      >
        {label}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pl-4 mt-2 mb-3 space-y-2">
          {service.cities.map((city) => (
            <Link
              key={city.slug}
              href={urlPattern(city.slug)}
              className="group flex items-center justify-between text-sm font-bold uppercase text-gray-700 hover:text-primary py-2 border-b border-gray-100 last:border-0"
              onClick={onLinkClick}
            >
              {city.name}
              <ChevronRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
