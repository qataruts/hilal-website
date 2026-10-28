import type { Locale } from "@/content/site";

/** The HILAL mark with its name, as on the company letterhead: «HILAL» in burgundy, the rest in charcoal. */
export function Logo({ lang, onDark = false }: { lang: Locale; onDark?: boolean }) {
  return (
    <span className={`logo${onDark ? " logo--dark" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={onDark ? "/brand/hilal-symbol-on-dark.png" : "/brand/hilal-symbol.png"} alt="" width={34} height={47} className="logo__mark" />
      <span className="logo__text">
        {lang === "ar" ? (
          <>
            <b>هندسة الهلال</b>
            <small>للتجارة والمقاولات</small>
          </>
        ) : (
          <>
            <b>
              <span className="logo__hilal">HILAL</span> Engineering
            </b>
            <small>Trading &amp; Contracting</small>
          </>
        )}
      </span>
    </span>
  );
}
