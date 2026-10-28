# HILAL Engineering Trading & Contracting — www.hilalengineering.com

The company website, Arabic first and English (owner, 2026-10-28: «نريد ويبسايت احترافيًا للهلال… نريد الرفع اليوم»).
Built and kept by Athar's web department (rafea `clients/web`).

- **Static:** Next.js 16 with `output: "export"`; `npm run build` writes plain HTML to `out/`, which any
  host serves. No server code and no database.
- **Hosting:** GitHub Pages from `github.com/qataruts/hilal-website` (`.github/workflows/pages.yml` builds
  and publishes on every push to `main`; `public/CNAME` is the domain). DNS on Cloudflare (owner,
  2026-10-28), email on Zoho (MX ×3, SPF and verification kept).
- **Pages:** `/ar/` and `/en/` (home: hero, numbers, principles, what we build, villas step by step,
  projects, contact) and `/ar/projects/`, `/en/projects/`. The bare address sends to `/ar/`.
- **Facts and their sources** (`content/`):
  - `site.ts`: name and CR 133390 and activities from the commercial registry; the manager, Khalid
    Abdulrazzaq Jumaa, and his mobile +974 6620 5634 from the trade licence; the office phone (the UTS
    line), the domain and the email from the owner. No street address until the owner confirms it.
  - `projects.ts` and `copy.ts`: the company's old profile (`../بروفايل هندسة الهلال2.pdf`) — the projects,
    their areas, values and dates, the three principles and the villa service. Nothing added.
- **Images:** `public/projects/` are the profile's own project photos. `public/hero/villa.webp` and
  `steel.webp` are atmosphere images generated with Antigravity on the owner's subscription
  (`HERO-SOURCES.txt`); they are never captioned as the company's projects.
- **Identity:** the logo and letterhead in `uts-data/Hilal/هندسة الهلال/`: burgundy `#8E2550`, charcoal
  `#2F2E33`, rose `#B5386A`.
- **The profile** is the materials department's: `../profile/BRIEF-materials.md`.
