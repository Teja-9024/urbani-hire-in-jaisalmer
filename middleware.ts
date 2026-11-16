import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAllSlugs, getModelBySlug } from './lib/slugHelper';
import { allServices } from './lib/servicesData';
import { tourDestinations } from './lib/tourData';

// Helper function to check slugs without full data loading if possible, 
// but here we reuse the logic since data set is small.
function getRewritePath(slug: string): string | null {
    // 1. Check Services
    for (const service of allServices) {
        for (const city of service.cities) {
            // We need to generate the slug to match against the request
            // Re-implement logic or import? Importing `generateServiceSlug` is safe if it has no Node-specific deps.
            // But strict import of `slugHelper` which imports `servicesData` is fine.
            // Let's rely on getModelBySlug logic.
            const model = getModelBySlug(slug);
            if (model && model.type === 'service') {
                return `/services/${slug}`;
            }
            if (model && model.type === 'itinerary') {
                return `/tours/${slug}`;
            }
        }
    }
    // Optimization: The loop above calls `getModelBySlug` repeatedly which is inefficient if specific optimization is needed.
    // Better: Call `getModelBySlug(slug)` ONCE.
    const model = getModelBySlug(slug);
    if (model) {
        if (model.type === 'service') {
            return `/services/${slug}`;
        }
        if (model.type === 'itinerary') {
            return `/tours/${slug}`;
        }
    }
    return null;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Ignore static files and API
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        pathname.startsWith('/images') ||
        pathname.includes('.') // files like favicon.ico, robots.txt
    ) {
        return NextResponse.next();
    }

    // Root page
    if (pathname === '/') {
        return NextResponse.next();
    }

    // Skip middleware for dedicated service routes - let them handle themselves
    // Check NEW SEO-friendly routes FIRST
    const newRoutePatterns = [
        /^\/bus-services\//,
        /^\/taxi-services\//,
        /^\/tempo-traveller\//,
        /^\/force-urbania\//,
        /^\/rajasthan-tours\//,
        /^\/tours\//,
        /^\/vehicles\//,
        /^\/cities\//,
    ];
    
    if (newRoutePatterns.some(pattern => pattern.test(pathname))) {
        return NextResponse.next();
    }
    
    // Skip OLD routes (for backward compatibility)
    const oldRoutePatterns = [
        /^\/mini-bus-service-in-/,
        /^\/force-urbania-in-/,
        /^\/taxi-service-in-/,
        /^\/tempo-traveller-in-/,
        /-tour$/,
    ];
    
    if (oldRoutePatterns.some(pattern => pattern.test(pathname))) {
        return NextResponse.next();
    }

    // Extract slug (remove leading slash)
    const slug = pathname.slice(1);

    // Check if it corresponds to a flat route
    const rewritePath = getRewritePath(slug);

    if (rewritePath) {
        const url = request.nextUrl.clone();
        url.pathname = rewritePath;
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
