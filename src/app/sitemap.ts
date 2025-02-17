import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://co-ive.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://co-ive.vercel.app/menu",
      lastModified: new Date(),
    },
    {
      url: "https://co-ive.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://co-ive.vercel.app/gallery",
      lastModified: new Date(),
    },
  ];
}
