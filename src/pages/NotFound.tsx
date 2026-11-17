import { Link } from "react-router-dom";
import { buttonPrimary, buttonSecondary } from "../components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link to="/" className={buttonPrimary}>
          Back to home
        </Link>
        <Link to="/pricing" className={buttonSecondary}>
          View pricing
        </Link>
      </div>
    </section>
  );
}
