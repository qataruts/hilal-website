import type { Metadata } from "next";
import { NAME, type Locale } from "./site";

/** The card every address shows when its link is shared (WhatsApp, LinkedIn, X): 1200×630, the mark and both names. */
const IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: { ar: "هندسة الهلال للتجارة والمقاولات: مقاولات عامة في قطر", en: "HILAL Engineering Trading & Contracting: general contracting in Qatar" },
};

/** A page's title, description, languages and share card, from its path under `/<lang>/` ("" or "projects/"). */
export function pageMeta(lang: Locale, path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `/${lang}/${path}`, languages: { ar: `/ar/${path}`, en: `/en/${path}`, "x-default": `/ar/${path}` } },
    openGraph: {
      type: "website",
      url: `/${lang}/${path}`,
      siteName: NAME[lang],
      title,
      description,
      locale: lang === "ar" ? "ar_QA" : "en_US",
      alternateLocale: lang === "ar" ? "en_US" : "ar_QA",
      images: [{ url: IMAGE.url, width: IMAGE.width, height: IMAGE.height, alt: IMAGE.alt[lang] }],
    },
    twitter: { card: "summary_large_image", title, description, images: [IMAGE.url] },
  };
}
