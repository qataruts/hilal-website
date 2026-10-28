import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { COPY } from "@/content/copy";
import { pageMeta } from "@/content/meta";
import { CR_NUMBER, EMAIL, LOCALES, MOBILE, NAME, PHONE, SITE_URL, isLocale } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const font = IBM_Plex_Sans_Arabic({ subsets: ["arabic", "latin"], weight: ["400", "500", "700"], display: "swap", variable: "--font" });

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    metadataBase: new URL(SITE_URL),
    icons: { icon: "/favicon-32.png", apple: "/apple-touch-icon.png" },
    ...pageMeta(lang, "", COPY.meta.title[lang], COPY.meta.description[lang]),
  };
}

export const viewport: Viewport = { themeColor: "#8e2550" };

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const org = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: NAME.en,
    alternateName: NAME.ar,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/og.jpg`,
    foundingDate: "2019-04-24",
    email: EMAIL,
    telephone: [PHONE.e164, MOBILE.e164],
    areaServed: { "@type": "Country", name: "Qatar" },
    address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
    identifier: `CR ${CR_NUMBER}`,
  };
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} className={font.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
