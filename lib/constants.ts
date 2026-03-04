export const SITE = {
  name: "Tridan General Construction",
  phone: "(416) 700-4230",
  phoneRaw: "4167004230",
  email: "hello@tridanconstruction.com",
  serviceAreas: ["Mississauga", "Toronto", "Milton"] as const,
  serviceAreaStr: "Mississauga, Toronto, Milton",
  baseUrl: "https://tridangeneralconstruction.com",
} as const;

export const TRUST_BADGES = [
  "Licensed",
  "Insured",
  "Detailed Quotes",
  "Clean Worksites",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const LOCATION_PAGES = [
  { href: "/mississauga-home-renovations", city: "Mississauga", label: "Mississauga Renovations" },
  { href: "/toronto-home-renovations", city: "Toronto", label: "Toronto Renovations" },
  { href: "/milton-home-renovations", city: "Milton", label: "Milton Renovations" },
] as const;

export const SERVICES = [
  {
    id: "kitchen",
    title: "Kitchen Renovations",
    description: "Full kitchen remodels, cabinetry, countertops, and layout updates for modern living.",
    benefit: "More storage, better flow, higher home value.",
    commonUpgrades: ["New cabinetry & countertops", "Island & open layout", "Backsplash & lighting", "Appliances"],
    href: "/services#kitchen",
  },
  {
    id: "bathroom",
    title: "Bathroom Renovations",
    description: "Bathroom remodels, tile work, vanities, and plumbing upgrades.",
    benefit: "Durable finishes, modern fixtures, spa-like feel.",
    commonUpgrades: ["Walk-in shower or tub", "Double vanity", "Heated floors", "Tile & fixtures"],
    href: "/services#bathroom",
  },
  {
    id: "basement",
    title: "Basement Finishing",
    description: "Turn your basement into livable space with proper insulation and finishes.",
    benefit: "Extra living space without moving.",
    commonUpgrades: ["Rec room & bedroom", "Full bathroom", "Egress & permits", "Insulation & drywall"],
    href: "/services#basement",
  },
  {
    id: "flooring",
    title: "Flooring",
    description: "Hardwood, tile, laminate, and luxury vinyl installation.",
    benefit: "Quality install, lasting beauty.",
    commonUpgrades: ["Engineered hardwood", "Tile (bath, entry)", "LVP & laminate", "Underlayment & trim"],
    href: "/services#flooring",
  },
  {
    id: "painting",
    title: "Painting",
    description: "Interior and exterior painting for a fresh, professional finish.",
    benefit: "Clean lines, premium paint, fast turnaround.",
    commonUpgrades: ["Whole-home repaint", "Trim & doors", "Exterior refresh", "Colour consultation"],
    href: "/services#painting",
  },
  {
    id: "full-home",
    title: "Full Home Renovations",
    description: "Complete home transformations from concept to completion.",
    benefit: "One team, one timeline, one quote.",
    commonUpgrades: ["Kitchen + bath + floors", "Open concept", "Structural updates", "Full project management"],
    href: "/services#full-home",
  },
] as const;

export const PROCESS_STEPS = [
  { step: 1, title: "Request Estimate", description: "Submit your project details or call us for a free consultation." },
  { step: 2, title: "On-site Consultation", description: "We visit your property to assess scope and discuss your vision." },
  { step: 3, title: "Detailed Quote", description: "Receive a clear, itemized quote with no hidden fees." },
  { step: 4, title: "Build & Final Walkthrough", description: "Our team gets to work with clear timelines; we walk you through the finished result." },
] as const;

export const WHY_TRIDAN = [
  { title: "Clear timelines", description: "You know when we start and when we finish." },
  { title: "Transparent quotes", description: "No surprise pricing. Itemized, easy to understand." },
  { title: "Skilled workmanship", description: "Quality materials and experienced hands." },
  { title: "Communication you can trust", description: "We keep you informed at every step." },
] as const;

export const GUARANTEE_BULLETS = [
  "Clean worksites — we tidy as we go",
  "Quality materials — we use trusted suppliers",
  "Clear communication — updates when you need them",
] as const;

export const REVIEWS = [
  { quote: "Professional from start to finish. Our kitchen looks amazing and the timeline was respected.", author: "Sarah M.", city: "Mississauga", rating: 5 },
  { quote: "Transparent pricing and quality work. We hired Tridan for our basement and would do it again.", author: "James K.", city: "Toronto", rating: 5 },
  { quote: "Great communication and attention to detail. Our bathroom renovation exceeded expectations.", author: "Lisa T.", city: "Milton", rating: 5 },
  { quote: "They showed up on time, kept the site clean, and the quote was exactly what we agreed on.", author: "Mike R.", city: "Mississauga", rating: 5 },
] as const;

export const SOCIAL_PROOF = {
  rating: 4.9,
  reviewCount: 127,
  label: "Based on homeowner reviews",
} as const;

export const PROJECTS = [
  { id: "1", title: "Modern Kitchen Remodel", category: "Kitchen", results: ["New cabinetry + quartz counters", "Open layout + island"] },
  { id: "2", title: "Spa-like Bathroom", category: "Bathroom", results: ["Walk-in shower + heated floor", "Double vanity"] },
  { id: "3", title: "Finished Basement", category: "Basement", results: ["Rec room + bedroom", "Full bathroom"] },
  { id: "4", title: "Open Concept Living", category: "Full Home", results: ["Kitchen-dining flow", "New flooring throughout"] },
  { id: "5", title: "Hardwood & Tile", category: "Flooring", results: ["Engineered hardwood", "Tile in entry & bath"] },
  { id: "6", title: "Fresh Interior Paint", category: "Painting", results: ["Whole-home repaint", "Trim refresh"] },
  { id: "7", title: "Chef Kitchen", category: "Kitchen", results: ["Custom cabinets", "Pro appliances"] },
  { id: "8", title: "Main Floor Revamp", category: "Full Home", results: ["New floors + paint", "Updated lighting"] },
] as const;

export const FAQ_ITEMS = [
  { q: "What do renovations typically cost?", a: "Costs vary by scope—kitchen and bathroom renovations, basement finishing, and full home projects each have different ranges. We provide free, no-obligation estimates so you get a clear quote before committing." },
  { q: "Do I need to pay a deposit?", a: "We typically ask for a deposit to secure materials and schedule. The amount and timing are outlined in your quote so there are no surprises." },
  { q: "Do you handle permits?", a: "Yes. For work that requires permits (e.g. structural, plumbing, electrical), we guide you through the process and work with local requirements in Mississauga, Toronto, and Milton." },
  { q: "How long will my project take?", a: "Timelines depend on scope. We give you an estimated schedule in your quote and keep you updated if anything changes." },
  { q: "Who supplies the materials?", a: "We can supply materials as part of the project (included in the quote) or work with materials you prefer. We’ll confirm this when we scope your project." },
  { q: "Is there a warranty?", a: "We stand behind our work. Warranty details are included in your contract so you know what’s covered." },
  { q: "How disruptive is the work? Will my home be messy?", a: "We protect work areas and tidy as we go. We’ll explain what to expect for your specific project during the consultation." },
  { q: "How do we stay in touch during the project?", a: "We communicate by phone, text, or email—whatever you prefer. You’ll have a direct point of contact and clear next steps at each stage." },
] as const;
