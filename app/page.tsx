import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "Force Urbania Hire Rajasthan | 12 15 17 Seater | Jaipur Udaipur Jodhpur Bikaner",
    description: "Book Force Urbania 12/15/17 seater luxury tempo traveller rental in Jaipur, Udaipur, Jodhpur, Jaisalmer, Mount Abu, Bikaner. Best rates for Rajasthan tours, weddings, corporate events. Professional drivers, 24/7 support.",
    keywords: [
        "urbania hire in bikaner",
        "urbania hire in jaipur",
        "urbania hire in rajasthan",
        "force urbania rental bikaner",
        "force urbania rental jaipur",
        "force urbania rental rajasthan",
        "force urbania hire jodhpur",
        "force urbania hire udaipur",
        "force urbania hire jaisalmer",
        "force urbania hire mount abu",
        "force urbania hire ajmer",
        "force urbania hire pushkar",
        "12 seater urbania rajasthan",
        "15 seater urbania rajasthan",
        "17 seater urbania rajasthan",
        "tempo traveller rajasthan",
        "tempo traveller bikaner",
        "tempo traveller jaipur",
        "luxury van rental rajasthan",
        "rajasthan tour vehicle rental",
        "rajasthan tour by force urbania",
        "wedding car rental bikaner",
        "wedding bus rental jaipur",
        "corporate travel rental rajasthan",
        "bikaner to jaipur urbania",
        "jaipur to udaipur tempo traveller",
        "rajasthan group tour bus",
    ],
    alternates: {
        canonical: '/',
    },
};

export default function Home() {
    return <HomeClient />;
}
