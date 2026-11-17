import { Link } from "react-router-dom";
import { Play, Sparkles, Music, Pause, Signal } from "lucide-react";
import { buttonPrimary } from "./ui/button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:pt-24">
      <div className="grid items-center gap-16 lg:grid-cols-5">
        {/* Left column — editorial punchline */}
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600">
            <Sparkles className="h-3 w-3 text-[#5B45E0]" />
            Now with generative studio
          </div>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.08] tracking-tight text-zinc-950 md:text-6xl">
            The intelligent canvas for infinite creativity
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-600">
            Design posters, interfaces, audio visualizers and interactive components — all on one shared
            surface, from first concept to production-ready asset.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/signup" className={buttonPrimary}>
              Get started for free
            </Link>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 text-white transition group-hover:bg-zinc-700">
                <Play className="ml-0.5 h-2.5 w-2.5 fill-current" />
              </span>
              Watch live demo
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-400">Free forever for individuals. No credit card required.</p>
        </div>

        {/* Right column — layered workspace montage */}
        <div className="relative lg:col-span-3">
          <div className="relative mx-auto max-w-xl">
            {/* Layer A — festival poster */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl transition duration-300 hover:shadow-2xl">
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[#EDEAFF] via-[#F7F5FF] to-[#E6FBF8]">
                {/* concentric aura rings */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  {[320, 250, 180, 115].map((size, i) => (
                    <div
                      key={size}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{
                        width: size,
                        height: size,
                        background:
                          i === 3
                            ? "radial-gradient(circle, #7C65C1 0%, #5B45E0 100%)"
                            : "transparent",
                        border: i === 3 ? "none" : "1px solid rgba(91, 69, 224, 0.25)",
                      }}
                    />
                  ))}
                </div>
                <div className="relative flex h-full flex-col justify-between p-7">
                  <div className="flex items-start justify-between text-[11px] font-medium uppercase tracking-widest text-zinc-500">
                    <span>Resonance Festival</span>
                    <span>Vol. 04</span>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold leading-tight tracking-tight text-zinc-950">
                      Resonance
                      <br />
                      Festival
                    </div>
                    <div className="mt-3 text-xs font-medium text-zinc-600">
                      August 2–4, 2026 · Fernwood Park
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-3.5 py-1.5 text-[11px] font-medium text-white">
                      Three stages · Live art
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer B — phone chassis with audio player */}
            <div className="absolute -bottom-10 -right-4 w-44 rotate-3 rounded-[2rem] border-[6px] border-zinc-950 bg-zinc-950 shadow-2xl sm:-right-10 sm:w-52 transition duration-300 hover:rotate-1">
              <div className="overflow-hidden rounded-[1.6rem] bg-white">
                <div className="relative h-28 bg-gradient-to-br from-[#14532D] via-[#166534] to-[#22C55E] p-3">
                  <div className="text-[10px] font-medium text-white/80">Now playing</div>
                  <div className="mt-0.5 text-xs font-semibold text-white">Forest Frequencies</div>
                  <div className="absolute bottom-2.5 left-3 flex items-end gap-[3px]">
                    {[10, 16, 8, 14, 20, 12, 18, 9, 15].map((h, i) => (
                      <span
                        key={i}
                        className="w-[3px] rounded-full bg-[#EAB308]/90"
                        style={{ height: h, animation: `equalize 1.1s ease-in-out ${i * 0.09}s infinite alternate` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 px-4 py-3.5">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-white transition hover:scale-105"
                  >
                    <Pause className="h-3.5 w-3.5 fill-current" />
                  </span>
                  <div className="flex-1">
                    <div className="h-1 rounded-full bg-zinc-200">
                      <div className="h-1 w-2/5 rounded-full bg-[#22C55E]" />
                    </div>
                    <div className="mt-1 flex justify-between text-[8px] font-medium text-zinc-400">
                      <span>1:24</span>
                      <span>3:47</span>
                    </div>
                  </div>
                  <Music className="h-3.5 w-3.5 text-zinc-400" />
                </div>
              </div>
            </div>

            {/* Layer C — floating dark popover card */}
            <div className="absolute -left-2 top-8 w-64 -rotate-2 rounded-xl border border-zinc-800 bg-zinc-950 p-4 shadow-2xl sm:-left-12 transition duration-300 hover:rotate-0">
              <div className="flex items-center gap-2">
                <Signal className="h-3.5 w-3.5 text-[#38BDF8]" />
                <span className="text-xs font-semibold text-white">Live collaboration</span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-zinc-400">
                Priya, Jonas and 3 others are editing this canvas right now.
              </p>
              <div className="mt-3 flex items-center -space-x-1.5">
                {["PJ", "MK", "AL", "+3"].map((tag, i) => (
                  <span
                    key={tag}
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-semibold text-white ring-2 ring-zinc-950 ${
                      i === 0 ? "bg-[#5B45E0]" : i === 1 ? "bg-[#22C55E]" : i === 2 ? "bg-[#38BDF8]" : "bg-zinc-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
