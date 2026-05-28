import Link from "next/link";
import ManagePreferencesButton from "@/components/ManagePreferencesButton";

// Show the "Cookie Preferences" button only when the banner is active.
// To activate: set NEXT_PUBLIC_COOKIE_CONSENT=true in .env.local
const cookieBannerEnabled = process.env.NEXT_PUBLIC_COOKIE_CONSENT === "true";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand column */}
          <div>
            {/* Claude Code will replace name + tagline */}
            <p className="text-white font-semibold text-lg mb-2">Your Name</p>
            <p className="text-sm leading-relaxed">
              Your one-line value proposition or tagline goes here.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-white font-medium text-sm mb-4 uppercase tracking-wide">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-white font-medium text-sm mb-4 uppercase tracking-wide">
              Get in touch
            </p>
            <p className="text-sm mb-2">
              {/* Claude Code will replace with real email */}
              <a
                href="mailto:your@email.com"
                className="hover:text-white transition-colors"
              >
                your@email.com
              </a>
            </p>
            {/* Optional: social links */}
            <p className="text-sm">
              <a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {year} Your Name. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/imprint" className="hover:text-white transition-colors">
              Imprint
            </Link>
            {cookieBannerEnabled && <ManagePreferencesButton />}
          </div>
        </div>
      </div>
    </footer>
  );
}
