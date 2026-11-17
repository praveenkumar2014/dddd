import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import { NAV_ITEMS, isPathActive } from "../../lib/nav";
import { buttonPrimary, buttonSecondary, focusRing } from "../ui/button";
import { useScrollLock } from "../../hooks/useScrollLock";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  onContactSales: () => void;
}

export default function MobileNavigation({ open, onClose, onContactSales }: MobileNavigationProps) {
  const location = useLocation();
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  useScrollLock(open);

  useEffect(() => {
    if (open) {
      setExpanded(null);
      restoreRef.current = document.activeElement as HTMLElement | null;
      window.requestAnimationFrame(() => closeRef.current?.focus());
    } else {
      restoreRef.current?.focus?.();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] lg:hidden">
      <div
        className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm animate-[backdropIn_180ms_ease-out]"
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="absolute right-0 top-0 flex h-full w-[min(20rem,88vw)] flex-col overflow-y-auto bg-white shadow-2xl animate-[drawerIn_260ms_cubic-bezier(0.16,1,0.3,1)]"
      >
        <div className="flex h-16 shrink-0 items-center justify-end border-b border-zinc-200 px-4">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className={`rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 ${focusRing}`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 px-3 py-4">
          {NAV_ITEMS.map((item) => {
            if (item.href) {
              const active = isPathActive(location.pathname, item.href);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-zinc-50 ${focusRing} ${
                    active ? "bg-zinc-50 text-zinc-950" : "text-zinc-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = expanded === item.label;
            const panelId = `mobile-${item.label.toLowerCase()}`;
            return (
              <div key={item.label} className="border-b border-zinc-100 last:border-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 ${focusRing}`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div id={panelId} className="pb-2">
                    {item.sections?.map((section) => (
                      <div key={section.title} className="px-3">
                        <div className="pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                          {section.title}
                        </div>
                        {section.items.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            aria-current={isPathActive(location.pathname, sub.href) ? "page" : undefined}
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-50 ${focusRing}`}
                          >
                            {sub.label}
                            {sub.badge && (
                              <span className="rounded-full bg-[#5B45E0]/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-[#5B45E0]">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="shrink-0 space-y-2.5 border-t border-zinc-200 p-4">
          <Link to="/login" className={`${buttonSecondary} w-full`}>
            Log in
          </Link>
          <button type="button" onClick={onContactSales} className={`${buttonSecondary} w-full`}>
            Contact sales
          </button>
          <Link to="/signup" className={`${buttonPrimary} w-full`}>
            Get started for free
          </Link>
        </div>
      </div>
    </div>
  );
}
