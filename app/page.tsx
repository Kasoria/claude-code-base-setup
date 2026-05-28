import Link from "next/link";
import { generateMeta } from "@/app/lib/metadata";

export const metadata = generateMeta({
  description:
    "Your homepage meta description — one compelling sentence about who you help and what you do.",
  path: "/",
});

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
      <section aria-labelledby="hero-heading" className="bg-slate-50 px-6 py-24 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">
            For [Target Audience]
          </p>
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6"
          >
            Your Hero Headline
            <br />
            <span className="text-indigo-600">Goes Here</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your supporting sentence that reinforces the headline and speaks
            directly to the problem your ideal client has right now.
          </p>
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
      <section aria-label="Clients and social proof" className="bg-white border-y border-slate-100 px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-4">
            Trusted by professionals across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 font-medium text-sm">
            <span>Client / Company A</span>
            <span>Client / Company B</span>
            <span>Client / Company C</span>
            <span>Client / Company D</span>
          </div>
        </div>
      </section>

      {/* ── PROBLEM / AGITATION ──────────────────────────── */}
      <section aria-labelledby="problem-heading" className="bg-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2
            id="problem-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center"
          >
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
      <section aria-labelledby="services-heading" className="bg-slate-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              How I can help
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Supporting sentence about your services or approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                role="listitem"
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 bg-indigo-100 rounded-xl mb-6 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-indigo-600 font-bold">{i}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Service / Outcome {i}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Short description of this service, the transformation it
                  delivers, and who it is for.
                </p>
              </article>
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
      <section aria-labelledby="about-heading" className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center text-slate-400 text-sm"
            aria-label="Profile photo placeholder"
          >
            Your photo here
          </div>
          <div>
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
              About me
            </p>
            <h2
              id="about-heading"
              className="text-3xl font-bold text-slate-900 mb-4"
            >
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
      <section aria-labelledby="testimonials-heading" className="bg-slate-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold text-slate-900 text-center mb-12"
          >
            What clients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <figure
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
              >
                <blockquote>
                  <p className="text-slate-600 leading-relaxed mb-6 italic">
                    "Testimonial text goes here. Claude Code will insert real
                    testimonials you provide — keep them specific and
                    result-focused."
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 bg-slate-200 rounded-full"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      Client Name
                    </p>
                    <p className="text-slate-500 text-xs">Role / Company</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section aria-labelledby="cta-heading" className="bg-slate-900 px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
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
