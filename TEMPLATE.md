# Industrial Website Template — Client Setup Guide

> Built on the Broadhead Industrial mockup stack.
> React + Vite + Tailwind + Framer Motion. Deployed on Vercel.
> New client = fork this repo, follow this checklist, push. Done.

---

## Quick Stats
- **Initial build time (from scratch):** ~20 hours
- **Re-skin time (from this template):** 2–4 hours
- **Stack:** React 18, Vite, Tailwind CSS v4, Framer Motion, React Router v6
- **Hosting:** Vercel (free tier works for most clients)
- **Forms:** EmailJS (free tier = 200 emails/mo — enough for most small contractors)

---

## Step 1 — Fork & Clone

```bash
gh repo fork sawyer7123/broadhead-industrial-mockup --clone --fork-name <client-slug>-website
cd <client-slug>-website
npm install
npm run dev
```

---

## Step 2 — Client Info Checklist

Collect everything below before touching code. Don't start without it.

| Field | Broadhead Example | New Client |
|-------|-------------------|------------|
| Company name | Broadhead Industrial Inc. | |
| Tagline / one-liner | When Iron Breaks, We Fix It. | |
| Phone | (780) 381-9536 | |
| Email | info@broadheadindustrial.ca | |
| City / Region | Fort McMurray, AB | |
| Service area | Northern Alberta | |
| Service 1 name | Rig Welding | |
| Service 1 description | 1–2 sentences | |
| Service 2 name | Heavy Equipment Repair | |
| Service 2 description | 1–2 sentences | |
| Est. year | 2020 | |
| Key credential/differentiator | 100% Indigenous-owned | |
| Certifications held | CWB, COR, ISNetworld, Avetta, NAABA | |
| Emergency dispatch? | Yes — 24/7 | |
| Logo file | logo.png + logo-color.png | |
| Accent color (hex) | #eab308 (hi-vis yellow) | |
| Domain | broadheadindustrial.ca | |

**Services note:** This template is built for exactly 2 core services. If the client has more than 2, pick their top 2 for the homepage and list the rest on the Services page. Don't try to cram 5 services into the hero — it dilutes everything.

---

## Step 3 — Files to Change

### 3.1 Global config — create `src/config/client.js`

Create this file. Every component pulls from here.

```js
export const CLIENT = {
  name: "Broadhead Industrial Inc.",
  shortName: "Broadhead",
  tagline: "When Iron Breaks, We Fix It.",
  subtagline: "Mobile welding & heavy equipment repair for the Oil Sands. 100% Indigenous-owned, CWB certified, on-site in hours — not days.",
  phone: "(780) 381-9536",
  phonePlain: "7803819536",
  email: "info@broadheadindustrial.ca",
  city: "Fort McMurray, AB",
  serviceArea: "Northern Alberta",
  estYear: 2020,
  ownershipNote: "100% Indigenous-owned & operated",
  heroLiveBadge: "Live: Crews Deployed in Fort McMurray",
  accentColor: "#eab308",       // hi-vis yellow — change per client
  domain: "https://broadheadindustrial.ca",
  services: [
    {
      id: "rig-welding",
      title: "Rig Welding",
      subtitle: "Mobile & On-Site",
      desc: "CWB-certified welders. B-Pressure pipe. Structural steel. We bring fully equipped rigs to your site — remote camps, plant shutdowns, emergency breakdowns.",
      features: [
        "CWB Certified Structural Welding",
        "B-Pressure Pipe Welding",
        "Structural Steel Fabrication",
        "Remote & Plant Site Service",
        "Multi-Process Welding Capability",
        "Emergency Breakdown Repairs",
      ],
      image: "/images/service-welding.webp",
      icon: "Zap",
    },
    {
      id: "heavy-equipment",
      title: "Heavy Equipment Repair",
      subtitle: "Minimize Downtime",
      desc: "A machine sitting down is revenue walking out the door. Broadhead's heavy equipment repair crews are built for rapid response — on-site fast, working faster.",
      features: [
        "Excavator & Loader Repairs",
        "Bucket Relines & Hardfacing",
        "Frame Crack Repairs",
        "Hydraulic System Service",
        "Undercarriage Maintenance",
        "Preventive Maintenance Programs",
      ],
      image: "/images/service-equipment.webp",
      icon: "Truck",
    },
  ],
  stats: [
    { value: 0, suffix: "", label: "Lost Time Incidents" },
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 24, suffix: "/7", label: "Emergency Dispatch" },
  ],
  certifications: [
    { src: "/images/badge-cwb.jpg",   alt: "CWB Certified",       label: "CWB Certified — Division 2" },
    { src: "/images/badge-cor.png",   alt: "COR Certified",        label: "COR / SECOR Certified" },
    { src: "/images/badge-isn.png",   alt: "ISNetworld",           label: "ISNetworld Compliant" },
    { src: "/images/badge-avetta.png",alt: "Avetta",               label: "Avetta Member" },
    { src: "/images/badge-naaba.png", alt: "NAABA",                label: "NAABA Certified Member" },
  ],
  emailjs: {
    serviceId: "service_broadhead",
    estimateTemplateId: "template_estimate",
    contactTemplateId: "template_contact",
    publicKey: "EMAILJS_PUBLIC_KEY",   // replace with real key from emailjs.com
  },
};
```

**Note for future clients:** Once `src/config/client.js` is fully wired into all components (see roadmap below), this is the only file you'll need to edit for most clients. For now, some values are still hardcoded in individual files — see Step 3.2.

---

### 3.2 Files with hardcoded values to update

Until config is fully wired, do a project-wide find & replace on these strings:

