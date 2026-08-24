export type PackageTier = {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  blurb: string;
  pages: string;
  features: string[];
  amc: string;
  highlight?: boolean;
};

export const websitePackages: PackageTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 5000,
    priceLabel: "₹5,000",
    blurb: "Simple online presence for a shop or solo brand.",
    pages: "1 page (or Home + Contact)",
    features: [
      "Mobile-friendly layout",
      "Contact form",
      "Basic SEO (title & description)",
      "Domain / hosting setup help (client pays domain & hosting)",
      "1 revision round",
    ],
    amc: "AMC from year 2: ₹3,000 / year",
  },
  {
    id: "basic",
    name: "Basic",
    price: 8000,
    priceLabel: "₹8,000",
    blurb: "Proper brochure site for a small business.",
    pages: "Up to 4 pages (Home, About, Services, Contact)",
    features: [
      "Logo placement + simple gallery",
      "Contact form",
      "Google Map (if you have an address)",
      "Basic SEO",
      "2 revision rounds",
    ],
    amc: "AMC from year 2: ₹3,000 / year",
  },
  {
    id: "standard",
    name: "Standard",
    price: 12000,
    priceLabel: "₹12,000",
    blurb: "Full company website with stronger structure.",
    pages: "Up to 7 pages (Services list, Gallery, FAQ, Contact, etc.)",
    features: [
      "Polished sections & light motion",
      "Enquiry / contact form",
      "Mobile & speed polish",
      "Basic Google Business tips",
      "3 revision rounds",
    ],
    amc: "AMC from year 2: ₹4,000 / year",
    highlight: true,
  },
  {
    id: "business",
    name: "Business",
    price: 15000,
    priceLabel: "₹15,000",
    blurb: "Larger site or light catalog — no payment cart.",
    pages: "Up to 10 pages or small catalog (≤15 items)",
    features: [
      "Stronger UI + portfolio / case section",
      "Contact form",
      "SEO basics per page + Analytics setup",
      "Favicon + social share image",
      "3 revision rounds",
      "30 days free bug-fix support",
    ],
    amc: "AMC from year 2: ₹5,000 / year",
  },
];

export const packageAddons = [
  { name: "Extra page", price: "₹800 – ₹1,500" },
  { name: "Simple logo design", price: "₹1,500 – ₹3,000" },
  { name: "Domain (client)", price: "At cost (~₹700 – ₹1,200 / year)" },
  { name: "Hosting", price: "At cost or ₹1,000 – ₹2,000 / year" },
  { name: "Login / payments / booking app", price: "Custom quote (usually ₹25,000+)" },
];

export const packageNotes = [
  "These packages are for brochure / marketing websites.",
  "Custom web apps, admin panels, and mobile apps are quoted separately.",
  "AMC covers small text/image updates and upkeep — not full redesigns or big new features.",
];
