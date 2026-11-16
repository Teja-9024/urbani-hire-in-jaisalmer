import { MetadataRoute } from 'next';
import { generateAllSlugs } from '@/lib/utils/slugParser';
import { tourDestinations } from '@/lib/tourData';
import { getAllBlogSlugs } from '@/lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://urbaniahireindia.com';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    // Generate all service-city pages AND vehicle pages from config
    const allSlugs = generateAllSlugs();
    const allPages: MetadataRoute.Sitemap = allSlugs.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Vehicle detail pages
    const vehicleSlugs = ['12-seater-urbania', '15-seater-urbania', '17-seater-urbania', 'innova-crysta'];
    const vehiclePages: MetadataRoute.Sitemap = vehicleSlugs.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    // Tour itinerary pages (delhi-to-manali, etc.)
    const tourPages: MetadataRoute.Sitemap = tourDestinations.map((tour) => ({
        url: `${baseUrl}/${tour.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    // Blog post pages
    const blogSlugs = getAllBlogSlugs();
    const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...staticPages, ...allPages, ...vehiclePages, ...tourPages, ...blogPages];
}
