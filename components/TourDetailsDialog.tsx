import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, Users, Star, CheckCircle } from "lucide-react";
import { bookTour } from "@/lib/whatsapp";

interface TourDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  destination: {
    name: string;
    landmark: string;
    image: string;
    description: string;
  } | null;
}

const tourDetails: { [key: string]: {
  duration: string;
  bestTime: string;
  groupSize: string;
  rating: number;
  highlights: string[];
  itinerary: string[];
  inclusions: string[];
  price: string;
}} = {
  "Agra": {
    duration: "1-2 Days",
    bestTime: "Oct - Mar",
    groupSize: "2-40 people",
    rating: 4.9,
    highlights: [
      "Sunrise view at Taj Mahal",
      "Agra Fort exploration",
      "Mehtab Bagh sunset point",
      "Local marble crafts shopping"
    ],
    itinerary: [
      "Day 1: Pickup from your location, travel to Agra",
      "Day 2: Taj Mahal sunrise visit, Agra Fort, Mehtab Bagh, return journey"
    ],
    inclusions: [
      "AC Urbania/Bus transportation",
      "Professional driver",
      "Toll and parking charges",
      "24/7 customer support"
    ],
    price: "₹4,500"
  },
  "Jaipur": {
    duration: "2-3 Days",
    bestTime: "Oct - Mar",
    groupSize: "2-40 people",
    rating: 4.8,
    highlights: [
      "Amber Fort elephant ride",
      "Hawa Mahal photography",
      "City Palace museum",
      "Nahargarh Fort sunset"
    ],
    itinerary: [
      "Day 1: Arrive in Jaipur, City Palace & Hawa Mahal visit",
      "Day 2: Amber Fort, Jal Mahal, local bazaar shopping",
      "Day 3: Nahargarh Fort, departure"
    ],
    inclusions: [
      "AC Urbania/Bus transportation",
      "Professional driver",
      "Toll and parking charges",
      "24/7 customer support"
    ],
    price: "₹6,500"
  },
  "Kerala": {
    duration: "4-5 Days",
    bestTime: "Sep - Mar",
    groupSize: "2-40 people",
    rating: 4.9,
    highlights: [
      "Alleppey houseboat stay",
      "Munnar tea plantations",
      "Kathakali dance show",
      "Kochi Fort heritage walk"
    ],
    itinerary: [
      "Day 1: Arrive in Kochi, Fort Kochi exploration",
      "Day 2: Travel to Munnar, tea garden visit",
      "Day 3: Munnar sightseeing, travel to Alleppey",
      "Day 4: Backwater houseboat cruise",
      "Day 5: Return to Kochi, departure"
    ],
    inclusions: [
      "AC Urbania/Bus transportation",
      "Professional driver",
      "Toll and parking charges",
      "24/7 customer support"
    ],
    price: "₹12,000"
  },
  "Varanasi": {
    duration: "2-3 Days",
    bestTime: "Oct - Mar",
    groupSize: "2-40 people",
    rating: 4.7,
    highlights: [
      "Ganga Aarti at Dashashwamedh Ghat",
      "Morning boat ride on Ganges",
      "Sarnath Buddhist site",
      "Ancient temple hopping"
    ],
    itinerary: [
      "Day 1: Arrive in Varanasi, evening Ganga Aarti",
      "Day 2: Morning boat ride, Kashi Vishwanath Temple, Sarnath visit",
      "Day 3: Explore ghats, departure"
    ],
    inclusions: [
      "AC Urbania/Bus transportation",
      "Professional driver",
      "Toll and parking charges",
      "24/7 customer support"
    ],
    price: "₹5,500"
  }
};

const TourDetailsDialog = ({ open, onOpenChange, destination }: TourDetailsDialogProps) => {
  if (!destination) return null;

  const details = tourDetails[destination.name];

  if (!details) return null;

  const handleBookNow = () => {
    bookTour(destination.name, `${destination.name} - ${destination.landmark}`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-foreground">
            {destination.name} Tour - {destination.landmark}
          </DialogTitle>
        </DialogHeader>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
            From {details.price}/person
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span>{details.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{details.bestTime}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span>{details.groupSize}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span>{details.rating} Rating</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground">{destination.description}</p>

        {/* Highlights */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Tour Highlights</h4>
          <div className="grid grid-cols-2 gap-2">
            {details.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Itinerary</h4>
          <div className="space-y-2">
            {details.itinerary.map((day, index) => (
              <div key={index} className="flex gap-3 text-sm">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-medium">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">{day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">What's Included</h4>
          <div className="grid grid-cols-2 gap-2">
            {details.inclusions.map((inclusion, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{inclusion}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Book Button */}
        <Button 
          onClick={handleBookNow}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Book on WhatsApp
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default TourDetailsDialog;
