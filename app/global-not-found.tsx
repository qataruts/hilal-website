import type { Metadata } from "next";
import Link from "next/link";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { NAME } from "@/content/site";

const font = IBM_Plex_Sans_Arabic({ subsets: ["arabic", "latin"], weight: ["400", "700"], display: "swap", variable: "--font" });

export const metadata: Metadata = { title: `الصفحة غير موجودة · Page not found | ${NAME.ar}`, robots: { index: false } };

/** An address the site does not have: in both languages, with the way back to each home. */
export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl" className={font.variable}>
      <body>
        <main className="lost">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/hilal-symbol.png" alt="" width={44} height={61} />
          <p className="lost__code ltr">404</p>
          <h1>الصفحة غير موجودة</h1>
          <p lang="en" dir="ltr">This page could not be found.</p>
          <div className="lost__actions">
            <Link href="/ar/" className="btn btn--primary">
              الصفحة الرئيسية
            </Link>
            <Link href="/en/" className="btn btn--outline" lang="en">
              English home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
