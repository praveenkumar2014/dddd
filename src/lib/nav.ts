import type { ComponentType } from "react";
import {
  Infinity as InfinityIcon,
  PenTool,
  Sparkles,
  Music,
  Users,
  LayoutDashboard,
  TrendingUp,
  LayoutTemplate,
  Puzzle,
  Store,
  BookOpen,
  Code2,
  History,
  Briefcase,
} from "lucide-react";

export type IconType = ComponentType<{ className?: string }>;

/** True when `pathname` is `href` or a nested route beneath it. */
export const isPathActive = (pathname: string, href: string): boolean =>
  pathname === href || pathname.startsWith(`${href}/`);

export interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
  icon?: IconType;
  badge?: string;
}

export interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
}

export interface NavItem {
  label: string;
  /** Leaf items navigate directly; items with sections open a mega menu. */
  href?: string;
  sections?: MegaMenuSection[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Products",
    sections: [
      {
        title: "Create",
        items: [
          {
            label: "Infinite Canvas",
            href: "/products/infinite-canvas",
            icon: InfinityIcon,
            description: "One boundless surface for every idea.",
          },
          {
            label: "Vector Engine",
            href: "/products/vector-engine",
            icon: PenTool,
            description: "Precision paths, boolean ops and live corners.",
          },
          {
            label: "Generative Studio",
            href: "/products/generative-studio",
            icon: Sparkles,
            badge: "New",
            description: "Prompt-to-asset image and layout synthesis.",
          },
          {
            label: "Audio & Video",
            href: "/products/audio-video",
            icon: Music,
            description: "Waveform visualizers and timeline editing.",
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    sections: [
      {
        title: "By team",
        items: [
          {
            label: "Brand Teams",
            href: "/solutions/brand-teams",
            icon: Users,
            description: "Shared libraries and governance at scale.",
          },
          {
            label: "Product Design",
            href: "/solutions/product-design",
            icon: LayoutDashboard,
            description: "From wireframe to production-ready handoff.",
          },
          {
            label: "Marketing & Growth",
            href: "/solutions/marketing-growth",
            icon: TrendingUp,
            description: "Campaign assets in hours, not weeks.",
          },
        ],
      },
    ],
  },
  {
    label: "Community",
    sections: [
      {
        title: "Explore",
        items: [
          {
            label: "Templates",
            href: "/community/templates",
            icon: LayoutTemplate,
            description: "Start from a proven canvas.",
          },
          {
            label: "Plugins",
            href: "/community/plugins",
            icon: Puzzle,
            description: "Extend the canvas with community tools.",
          },
          {
            label: "Creator Marketplace",
            href: "/community/creator-marketplace",
            icon: Store,
            description: "Sell and license your work.",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    sections: [
      {
        title: "Learn",
        items: [
          {
            label: "Docs",
            href: "/docs",
            icon: BookOpen,
            description: "Guides, concepts and best practices.",
          },
          {
            label: "API",
            href: "/api",
            icon: Code2,
            description: "Build on the Canvas platform.",
          },
          {
            label: "Changelog",
            href: "/changelog",
            icon: History,
            description: "Every shipped improvement.",
          },
          {
            label: "Case Studies",
            href: "/case-studies",
            icon: Briefcase,
            description: "How teams ship faster with Canvas.",
          },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];
