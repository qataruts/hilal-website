import { Mail, Phone, Smartphone } from "lucide-react";
import { COPY } from "@/content/copy";
import { CR_NUMBER, EMAIL, MOBILE, NAME, PHONE, type Locale } from "@/content/site";
import { Logo } from "./Logo";

export function Footer({ lang }: { lang: Locale }) {
  const f = COPY.footer;
  const n = COPY.nav;
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo lang={lang} onDark />
          <p className="footer__line">{f.line[lang]}</p>
        </div>
        <nav aria-label={n.menu[lang]} className="footer__links">
          <a href={`/${lang}/#about`}>{n.about[lang]}</a>
          <a href={`/${lang}/#services`}>{n.services[lang]}</a>
          <a href={`/${lang}/#villas`}>{n.villas[lang]}</a>
          <a href={`/${lang}/projects/`}>{n.projects[lang]}</a>
          <a href={`/${lang}/#contact`}>{n.contact[lang]}</a>
        </nav>
        <ul className="footer__contact">
          <li>
            <Phone size={15} aria-hidden="true" /> <a href={`tel:${PHONE.e164}`} className="ltr">{PHONE.display}</a>
          </li>
          <li>
            <Smartphone size={15} aria-hidden="true" /> <a href={`tel:${MOBILE.e164}`} className="ltr">{MOBILE.display}</a>
          </li>
          <li>
            <Mail size={15} aria-hidden="true" /> <a href={`mailto:${EMAIL}`} className="ltr">{EMAIL}</a>
          </li>
        </ul>
      </div>
      <div className="container footer__base">
        <span>
          © 2026 {NAME[lang]}. {f.rights[lang]}
        </span>
        <span>
          {f.cr[lang]} <span className="ltr">{CR_NUMBER}</span>
        </span>
      </div>
    </footer>
  );
}
