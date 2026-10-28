import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, Factory, Home as HomeIcon, Landmark, PaintRoller, Warehouse } from "lucide-react";
import { COPY } from "@/content/copy";
import { isLocale, whatsapp } from "@/content/site";
import { PROJECTS, VILLAS, VILLA_PHOTOS } from "@/content/projects";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Contact } from "@/components/Contact";

const ICONS = { Home: HomeIcon, Factory, Warehouse, Building2, Landmark, PaintRoller };

/** The projects the home page shows, each with a real photo from the company's profile. */
const FEATURED = ["juices", "plastics", "awamer-shops", "awamer-store", "roads", "fence"];

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = COPY;
  const ar = lang === "ar";
  const villaCount = VILLAS.reduce((n, v) => n + (v.note.ar.startsWith("أربع") ? 4 : v.note.ar.startsWith("ثلاث") ? 3 : 1), 0);
  const villaArea = VILLAS.reduce((n, v) => n + v.area, 0);
  const stats = [
    { n: PROJECTS.filter((p) => p.group === "government").length, label: c.stats.government[lang] },
    { n: PROJECTS.filter((p) => p.group === "industrial").length, label: c.stats.industrial[lang] },
    { n: villaCount, label: c.stats.villas[lang] },
    { n: villaArea.toLocaleString("en-US"), label: c.stats.area[lang] },
  ];
  const Arrow = () => <ArrowLeft size={16} aria-hidden="true" className="flip" />;

  return (
    <>
      {/* ─── The hero: a finished villa at dusk, the motto, and the two ways to begin ─── */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: "url(/hero/villa.webp)" }} aria-hidden="true" />
        <div className="hero__shade" aria-hidden="true" />
        <svg className="hero__wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 120 L0 70 C 240 20 420 110 720 70 C 1020 30 1200 90 1440 50 L1440 120 Z" fill="var(--bg)" />
        </svg>
        <div className="container hero__content">
          <p className="eyebrow">{c.hero.eyebrow[lang]}</p>
          <h1>{c.hero.title[lang]}</h1>
          <p className="hero__lede">{c.hero.lede[lang]}</p>
          <div className="hero__actions">
            <a href={whatsapp(lang)} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
              <WhatsAppIcon /> {c.nav.quote[lang]}
            </a>
            <Link href={`/${lang}/projects/`} className="btn btn--light btn--lg">
              {c.hero.projects[lang]} <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── The record in numbers, all counted from the profile ─── */}
      <section className="container stats" aria-label={c.work.title[lang]}>
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <b className="ltr">{s.n}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ─── About: the three principles ─── */}
      <section className="section" id="about">
        <div className="container about">
          <div className="about__head">
            <p className="kicker">{c.about.kicker[lang]}</p>
            <h2>{c.about.title[lang]}</h2>
            <p>{c.about.lede[lang]}</p>
          </div>
          <ol className="values">
            {c.about.values.map((v, i) => (
              <li key={v.title.en}>
                <span className="values__no ltr">0{i + 1}</span>
                <h3>{v.title[lang]}</h3>
                <p>{v.text[lang]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── What we build ─── */}
      <section className="section section--band" id="services">
        <div className="band__bg" style={{ backgroundImage: "url(/hero/steel.webp)" }} aria-hidden="true" />
        <div className="container band__content">
          <div className="section-head section-head--light">
            <p className="kicker">{c.services.kicker[lang]}</p>
            <h2>{c.services.title[lang]}</h2>
          </div>
          <div className="services">
            {c.services.items.map((s) => {
              const Icon = ICONS[s.icon as keyof typeof ICONS];
              return (
                <article key={s.icon} className="service">
                  <span className="service__icon">
                    <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3>{s.title[lang]}</h3>
                  <p>{s.text[lang]}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Villas, step by step ─── */}
      <section className="section" id="villas">
        <div className="container villa">
          <div className="section-head">
            <p className="kicker">{c.villa.kicker[lang]}</p>
            <h2>{c.villa.title[lang]}</h2>
            <p>{c.villa.lede[lang]}</p>
          </div>
          <ol className="steps">
            {c.villa.steps.map((s, i) => (
              <li key={s.title.en}>
                <span className="steps__no ltr">{i + 1}</span>
                <h3>{s.title[lang]}</h3>
                <p>{s.text[lang]}</p>
              </li>
            ))}
          </ol>
          <div className="villa__strip">
            {VILLA_PHOTOS.slice(0, 4).map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={ar ? "فيلا من مشاريعنا أثناء البناء" : "One of our villas under construction"} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <p className="kicker">{c.work.kicker[lang]}</p>
              <h2>{c.work.title[lang]}</h2>
            </div>
            <Link href={`/${lang}/projects/`} className="link-more">
              {c.work.all[lang]} <Arrow />
            </Link>
          </div>
          <div className="cards">
            {FEATURED.map((key) => {
              const p = PROJECTS.find((x) => x.key === key)!;
              return (
                <Link key={key} href={`/${lang}/projects/#${key}`} className="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.photos[0]} alt="" loading="lazy" />
                  <span className="card__body">
                    <span className="card__title">{p.title[lang]}</span>
                    <span className="card__fact">{p.facts[0][lang]}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Contact lang={lang} />
    </>
  );
}
