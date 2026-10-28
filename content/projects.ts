import type { L } from "./site";

/**
 * The work, as the company's own profile lists it (hilal/بروفايل هندسة الهلال2.pdf, pages 5–19),
 * with the photos that profile carries. Areas and contract values are the profile's; nothing
 * is added. Client names are given where the profile gives them.
 */
export type Group = "government" | "industrial" | "villas";

export interface Project {
  key: string;
  group: Group;
  title: L;
  /** One or two facts: what was built, its size, its state. */
  facts: L[];
  photos: string[];
}

export const GROUPS: { key: Group; name: L; line: L }[] = [
  {
    key: "government",
    name: { ar: "مشاريع حكومية", en: "Government projects" },
    line: { ar: "لإدارتي البحوث الزراعية والحيوانية في وزارة البلدية.", en: "For the agricultural and animal research departments of the Ministry of Municipality." },
  },
  {
    key: "industrial",
    name: { ar: "مصانع ومخازن ومبانٍ تجارية", en: "Factories, warehouses and commercial buildings" },
    line: { ar: "هناجر وهياكل معدنية ومخازن ومعارض وسكن عمال ومكاتب ومحلات.", en: "Hangars, steel structures, warehouses, showrooms, staff housing, offices and shops." },
  },
  {
    key: "villas",
    name: { ar: "فلل سكنية", en: "Residential villas" },
    line: { ar: "من التصميم والترخيص إلى التسليم، بدور أرضي وأول وبنتهاوس وملاحق ومجالس.", en: "From design and permit to handover: ground and first floors, penthouses, annexes and majlis." },
  },
];

export const PROJECTS: Project[] = [
  {
    key: "roads",
    group: "government",
    title: { ar: "تأهيل الطرق الداخلية لمحطة أبحاث البستنة والزراعات المحمية — العطورية", en: "Internal roads rehabilitation, horticulture and protected-farming research station — Al Utouriya" },
    facts: [
      { ar: "لإدارة البحوث الزراعية في وزارة البلدية، بقيمة 459,000 ر.ق", en: "For the Agricultural Research Department, Ministry of Municipality; QAR 459,000" },
      { ar: "أُنجز في 15 يونيو 2024", en: "Completed 15 June 2024" },
    ],
    photos: ["/projects/gov-roads.webp"],
  },
  {
    key: "fence",
    group: "government",
    title: { ar: "سور شبك معدني لمحطة أبحاث روضة الفرس", en: "Steel mesh fence, Rawdat Al Faras research station" },
    facts: [{ ar: "لإدارة البحوث الزراعية في وزارة البلدية، بدأ في أغسطس 2024", en: "For the Agricultural Research Department, Ministry of Municipality; started August 2024" }],
    photos: ["/projects/gov-fence.webp"],
  },
  {
    key: "tape",
    group: "government",
    title: { ar: "تصنيع شريط قياس لقسم البحوث الحيوانية", en: "Measuring tapes for the Animal Research Section" },
    facts: [{ ar: "لوزارة البلدية، بقيمة 129,000 ر.ق", en: "For the Ministry of Municipality; QAR 129,000" }],
    photos: ["/projects/gov-tape.webp"],
  },
  {
    key: "juices",
    group: "industrial",
    title: { ar: "مصنع الدوحة للعصائر والمواد الغذائية", en: "Doha Juices and Foodstuff Factory" },
    facts: [{ ar: "أرض 5,000 م² · هنكار 2,000 م² · إدارة 300 م²", en: "Plot 5,000 m² · hangar 2,000 m² · offices 300 m²" }],
    photos: ["/projects/juices-1.webp", "/projects/juices-2.webp", "/projects/juices-3.webp", "/projects/juices-4.webp"],
  },
  {
    key: "plastics",
    group: "industrial",
    title: { ar: "مصنع العربية للصناعات البلاستيكية", en: "Arabian Plastic Industries Factory" },
    facts: [{ ar: "أرض 6,775 م² · هنكار 3,750 م² · إدارة 240 م²", en: "Plot 6,775 m² · hangar 3,750 m² · offices 240 m²" }],
    photos: ["/projects/plastics-1.webp", "/projects/plastics-2.webp"],
  },
  {
    key: "awamer-store",
    group: "industrial",
    title: { ar: "مخزن ومعرض وسكن عمال ومكاتب — بركة العوامر", en: "Warehouse, showroom, staff housing and offices — Birkat Al Awamer" },
    facts: [{ ar: "أرض 2,000 م² · مخازن 1,235 م² · سكن 368 م² · مكاتب 162 م² · معرض 96 م²", en: "Plot 2,000 m² · warehouses 1,235 m² · housing 368 m² · offices 162 m² · showroom 96 m²" }],
    photos: ["/projects/awamer-store-1.webp", "/projects/awamer-store-2.webp", "/projects/awamer-store-3.webp"],
  },
  {
    key: "awamer-materials",
    group: "industrial",
    title: { ar: "مخزن مواد بناء ومعرض وسكن عمال ومكاتب — بركة العوامر", en: "Building-materials warehouse, showroom, housing and offices — Birkat Al Awamer" },
    facts: [{ ar: "أرض 2,000 م² · مخزن 950 م² وميزانين 950 م² · سكن 375 م²", en: "Plot 2,000 m² · warehouse 950 m² and mezzanine 950 m² · housing 375 m²" }],
    photos: ["/projects/awamer-materials.webp"],
  },
  {
    key: "awamer-shops",
    group: "industrial",
    title: { ar: "محلات تجارية ومكاتب و17 شقة سكنية — بركة العوامر", en: "Shops, offices and 17 apartments — Birkat Al Awamer" },
    facts: [{ ar: "محلات 1,068 م² · مكاتب 655 م² · شقق 1,080 م²", en: "Shops 1,068 m² · offices 655 m² · apartments 1,080 m²" }],
    photos: ["/projects/awamer-shops-1.webp", "/projects/awamer-shops-2.webp"],
  },
  {
    key: "asia-pharma",
    group: "industrial",
    title: { ar: "مصنع آسيا فارما للصناعات الدوائية", en: "Asia Pharma pharmaceutical factory" },
    facts: [{ ar: "هيكل معدني لمصنع بمساحة 3,443 م² على أرض 9,169 م²، مقاولة من الباطن", en: "Steel structure for a 3,443 m² factory on a 9,169 m² plot, as subcontractor" }],
    photos: [],
  },
  {
    key: "acacia",
    group: "industrial",
    title: { ar: "مصنع أكاسيا للصناعات الغذائية", en: "Acacia food industries factory" },
    facts: [{ ar: "هيكل معدني لمصنع بمساحة 1,610 م² ومكاتب 324 م²، مقاولة من الباطن", en: "Steel structure for a 1,610 m² factory and 324 m² of offices, as subcontractor" }],
    photos: [],
  },
  {
    key: "majd",
    group: "industrial",
    title: { ar: "مصنع المجد للمواد الغذائية", en: "Al Majd foodstuff factory" },
    facts: [{ ar: "أرض 3,080 م² · مصنع 1,472 م² · ميزانين 761 م² · إدارة 192 م²", en: "Plot 3,080 m² · factory 1,472 m² · mezzanine 761 m² · offices 192 m²" }],
    photos: [],
  },
];

