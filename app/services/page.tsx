import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Your services page meta description.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How I help you
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Supporting sentence about your services and who they are for.
          </p>
        </div>
      </section>

      {/* ── SERVICES DETAIL ──────────────────────────────── */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Service 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center text-slate-400 text-sm">
              Illustration / screenshot
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3 block">
                Service 01
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Service Name
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Description of this service: what it is, who it is for, what
                outcome the client can expect. Claude Code will fill this from
                your Blueprint output.
              </p>
              <ul className="space-y-2 mb-6">
                {["Deliverable A", "Deliverable B", "Deliverable C"].map(
                  (d) => (
                    <li
                      key={d}
                      className="flex gap-2 items-center text-sm text-slate-600"
                    >
                      <span className="text-indigo-600">✓</span> {d}
                    </li>
                  )
                )}
              </ul>
              <Link
                href="/contact"
                className="text-indigo-600 font-semibold hover:underline text-sm"
              >
                Enquire about this service →
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-100" />

          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-1 md:order-2 bg-slate-100 rounded-2xl aspect-video flex items-center justify-center text-slate-400 text-sm">
              Illustration / screenshot
            </div>
            <div className="order-2 md:order-1">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3 block">
                Service 02
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Service Name
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Description of this service. Keep the focus on outcomes —
                what changes for the client after they work with you?
              </p>
              <ul className="space-y-2 mb-6">
                {["Deliverable A", "Deliverable B", "Deliverable C"].map(
                  (d) => (
                    <li
                      key={d}
                      className="flex gap-2 items-center text-sm text-slate-600"
                    >
                      <span className="text-indigo-600">✓</span> {d}
                    </li>
                  )
                )}
              </ul>
              <Link
                href="/contact"
                className="text-indigo-600 font-semibold hover:underline text-sm"
              >
                Enquire about this service →
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-100" />

          {/* Service 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center text-slate-400 text-sm">
              Illustration / screenshot
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3 block">
                Service 03
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Service Name
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Description of this service. Speak to the outcome, not just
                the process.
              </p>
              <ul className="space-y-2 mb-6">
                {["Deliverable A", "Deliverable B", "Deliverable C"].map(
                  (d) => (
                    <li
                      key={d}
                      className="flex gap-2 items-center text-sm text-slate-600"
                    >
                      <span className="text-indigo-600">✓</span> {d}
                    </li>
                  )
                )}
              </ul>
              <Link
                href="/contact"
                className="text-indigo-600 font-semibold hover:underline text-sm"
              >
                Enquire about this service →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How does the process work?",
                a: "Answer this question here. Claude Code will replace with your actual FAQ content from the Blueprint.",
              },
              {
                q: "What do you need from me to get started?",
                a: "Answer this question here.",
              },
              {
                q: "How long does it take?",
                a: "Answer this question here.",
              },
              {
                q: "Do you offer revisions?",
                a: "Answer this question here.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl p-6 border border-slate-100"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-slate-900 px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            One sentence that lowers friction and invites them to reach out.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
