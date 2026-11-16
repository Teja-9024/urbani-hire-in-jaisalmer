import { CONTACT_INFO } from "./constants";

export const openWhatsApp = (message: string) => {
  const WHATSAPP_NUMBER = CONTACT_INFO.whatsappNumber;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

export const bookVehicle = (vehicleName: string, vehicleType: string) => {
  const message = `Hi! I'm interested in booking a ${vehicleName} (${vehicleType}). Please share availability and pricing details.`;
  openWhatsApp(message);
};

export const bookTour = (destination: string, tourName: string) => {
  const message = `Hi! I'm interested in the ${tourName} tour to ${destination}. Please share the complete itinerary, pricing, and availability.`;
  openWhatsApp(message);
};

export const requestQuote = (pickup: string, drop: string, date: string, passengers: string) => {
  const message = `Hi! I need a quote for:
📍 Pickup: ${pickup || "Not specified"}
📍 Drop: ${drop || "Not specified"}
📅 Date: ${date || "Not specified"}
👥 Passengers: ${passengers || "Not specified"}

Please share vehicle options and pricing.`;
  openWhatsApp(message);
};

export const generalInquiry = () => {
  const message = "Hi! I'm interested in your vehicle rental services. Please share more details about your offerings.";
  openWhatsApp(message);
};
