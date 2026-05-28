"use client";

import { useState, useId } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const id = useId();
  const nameId = `${id}-name`;
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;
  const statusId = `${id}-status`;

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unknown error.");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm";
  const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      <div>
        <label htmlFor={nameId} className={labelClass}>
          Name <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Smith"
          aria-required="true"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor={emailId} className={labelClass}>
          Email <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@example.com"
          aria-required="true"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor={messageId} className={labelClass}>
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          required
          placeholder="Tell me about your project or question…"
          aria-required="true"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Live status region */}
      <div
        id={statusId}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {status === "success" && (
          <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-green-800 text-sm">
            Message sent! I'll get back to you within 1–2 business days.
          </div>
        )}
        {status === "error" && (
          <div role="alert" className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-800 text-sm">
            {errorMessage}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        aria-disabled={status === "loading"}
        aria-describedby={statusId}
        className="w-full py-3 px-6 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z" />
            </svg>
            Sending…
          </span>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
