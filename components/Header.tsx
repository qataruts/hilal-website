"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { COPY } from "@/content/copy";
import { SHORT, whatsapp, type Locale } from "@/content/site";
import { Logo } from "./Logo";

/** The header: the mark, the sections, the other language and «request a quote». */
export function Header({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const n = COPY.nav;
  const links = [
    { href: `/${lang}/#about`, label: n.about[lang] },
    { href: `/${lang}/#services`, label: n.services[lang] },
    { href: `/${lang}/#villas`, label: n.villas[lang] },
    { href: `/${lang}/projects/`, label: n.projects[lang] },
    { href: `/${lang}/#contact`, label: n.contact[lang] },
  ];
  const other = lang === "ar" ? "en" : "ar";
  return (
    <header className="header">
      <div className="container header__bar">
        <Link href={`/${lang}/`} className="header__brand" aria-label={SHORT[lang]}>
          <Logo lang={lang} />
        </Link>
        <nav className={`header__nav${open ? " is-open" : ""}`} aria-label={n.menu[lang]}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Link href={`/${other}/`} className="header__lang" lang={other}>
            {n.lang[lang]}
          </Link>
        </nav>
        <a href={whatsapp(lang)} target="_blank" rel="noopener noreferrer" className="btn btn--primary header__cta">
          {n.quote[lang]}
        </a>
        <button type="button" className="header__toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={n.menu[lang]}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
