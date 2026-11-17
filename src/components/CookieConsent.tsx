import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface CookieConsentProps {
  onContactSales: () => void;
}

const STORAGE_KEY = "canvas-cookie-consent";

interface Preferences {
  analytics: boolean;
  personalization: boolean;
}

const DEFAULTS: Preferences = { analytics: true, personalization: true };

const readStored = (): Preferences | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Preferences>) };
  } catch {
    return null;
  }
};

export default function CookieConsent({ onContactSales }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<"banner" | "settings">("banner");
  const [prefs, setPrefs] = useState<Preferences>(DEFAULTS);

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      setPrefs(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const save = (value: Preferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      // storage unavailable (private mode) — just dismiss for this session
    }
    setPrefs(value);
    setVisible(false);
  };

  if (!visible) return null;

  const toggleRow = (label: string, description: string, key: keyof Preferences | null) => (
    <div className="flex items-start justify-between gap-4 border-t border-zinc-800 py-3">
      <div>
        <p className="text-xs font-medium text-white">{label}</p>
        <p className="mt-0.5 text-[11px] leading-relaxed text-zinc-500">{description}</p>
      </div>
      {key === null ? (
        <span className="mt-0.5 shrink-0 text-[11px] font-medium text-zinc-500">Always on</span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={prefs[key]}
          aria-label={label}
          onClick={() => setPrefs((current) => ({ ...current, [key]: !current[key] }))}
          className={`mt-0.5 relative h-5 w-9 shrink-0 rounded-full transition ${
            prefs[key] ? "bg-green-500" : "bg-zinc-700"
          }`}
        >
          <span
            className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
              prefs[key] ? "left-[1.125rem]" : "left-0.5"
            }`}
          />
        </button>
      )}
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 w-80 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-white shadow-2xl animate-[slideUp_250ms_ease-out]">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-semibold">{view === "banner" ? "Get started" : "Cookie settings"}</h3>
        <button
          onClick={() => save(view === "banner" ? { analytics: false, personalization: false } : prefs)}
          aria-label="Dismiss"
          className="rounded-md p-1 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {view === "banner" ? (
        <>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            We use cookies and local storage to personalize your canvas, remember your workspace and
            measure performance. Read our{" "}
            <button
              onClick={() => setView("settings")}
              className="underline underline-offset-2 transition hover:text-white"
            >
              Cookies settings
            </button>
            .
          </p>
          <button
            onClick={() => save({ analytics: true, personalization: true })}
            className="mt-4 w-full rounded-lg bg-zinc-800 py-2.5 text-sm font-medium transition hover:bg-zinc-700"
          >
            Allow all cookies
          </button>
          <button
            onClick={() => save({ analytics: false, personalization: false })}
            className="mt-2 w-full rounded-lg py-2 text-sm text-zinc-400 transition hover:text-white"
          >
            Do not allow cookies
          </button>
        </>
      ) : (
        <>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            Choose which optional cookies Canvas may use. Necessary cookies are always active.
          </p>
          <div className="mt-2">
            {toggleRow("Necessary", "Required for sign-in and workspace sync.", null)}
            {toggleRow("Analytics", "Helps us measure performance and usage.", "analytics")}
            {toggleRow("Personalization", "Remembers your canvas and preferences.", "personalization")}
          </div>
          <button
            onClick={() => save(prefs)}
            className="mt-4 w-full rounded-lg bg-zinc-800 py-2.5 text-sm font-medium transition hover:bg-zinc-700"
          >
            Save preferences
          </button>
          <button
            onClick={() => setView("banner")}
            className="mt-2 w-full rounded-lg py-2 text-sm text-zinc-400 transition hover:text-white"
          >
            Back
          </button>
        </>
      )}

      <button
        onClick={onContactSales}
        className="mt-3 w-full text-center text-[11px] font-medium text-zinc-500 transition hover:text-zinc-300"
      >
        Need enterprise governance? Contact sales →
      </button>
    </div>
  );
}
