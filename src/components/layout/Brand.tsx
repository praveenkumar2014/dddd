import { Link } from "react-router-dom";
import { focusRing } from "../ui/button";

export function BrandMark() {
  return (
    <span className="flex h-6 items-center gap-1" aria-hidden>
      <span className="h-3 w-3 rounded-full bg-[#F24E1E]" />
      <span className="-ml-4 mt-3 h-3 w-3 rounded-full bg-[#A259FF]" />
      <span className="-ml-4 mt-3 h-3 w-3 rounded-full bg-[#1ABCFE]" />
    </span>
  );
}

export default function Brand({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      aria-label="Canvas home"
      className={`flex items-center gap-2.5 rounded-lg ${focusRing}`}
    >
      <BrandMark />
      <span className="text-[15px] font-semibold tracking-tight text-zinc-950">canvas</span>
    </Link>
  );
}
