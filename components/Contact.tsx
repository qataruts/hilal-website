import { Mail, Phone, Smartphone } from "lucide-react";
import { COPY } from "@/content/copy";
import { EMAIL, MOBILE, PHONE, whatsapp, type Locale } from "@/content/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** How to reach the company: WhatsApp first (the manager's mobile), then the office, the mobile and the email. */
export function Contact({ lang }: { lang: Locale }) {
  const c = COPY.contact;
  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <div>
          <p className="kicker kicker--light">{c.kicker[lang]}</p>
          <h2>{c.title[lang]}</h2>
          <p className="contact__lede">{c.lede[lang]}</p>
          <a href={whatsapp(lang)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
            <WhatsAppIcon /> {c.whatsapp[lang]}
          </a>
        </div>
        <dl className="contact__list">
          <div>
            <dt>
              <Phone size={16} aria-hidden="true" /> {c.phone[lang]}
            </dt>
            <dd>
              <a href={`tel:${PHONE.e164}`} className="ltr">{PHONE.display}</a>
            </dd>
          </div>
          <div>
            <dt>
              <Smartphone size={16} aria-hidden="true" /> {c.mobile[lang]}
            </dt>
            <dd>
              <a href={`tel:${MOBILE.e164}`} className="ltr">{MOBILE.display}</a>
            </dd>
          </div>
          <div>
            <dt>
              <Mail size={16} aria-hidden="true" /> {c.email[lang]}
            </dt>
            <dd>
              <a href={`mailto:${EMAIL}`} className="ltr">{EMAIL}</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

