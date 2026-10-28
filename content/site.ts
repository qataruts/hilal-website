/**
 * HILAL Engineering Trading & Contracting — the facts the site states, each from its source:
 * the name, CR number and activities from the commercial registry (hilal/سجل هندسة الهلال.pdf),
 * the manager and his number from the trade licence (hilal/رخصة تجارية.pdf), and the phone and
 * the addresses from the owner (2026-10-28: «هاتف نفس يو تي اس · موبايل رقم خالد آخره 34 ·
 * www.hilalengineering.com · info@hilalengineering.com»). No street address until the owner
 * confirms the current office.
 */
export const LOCALES = ["ar", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const isLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v);
export type L = Record<Locale, string>;

export const SITE_URL = "https://www.hilalengineering.com";
export const EMAIL = "info@hilalengineering.com";
/** The office phone: the UTS line (owner). */
export const PHONE = { e164: "+97441422241", display: "+974 4142 2241" };
/** The mobile and WhatsApp: Khalid Abdulrazzaq Jumaa, the company's manager (trade licence). */
export const MOBILE = { e164: "+97466205634", display: "+974 6620 5634" };
export const CR_NUMBER = "133390";

export const NAME: L = { ar: "هندسة الهلال للتجارة والمقاولات", en: "HILAL Engineering Trading & Contracting" };
export const SHORT: L = { ar: "هندسة الهلال", en: "HILAL Engineering" };

export function whatsapp(lang: Locale): string {
  const text = lang === "ar" ? "مرحبًا، أودّ طلب عرض سعر لمشروع." : "Hello, I would like a quotation for a project.";
  return `https://wa.me/${MOBILE.e164.slice(1)}?text=${encodeURIComponent(text)}`;
}
