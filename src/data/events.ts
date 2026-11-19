export type EventPhoto = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  categoryKey: "birthday" | "wedding" | "haldi" | "styling";
  caption: string;
  objectPosition: string;
  span: string; // masonry sizing
};

export const PHOTOS: EventPhoto[] = [
  {
    id: "gold-birthday",
    src: "/images/event-1-gold-birthday.jpg",
    alt: "Gold sequin Happy Birthday backdrop with metallic gold, white and grey balloon garland and dried palm leaves against navy curtains",
    title: "Gold Sequin Birthday",
    category: "Birthday",
    categoryKey: "birthday",
    caption: "Shimmer sequin wall, neon Happy Birthday sign and an organic gold-white balloon garland — our signature birthday photo wall.",
    objectPosition: "center 40%",
    span: "md:row-span-2",
  },
  {
    id: "house-floral",
    src: "/images/event-2-house-floral.jpg",
    alt: "Two-storey house exterior decorated with red and white rose garlands, hanging floral wreaths and cascading flower strings",
    title: "Home Floral Exterior",
    category: "Wedding & Floral",
    categoryKey: "wedding",
    caption: "Red and white roses across every balcony, hanging wreaths and fairy-light curtains turning the home itself into the venue.",
    objectPosition: "center 45%",
    span: "",
  },
  {
    id: "staircase-floral",
    src: "/images/event-3-staircase-floral.jpg",
    alt: "Home staircase with red and white flower garland along the railing and hanging pink, white and purple flower strings from the ceiling",
    title: "Staircase Floral Styling",
    category: "Wedding & Floral",
    categoryKey: "wedding",
    caption: "A flowing rose garland climbs the staircase while hanging flower strings soften the living room ceiling.",
    objectPosition: "center 55%",
    span: "md:row-span-2",
  },
  {
    id: "welcome-balloons",
    src: "/images/event-4-welcome-balloons.jpg",
    alt: "Blue welcome board for Atharva and Aymaan birthday party framed by blue, purple, gold and white balloons in front of a rose wall",
    title: "Welcome Balloon Board",
    category: "Custom Styling",
    categoryKey: "styling",
    caption: "Blue, purple, gold and rose-gold balloons frame the welcome board against a full rose wall — the first photo every guest takes.",
    objectPosition: "center 45%",
    span: "",
  },
  {
    id: "haldi",
    src: "/images/event-5-haldi.jpg",
    alt: "Haldi ceremony decoration with yellow and teal drapes, neon Haldi sign, marigold garlands and a brass urli bowl in the foreground",
    title: "Haldi Ceremony Decor",
    category: "Haldi",
    categoryKey: "haldi",
    caption: "Mustard and teal drapes, marigold strings and a brass urli — a bright, traditional Haldi setup ready for the ceremony.",
    objectPosition: "center 50%",
    span: "",
  },
  {
    id: "blue-stage",
    src: "/images/event-6-blue-stage.jpg",
    alt: "Outdoor first birthday stage with blue backdrop, blue white and gold balloon arch, number one standee and cake table",
    title: "Blue First-Birthday Stage",
    category: "Birthday",
    categoryKey: "birthday",
    caption: "A royal-blue stage with balloon arch and number-one standee, built for a first-birthday celebration at the venue.",
    objectPosition: "center 45%",
    span: "md:col-span-2",
  },
];

export const photoById = (id: string) => PHOTOS.find((p) => p.id === id)!;

export type Service = {
  id: string;
  name: string;
  photoId: string;
  tagline: string;
  includes: string[];
  note: string;
};

