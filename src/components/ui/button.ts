export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-60";

export const buttonPrimary = `${base} ${focusRing} bg-zinc-950 px-5 py-2.5 text-white shadow-sm hover:bg-zinc-800 hover:shadow-md active:translate-y-px`;

export const buttonSecondary = `${base} ${focusRing} border border-zinc-200 bg-white px-4 py-2 text-zinc-900 shadow-sm hover:bg-zinc-50 active:translate-y-px`;

export const buttonGhost = `${base} ${focusRing} px-3 py-2 font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950`;
