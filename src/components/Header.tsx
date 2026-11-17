import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface NavItem {
  label: string;
  columns: { title: string; links: string[] }[];
}

const NAV: NavItem[] = [
  {
    label: "Products",
    columns: [
      {
        title: "Create",
        links: ["Infinite Canvas", "Vector Engine", "Generative Studio", "Audio & Video"],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "By team",
        links: ["Brand Teams", "Product Design", "Marketing & Growth"],
      },
    ],
  },
  {
    label: "Community",
    columns: [
      {
        title: "Explore",
        links: ["Templates", "Plugins", "Creator Marketplace"],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        title: "Learn",
        links: ["Docs", "API", "Changelog", "Case Studies"],
      },
    ],
  },
];

function BrandMark() {
  return (
    <span className="flex h-6 items-center gap-1" aria-hidden>
      <span className="h-3 w-3 rounded-full bg-[#F24E1E]" />
      <span className="h-3 w-3 rounded-full bg-[#A259FF] -ml-4 mt-3" />
      <span className="h-3 w-3 rounded-full bg-[#1ABCFE] -ml-4 mt-3" />
    </span>
  );
}

export default function Header({ onContactSales }: { onContactSales: () => void }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2.5" aria-label="Canvas home">
            <BrandMark />
            <span className="text-[15px] font-semibold tracking-tight text-zinc-950">canvas</span>
          </a>

          <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    openMenu === item.label
                      ? "text-zinc-950"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                  aria-expanded={openMenu === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openMenu === item.label && (
                  <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-zinc-200 bg-white p-2 shadow-xl animate-[popIn_140ms_ease-out]">
                    {item.columns.map((col) => (
                      <div key={col.title}>
                        <div className="px-3 pb-1.5 pt-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                          {col.title}
                        </div>
                        {col.links.map((link) => (
                          <a
                            key={link}
                            href="#"
                            className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-950"
                          >
                            {link}
                            <ChevronRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-40" />
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#pricing"
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Pricing
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="#"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-950 sm:block"
          >
            Log in
          </a>
          <button
            onClick={onContactSales}
            className="hidden rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 md:block"
          >
            Contact sales
          </button>
          <button className="rounded-lg bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 sm:px-5 sm:py-2.5">
            Get started for free
          </button>
        </div>
      </div>
    </header>
  );
}
