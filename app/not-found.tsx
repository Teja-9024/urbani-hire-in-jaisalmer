import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found | Urbania Hire in Jaisalmer",
    description: "The page you are looking for does not exist. Return to Urbania Hire in Jaisalmer homepage for Force Urbania rental services.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-white">
            <div className="text-center px-4">
                <h1 className="mb-4 text-6xl md:text-8xl font-bold text-[#E05912]">404</h1>
                <h2 className="mb-4 text-2xl md:text-3xl font-bold text-gray-900">Page Not Found</h2>
                <p className="mb-8 text-lg text-gray-600 max-w-md mx-auto">
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
                <Link 
                    href="/" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#E05912] to-[#FF8C00] text-white font-bold rounded-xl hover:shadow-lg transition-all"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
