import Link from "next/link";
import { generateMeta, siteConfig } from "@/app/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/app/lib/schema";

export const metadata = generateMeta({
  title: "Services",
  description:
    "Discover how I can help you — services, deliverables, and what you can expect when we work together.",
  path: "/services",
});

// ============================================================
// FAQ data — Claude Code will replace with real questions
// ============================================================
const faqs = [
  {
    question: "How does the process work?",
    answer:
      "Answer this question here. Claude Code will replace with your actual FAQ content from the Blueprint.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "Answer this question here.",
  },
  {
    question: "How long does it take?",
    answer: "Answer this question here.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Answer this question here.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ])}
      />
      {/* One schema block per service — Claude Code will expand */}
      <JsonLd
        data={serviceSchema({
          name: "Service Name",
          description: "Service description for search engines.",
          url: `${siteConfig.url}/services`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section aria-labelledby="services-hero-heading" className="bg-slate-50 px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Services
          </p>
          <h1
            id="services-hero-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            How I help you
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Supporting sentence about your services and who they are for.
          </p>
        </div>
      </section>

      {/* ── SERVICES DETAIL ──────────────────────────────── */}
      <section aria-labelledby="services-detail-heading" className="bg-white px-6 py-20">
        <h2 id="services-detail-heading" className="sr-only">
          Service details
        </h2>
        <div className="max-w-4xl mx-auto space-y-16">
          {[1, 2, 3].map((i, index) => (
            <article key={i} aria-labelledby={`service-${i}-heading`}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center text-slate-400 text-sm"
                  aria-label={`Service ${i} illustration`}
                  role="img"
                >
                  Illustration / screenshot
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3 block">
                    Service 0{i}
                  </span>
                  <h2
                    id={`service-${i}-heading`}
                    className="text-2xl font-bold text-slate-900 mb-4"
                  >
                    Service Name
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Description of this service: what it is, who it is for, what
                    outcome the client can expect. Claude Code will fill this
                    from your Blueprint output.
                  </p>
                  <ul className="space-y-2 mb-6" role="list">
                    {["Deliverable A", "Deliverable B", "Deliverable C"].map(
                      (d) => (
                        <li
                          key={d}
                          className="flex gap-2 items-center text-sm text-slate-600"
                        >
                          <span className="text-indigo-600" aria-hidden="true">
                            ✓
                          </span>
                          {d}
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
              {i < 3 && <div className="border-t border-slate-100 mt-16" />}
            </article>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="bg-slate-50 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2
            id="faq-heading"
            className="text-3xl font-bold text-slate-900 text-center mb-12"
          >
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl p-6 border border-slate-100"
              >
                <dt className="font-semibold text-slate-900 mb-2">
                  {faq.question}
                </dt>
                <dd className="text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section aria-labelledby="services-cta-heading" className="bg-slate-900 px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            id="services-cta-heading"
            className="text-3xl font-bold text-white mb-4"
          >
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
