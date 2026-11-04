export interface ProjectItem {
  id: string;
  title: string;
  url: string;
  category: string;
  shortCategory: string;
  description: string;
  image: string;
  fallbackGradient: string;
  tags: string[];
  featured: boolean;
  displayOrder: number;
  highlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "travelvillas",
    title: "Travel Villas",
    url: "https://travelvillas.in/",
    category: "Travel / Hospitality",
    shortCategory: "Hospitality",
    description:
      "A luxury vacation villa rental marketplace featuring handpicked private pool villas, holiday homes, and scenic retreats across premier destinations in India with seamless property exploration.",
    image: "/projects/travelvillas.png",
    fallbackGradient: "from-sky-950 via-teal-950 to-neutral-950",
    tags: [
      "Frontend Development",
      "Responsive Web Design",
      "UI Implementation",
      "Component-Based Development"
    ],
    featured: true,
    displayOrder: 1,
    highlights: [
      "Curated luxury property showcases",
      "Fluid responsive layout for mobile & desktop travelers",
      "Intuitive destination & amenity browsing"
    ]
  },
  {
    id: "aurasfragrances",
    title: "Auras Fragrances",
    url: "https://aurasfragrances.com/",
    category: "Fragrance / Ecommerce",
    shortCategory: "Ecommerce",
    description:
      "An artisanal home and personal fragrance brand storefront offering handcrafted perfumes, soy candles, wax melts, and interactive bundle-builder shopping experiences.",
    image: "/projects/aurasfragrances.png",
    fallbackGradient: "from-purple-950 via-stone-900 to-neutral-950",
    tags: [
      "Shopify",
      "Ecommerce Website Development",
      "Website Customization",
      "Frontend Development",
      "JavaScript"
    ],
    featured: true,
    displayOrder: 2,
    highlights: [
      "Custom Shopify theme enhancements & liquid scripting",
      "Interactive bundle selection & checkout integration",
      "Editorial product aesthetics and responsive catalog"
    ]
  },
  {
    id: "fruitilicious",
    title: "Fruitilicious | Healthy Gifting",
    url: "https://fruitilicious.in/",
    category: "Food / Gourmet Ecommerce",
    shortCategory: "Ecommerce",
    description:
      "A premium gourmet gifting and culinary ecommerce platform specializing in fresh cut-fruit bouquets, luxury platters, festive hampers, and scheduled local delivery across Mumbai and Navi Mumbai.",
    image: "/projects/fruitilicious.png",
    fallbackGradient: "from-amber-950 via-emerald-950 to-neutral-950",
    tags: [
      "Ecommerce Website Development",
      "Website Customization",
      "UI Implementation",
      "Responsive Web Design"
    ],
    featured: true,
    displayOrder: 3,
    highlights: [
      "Vibrant gourmet catalog showcase",
      "Streamlined gifting order flow & scheduling",
      "Mobile-optimized product discovery"
    ]
  },
  {
    id: "uniquewellcare",
    title: "Unique Wellcare",
    url: "https://uniquewellcare.com/",
    category: "Healthcare / Diagnostic Imaging",
    shortCategory: "Healthcare",
    description:
      "An advanced medical imaging and diagnostic healthcare platform showcasing digital wide-bore MRI, multi-slice CT scans, and multi-location clinic coordination across Maharashtra.",
    image: "/projects/uniquewellcare.png",
    fallbackGradient: "from-blue-950 via-cyan-950 to-neutral-950",
    tags: [
      "Website Development",
      "Frontend Development",
      "Component-Based Development",
      "Cross-Browser Testing"
    ],
    featured: true,
    displayOrder: 4,
    highlights: [
      "Clinical service hierarchy and scan comparison modules",
      "Accessible patient appointment inquiry workflows",
      "Cross-device responsiveness and fast load times"
    ]
  },
  {
    id: "frissonhospital",
    title: "Frisson Multispeciality Hospital",
    url: "https://frissonhospital.com/",
    category: "Healthcare / Hospital Website",
    shortCategory: "Healthcare",
    description:
      "A multispeciality hospital web presence delivering 24/7 emergency care information, clinical departments, doctor rosters, ICU capabilities, and patient inquiry workflows in Navi Mumbai.",
    image: "/projects/frissonhospital.png",
    fallbackGradient: "from-red-950 via-slate-900 to-neutral-950",
    tags: [
      "Frontend Development",
      "Website Development",
      "Responsive Web Design",
      "Cross-Browser Testing"
    ],
    featured: false,
    displayOrder: 5,
    highlights: [
      "Emergency contact priority access",
      "Specialty department directories & doctor profiles",
      "Accessible patient-first interface"
    ]
  },
  {
    id: "sayskin",
    title: "SaySkin Aesthetic Dermatology",
    url: "https://sayskin.in/",
    category: "Beauty / Dermatology Clinic",
    shortCategory: "Beauty & Health",
    description:
      "A clinical aesthetic dermatology practice website featuring specialized medical treatments for skin and hair, laser therapies, clinic galleries, and consultation booking.",
    image: "/projects/sayskin.png",
    fallbackGradient: "from-rose-950 via-neutral-900 to-neutral-950",
    tags: [
      "Website Development",
      "UI Implementation",
      "Responsive Web Design",
      "Frontend Development"
    ],
    featured: false,
    displayOrder: 6,
    highlights: [
      "Comprehensive treatment catalogs and before/after showcases",
      "Clean clinical aesthetic with high readability",
      "Seamless mobile navigation and appointment contact"
    ]
  },
  {
    id: "ubercarebling",
    title: "Ubercare Bling — Laser Hair Removal",
    url: "https://ubercarebling.com/laser-hair-removal/",
    category: "Healthcare / Laser Hair Removal",
    shortCategory: "Healthcare",
    description:
      "A specialized clinical landing page for advanced laser hair removal and aesthetic treatments, detailing treatment areas, device technology specifications, and consultation scheduling.",
    image: "/projects/ubercarebling.png",
    fallbackGradient: "from-fuchsia-950 via-slate-900 to-neutral-950",
    tags: [
      "Frontend Development",
      "UI Implementation",
      "Website Performance Optimization",
      "Responsive Web Design"
    ],
    featured: false,
    displayOrder: 7,
    highlights: [
      "High-conversion service page architecture",
      "Treatment area breakdown (arms, legs, facial, full body)",
      "Transparent technology explanation and quick booking"
    ]
  },
  {
    id: "yourvcare",
    title: "Your VCare Dental Clinic",
    url: "https://yourvcare.com/",
    category: "Healthcare / Dental Clinic",
    shortCategory: "Healthcare",
    description:
      "A modern multi-branch dental network website highlighting root canal therapies, cosmetic smile makeovers, dental implants, orthodontics, and multi-clinic location booking across Mumbai.",
    image: "/projects/yourvcare.png",
    fallbackGradient: "from-cyan-950 via-teal-950 to-neutral-950",
    tags: [
      "UI Implementation",
      "Frontend Development",
      "Responsive Web Design",
      "Component-Based Development"
    ],
    featured: false,
    displayOrder: 8,
    highlights: [
      "Specialty dental procedure highlights",
      "Branch-specific contact and appointment routing",
      "Trust-building clinical presentation"
    ]
  },
  {
    id: "ubercare",
    title: "UberCare Diagnostic Center",
    url: "https://ubercare.co.in/",
    category: "Healthcare / Diagnostic Network",
    shortCategory: "Healthcare",
    description:
      "A comprehensive medical diagnostics web portal featuring multi-slice CT, high-field MRI, digital X-rays, ultrasound, pathology lab services, and branch center locator.",
    image: "/projects/ubercare.png",
    fallbackGradient: "from-sky-950 via-slate-900 to-neutral-950",
    tags: [
      "Website Development",
      "Responsive Web Design",
      "Frontend Development",
      "Frontend Debugging"
    ],
    featured: false,
    displayOrder: 9,
    highlights: [
      "Multi-modality diagnostic directory",
      "Patient test preparation guidance and branch navigation",
      "High-performance responsive design"
    ]
  },
  {
    id: "drrahulbhatambre",
    title: "Dr. Rahul Bhatambre",
    url: "https://drrahulbhatambre.in/",
    category: "Healthcare / Neuropsychiatry & Wellness",
    shortCategory: "Healthcare",
    description:
      "A comprehensive clinical psychiatry and mental healthcare web platform for Dr. Rahul Bhatambre, highlighting specialized adult & child psychotherapy, de-addiction programs, and advanced clinical care in Navi Mumbai.",
    image: "/projects/drrahulbhatambre.png",
    fallbackGradient: "from-teal-950 via-slate-900 to-neutral-950",
    tags: [
      "Website Development",
      "UI Implementation",
      "Healthcare Architecture",
      "Responsive Web Design"
    ],
    featured: false,
    displayOrder: 10,
    highlights: [
      "Specialized clinical psychiatry & de-addiction directory",
      "Accessible patient consultation & inquiry workflow",
      "Mobile-first responsive layouts with high readability"
    ]
  },
  {
    id: "drmatinkidsdental",
    title: "Dr. Matin Zari's Kids Dental Clinic",
    url: "https://drmatinkidsdental.com/",
    category: "Healthcare / Pediatric Dental Clinic",
    shortCategory: "Dental & Kids",
    description:
      "Mazgaon's first dedicated pediatric dental clinic website, providing gentle child-friendly oral healthcare, preventive dentistry, interactive smile guidance, and seamless parent appointment scheduling.",
    image: "/projects/drmatinkidsdental.png",
    fallbackGradient: "from-sky-950 via-cyan-900 to-neutral-950",
    tags: [
      "Frontend Development",
      "Component-Based Development",
      "Pediatric Clinic",
      "Responsive Web Design"
    ],
    featured: false,
    displayOrder: 11,
    highlights: [
      "Vibrant child-friendly clinic aesthetics & brand identity",
      "Interactive parent consultation booking flow",
      "Comprehensive pediatric dental procedure guides"
    ]
  },
  {
    id: "mekgrandcentral",
    title: "MEK Grand Central",
    url: "https://mek-grand-central.vercel.app/",
    category: "Commercial / Real Estate Architecture",
    shortCategory: "Real Estate",
    description:
      "A modern commercial architectural showcase for MEK Grand Central at Grand Meridian City, Mumbra, presenting premium G+4 commercial spaces, prime retail frontage, dynamic floor plans, and regional business connectivity.",
    image: "/projects/mekgrandcentral.png",
    fallbackGradient: "from-amber-950 via-stone-900 to-neutral-950",
    tags: [
      "Next.js",
      "Frontend Development",
      "Commercial Architecture",
      "Responsive Web Design"
    ],
    featured: false,
    displayOrder: 12,
    highlights: [
      "Cinematic commercial space and retail frontage presentation",
      "Interactive floor plans and executive suite layouts",
      "Fluid micro-interactions and high-impact visual design"
    ]
  },
  {
    id: "silverlinecreation",
    title: "Silverline Creation",
    url: "https://silverlinecreation.vercel.app/",
    category: "Commercial / Construction & Architecture",
    shortCategory: "Construction",
    description:
      "A premier construction and architectural engineering web platform for Silverline Creation, showcasing bespoke commercial developments, luxury residential spaces, turnkey management, and refined interior aesthetics.",
    image: "/projects/silverlinecreation.png",
    fallbackGradient: "from-zinc-950 via-slate-900 to-neutral-950",
    tags: [
      "Commercial Construction",
      "Interior Designing",
      "Turnkey Projects",
      "UI Architecture",
      "Responsive Web Design"
    ],
    featured: false,
    displayOrder: 13,
    highlights: [
      "High-impact construction and commercial project showcases",
      "Bespoke turnkey management & architectural interior catalog",
      "Ultra-crisp responsive layouts across mobile & desktop"
    ]
  },
  {
    id: "travelwithsarah",
    title: "Travel with Sarah",
    url: "https://travel-with-sarahh.vercel.app/",
    category: "Travel / Online Advisory & Concierge",
    shortCategory: "Hospitality",
    description:
      "A personalized luxury travel advisory and holiday concierge web portal connecting wanderlust travelers with dedicated advisors to curate bespoke multi-destination itineraries, private tours, and dream getaways.",
    image: "/projects/travelwithsarah.png",
    fallbackGradient: "from-sky-950 via-blue-950 to-neutral-950",
    tags: [
      "Travel Advisory",
      "Holiday Concierge",
      "Itinerary Planning",
      "Component Design",
      "Responsive Web Design"
    ],
    featured: false,
    displayOrder: 14,
    highlights: [
      "Interactive travel advisor consultation & destination matching",
      "Bespoke holiday dream packages and curated concierge services",
      "Fluid card transitions and mobile-first responsive design"
    ]
  },
  {
    id: "servizigalassia",
    title: "Servizi Galassia | Refurbished",
    url: "https://servizi-galassia-two.vercel.app/",
    category: "Ecommerce / Refurbished Electronics & Hardware",
    shortCategory: "Ecommerce",
    description:
      "A modern refurbished enterprise laptop and hardware marketplace featuring certified Dell, HP, and Lenovo computers, dynamic budget filtering, multi-tier warranty certification, and responsive device exploration.",
    image: "/projects/servizigalassia.png",
    fallbackGradient: "from-emerald-950 via-teal-950 to-neutral-950",
    tags: [
      "Ecommerce",
      "Hardware Marketplace",
      "Refurbished Systems",
      "Product Catalog",
      "Responsive Web Design"
    ],
    featured: false,
    displayOrder: 15,
    highlights: [
      "Certified refurbished Dell, HP, and Lenovo device showcase",
      "Dynamic price tier & specification budget filtering",
      "Seamless mobile shopping experience with clean visual structure"
    ]
  }
];
