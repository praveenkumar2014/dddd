import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { routeByPath } from "../lib/site";
import { buttonPrimary, buttonSecondary } from "../components/ui/button";

export default function Placeholder() {
  const { pathname } = useLocation();
  const route = routeByPath(pathname);
  const title = route?.title ?? "Coming soon";
  const eyebrow = route?.eyebrow ?? "Canvas";
  const description =
    route?.description ?? "This page is part of the Canvas marketing site.";

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600">
        <Sparkles className="h-3 w-3 text-[#5B45E0]" />
        {eyebrow}
      </span>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600">{description}</p>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
        This destination is wired into the navigation and ready for its full page build-out.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link to="/signup" className={buttonPrimary}>
          Get started for free
        </Link>
        <Link to="/" className={buttonSecondary}>
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
