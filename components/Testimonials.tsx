"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Jaipur",
    rating: 5,
    text: "Excellent service! The 17 Seater Urbania was in pristine condition and our driver was very professional. Made our family trip to Udaipur absolutely memorable. Comfortable seats and smooth ride.",
    trip: "Jaipur to Udaipur",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Udaipur",
    rating: 5,
    text: "Booked a 12 Seater Urbania for our corporate team outing to Mount Abu. The entire experience was seamless from booking to drop. Well-maintained vehicle and courteous driver. Highly recommended!",
    trip: "Corporate Trip to Mount Abu",
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Jodhpur",
    rating: 5,
    text: "We hired their 15 Seater Urbania for a week-long Rajasthan heritage tour covering Jaipur, Udaipur, and Jaisalmer. The vehicle was comfortable, driver was knowledgeable about routes, and pricing was transparent.",
    trip: "Rajasthan Heritage Tour",
  },
  {
    id: 4,
    name: "Sunita Verma",
    location: "Jaisalmer",
    rating: 5,
    text: "Used their 17 Seater Urbania for my daughter's wedding guests transportation from Jaisalmer to Jodhpur. Impeccable service, on-time pickups, and the vehicles were spotless. Thank you Urbania Hire in Jaisalmer!",
    trip: "Wedding Transport",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Bikaner",
    rating: 5,
    text: "Best Urbania rental service in Rajasthan. We've been using them for all our corporate events and client visits. Professional drivers, well-maintained fleet, and excellent customer support. Truly reliable!",
    trip: "Corporate Events",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block px-5 py-2 text-[#E05912] text-sm font-bold uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-[#FF8C00] rounded-full mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-muted-foreground">
            Don't just take our word for it. Here's what our valued customers have to say.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 md:w-24 md:h-24 text-[#E05912]/10" />

            {/* Rating */}
            <div className="flex gap-1 mb-4 md:mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-[#F9B250] text-[#F9B250]" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-700 text-base md:text-xl leading-relaxed mb-6 md:mb-8 relative z-10 min-h-[80px] md:min-h-[100px]">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#E05912] to-[#FF8C00] flex items-center justify-center shadow-lg">
                <span className="text-xl md:text-2xl font-bold text-white">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg md:text-xl">{testimonials[currentIndex].name}</p>
                <p className="text-sm md:text-base text-gray-500">{testimonials[currentIndex].location} • {testimonials[currentIndex].trip}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-[#E05912] hover:shadow-xl transition-all z-20"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-[#E05912] hover:shadow-xl transition-all z-20"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#E05912] w-6 md:w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Review Badge */}
        <div className="flex justify-center mt-8 md:mt-10">
          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-md border border-gray-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F9B250] text-[#F9B250]" />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-900">4.9/5</span>
            <span className="text-sm text-gray-500">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
