import type { Metadata } from "next";
import Link from "next/link";
import { COPY } from "@/content/copy";
import { pageMeta } from "@/content/meta";
import { NAME, SITE_URL } from "@/content/site";

/** The bare address is the one people share, so it carries the Arabic home's title, description and card. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/favicon-32.png", apple: "/apple-touch-icon.png" },
  ...pageMeta("ar", "", COPY.meta.title.ar, COPY.meta.description.ar),
  robots: { index: false, follow: true },
};

export default function Root() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/ar/" />
      <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "Tahoma, Arial, sans-serif", color: "#2f2e33" }}>
        <div style={{ display: "grid", justifyItems: "center", gap: 14, textAlign: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/hilal-symbol.png" alt="" width={48} height={66} />
          <b style={{ fontSize: 22, color: "#8e2550" }}>{NAME.ar}</b>
          <span style={{ fontSize: 15 }}>
            <Link href="/ar/">العربية</Link> · <Link href="/en/">English</Link>
          </span>
        </div>
      </main>
    </>
  );
}
