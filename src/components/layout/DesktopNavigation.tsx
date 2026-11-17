import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS, isPathActive } from "../../lib/nav";
import MegaMenu from "./MegaMenu";
import { focusRing } from "../ui/button";

export default function DesktopNavigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  // Distinguishes a hover-opened menu from a click-opened one so that clicking a
  // trigger that already opened on hover does not immediately close it.
  const hoverOpened = useRef(false);
  const baseId = useId().replace(/[:]/g, "");
  const { pathname } = useLocation();

  const triggerLabels = NAV_ITEMS.filter((item) => !item.href).map((item) => item.label);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const closeMenu = (restoreFocus = false) => {
    if (restoreFocus && openMenu) triggerRefs.current[openMenu]?.focus();
    hoverOpened.current = false;
    setOpenMenu(null);
  };

  const toggleMenu = (label: string) => {
    if (openMenu === label && !hoverOpened.current) {
      setOpenMenu(null);
    } else {
      setOpenMenu(label);
    }
    hoverOpened.current = false;
  };

  const focusTriggerAt = (index: number) => {
    const label = triggerLabels[(index + triggerLabels.length) % triggerLabels.length];
    triggerRefs.current[label]?.focus();
  };

  const handleNavKeyDown = (event: ReactKeyboardEvent) => {
    if (event.key === "Escape" && openMenu) {
      event.stopPropagation();
      closeMenu(true);
    }
  };

  const handleButtonKeyDown = (event: ReactKeyboardEvent, label: string, panelId: string) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpenMenu(label);
      window.requestAnimationFrame(() => {
        document.querySelector<HTMLElement>(`#${panelId} a`)?.focus();
      });
    }
  };

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      onKeyDown={handleNavKeyDown}
      className="hidden items-center gap-1 lg:flex"
    >
      {NAV_ITEMS.map((item) => {
        if (item.href) {
          const active = isPathActive(pathname, item.href);
          return (
            <Link
              key={item.label}
              to={item.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${focusRing} ${
                active ? "text-zinc-950" : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              {item.label}
            </Link>
          );
        }

        const panelId = `${baseId}-${item.label.toLowerCase()}`;
        const isOpen = openMenu === item.label;
        const active = item.sections?.some((section) =>
          section.items.some((sub) => isPathActive(pathname, sub.href)),
        );
        const triggerIndex = triggerLabels.indexOf(item.label);

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => {
              hoverOpened.current = true;
              setOpenMenu(item.label);
            }}
            onMouseLeave={() => {
              hoverOpened.current = false;
              setOpenMenu((current) => (current === item.label ? null : current));
            }}
          >
            <button
              type="button"
              ref={(node) => {
                triggerRefs.current[item.label] = node;
              }}
              aria-expanded={isOpen}
              aria-controls={panelId}
              aria-haspopup="true"
              onClick={() => toggleMenu(item.label)}
              onKeyDown={(event) => {
                handleButtonKeyDown(event, item.label, panelId);
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  focusTriggerAt(triggerIndex + 1);
                } else if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  focusTriggerAt(triggerIndex - 1);
                }
              }}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${focusRing} ${
                isOpen || active ? "text-zinc-950" : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              {item.label}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && item.sections && (
              <MegaMenu id={panelId} sections={item.sections} onNavigate={closeMenu} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
