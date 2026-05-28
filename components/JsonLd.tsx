// ── JsonLd — inject Schema.org JSON-LD into any page ─────────
// Usage: <JsonLd data={personSchema()} />
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
