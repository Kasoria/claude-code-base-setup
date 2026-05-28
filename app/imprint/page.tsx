import { generateMeta } from "@/app/lib/metadata";

export const metadata = generateMeta({
  title: "Imprint",
  description: "Legal notice / imprint.",
  path: "/imprint",
  noIndex: true,
});

export default function ImprintPage() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Imprint</h1>
        <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
          <p>
            Claude Code will insert your imprint / legal notice here. Required
            fields in Germany (Impressum): full name, address, contact
            (phone/email), VAT ID if applicable, responsible person for
            content.
          </p>
        </div>
      </div>
    </section>
  );
}
