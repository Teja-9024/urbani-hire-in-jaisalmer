"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { bookTour } from "@/lib/whatsapp";

interface TourBookingCardProps {
    tourName: string;
    destination: string;
    price: string;
    duration: string;
    distance: string;
    bestTime: string;
}

export default function TourBookingCard({
    tourName,
    destination,
    price,
    duration,
    distance,
    bestTime,
}: TourBookingCardProps) {
    return (
        <div className="sticky top-24 bg-card border rounded-2xl p-6 shadow-card space-y-6">
            <div>
                <h3 className="text-2xl font-display font-bold mb-2">Book This Tour</h3>
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{price}</span>
                </div>
            </div>

            {/* Tour Info */}
            <div className="space-y-3 py-4 border-y">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="font-semibold">{duration}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Distance</span>
                    <span className="font-semibold">{distance}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Best Time</span>
                    <span className="font-semibold">{bestTime}</span>
                </div>
            </div>

            {/* Booking Buttons */}
            <div className="space-y-3">
                <Button
                    onClick={() => bookTour(destination, tourName)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 h-12"
                    size="lg"
                >
                    <Phone className="w-5 h-5" />
                    Book on WhatsApp
                </Button>

                <Button variant="outline" className="w-full gap-2 h-12" size="lg">
                    Customize Trip
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>

            <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground text-center">
                    ✓ Flexible cancellation policy
                    <br />
                    ✓ Instant booking confirmation
                </p>
            </div>
        </div>
    );
}
