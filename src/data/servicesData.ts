export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  deliverables: string[];
  workflow: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "frontend-architecture",
    num: "001",
    title: "WEB & FRONTEND ARCHITECTURE",
    subtitle: "High-Performance Modern Web Applications",
    description:
      "Crafting intuitive, robust web applications that connect users with products effortlessly. Full TypeScript type safety, Next.js 15 App Router, and seamless responsive state management designed to scale gracefully.",
    tags: [
      "Next.js 15 & React 19",
      "TypeScript Systems",
      "Clean Code Architecture",
      "Component Design Systems",
      "Responsive Web Apps",
      "State Management"
    ],
    image: "/services/service_frontend_architecture.jpg",
    deliverables: [
      "Complete Next.js App Router codebase",
      "Fully typed TypeScript component library",
      "Lighthouse 98+ performance optimization",
      "Responsive layouts tested across mobile, tablet & desktop",
      "SEO metadata & Open Graph automation",
      "CI/CD deployment pipeline configuration"
    ],
    workflow: [
      "Architecture analysis & technical discovery",
      "Wireframe & component hierarchy structuring",
      "High-speed production implementation",
      "Cross-browser audit & responsive polishing"
    ]
  },
  {
    id: "webgl-motion",
    num: "002",
    title: "PERFORMANCE & WEBGL EXPERIENCES",
    subtitle: "Fluid Physics-Driven Animation & 3D Web",
    description:
      "Designing seamless app experiences built for speed, fluid touch gestures, and everyday responsive use. Achieving 98+ Google Lighthouse scores with Framer Motion, GSAP ScrollTrigger, and Three.js WebGL canvas interactions.",
    tags: [
      "Three.js WebGL",
      "Framer Motion Physics",
      "GSAP ScrollTrigger",
      "Lighthouse 98+ Scores",
      "Fluid Responsive Layout",
      "Touch & Gesture Animation"
    ],
    image: "/services/service_webgl_performance.jpg",
    deliverables: [
      "Interactive Three.js WebGL scenes & ambient shaders",
      "Scroll-linked parallax & sticky progress animations",
      "Custom cursor & magnetic interactive elements",
      "GPU-accelerated clip-path reveals",
      "Zero-layout-shift kinetic typography",
      "Fallback states for reduced-motion preferences"
    ],
    workflow: [
      "Animation concept & easing choreography",
      "WebGL geometry & lighting setup",
      "Performance benchmarking & frame-rate profiling",
      "Mobile gesture & touch tuning"
    ]
  },
  {
    id: "ecommerce-cms",
    num: "003",
    title: "CUSTOM CMS & ECOMMERCE DEVELOPMENT",
    subtitle: "High-Converting Online Stores & Headless CMS",
    description:
      "Building cohesive digital stores and high-converting platforms that communicate brand personality, build lasting trust, and maximize sales conversions with Shopify Liquid 2.0 and custom WordPress architectures.",
    tags: [
      "Shopify Liquid Storefront",
      "WordPress Custom Architecture",
      "Conversion Optimization",
      "Headless Architecture",
      "Payment Integrations",
      "Modern SEO Standards"
    ],
    image: "/services/service_ecommerce_platform.jpg",
    deliverables: [
      "Custom Shopify 2.0 section-based theme",
      "Dynamic bundle builders & custom cart drawers",
      "Custom WordPress post types & ACF blocks",
      "High-converting checkout & lead form routing",
      "Automated inventory & transaction webhooks",
      "Training documentation & CMS video walkthroughs"
    ],
    workflow: [
      "Store architecture & conversion funnel mapping",
      "Custom theme scripting & liquid templates",
      "Payment gateway & app integration",
      "Pre-launch stress testing & payment validation"
    ]
  }
];