export const SERVICES: Service[] = [
  {
    id: "birthday",
    name: "Birthday Celebrations",
    photoId: "gold-birthday",
    tagline: "Gold sequin walls, neon signs and balloon garlands that make every birthday feel like a premiere.",
    includes: ["Sequin & backdrop walls", "Neon name / Happy Birthday signs", "Organic balloon garlands", "Number & theme standees"],
    note: "Shown: our gold sequin birthday setup with gold, white and grey balloons.",
  },
  {
    id: "wedding",
    name: "Wedding & Floral Styling",
    photoId: "house-floral",
    tagline: "Red and white roses, hanging wreaths and staircase garlands — your home dressed as the venue.",
    includes: ["Full-home floral exteriors", "Staircase & railing garlands", "Hanging flower strings", "Gate & entrance draping"],
    note: "Shown: a two-storey home wrapped in red and white floral garlands.",
  },
  {
    id: "haldi",
    name: "Haldi Ceremonies",
    photoId: "haldi",
    tagline: "Mustard, teal and marigold — a joyful traditional backdrop with the urli ready at its heart.",
    includes: ["Yellow & teal drape backdrops", "Marigold garlands & urli styling", "Traditional diamond hangings", "Neon Haldi signage"],
    note: "Shown: our yellow and teal Haldi backdrop with brass urli and marigolds.",
  },
  {
    id: "custom",
    name: "Custom Celebration Styling",
    photoId: "welcome-balloons",
    tagline: "Welcome boards, rose walls and colour stories built around your names, theme and venue.",
    includes: ["Welcome boards & easels", "Rose & floral walls", "Blue, purple & gold balloon art", "Theme-matched colour palettes"],
    note: "Shown: a blue, purple and gold balloon welcome board for a birthday party.",
  },
];

export type Film = {
  id: string;
  src: string;
  poster: string;
  posterAlt: string;
  title: string;
  subtitle: string;
  duration: string;
};

export const FILMS: Film[] = [
  {
    id: "v11",
    src: "/videos/v11.mp4",
    poster: "/images/event-1-gold-birthday.jpg",
    posterAlt: "Video poster frame — gold sequin birthday backdrop with balloon garland",
    title: "Gold Birthday Reveal",
    subtitle: "Sequin wall, neon sign and balloon garland in motion",
    duration: "0:10",
  },
  {
    id: "v22",
    src: "/videos/v22.mp4",
    poster: "/images/event-2-house-floral.jpg",
    posterAlt: "Video poster frame — house exterior covered in red and white floral garlands",
    title: "Home Floral Transformation",
    subtitle: "The full home exterior dressed in roses and fairy lights",
    duration: "0:10",
  },
  {
    id: "v33",
    src: "/videos/v33.mp4",
    poster: "/images/event-6-blue-stage.jpg",
    posterAlt: "Video poster frame — blue first birthday stage with balloon arch",
    title: "Blue Stage Celebration",
    subtitle: "First-birthday stage with balloon arch and cake table",
    duration: "0:10",
  },
];

export const MILESTONES = [
  {
    years: "1st",
    label: "First Anniversary",
    title: "A fresh start, beautifully framed",
    text: "Soft florals, a clean backdrop and your names in lights — the gold sequin styling in our photo pairs perfectly with a first-anniversary photo wall.",
    points: ["Photo wall with your journey", "Fresh flower accents", "Cake table styling"],
  },
  {
    years: "10th",
    label: "Tenth Anniversary",
    title: "A decade worth celebrating",
    text: "Step up the drama with a full sequin backdrop, balloon garland and warm lighting — exactly the treatment in our gold birthday setup, reimagined for two.",
    points: ["Full sequin backdrop", "Organic balloon garland", "Neon monogram sign"],
  },
  {
    years: "25th",
    label: "Silver Anniversary",
    text: "Silver tones, white florals and elegant draping. Our red and white home floral styling shows how we layer flowers across an entire space.",
    title: "Silver, with a floral heart",
    points: ["Silver & white palette", "Home-wide floral styling", "Elegant drape layers"],
  },
  {
    years: "50th",
    label: "Golden Anniversary",
    title: "Gold, for the golden years",
    text: "Our gold sequin wall with metallic balloons is made for this milestone — a shimmering backdrop worthy of fifty years together.",
    points: ["Gold sequin feature wall", "Metallic balloon art", "Family photo display"],
  },
];
