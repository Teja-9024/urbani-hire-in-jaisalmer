import type { Metadata, Viewport } from "next";
import { Rubik, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const rubik = Rubik({
    subsets: ['latin'],
    variable: '--font-rubik',
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
    weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#E05912',
};

export const metadata: Metadata = {
    metadataBase: new URL('https://urbaniahireindia.com'),
    title: {
        default: "Urbania Hire India | Force Urbania 12 15 17 Seater Rental",
        template: "%s | Urbania Hire India"
    },
    description: "Urbania hire in India — Book Force Urbania 12, 15, 17 seater rental across India. Premium Urbania hire in Jaipur, Delhi, Udaipur, Jodhpur, Jaisalmer, Agra, Bikaner. Best rates for Rajasthan tours, weddings, corporate events. 24/7 support.",
    keywords: [
        "Urbania hire in India",
        "Urbania hire in Rajasthan",
        "Urbania hire in Delhi",
        "Force Urbania rental in India",
        "17 seater Urbania hire",
        "Force Urbania hire India",
        "12 seater Urbania hire",
        "15 seater Urbania hire",
        "Force Urbania rental Rajasthan",
        "Urbania 17 seater hire",
        "Force Urbania in Jaipur",
        "Force Urbania in Udaipur",
        "Force Urbania in Jodhpur",
        "Force Urbania in Jaisalmer",
        "Force Urbania in Mount Abu",
        "Force Urbania in Bikaner",
        "Force Urbania in Delhi",
        "Force Urbania in Agra",
        "Force Urbania in Pushkar",
        "tempo traveller rental India",
        "tempo traveller rental Rajasthan",
        "luxury van rental Jaipur",
        "luxury van rental Delhi",
        "Urbania rental Rajasthan",
        "group travel India",
        "golden triangle tour by bus",
        "Rajasthan tour by Urbania",
        "wedding bus rental India",
        "corporate bus rental India",
        "corporate bus rental Rajasthan",
        "wedding bus hire Rajasthan",
        "tour bus rental Jaipur",
        "premium tempo traveller Rajasthan",
        "Rajasthan group travel",
        "Toyota Innova rental India",
        "Toyota Crysta rental",
        "Innova Crysta hire Delhi",
        "luxury car rental Rajasthan",
        "delhi to manali bus rental",
        "delhi to agra force urbania",
        "mini bus rental India"
    ],
    authors: [{ name: "Urbania Hire India" }],
    creator: "Urbania Hire India",
    publisher: "Urbania Hire India",
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: ['/favicon.ico'],
    },
    manifest: '/manifest.json',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://urbaniahireindia.com',
        siteName: 'Urbania Hire India',
        title: 'Urbania Hire in India | Force Urbania Rental | 12 15 17 Seater',
        description: 'Urbania hire in India — Book Force Urbania 12, 15, 17 seater rental across Rajasthan & Delhi. Best rates for tours, weddings & corporate events.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Force Urbania Luxury Van Rental India',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Urbania Hire in India | Force Urbania Rental | 12 15 17 Seater',
        description: 'Urbania hire in India — Book Force Urbania 12, 15, 17 seater rental across Rajasthan & Delhi. Best rates for tours, weddings & corporate events.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    verification: {
        google: 'Ia0xBYN79tKQgygRs5uI6VPr3iFh0WomGSRg4wzfEn4',
    },

    category: 'Travel & Transportation',
};

