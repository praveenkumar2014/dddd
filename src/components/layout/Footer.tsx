import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../lib/nav";
import { BrandMark } from "./Brand";
import { focusRing } from "../ui/button";

export default function Footer({ onContactSales }: { onContactSales: () => void }) {
  const columns = NAV_ITEMS.filter((item) => item.sections);
  const leaves = NAV_ITEMS.filter((item) => item.href);

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className={`inline-flex items-center gap-2.5 rounded-lg ${focusRing}`}>
              <BrandMark />
              <span className="text-[15px] font-semibold tracking-tight text-zinc-950">canvas</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              The intelligent canvas for infinite creativity. Design, generate and ship multimedia
              assets together, in real time.
            </p>
          </div>

          {columns.map((item) => (
            <nav key={item.label} aria-label={item.label}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                {item.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {item.sections?.flatMap((section) =>
                  section.items.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className={`rounded text-sm text-zinc-600 transition hover:text-zinc-950 ${focusRing}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )),
                )}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} Canvas. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {leaves.map((item) => (
              <Link
                key={item.href}
                to={item.href as string}
                className={`rounded text-zinc-600 transition hover:text-zinc-950 ${focusRing}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              className={`rounded text-zinc-600 transition hover:text-zinc-950 ${focusRing}`}
            >
              Log in
            </Link>
            <button
              type="button"
              onClick={onContactSales}
              className={`rounded text-zinc-600 transition hover:text-zinc-950 ${focusRing}`}
            >
              Contact sales
            </button>
            <Link
              to="/signup"
              className={`rounded font-semibold text-zinc-950 transition hover:text-zinc-700 ${focusRing}`}
            >
              Get started for free
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
