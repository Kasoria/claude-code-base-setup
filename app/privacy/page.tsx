import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for this website.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Privacy Policy
        </h1>
        <p className="text-slate-600 text-sm mb-6">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            Claude Code will insert your full privacy policy text here. Make
            sure to include: data collected, how it is used, third-party
            services, cookie policy, and contact details for data requests.
          </p>
          <p>
            If you are operating in the EU/EEA, you must comply with GDPR. If
            you are based in Germany, this page also serves as your Datenschutzerklärung.
          </p>
        </div>
      </div>
    </section>
  );
}
