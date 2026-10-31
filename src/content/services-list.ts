/**
 * Lightweight service definitions for the /services/[slug] pages.
 * Roof Repairs keeps its own detailed flagship page; these cover the rest.
 * Each `problemId` must exist in site.config problemSelector for quote preselect.
 */
export interface ServiceSummary {
  slug: string;
  name: string;
  /** Short line for the services index card. */
  tagline: string;
  /** SEO/meta description. */
  metaDescription: string;
  h1: string;
  intro: string;
  commonProblems: string[];
  /** Quote preselect target (existing problem id). */
  problemId: string;
}

export const services: ServiceSummary[] = [
  {
    slug: "flat-roofing",
    name: "Flat Roofing",
    tagline: "EPDM, felt and GRP flat roofs that last.",
    metaDescription:
      "Flat roofing across Newcastle and the North East — EPDM rubber, felt and GRP fibreglass flat roofs, repairs and replacements with long-term guarantees.",
    h1: "Flat roofing in Newcastle and the North East",
    intro:
      "Flat roof leaking, blistering or past its best? We install and repair EPDM rubber, felt and GRP fibreglass flat roofs built to shrug off North East weather — with a clear price agreed before we start.",
    commonProblems: [
      "Leaking or ponding flat roof",
      "Blistered, cracked or lifting felt",
      "Flat roof on an extension or garage",
      "Old felt roof past its life",
      "New flat roof for a dormer or porch",
    ],
    problemId: "flat-roof",
  },
  {
    slug: "re-roofing",
    name: "Re-Roofing & New Roofs",
    tagline: "A full, watertight roof built to last.",
    metaDescription:
      "Re-roofing and new roof installation across Newcastle and the North East — full roof replacements with new felt, battens and tiles or slate.",
    h1: "Re-roofing & new roofs",
    intro:
      "When patching no longer makes sense, a full re-roof gives you a warm, watertight roof for decades. We strip the old covering and rebuild with new felt, battens and tiles or slate, tidily and to a price agreed up front.",
    commonProblems: [
      "Roof that needs constant repairs",
      "Old, worn or sagging roof covering",
      "Widespread slipped or broken tiles",
      "Buying or selling and the roof needs doing",
      "A new roof for an extension",
    ],
    problemId: "something-else",
  },
  {
    slug: "tile-and-slate",
    name: "Tile & Slate Roofing",
    tagline: "Slipped, cracked or missing — put right.",
    metaDescription:
      "Tile and slate roof repairs across Newcastle and the North East — slipped, cracked and missing tiles, ridge tiles re-bedded and roofs made watertight.",
    h1: "Tile & slate roof repairs",
    intro:
      "A few slipped or missing tiles can let water in fast. We replace cracked and missing tiles and slates, re-bed loose ridge tiles and point up the roof so it's watertight again.",
    commonProblems: [
      "Slipped, cracked or missing tiles",
      "Tiles blown off in high winds",
      "Loose or cracked ridge tiles",
      "Slate roof shedding slates",
      "Tiles found in the garden after a storm",
    ],
    problemId: "missing-tiles",
  },
  {
    slug: "gutters-fascias-soffits",
    name: "Gutters, Fascias & Soffits",
    tagline: "Clear water away from your home.",
    metaDescription:
      "Guttering, fascias and soffits across Newcastle and the North East — repairs, cleaning and new uPVC to stop overflow and protect your walls.",
    h1: "Gutters, fascias & soffits",
    intro:
      "Overflowing gutters and rotten fascias let water run down your walls and cause damp. We clear, repair and replace guttering, fascias and soffits with clean new uPVC that keeps water where it belongs.",
    commonProblems: [
      "Gutters overflowing or leaking at the joints",
      "Sagging or broken guttering",
      "Rotten or peeling fascias and soffits",
      "Water running down the external wall",
      "Blocked gutters full of moss and leaves",
    ],
    problemId: "gutters-fascias",
  },
  {
    slug: "chimney-and-leadwork",
    name: "Chimney & Leadwork",
    tagline: "Stacks, flashing and valleys sealed.",
    metaDescription:
      "Chimney repairs and leadwork across Newcastle and the North East — repointing, lead flashing, valleys and making chimney stacks watertight.",
    h1: "Chimney repairs & leadwork",
    intro:
      "A lot of roof leaks start at the chimney or around worn lead flashing. We repoint weathered stacks, renew lead flashing and valleys, and seal the detail work that keeps water out.",
    commonProblems: [
      "Leak appearing near the chimney",
      "Cracked or missing flashing",
      "Weathered or crumbling chimney mortar",
      "Leaking valley between two roofs",
      "Damp patch on a chimney breast",
    ],
    problemId: "leaking-roof",
  },
  {
    slug: "emergency-roofing",
    name: "Emergency Roofing",
    tagline: "Storm damage and leaks that can't wait.",
    metaDescription:
      "Emergency roofer across Newcastle and the North East — storm damage, sudden leaks and blown-off tiles made safe and watertight fast.",
    h1: "Emergency roofing in Newcastle and the North East",
    intro:
      "Roof leaking into the house, or tiles down after a storm? We prioritise emergencies — making the roof safe and watertight quickly, then talking you through any lasting repair.",
    commonProblems: [
      "Water coming through the ceiling",
      "Tiles blown off in a storm",
      "Damage after high winds or heavy rain",
      "Fallen branch or impact damage",
      "Temporary cover needed urgently",
    ],
    problemId: "storm-damage",
  },
  {
    slug: "roof-cleaning-moss-removal",
    name: "Roof Cleaning & Moss Removal",
    tagline: "A cleaner, longer-lasting roof.",
    metaDescription:
      "Roof cleaning and moss removal across Newcastle and the North East — clearing moss, cleaning tiles and protecting your roof from damage.",
    h1: "Roof cleaning & moss removal",
    intro:
      "Thick moss traps water and blocks gutters, shortening your roof's life. We safely clear moss and debris, clean the tiles and leave your roof looking and performing far better.",
    commonProblems: [
      "Heavy moss growth across the roof",
      "Moss and debris blocking the gutters",
      "Green or stained-looking tiles",
      "Preparing a roof before selling",
      "Prolonging the life of an ageing roof",
    ],
    problemId: "something-else",
  },
];
