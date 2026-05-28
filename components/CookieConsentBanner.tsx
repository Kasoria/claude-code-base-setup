"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

// ============================================================
// COOKIE CONSENT BANNER (optional)
//
// Uses vanilla-cookieconsent v3 — GDPR-compliant, opt-in mode.
// https://cookieconsent.orestbida.com
//
// HOW TO ACTIVATE:
//   In app/layout.tsx, uncomment the two marked lines.
//
// CATEGORIES:
//   • necessary  — always on, no toggle (session cookie, CSRF)
//   • analytics  — off by default (e.g. Google Analytics)
//   • marketing  — off by default (e.g. Meta Pixel)
//
// Claude Code will:
//   1. Ask you which categories you actually use
//   2. Add/remove the relevant autoClear cookie names
//   3. Replace the placeholder text with your brand copy
// ============================================================

export default function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      // GDPR-compliant: scripts only run after explicit consent
      mode: "opt-in",

      // Auto-clear rejected-category cookies on preference change
      autoClearCookies: true,

      // Hide banner from crawlers (keeps Google from indexing it)
      hideFromBots: true,

      // Layout: bottom-right box. Change in guiOptions below if needed.
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          flipButtons: false,
          equalWeightButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: false,
          flipButtons: false,
        },
      },

      // ── Cookie categories ─────────────────────────────────
      categories: {
        necessary: {
          // Always on — no toggle shown
          readOnly: true,
        },

        analytics: {
          // Off by default — user must opt in
          enabled: false,
          autoClear: {
            cookies: [
              // Claude Code will insert your analytics cookie names here
              // Example for Google Analytics:
              // { name: /^(_ga|_gid)/ },
            ],
          },
        },

        marketing: {
          // Off by default — user must opt in
          enabled: false,
          autoClear: {
            cookies: [
              // Claude Code will insert your marketing cookie names here
              // Example for Meta Pixel:
              // { name: /^(_fb|fr)/ },
            ],
          },
        },
      },

      // ── Language & UI text ────────────────────────────────
      // Claude Code will translate / adapt this copy to match your brand voice.
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "We use cookies to ensure the basic functionality of the website and to enhance your experience. You can choose to opt in or out of each category at any time.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
              footer: `
                <a href="/privacy" target="_blank">Privacy Policy</a>
                <a href="/imprint" target="_blank">Imprint</a>
              `,
            },
            preferencesModal: {
              title: "Cookie Preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              serviceCounterLabel: "Service(s)",
              sections: [
                {
                  title: "Your privacy choices",
                  description:
                    "This panel allows you to customise your cookie preferences. You can review and change your settings at any time.",
                },
                {
                  title: "Strictly necessary",
                  description:
                    "These cookies are required for the website to function correctly and cannot be turned off.",
                  linkedCategory: "necessary",
                  cookieTable: {
                    headers: {
                      name: "Cookie",
                      description: "Description",
                      duration: "Duration",
                    },
                    body: [
                      {
                        name: "cc_cookie",
                        description: "Stores your cookie consent preferences",
                        duration: "6 months",
                      },
                    ],
                  },
                },
                {
                  title: "Analytics",
                  description:
                    "These cookies help us understand how visitors interact with our website. All data is anonymous.",
                  linkedCategory: "analytics",
                  cookieTable: {
                    headers: {
                      name: "Cookie",
                      description: "Description",
                      duration: "Duration",
                    },
                    body: [
                      {
                        // Claude Code will replace with your real analytics cookies
                        name: "Analytics cookie",
                        description:
                          "Used to track site usage (e.g. Google Analytics)",
                        duration: "Up to 2 years",
                      },
                    ],
                  },
                },
                {
                  title: "Marketing",
                  description:
                    "These cookies are used to deliver personalised ads. They may be set by advertising partners.",
                  linkedCategory: "marketing",
                  cookieTable: {
                    headers: {
                      name: "Cookie",
                      description: "Description",
                      duration: "Duration",
                    },
                    body: [
                      {
                        // Claude Code will replace with your real marketing cookies
                        name: "Marketing cookie",
                        description:
                          "Used for ad targeting (e.g. Meta Pixel, Google Ads)",
                        duration: "Up to 3 months",
                      },
                    ],
                  },
                },
                {
                  title: "More information",
                  description:
                    'For any questions about cookies and your privacy choices, please <a href="/contact">contact us</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
