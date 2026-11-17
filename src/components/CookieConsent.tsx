import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface CookieConsentProps {
  onContactSales: () => void;
}

const STORAGE_KEY = "canvas-cookie-consent";

export default function CookieConsent({ onContactSales }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "all" | "none") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // storage unavailable (private mode) — just dismiss for this session
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 w-80 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-white shadow-2xl animate-[slideUp_250ms_ease-out]">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-semibold">Get started</h3>
        <button
          onClick={() => decide("none")}
          aria-label="Dismiss"
          className="rounded-md p-1 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-zinc-400">
        We use cookies and local storage to personalize your canvas, remember your workspace and measure
        performance. Read our{" "}
        <button className="underline underline-offset-2 hover:text-white">Cookies settings</button>.
      </p>
      <button
        onClick={() => decide("all")}
        className="mt-4 w-full rounded-lg bg-zinc-800 py-2.5 text-sm font-medium transition hover:bg-zinc-700"
      >
        Allow all cookies
      </button>
      <button
        onClick={() => decide("none")}
        className="mt-2 w-full rounded-lg py-2 text-sm text-zinc-400 transition hover:text-white"
      >
        Do not allow cookies
      </button>
      <button
        onClick={onContactSales}
        className="mt-3 w-full text-center text-[11px] font-medium text-zinc-500 transition hover:text-zinc-300"
      >
        Need enterprise governance? Contact sales →
      </button>
    </div>
  );
}
