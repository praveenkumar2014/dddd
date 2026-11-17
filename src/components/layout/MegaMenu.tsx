import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { MegaMenuSection } from "../../lib/nav";
import { focusRing } from "../ui/button";

interface MegaMenuProps {
  id: string;
  sections: MegaMenuSection[];
  onNavigate: () => void;
}

export default function MegaMenu({ id, sections, onNavigate }: MegaMenuProps) {
  const multi = sections.length > 1;

  return (
    <div
      id={id}
      className={`absolute left-0 top-full z-50 mt-3 rounded-2xl border border-zinc-200 bg-white/95 p-2 shadow-xl backdrop-blur-md animate-[menuIn_160ms_cubic-bezier(0.16,1,0.3,1)] ${
        multi ? "w-[min(92vw,44rem)]" : "w-[min(92vw,23rem)]"
      }`}
    >
      <div className={multi ? "grid grid-cols-2 gap-1 sm:grid-cols-3" : ""}>
        {sections.map((section) => (
          <div key={section.title}>
            <div className="px-3 pb-1.5 pt-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              {section.title}
            </div>
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onNavigate}
                  className={`group flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-zinc-50 ${focusRing}`}
                >
                  {Icon && (
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition group-hover:border-zinc-300 group-hover:text-zinc-950">
                      <Icon className="h-4 w-4" />
                    </span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-medium text-zinc-900">{item.label}</span>
                      {item.badge && (
                        <span className="rounded-full bg-[#5B45E0]/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#5B45E0]">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    {item.description && (
                      <span className="mt-0.5 block text-xs leading-snug text-zinc-500">
                        {item.description}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-zinc-300 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
