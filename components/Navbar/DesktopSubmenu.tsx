import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface City {
  name: string;
  slug: string;
}

interface ServiceData {
  name: string;
  cities: City[];
}

interface DesktopSubmenuProps {
  service: ServiceData;
  isOpen: boolean;
  urlPattern: (citySlug: string) => string;
}

export function DesktopSubmenu({ service, isOpen, urlPattern }: DesktopSubmenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 pt-2 min-w-max z-50">
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in">
        <div className="px-2 py-2">
          <div className="font-bold text-xs uppercase text-gray-500 mb-2">
            {service.name}
          </div>
          <div className="space-y-1">
            {service.cities.map((city) => (
              <Link
                key={city.slug}
                href={urlPattern(city.slug)}
                className="group flex items-center justify-between px-2 py-2 text-sm font-bold uppercase text-gray-700 hover:bg-primary/5 hover:text-primary border-b border-gray-100 last:border-0 transition-all"
              >
                {city.name}
                <ChevronRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