| Find | Replace with |
|------|-------------|
| `Broadhead Industrial` | Client company name |
| `Broadhead` | Client short name |
| `(780) 381-9536` | Client phone |
| `tel:7803819536` | `tel:<digits only>` |
| `info@broadheadindustrial.ca` | Client email |
| `Fort McMurray` | Client city |
| `Northern Alberta` | Client service area |
| `2020` | Client est. year |
| `100% aboriginally owned` / `100% Indigenous-owned` | Client differentiator |
| `service_broadhead` | EmailJS service ID |
| `EMAILJS_PUBLIC_KEY` | EmailJS public key |

---

### 3.3 Images — `public/images/`

| File | What it is | Notes |
|------|-----------|-------|
| `logo.png` | White/mono logo | Used in header + footer |
| `logo-color.png` | Full colour logo | Optional |
| `favicon.png` | Browser tab icon | 32x32 or 64x64 |
| `hero-bg.jpg` | OG/meta image | 1200x630 |
| `service-welding.webp` | Service 1 image | 800x600+ |
| `service-equipment.webp` | Service 2 image | 800x600+ |
| `badge-*.png/.jpg` | Cert badges | Keep on white/transparent bg |
| `hero-video.mp4` | Hero background video | Keep under 8MB. Can remove — fallback is hero-bg.jpg |
| `excavator.jpg`, `welding-sparks.jpg`, etc. | Fleet/gallery section | Replace with client photos |

**If client has no video:** Remove the `<video>` tag in `HeroSection` and replace with:
```jsx
<img src="/images/hero-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
```

---

### 3.4 Accent color

In `src/index.css`, change both hi-vis values:
```css
--color-hivis-400: #facc15;   /* lighter hover state */
--color-hivis-500: #eab308;   /* primary accent */
```

Common swaps for other trades:
- **Orange** (equipment, excavation): `#f97316` / `#ea6c0a`
- **Red** (fire, safety, emergency): `#ef4444` / `#dc2626`
- **Blue** (plumbing, electrical, water): `#3b82f6` / `#2563eb`
- **Green** (environmental, landscaping): `#22c55e` / `#16a34a`
- Keep the charcoal background — it works for virtually every trades industry

---

### 3.5 `index.html` — meta tags

Update these 5 things:
```html
<title>CLIENT NAME | SERVICE — CITY</title>
<meta name="description" content="..." />
<meta property="og:url" content="https://clientdomain.ca/" />
<meta property="og:title" content="..." />
<link rel="canonical" href="https://clientdomain.ca/" />
```

---

## Step 4 — EmailJS Setup (15 min)

1. Go to [emailjs.com](https://emailjs.com) → Sign up free
2. Add Email Service → connect Gmail (use unit.800ai@gmail.com or client's email)
3. Create two templates:
   - `template_estimate` — fields: `{{from_name}}`, `{{phone}}`, `{{description}}`
   - `template_contact` — fields: `{{from_name}}`, `{{company}}`, `{{reply_to}}`, `{{phone}}`, `{{service}}`, `{{message}}`
4. Copy your **Public Key** from Account → API Keys
5. Replace `EMAILJS_PUBLIC_KEY` in both form files
6. Replace `service_broadhead` with your actual Service ID

Free tier = 200 emails/month. Plenty for a small contractor.

---

## Step 5 — Vercel Deploy

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy
vercel --prod
```

Or connect the GitHub repo to Vercel dashboard — every push to `master` auto-deploys.

**Custom domain:** Add in Vercel → Project Settings → Domains. Point client's DNS A record to Vercel's IP.

---

## Step 6 — QA Checklist Before Handoff

- [ ] All placeholder text replaced (no "Broadhead", no "Fort McMurray" if different client)
- [ ] Logo loads in header and footer
- [ ] Phone number is clickable on mobile (`tel:` link)
- [ ] Contact form submits and sends email
- [ ] Fast-Track Estimate form submits and sends email
- [ ] Success state shows after form submit
- [ ] All certification badge images load
- [ ] Hero video plays (or fallback image shows if no video)
- [ ] Mobile nav opens/closes correctly
- [ ] Sticky bottom call bar shows on mobile
- [ ] Meta title/description updated in index.html
- [ ] Tested on iPhone Safari (most common mobile browser for trades clients)

---

## Pricing Reference

| Tier | What's included | Price (CAD) |
|------|----------------|-------------|
| Basic handoff | Reskin only, client handles hosting | $1,500 |
| Standard | Reskin + Vercel deploy + EmailJS setup + 30-day support | $2,500 |
| Premium | Standard + custom photos/copy + Google Analytics + 90-day support | $4,000+ |
| Free (referral play) | Full build, hand over for free — ask for referrals in return | $0 |

---

## Roadmap — Future Template Improvements

- [ ] Wire all components to `src/config/client.js` so literally only one file needs editing
- [ ] Add Google Analytics snippet (1-line swap in index.html)
- [ ] Add Projects page data to config (currently hardcoded in Projects.jsx)
- [ ] Add optional Testimonials section that renders only when array is populated
- [ ] Package as a proper CLI tool: `npx create-industrial-site <client-name>`

---

## Notes

- **"Innovative Solutions" service was removed.** Don't add filler services to pad the page. Two strong services beats three weak ones every time.
- **Testimonials are placeholder.** Collect real quotes before launch. One real quote from a named source beats five anonymous five-stars.
- **The hero headline is the most important line on the site.** Don't go generic. "When Iron Breaks, We Fix It" works for Broadhead. Every client needs their own version of that.
- **This template is intentionally dark-themed.** It works for heavy industrial, trades, oil & gas, construction, and most Northern Alberta industries. For a different vibe (e.g. landscaping, cleaning), the charcoal palette can be lightened — but keep the component structure.
