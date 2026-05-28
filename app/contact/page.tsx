import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — let's talk about how I can help you.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's talk
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Your contact page intro — what should they expect after reaching
            out? Response time, next step, etc.
          </p>
        </div>
      </section>

      {/* ── FORM + INFO ──────────────────────────────────── */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              How to reach me
            </h2>
            <div className="space-y-6 text-slate-600">
              <div>
                <p className="font-semibold text-slate-900 text-sm mb-1">
                  Email
                </p>
                <a
                  href="mailto:your@email.com"
                  className="text-indigo-600 hover:underline text-sm"
                >
                  your@email.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm mb-1">
                  Response time
                </p>
                <p className="text-sm">I reply within 1–2 business days.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm mb-1">
                  Based in
                </p>
                <p className="text-sm">Your city / timezone</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm mb-2">
                  Connect
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
