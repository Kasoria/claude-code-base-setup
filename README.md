# Kasoria Base Setup

A pre-built Next.js starter for the **Claude Code Website Builder** (OTO1 bonus).  
Clone this repo and skip Step 1 entirely — you'll be in Step 2 within minutes.

---

## What's included

- **Next.js 15** with App Router + TypeScript
- **Tailwind CSS v4** — utility-first styling, zero config
- **4 pages** ready for your Blueprint content: Home, About, Services, Contact
- **Privacy Policy + Imprint** pages (fill in your details)
- **Contact form** with working email delivery (SMTP or Resend)
- **Header + Footer** — sticky nav, mobile menu, CTA button
- **SEO-ready** — metadata API on every page, OG tags in layout
- **Vercel-ready** — deploy in one click after pushing to GitHub

---

## Quick start

### 1. Clone the repo

```bash
git clone https://github.com/YOUR-HANDLE/kasoria-base-setup.git my-website
cd my-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your SMTP credentials (or Resend API key).  
See the comments inside for details.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — your site is running.

---

## Folder structure

```
├── app/
│   ├── layout.tsx          ← site-wide layout (fonts, header, footer)
│   ├── globals.css         ← Tailwind base + CSS variables
│   ├── page.tsx            ← Homepage
│   ├── about/page.tsx      ← About page
│   ├── services/page.tsx   ← Services page
│   ├── contact/page.tsx    ← Contact page
│   ├── privacy/page.tsx    ← Privacy policy
│   ├── imprint/page.tsx    ← Imprint / legal notice
│   └── api/
│       └── contact/
│           └── route.ts    ← Contact form API (SMTP / Resend)
├── components/
│   ├── Header.tsx          ← Sticky navigation
│   ├── Footer.tsx          ← Footer with links
│   └── ContactForm.tsx     ← Client-side contact form
├── public/                 ← Static assets (favicon, images)
├── .env.example            ← Environment variable template
└── next.config.ts          ← Next.js config
```

---

## Contact form setup

### Option A — SMTP (recommended, works with Gmail / Zoho / any provider)

Fill in `.env.local`:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO=your@email.com
```

> **Gmail users:** Use an [App Password](https://support.google.com/accounts/answer/185833), not your main password.

### Option B — Resend

1. Install: `npm install resend`
2. In `app/api/contact/route.ts`, uncomment the Resend block and comment out the SMTP block
3. Add `RESEND_API_KEY=re_xxx` to `.env.local`

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Add your environment variables in the Vercel dashboard
4. Click **Deploy**

Your site will be live on a `*.vercel.app` URL within ~60 seconds.  
Connect your custom domain in Vercel → Settings → Domains (free on all plans).

---

## Next step

Open Claude Code and run the Step 2 prompt from the **Claude Code Website Builder** PDF.  
Paste your full Blueprint output — Claude Code will replace all placeholders with your real content.