/** The villas the profile lists, each by its total built area in m². */
export const VILLAS: { area: number; note: L }[] = [
  { area: 1070, note: { ar: "أرضي وأول وبنتهاوس وملحق ومجلس", en: "Ground, first, penthouse, annex and majlis" } },
  { area: 906, note: { ar: "أرضي وأول وبنتهاوس ومجلس", en: "Ground, first, penthouse and majlis" } },
  { area: 838, note: { ar: "أرضي وأول وبنتهاوس وملحق ومجلس", en: "Ground, first, penthouse, annex and majlis" } },
  { area: 690, note: { ar: "أرضي وأول وبنتهاوس وملحق", en: "Ground, first, penthouse and annex" } },
  { area: 2080, note: { ar: "أربع فلل: أرضي وأول وبنتهاوس", en: "Four villas: ground, first and penthouse" } },
  { area: 1896, note: { ar: "ثلاث فلل: أرضي وأول وبنتهاوس وملحق", en: "Three villas: ground, first, penthouse and annex" } },
  { area: 707, note: { ar: "أرضي وأول وبنتهاوس وملحق ومجلس", en: "Ground, first, penthouse, annex and majlis" } },
  { area: 828, note: { ar: "أرضي وأول وبنتهاوس وملحق ومجلس", en: "Ground, first, penthouse, annex and majlis" } },
  { area: 673, note: { ar: "أرضي وأول وبنتهاوس وملحق ومجلس", en: "Ground, first, penthouse, annex and majlis" } },
  { area: 656, note: { ar: "أرضي وأول وبنتهاوس وملحق ومجلس", en: "Ground, first, penthouse, annex and majlis" } },
  { area: 725, note: { ar: "أرضي وأول وبنتهاوس وملحق ومجلس", en: "Ground, first, penthouse, annex and majlis" } },
];

export const VILLA_PHOTOS = ["/projects/villa-1.webp", "/projects/villa-2.webp", "/projects/villa-3.webp", "/projects/villa-4.webp", "/projects/villa-5.webp", "/projects/villa-6.webp", "/projects/villa-7.webp"];
