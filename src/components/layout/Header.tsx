import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import DesktopNavigation from "./DesktopNavigation";
import HeaderActions from "./HeaderActions";
import MobileNavigation from "./MobileNavigation";
import { buttonPrimary, focusRing } from "../ui/button";
import { useScrollState } from "../../hooks/useScrollState";

export default function Header({ onContactSales }: { onContactSales: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollState();

  return (
    <header
      className={`sticky top-0 z-50 h-16 border-b transition-[background-color,box-shadow,border-color] duration-300 animate-[headerIn_220ms_ease-out] ${
        scrolled
          ? "border-zinc-200 bg-white/85 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-10">
          <Brand />
          <DesktopNavigation />
        </div>

        <div className="flex items-center gap-2">
          <HeaderActions onContactSales={onContactSales} />
          <Link to="/signup" className={`${buttonPrimary} px-4 py-2 lg:hidden`}>
            Get started
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className={`rounded-lg p-2 text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 lg:hidden ${focusRing}`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onContactSales={() => {
          setMobileOpen(false);
          onContactSales();
        }}
      />
    </header>
  );
}
