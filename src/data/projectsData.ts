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
  },
  {
    id: "gosmarttourism",
    title: "GoSmart Tourism",
    url: "https://www.gosmarttourism.com/",
    category: "Travel / B2B Service-Based",
    shortCategory: "B2B Services",
    description:
      "A comprehensive B2B global tourism and destination management portal providing tailored corporate travel packages, worldwide visa processing, and curated itinerary services.",
    image: "/projects/gosmarttourism.png",
    fallbackGradient: "from-blue-950 via-sky-950 to-neutral-950",
    tags: ["B2B Tourism", "Itinerary Booking", "Visa Concierge", "Responsive UX"],
    featured: false,
    displayOrder: 16,
    highlights: [
      "Corporate travel & destination management packages",
      "Automated visa and travel inquiry intake",
      "Mobile-first responsive discovery interface"
    ]
  },
  {
    id: "mahatucorp",
    title: "Mahatu Corp",
    url: "https://www.mahatubecorp.com/",
    category: "Ecommerce / Semi E-commerce & Industrial Solutions",
    shortCategory: "Ecommerce",
    description:
      "An industrial supply and semi e-commerce platform offering certified precision tubes, pipes, engineering fittings, and dynamic RFQ quote generation.",
    image: "/projects/mahatucorp.png",
    fallbackGradient: "from-slate-950 via-blue-950 to-neutral-950",
    tags: ["Industrial Supply", "B2B Catalog", "RFQ Inquiries", "Semi E-commerce"],
    featured: false,
    displayOrder: 17,
    highlights: [
      "Comprehensive industrial tube and pipe specification catalog",
      "Dynamic RFQ quote generation system",
      "High-performance technical specifications interface"
    ]
  },
  {
    id: "replayindia",
    title: "Replay India",
    url: "https://replayindia.com/",
    category: "Ecommerce / B2B E-commerce & Activewear",
    shortCategory: "B2B Ecommerce",
    description:
      "A dedicated B2B e-commerce platform for premium sports performance gear, gym apparel, and high-volume wholesale activewear orders across India.",
    image: "/projects/replayindia.png",
    fallbackGradient: "from-red-950 via-zinc-950 to-neutral-950",
    tags: ["B2B Ecommerce", "Bulk Ordering", "Sports Apparel", "Wholesale Portal"],
    featured: false,
    displayOrder: 18,
    highlights: [
      "High-volume B2B wholesale order cart and pricing tiers",
      "Categorized sports apparel and athletic collections",
      "Rapid checkout and invoice requisition flow"
    ]
  },
  {
    id: "aerocommattress",
    title: "AeroComm Mattress",
    url: "https://aerocommattress.com/",
    category: "Ecommerce / Home Comfort & Orthopedic Bedding",
    shortCategory: "Ecommerce",
    description:
      "A specialized direct-to-consumer e-commerce brand for ergonomic orthopedic mattresses, high-density memory foam pillows, and restorative sleep solutions.",
    image: "/projects/aerocommattress.png",
    fallbackGradient: "from-teal-950 via-slate-900 to-neutral-950",
    tags: ["D2C Ecommerce", "Mattress Customizer", "Sleep Technology", "Tailwind CSS"],
    featured: false,
    displayOrder: 19,
    highlights: [
      "Interactive mattress firmness and dimension selector",
      "Secure multi-payment gateway and EMI calculator integration",
      "Mobile-optimized product zoom and testimonial galleries"
    ]
  },
  {
    id: "rankmatics",
    title: "Rankmatics",
    url: "https://rankmatics.co/",
    category: "Commercial / Digital Marketing & SEO Agency",
    shortCategory: "Tech & Agency",
    description:
      "A modern digital marketing, SEO, and growth engineering agency platform showcasing case studies, ROI analytics, data audits, and client discovery funnels.",
    image: "/projects/rankmatics.png",
    fallbackGradient: "from-indigo-950 via-purple-950 to-neutral-950",
    tags: ["SEO Agency", "Growth Engineering", "Audit Dashboards", "Conversion Funnels"],
    featured: false,
    displayOrder: 20,
    highlights: [
      "Interactive SEO audit request and site scoring engine",
      "Client success metrics and data-driven case studies",
      "High-conversion lead capture and consult scheduling"
    ]
  },
  {
    id: "marriott",
    title: "Marriott Bonvoy",
    url: "https://www.marriott.com/default.mi",
    category: "Travel / Luxury Hospitality & Global Resorts",
    shortCategory: "Hospitality",
    description:
      "A world-class luxury hotel reservation and destination loyalty portal supporting multi-language property discovery, dynamic room rates, and resort booking.",
    image: "/projects/marriott.png",
    fallbackGradient: "from-amber-950 via-stone-900 to-neutral-950",
    tags: ["Luxury Hospitality", "Global Booking Engine", "Resort Discovery", "Next.js"],
    featured: false,
    displayOrder: 21,
    highlights: [
      "Global resort search and real-time room availability matrix",
      "High-resolution property showcases and amenity directories",
      "Flawless responsive navigation engineered for global travelers"
    ]
  },
  {
    id: "premierinn",
    title: "Premier Inn",
    url: "https://www.premierinn.com/gb/en/home.html",
    category: "Travel / Hospitality & Hotel Booking Network",
    shortCategory: "Hospitality",
    description:
      "A leading hotel network booking portal offering streamlined city searches, family room selections, dynamic pricing, and instant verified check-ins.",
    image: "/projects/premierinn.png",
    fallbackGradient: "from-purple-950 via-slate-900 to-neutral-950",
    tags: ["Hotel Booking", "Location Search", "Dynamic Rates", "Responsive Architecture"],
    featured: false,
    displayOrder: 22,
    highlights: [
      "Sub-second hotel search with real-time occupancy updates",
      "Family, business, and weekend getaway booking flows",
      "Frictionless checkout with instant confirmation receipt"
    ]
  },
  {
    id: "meliahotels",
    title: "Meliá Hotels International",
    url: "https://www.melia.com/en",
    category: "Travel / Luxury Hospitality & Resorts",
    shortCategory: "Hospitality",
    description:
      "An international luxury hotel and beach resort portal presenting 5-star Mediterranean getaways, wellness sanctuaries, and bespoke travel experiences.",
    image: "/projects/meliahotels.png",
    fallbackGradient: "from-yellow-950 via-neutral-900 to-neutral-950",
    tags: ["Luxury Resorts", "Beachfront Getaways", "Multi-Currency", "Tactile UI"],
    featured: false,
    displayOrder: 23,
    highlights: [
      "Curated beachfront villa showcases and culinary previews",
      "Integrated multi-currency booking engine and rewards perks",
      "Cinematic editorial photography and smooth scroll dynamics"
    ]
  },
  {
    id: "aadhyabedsheet",
    title: "Aadhya Bedsheet",
    url: "https://aadhyabedsheet.com/",
    category: "Ecommerce / E-commerce & Home Textile",
    shortCategory: "Ecommerce",
    description:
      "An artisanal home textile and bedding storefront featuring 100% pure cotton bedsheets, luxury comforter sets, woven blankets, and seasonal fabric prints.",
    image: "/projects/aadhyabedsheet.png",
    fallbackGradient: "from-rose-950 via-neutral-900 to-neutral-950",
    tags: ["Home Textile", "E-commerce", "Shopify Liquid", "Fabric Zoom"],
    featured: false,
    displayOrder: 24,
    highlights: [
      "High-resolution fabric weave zoom and thread count specs",
      "Bundle discount promotions and dynamic slide-out cart drawer",
      "Rapid mobile shopping experience with instant UPI checkout"
    ]
  },
  {
    id: "alternativeairlines",
    title: "Alternative Airlines",
    url: "https://www.alternativeairlines.com/",
    category: "Travel / Aviation & Global Flight Booking",
    shortCategory: "Travel & Flights",
    description:
      "A global aviation search and airline ticket marketplace offering flights on 600+ carriers with 40+ international payment options including crypto and BNPL.",
    image: "/projects/alternativeairlines.png",
    fallbackGradient: "from-blue-950 via-indigo-950 to-neutral-950",
    tags: ["Flight Booking", "Aviation Search", "BNPL Gateways", "Global Matrix"],
    featured: false,
    displayOrder: 25,
    highlights: [
      "Multi-carrier flight comparison with dynamic fare matrices",
      "Over 40 international payment methods including Splitit and Klarna",
      "Responsive route map visualization and baggage calculation"
    ]
  },
  {
    id: "volotea",
    title: "Volotea Airlines",
    url: "https://www.volotea.com/en/",
    category: "Travel / Aviation & Airline Booking",
    shortCategory: "Travel & Flights",
    description:
      "A fast-growing European regional airline portal connecting small and medium European cities with direct non-stop flights and personalized passenger services.",
    image: "/projects/volotea.png",
    fallbackGradient: "from-red-950 via-blue-950 to-neutral-950",
    tags: ["Aviation Portal", "Seat Selection", "Direct Routes", "Mobile Boarding"],
    featured: false,
    displayOrder: 26,
    highlights: [
      "Direct European regional route finder and low-fare calendar",
      "Interactive seat map selector and extra baggage add-ons",
      "Fast digital check-in and mobile boarding pass delivery"
    ]
  },
  {
    id: "c4dt",
    title: "Center for Digital Trust (C4DT)",
    url: "https://c4dt.in/",
    category: "Commercial / Technology & Digital Security",
    shortCategory: "Corporate",
    description:
      "A premier institutional web portal advancing digital trust, quantum-resistant cryptography, enterprise cybersecurity research, and data privacy frameworks.",
    image: "/projects/c4dt.png",
    fallbackGradient: "from-sky-950 via-slate-900 to-neutral-950",
    tags: ["Digital Trust", "Cybersecurity", "Research Portal", "Enterprise Tech"],
    featured: false,
    displayOrder: 27,
    highlights: [
      "Academic research whitepaper library and event directories",
      "Quantum-safe cryptography project showcases and partner labs",
      "High-contrast accessible typography with sub-second page loads"
    ]
  },
  {
    id: "truptigroup",
    title: "Trupti Group",
    url: "https://revamp.truptigroup.in/",
    category: "Commercial / Real Estate & Infrastructure Development",
    shortCategory: "Real Estate",
    description:
      "An infrastructure and premium real estate development showcase highlighting landmark residential towers, commercial complexes, and construction milestones.",
    image: "/projects/truptigroup.png",
    fallbackGradient: "from-amber-950 via-zinc-900 to-neutral-950",
    tags: ["Real Estate Development", "Infrastructure", "Tower Showcase", "Floor Plans"],
    featured: false,
    displayOrder: 28,
    highlights: [
      "Interactive architectural master plans and aerial project tours",
      "Residential unit floor plan exploration and spec downloads",
      "Direct sales consultant inquiry and site visit booking engine"
    ]
  },
  {
    id: "coolcareservices",
    title: "Cool Care Services",
    url: "https://coolcareservices.co.in/",
    category: "Commercial / HVAC & Home Services",
    shortCategory: "Commercial",
    description:
      "A professional residential and commercial HVAC services platform delivering on-demand AC installation, cooling repair, annual maintenance contracts, and emergency diagnostics.",
    image: "/projects/coolcareservices.png",
    fallbackGradient: "from-cyan-950 via-sky-950 to-neutral-950",
    tags: ["HVAC Services", "AC Maintenance", "Service Booking", "Local Business"],
    featured: false,
    displayOrder: 29,
    highlights: [
      "Quick-dispatch technician booking and service cost calculator",
      "Commercial HVAC AMC contract packages for offices and clinics",
      "24/7 emergency response hotline and transparent service pricing"
    ]
  },
  {
    id: "driftauto",
    title: "Drift Auto",
    url: "https://driftauto.co/",
    category: "Commercial / Automotive Engineering & Services",
    shortCategory: "Automotive",
    description:
      "A high-performance automotive engineering workshop platform offering ECU tuning, dyno diagnostics, bespoke suspension upgrades, and precision track-car preparation.",
    image: "/projects/driftauto.png",
    fallbackGradient: "from-orange-950 via-zinc-950 to-neutral-950",
    tags: ["Automotive Engineering", "ECU Tuning", "Performance Parts", "Dyno Testing"],
    featured: false,
    displayOrder: 30,
    highlights: [
      "Performance dyno graph telemetry and custom ECU tune catalogs",
      "Vehicle upgrade package configurator and workshop appointments",
      "Responsive dark-mode aesthetic with automotive telemetry HUDs"
    ]
  },
  {
    id: "sbdevelopers",
    title: "SB Developers",
    url: "https://sb-developers.com/",
    category: "Commercial / Real Estate & Commercial Construction",
    shortCategory: "Real Estate",
    description:
      "A leading commercial and residential real estate construction company web presence highlighting modern townships, engineering certifications, and completed turnkey towers.",
    image: "/projects/sbdevelopers.png",
    fallbackGradient: "from-yellow-950 via-slate-900 to-neutral-950",
    tags: ["Commercial Construction", "Township Development", "Turnkey Projects", "Engineering"],
    featured: false,
    displayOrder: 31,
    highlights: [
      "Turnkey commercial township portfolio with engineering milestones",
      "Interactive project construction status updates and gallery",
      "Investor relations, layout blueprints, and schedule consultation"
    ]
  },
  {
    id: "xprodigy",
    title: "XProdigy",
    url: "https://xprodigy.scaleden.com/",
    category: "Commercial / EdTech & Professional Training",
    shortCategory: "EdTech",
    description:
      "An elite technology cohort training and engineering mentorship platform featuring intensive developer bootcamps, real-world capstone projects, and placement acceleration.",
    image: "/projects/xprodigy.png",
    fallbackGradient: "from-indigo-950 via-slate-900 to-neutral-950",
    tags: ["EdTech Platform", "Developer Bootcamp", "Live Mentorship", "Next.js App"],
    featured: false,
    displayOrder: 32,
    highlights: [
      "Live cohort curriculum roadmap with weekly milestone tracking",
      "Interactive code lab previews and alumni placement showcase",
      "Seamless student enrollment application and tuition options"
    ]
  }
];
