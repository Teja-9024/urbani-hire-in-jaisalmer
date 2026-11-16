"use client";

import { type MenuType } from "@/lib/config/serviceConfig";
import { getMenuByType } from "@/lib/config/menuConfig";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DynamicMenuProps {
  menuType: MenuType;
  activeCity?: string;
}

export default function DynamicMenu({ menuType, activeCity }: DynamicMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menu = getMenuByType(menuType);

  if (!menu) return null;

  return (
    <div className="bg-white border-b sticky top-0 z-50">
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-16">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-900">{menu.label}</h2>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center gap-2 text-gray-700 hover:text-primary"
          >
            <span className="text-sm font-medium">Cities</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Desktop Menu - Horizontal scroll */}
        <div className="hidden md:block pb-4 -mx-4 px-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {menu.subMenus.map((item) => {
              const url = item.urlGenerator(item.citySlug);
              const isActive = activeCity === item.citySlug;
              
              return (
                <Link
                  key={item.citySlug}
                  href={url}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium uppercase transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4 max-h-64 overflow-y-auto">
            <div className="grid grid-cols-1 gap-2">
              {menu.subMenus.map((item) => {
                const url = item.urlGenerator(item.citySlug);
                const isActive = activeCity === item.citySlug;
                
                return (
                  <Link
                    key={item.citySlug}
                    href={url}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium uppercase transition-colors ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
