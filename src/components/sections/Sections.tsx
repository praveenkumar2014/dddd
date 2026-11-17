import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Layers,
  Music,
  Users,
  PenTool,
  Rocket,
  ShieldCheck,
  Wand2,
} from "lucide-react";
import { buttonPrimary } from "../ui/button";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Infinite canvas",
    description: "Lay out posters, interfaces and storyboards on one boundless, zoomable surface.",
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    title: "Vector precision",
    description: "A production-grade vector engine with boolean ops, live corners and true curves.",
  },
  {
    icon: <Wand2 className="h-5 w-5" />,
    title: "Generative studio",
    description: "Turn a prompt into on-brand imagery, layouts and variants in seconds.",
  },
  {
    icon: <Music className="h-5 w-5" />,
    title: "Audio & video",
    description: "Drop in waveform visualizers, timelines and audio-reactive components.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Real-time collaboration",
    description: "Multi-cursor presence, comments and version history baked into every canvas.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Enterprise governance",
    description: "SSO, workspace RBAC, audit trails and dedicated inference for large teams.",
  },
];

const STATS = [
  { value: "60fps", label: "Canvas rendering" },
  { value: "4x", label: "Faster asset handoff" },
  { value: "120+", label: "Countries designing" },
  { value: "99.9%", label: "Platform uptime" },
];

export default function Sections() {
  return (
    <>
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600">
            <Sparkles className="h-3 w-3 text-[#5B45E0]" />
            One surface, every medium
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Everything your team needs to go from concept to production
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Canvas unifies vector, raster, audio and interactive UI in a single real-time workspace.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white transition group-hover:bg-[#5B45E0]">
                {feature.icon}
              </span>
              <h3 className="mt-4 text-base font-semibold text-zinc-950">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 px-8 py-14 text-center shadow-2xl md:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(60% 120% at 50% 0%, rgba(91,69,224,0.35) 0%, rgba(9,9,11,0) 70%)",
            }}
            aria-hidden
          />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300">
              <Rocket className="h-3 w-3 text-[#38BDF8]" />
              Start in under a minute
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Bring your next idea to life on the intelligent canvas
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
              Free forever for individuals. No credit card required. Upgrade when your team is ready.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/signup" className={buttonPrimary}>
                Get started for free
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
