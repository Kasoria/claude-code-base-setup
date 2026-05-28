import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Your about page meta description.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">
            About me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your name or positioning headline
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            One or two sentences that set the tone for who you are and what
            makes you different.
          </p>
        </div>
      </section>

      {/* ── STORY SECTION ────────────────────────────────── */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div className="bg-slate-100 rounded-2xl aspect-[4/5] flex items-center justify-center text-slate-400 text-sm sticky top-24">
            Your photo here
          </div>

          {/* Story copy */}
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">My story</h2>
            <p>
              First paragraph — your background. Where you started, what you
              were doing, what problem you noticed or experienced yourself.
              Claude Code will write this from your Blueprint output.
            </p>
            <p>
              Second paragraph — the turning point. What changed, what you
              decided to do differently, what you learned.
            </p>
            <p>
              Third paragraph — where you are now and what you do for your
              clients. Bridge to your offer.
            </p>

            {/* Values or approach */}
            <div className="border-t border-slate-100 pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                My approach
              </h3>
              <ul className="space-y-3">
                {[
                  "Value or principle 1 — one sentence.",
                  "Value or principle 2 — one sentence.",
                  "Value or principle 3 — one sentence.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
            >
              Work with me
            </Link>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS / NUMBERS ────────────────────────── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "0+", label: "Clients served" },
              { number: "0", label: "Years experience" },
              { number: "0+", label: "Projects delivered" },
              { number: "100%", label: "Remote & flexible" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-slate-900 mb-1">
                  {stat.number}
                </p>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
