import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://hapyzo.com/sitemap.xml",
    host: "https://hapyzo.com",
  };
}
