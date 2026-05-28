import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Your homepage meta description.",
};

// ============================================================
// HOMEPAGE
// Claude Code will replace all placeholder text with your
// Blueprint output — paste the full Blueprint output and let
// Claude Code build each section.
// ============================================================

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-24 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">
            For [Target Audience]
          </p>

          {/* Headline — from Blueprint Step 4 */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Your Hero Headline
            <br />
            <span className="text-indigo-600">Goes Here</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your supporting sentence that reinforces the headline and speaks
            directly to the problem your ideal client has right now.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-indigo-600 transition-colors text-lg"
            >
              Primary CTA
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-slate-900 transition-colors text-lg"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / TRUST BAR ─────────────────────── */}
      <section className="bg-white border-y border-slate-100 px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-4">
            Trusted by professionals across industries
          </p>
          {/* Claude Code will add logos or names here */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 font-medium text-sm">
            <span>Client / Company A</span>
            <span>Client / Company B</span>
            <span>Client / Company C</span>
            <span>Client / Company D</span>
          </div>
        </div>
      </section>

      {/* ── PROBLEM / AGITATION ──────────────────────────── */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            The problem your ideal client faces
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed text-center">
            A paragraph that describes the pain, frustration, or stagnation your
            target client is experiencing right now. Be specific. Use their
            language. Claude Code will fill this from your Blueprint output.
          </p>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How I can help
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Supporting sentence about your services or approach.
            </p>
          </div>

          {/* Service cards — Claude Code will populate from Blueprint */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">{i}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Service / Outcome {i}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Short description of this service, the transformation it
                  delivers, and who it is for.
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-indigo-600 font-semibold hover:underline"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────────── */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center text-slate-400 text-sm">
            Your photo here
          </div>

          {/* Copy */}
          <div>
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
              About me
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Your name or short positioning statement
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              2–3 sentences about who you are, what you do, and why it matters.
              Claude Code will write this from your Blueprint output.
            </p>
            <Link
              href="/about"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Read more about me →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What clients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
              >
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  "Testimonial text goes here. Claude Code will insert real
                  testimonials you provide — keep them specific and
                  result-focused."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      Client Name
                    </p>
                    <p className="text-slate-500 text-xs">Role / Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="bg-slate-900 px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            One sentence that lowers friction and invites them to take the next
            step.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-colors text-lg"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
