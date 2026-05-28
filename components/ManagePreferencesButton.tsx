"use client";

import * as CookieConsent from "vanilla-cookieconsent";

// Shown in the Footer when NEXT_PUBLIC_COOKIE_CONSENT=true
export default function ManagePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => CookieConsent.showPreferences()}
      className="hover:text-white transition-colors text-sm bg-transparent border-0 p-0 cursor-pointer"
    >
      Cookie Preferences
    </button>
  );
}
