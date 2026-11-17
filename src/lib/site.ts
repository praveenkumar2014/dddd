export interface RouteMeta {
  path: string;
  title: string;
  eyebrow: string;
  description: string;
}

/**
 * Every navigable destination on the marketing site. Keeping this in one place
 * means the header, footer and placeholder pages never drift apart.
 */
export const ROUTES: RouteMeta[] = [
  {
    path: "/products",
    title: "Products",
    eyebrow: "Products",
    description: "Design, generate and ship multimedia assets on one intelligent canvas.",
  },
  {
    path: "/products/infinite-canvas",
    title: "Infinite Canvas",
    eyebrow: "Products · Create",
    description: "One boundless surface for every idea — from first sketch to finished artboard.",
  },
  {
    path: "/products/vector-engine",
    title: "Vector Engine",
    eyebrow: "Products · Create",
    description: "Precision paths, boolean operations and live corner smoothing at 60fps.",
  },
  {
    path: "/products/generative-studio",
    title: "Generative Studio",
    eyebrow: "Products · Create",
    description: "Prompt-to-asset image and layout synthesis with brand-aware controls.",
  },
  {
    path: "/products/audio-video",
    title: "Audio & Video",
    eyebrow: "Products · Create",
    description: "Waveform visualizers, timelines and real-time audio-reactive components.",
  },
  {
    path: "/solutions",
    title: "Solutions",
    eyebrow: "Solutions",
    description: "How different teams put the intelligent canvas to work.",
  },
  {
    path: "/solutions/brand-teams",
    title: "Brand Teams",
    eyebrow: "Solutions · By team",
    description: "Shared libraries, tokens and governance for every brand touchpoint.",
  },
  {
    path: "/solutions/product-design",
    title: "Product Design",
    eyebrow: "Solutions · By team",
    description: "From wireframe to production-ready handoff without leaving the canvas.",
  },
  {
    path: "/solutions/marketing-growth",
    title: "Marketing & Growth",
    eyebrow: "Solutions · By team",
    description: "Campaign assets in hours, not weeks — on brand and on message.",
  },
  {
    path: "/community",
    title: "Community",
    eyebrow: "Community",
    description: "Templates, plugins and creators building on Canvas.",
  },
  {
    path: "/community/templates",
    title: "Templates",
    eyebrow: "Community · Explore",
    description: "Start from a proven canvas and make it your own.",
  },
  {
    path: "/community/plugins",
    title: "Plugins",
    eyebrow: "Community · Explore",
    description: "Extend the canvas with community-built tools and automations.",
  },
  {
    path: "/community/creator-marketplace",
    title: "Creator Marketplace",
    eyebrow: "Community · Explore",
    description: "Sell and license your templates, plugins and generative presets.",
  },
  {
    path: "/docs",
    title: "Docs",
    eyebrow: "Resources · Learn",
    description: "Guides, concepts and best practices for building on Canvas.",
  },
  {
    path: "/api",
    title: "API",
    eyebrow: "Resources · Learn",
    description: "Build on the Canvas platform with a typed, versioned API.",
  },
  {
    path: "/changelog",
    title: "Changelog",
    eyebrow: "Resources · Learn",
    description: "Every shipped improvement, in the open.",
  },
  {
    path: "/case-studies",
    title: "Case Studies",
    eyebrow: "Resources · Learn",
    description: "How real teams ship faster with the intelligent canvas.",
  },
  {
    path: "/pricing",
    title: "Pricing",
    eyebrow: "Pricing",
    description: "Free forever for individuals. Flexible plans for growing teams.",
  },
  {
    path: "/signup",
    title: "Get started for free",
    eyebrow: "Get started",
    description: "Create your free workspace — no credit card required.",
  },
  {
    path: "/login",
    title: "Log in",
    eyebrow: "Welcome back",
    description: "Sign in to your Canvas workspace.",
  },
];

export const routeByPath = (path: string): RouteMeta | undefined =>
  ROUTES.find((route) => route.path === path);
