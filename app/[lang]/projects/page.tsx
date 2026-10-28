import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COPY } from "@/content/copy";
import { GROUPS, PROJECTS, VILLAS, VILLA_PHOTOS } from "@/content/projects";
import { NAME, isLocale } from "@/content/site";
import { pageMeta } from "@/content/meta";
import { Contact } from "@/components/Contact";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return pageMeta(lang, "projects/", `${COPY.projectsPage.title[lang]} | ${NAME[lang]}`, COPY.projectsPage.lede[lang]);
}

/** Every project in the profile, by group, with its photos and its figures. */
export default async function Projects({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const w = COPY.work;
  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1>{COPY.projectsPage.title[lang]}</h1>
          <p>{COPY.projectsPage.lede[lang]}</p>
          <nav className="page-head__tabs">
            {GROUPS.map((g) => (
              <a key={g.key} href={`#${g.key}`}>
                {g.name[lang]}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {GROUPS.map((g, gi) => (
        <section key={g.key} id={g.key} className={`section${gi % 2 ? " section--tint" : ""}`}>
          <div className="container">
            <div className="section-head">
              <h2>{g.name[lang]}</h2>
              <p>{g.line[lang]}</p>
            </div>

            {g.key !== "villas" ? (
              <div className="projects">
                {PROJECTS.filter((p) => p.group === g.key).map((p) => (
                  <article key={p.key} id={p.key} className={`project${p.photos.length ? "" : " project--plain"}`}>
                    {p.photos.length > 0 && (
                      <div className={`project__photos project__photos--${Math.min(p.photos.length, 3)}`}>
                        {p.photos.slice(0, 3).map((src) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img key={src} src={src} alt={p.title[lang]} loading="lazy" />
                        ))}
                      </div>
                    )}
                    <div className="project__body">
                      <h3>{p.title[lang]}</h3>
                      <ul>
                        {p.facts.map((f) => (
                          <li key={f.en}>{f[lang]}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <>
                <div className="gallery">
                  {VILLA_PHOTOS.map((src) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={src} src={src} alt={lang === "ar" ? "فيلا من مشاريعنا أثناء البناء" : "One of our villas under construction"} loading="lazy" />
                  ))}
                </div>
                <h3 className="villas__title">{w.villasTitle[lang]}</h3>
                <ol className="villas">
                  {VILLAS.map((v, i) => (
                    <li key={i}>
                      <b className="ltr">
                        {v.area.toLocaleString("en-US")} {w.area[lang]}
                      </b>
                      <span>{v.note[lang]}</span>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>
        </section>
      ))}

      <Contact lang={lang} />
    </>
  );
}
