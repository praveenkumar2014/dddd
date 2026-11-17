import { useState } from "react";
import type { FormEvent } from "react";
import { X, CircleCheck as CheckCircle2, CircleAlert as AlertCircle } from "lucide-react";
import { supabase } from "../lib/supabase";

interface ContactSalesModalProps {
  open: boolean;
  onClose: () => void;
}

const TEAM_SIZES = ["1–5", "6–20", "21–100", "100+"];

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

export default function ContactSalesModal({ open, onClose }: ContactSalesModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState(TEAM_SIZES[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  if (!open) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !company.trim()) return;
    setStatus({ kind: "sending" });
    const { error } = await supabase.from("sales_leads").insert({
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      team_size: teamSize,
      message: message.trim() || null,
    });
    if (error) {
      setStatus({ kind: "error", message: "Something went wrong sending your request. Please try again." });
      return;
    }
    setStatus({ kind: "sent" });
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 transition";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm animate-[fadeIn_150ms_ease-out]"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-zinc-200 animate-[popIn_180ms_ease-out]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-md p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 transition"
        >
          <X className="h-4 w-4" />
        </button>

        {status.kind === "sent" ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-green-600" />
            <h3 className="text-lg font-semibold text-zinc-950">Request received</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Thanks, {name.split(" ")[0] || "there"}. Our sales team will reach out to {email} within one
              business day.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 transition"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-semibold tracking-tight text-zinc-950">Contact sales</h3>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">
              Tell us a little about your team and we'll set you up with SSO, workspace governance and
              dedicated inference.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="lead-name" className="mb-1 block text-xs font-medium text-zinc-700">
                    Full name
                  </label>
                  <input
                    id="lead-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="lead-email" className="mb-1 block text-xs font-medium text-zinc-700">
                    Work email
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ada@company.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lead-company" className="mb-1 block text-xs font-medium text-zinc-700">
                  Company
                </label>
                <input
                  id="lead-company"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Design Co."
                  className={inputClass}
                />
              </div>
              <div>
                <span className="mb-1.5 block text-xs font-medium text-zinc-700">Team size</span>
                <div className="grid grid-cols-4 gap-2">
                  {TEAM_SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setTeamSize(size)}
                      className={`rounded-lg border px-2 py-2 text-xs font-medium transition ${
                        teamSize === size
                          ? "border-zinc-950 bg-zinc-950 text-white"
                          : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="lead-message" className="mb-1 block text-xs font-medium text-zinc-700">
                  Message <span className="font-normal text-zinc-400">(optional)</span>
                </label>
                <textarea
                  id="lead-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="We're rolling out a design system across 4 brand teams..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status.kind === "error" && (
                <div className="flex items-start gap-2 rounded-lg bg-red-50 px-3 py-2.5 text-xs text-red-700">
                  <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.kind === "sending"}
                className="w-full rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60 transition"
              >
                {status.kind === "sending" ? "Sending…" : "Send request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