// JSON-LD Structured Data
const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'LocalBusiness',
            '@id': 'https://urbaniahireindia.com/#business',
            name: 'Urbania Hire India',
            image: 'https://urbaniahireindia.com/og-image.jpg',
            description: 'Premium Force Urbania 12, 15, 17 seater luxury van rental services across Rajasthan for weddings, tours, and corporate events. Serving Jaipur, Udaipur, Jodhpur, Jaisalmer, Mount Abu, Bikaner.',
            url: 'https://urbaniahireindia.com',
            telephone: '+918949304824',
            email: 'ckptours@gmail.com',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressRegion: 'Rajasthan',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 26.9124,
                longitude: 75.7873,
            },
            priceRange: '₹₹₹',
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
            },
            areaServed: [
                {
                    '@type': 'City',
                    name: 'Jaipur'
                },
                {
                    '@type': 'City',
                    name: 'Udaipur'
                },
                {
                    '@type': 'City',
                    name: 'Jodhpur'
                },
                {
                    '@type': 'City',
                    name: 'Jaisalmer'
                },
                {
                    '@type': 'City',
                    name: 'Mount Abu'
                },
                {
                    '@type': 'City',
                    name: 'Bikaner'
                }
            ],
            sameAs: [
                'https://www.facebook.com/CKPariharTourTravels',
                'https://www.instagram.com/ckp_tours',
            ],
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '500',
                bestRating: '5',
            },
        },
        {
            '@type': 'WebSite',
            '@id': 'https://urbaniahireindia.com/#website',
            url: 'https://urbaniahireindia.com',
            name: 'Urbania Hire India',
            description: 'Urbania hire in India - Premium Force Urbania rental services across Rajasthan & Delhi. 12, 15, 17 seater luxury van hire.',
            publisher: {
                '@id': 'https://urbaniahireindia.com/#business',
            },
            hasPart: [
                {
                    '@type': 'SiteNavigationElement',
                    name: '12 Seater Force Urbania',
                    url: 'https://urbaniahireindia.com/12-seater-urbania'
                },
                {
                    '@type': 'SiteNavigationElement',
                    name: '15 Seater Force Urbania',
                    url: 'https://urbaniahireindia.com/15-seater-urbania'
                },
                {
                    '@type': 'SiteNavigationElement',
                    name: '17 Seater Force Urbania',
                    url: 'https://urbaniahireindia.com/17-seater-urbania'
                },
                {
                    '@type': 'SiteNavigationElement',
                    name: 'Toyota Innova Crysta',
                    url: 'https://urbaniahireindia.com/innova-crysta'
                },
                {
                    '@type': 'SiteNavigationElement',
                    name: 'Force Urbania in Jaipur',
                    url: 'https://urbaniahireindia.com/force-urbania-in-jaipur'
                },
                {
                    '@type': 'SiteNavigationElement',
                    name: 'Force Urbania in Udaipur',
                    url: 'https://urbaniahireindia.com/force-urbania-in-udaipur'
                },
                {
                    '@type': 'SiteNavigationElement',
                    name: 'Force Urbania in Jodhpur',
                    url: 'https://urbaniahireindia.com/force-urbania-in-jodhpur'
                },
                {
                    '@type': 'SiteNavigationElement',
                    name: 'Force Urbania in Jaisalmer',
                    url: 'https://urbaniahireindia.com/force-urbania-in-jaisalmer'
                },
                {
                    '@type': 'SiteNavigationElement',
                    name: 'Force Urbania in Mount Abu',
                    url: 'https://urbaniahireindia.com/force-urbania-in-mount-abu'
                },
                {
                    '@type': 'SiteNavigationElement',
                    name: 'Force Urbania in Bikaner',
                    url: 'https://urbaniahireindia.com/force-urbania-in-bikaner'
                },
            ],
        },
        {
            '@type': 'Service',
            serviceType: 'Vehicle Rental',
            provider: {
                '@id': 'https://urbaniahireindia.com/#business',
            },
            areaServed: {
                '@type': 'Country',
                name: 'India',
            },
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Vehicle Rental Services',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            serviceType: 'Vehicle Rental Service',
                            name: '12 Seater Force Urbania',
                            description: 'Premium 12 seater Force Urbania van for group tours and corporate travel',
                            image: 'https://urbaniahireindia.com/vehicles/12-seater/main.jpeg',
                            provider: {
                                '@type': 'Organization',
                                name: 'Urbania Hire India',
                            },
                            areaServed: {
                                '@type': 'Country',
                                name: 'India',
                            },
                        },
                        price: '30',
                        priceCurrency: 'INR',
                        availability: 'https://schema.org/InStock',
                        url: 'https://urbaniahireindia.com/12-seater-urbania',
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            serviceType: 'Vehicle Rental Service',
                            name: '15 Seater Force Urbania',
                            description: 'Spacious 15 seater Force Urbania van ideal for large groups and family tours',
                            image: 'https://urbaniahireindia.com/vehicles/15-seater/main.jpeg',
                            provider: {
                                '@type': 'Organization',
                                name: 'Urbania Hire India',
                            },
                            areaServed: {
                                '@type': 'Country',
                                name: 'India',
                            },
                        },
                        price: '32',
                        priceCurrency: 'INR',
                        availability: 'https://schema.org/InStock',
                        url: 'https://urbaniahireindia.com/15-seater-urbania',
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            serviceType: 'Vehicle Rental Service',
                            name: '17 Seater Force Urbania',
                            description: 'Luxury 17 seater Force Urbania van with AC, pushback seats, and professional driver',
                            image: 'https://urbaniahireindia.com/vehicles/17-seater/main.jpeg',
                            provider: {
                                '@type': 'Organization',
                                name: 'Urbania Hire India',
                            },
                            areaServed: {
                                '@type': 'Country',
                                name: 'India',
                            },
                        },
                        price: '35',
                        priceCurrency: 'INR',
                        availability: 'https://schema.org/InStock',
                        url: 'https://urbaniahireindia.com/17-seater-urbania',
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            serviceType: 'Vehicle Rental Service',
                            name: 'Toyota Innova Crysta',
                            description: 'Premium 7 seater Toyota Innova Crysta with luxury features and superior comfort',
                            image: 'https://urbaniahireindia.com/vehicles/innova/main.jpeg',
                            provider: {
                                '@type': 'Organization',
                                name: 'Urbania Hire India',
                            },
                            areaServed: {
                                '@type': 'Country',
                                name: 'India',
                            },
                        },
                        price: '20',
                        priceCurrency: 'INR',
                        availability: 'https://schema.org/InStock',
                        url: 'https://urbaniahireindia.com/innova-crysta',
                    },
                ],
            },
        },
        {
            '@type': 'ItemList',
            '@id': 'https://urbaniahireindia.com/#cityservices',
            name: 'Force Urbania Rental Services by City',
            description: 'Force Urbania rental available in major cities across India',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    item: {
                        '@type': 'Service',
                        name: 'Force Urbania Rental in Jaipur',
                        description: 'Force Urbania rental in Jaipur for Pink City tours, weddings, and Rajasthan heritage trips',
                        url: 'https://urbaniahireindia.com/force-urbania-in-jaipur',
                        areaServed: {
                            '@type': 'City',
                            name: 'Jaipur'
                        },
                        provider: {
                            '@id': 'https://urbaniahireindia.com/#business'
                        }
                    }
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    item: {
                        '@type': 'Service',
                        name: 'Force Urbania Rental in Udaipur',
                        description: 'Luxury Force Urbania rental in Udaipur for Lake City tours, weddings, and royal palace visits',
                        url: 'https://urbaniahireindia.com/force-urbania-in-udaipur',
                        areaServed: {
                            '@type': 'City',
                            name: 'Udaipur'
                        },
                        provider: {
                            '@id': 'https://urbaniahireindia.com/#business'
                        }
                    }
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    item: {
                        '@type': 'Service',
                        name: 'Force Urbania Rental in Jodhpur',
                        description: 'Force Urbania in Jodhpur for Blue City tours, Mehrangarh Fort visits, and desert tours',
                        url: 'https://urbaniahireindia.com/force-urbania-in-jodhpur',
                        areaServed: {
                            '@type': 'City',
                            name: 'Jodhpur'
                        },
                        provider: {
                            '@id': 'https://urbaniahireindia.com/#business'
                        }
                    }
                },
                {
                    '@type': 'ListItem',
                    position: 4,
                    item: {
                        '@type': 'Service',
                        name: 'Force Urbania Rental in Jaisalmer',
                        description: 'Force Urbania rental in Jaisalmer for Golden City tours, Sam Sand Dunes desert safari',
                        url: 'https://urbaniahireindia.com/force-urbania-in-jaisalmer',
                        areaServed: {
                            '@type': 'City',
                            name: 'Jaisalmer'
                        },
                        provider: {
                            '@id': 'https://urbaniahireindia.com/#business'
                        }
                    }
                },
                {
                    '@type': 'ListItem',
                    position: 5,
                    item: {
                        '@type': 'Service',
                        name: 'Force Urbania Rental in Mount Abu',
                        description: 'Force Urbania rental in Mount Abu for Dilwara Temples, Nakki Lake, hill station tours',
                        url: 'https://urbaniahireindia.com/force-urbania-in-mount-abu',
                        areaServed: {
                            '@type': 'City',
                            name: 'Mount Abu'
                        },
                        provider: {
                            '@id': 'https://urbaniahireindia.com/#business'
                        }
                    }
                },
                {
                    '@type': 'ListItem',
                    position: 6,
                    item: {
                        '@type': 'Service',
                        name: 'Force Urbania Rental in Bikaner',
                        description: 'Force Urbania rental in Bikaner for Junagarh Fort tours, camel safari, desert city exploration',
                        url: 'https://urbaniahireindia.com/force-urbania-in-bikaner',
                        areaServed: {
                            '@type': 'City',
                            name: 'Bikaner'
                        },
                        provider: {
                            '@id': 'https://urbaniahireindia.com/#business'
                        }
                    }
                },
            ]
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${rubik.variable} ${playfair.variable} font-sans`} suppressHydrationWarning>
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-21PM1QRVHD"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-21PM1QRVHD');
                    `}
                </Script>
                
                <Providers>
                    <TooltipProvider>
                        <NavigationProgress />
                        <Navbar />
                        {children}
                        <Footer />
                        <StickyMobileCTA />
                        <Toaster />
                        <Sonner />
                    </TooltipProvider>
                </Providers>
            </body>
        </html>
    );
}
