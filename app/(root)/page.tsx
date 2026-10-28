import type { Metadata } from "next";
import { SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  title: "هندسة الهلال للتجارة والمقاولات · HILAL Engineering",
  alternates: { canonical: `${SITE_URL}/ar/` },
  robots: { index: false },
};

export default function Root() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/ar/" />
      <p style={{ fontFamily: "Tahoma, Arial, sans-serif", padding: 24 }}>
        <a href="/ar/">هندسة الهلال للتجارة والمقاولات</a> · <a href="/en/">HILAL Engineering</a>
      </p>
    </>
  );
}
