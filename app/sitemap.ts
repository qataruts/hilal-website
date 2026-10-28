import type { MetadataRoute } from "next";
import { LOCALES, SITE_URL } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "projects/"];
  return LOCALES.flatMap((lang) =>
    pages.map((p) => ({
      url: `${SITE_URL}/${lang}/${p}`,
      lastModified: "2026-10-28",
      priority: p ? 0.8 : 1,
      alternates: { languages: { ar: `${SITE_URL}/ar/${p}`, en: `${SITE_URL}/en/${p}` } },
    })),
  );
}
