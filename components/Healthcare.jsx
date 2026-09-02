"use client";

import { PRODUCT_NAV_ITEM } from "@/lib/navUtils";

import { useState } from "react";
import Link from "next/link";
import SharedNavbar from "./SharedNavbar";
import { Menu, X, ChevronDown, MessageCircle, Star } from "lucide-react";

function LogoMark({ className = "h-16 w-16" }) {
  return (
    <svg viewBox="0 0 64 72" className={className} aria-hidden>
      <circle cx="32" cy="28" r="14" fill="#38bdf8" />
      <text
        x="32"
        y="33"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontWeight="700"
        fontFamily="system-ui,sans-serif"
      >
        360
      </text>
      <path
        d="M12 30c0-11 9-20 20-20s20 9 20 20"
        fill="none"
        stroke="#0c4a6e"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M14 30v6c0 3 2 5 5 5h2"
        fill="none"
        stroke="#0c4a6e"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M50 30v6c0 3-2 5-5 5h-2"
        fill="none"
        stroke="#0c4a6e"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M18 48c2 8 8 12 14 12s12-4 14-12"
        fill="none"
        stroke="#7dd3fc"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text x="40" y="68" fill="#0c4a6e" fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif">
        CTI
      </text>
    </svg>
  );
}

function NavbarLogo() {
  const [useSvg, setUseSvg] = useState(false);
  if (useSvg) return <LogoMark className="h-16 w-16" />;
  return (
    <img
      src="/Kloudvault.png"
      alt="Kloudvault"
      width={200}
      height={64}
      className="h-14 w-auto max-h-16 object-contain sm:h-16"
      onError={() => setUseSvg(true)}
      decoding="async"
    />
  );
}


const NAV = [
  { label: "Home", href: "/" },
  PRODUCT_NAV_ITEM,
  {
    label: "Features",
    href: "/#capabilities",
    dropdown: [
      { label: "Inbound Call Workflow", href: "/inbound-outbound" },
      { label: "Outbound Call Process", href: "/call-routing" },
      { label: "Call Routing & Distribution", href: "/ai-automation" },
      { label: "Agent Management & Availability", href: "/agent-and-lead" },
      { label: "Call Monitoring and Compliance", href: "/call-monitoring" },
      { label: "Call Accessibility & Mobility", href: "/mobile-call-management" },
    ],
  },
  {
    label: "Solutions",
    href: "/#results",
    dropdown: [
      { label: "Contact Centers", href: "/contact-center" },
      { label: "Sales", href: "/sales-telephony" },
      { label: "Operations", href: "/operations" },
      { label: "Remote Call Center", href: "/remote-call-center" },
    ],
  },
  {
    label: "Industries",
    href: "/#testimonials",
    dropdown: [
      { label: "Real Estate", href: "/industry/real-estate/kloudconnect" },
      { label: "Non Profit", href: "/industry/non-profit/kloudconnect" },
      { label: "Financial Services", href: "/industry/financial-services/kloudconnect" },
      { label: "Education", href: "/industry/education/kloudconnect" },
      { label: "Professional Services", href: "/industry/professional-services/kloudconnect" },
      { label: "Healthcare", href: "/industry/healthcare/kloudconnect" },
    ],
  },
];



function Navbar() {
  return (
    <SharedNavbar
      navItems={NAV}
      NavbarLogo={NavbarLogo}
      ChevronIcon={ChevronDown}
      MenuIcon={Menu}
      CloseIcon={X}
      navItemIsActive={navItemIsActive}
      logoHref="#top"
    />
  );
}
function FloatingChat() {
  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
      <button
        type="button"
        className="hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg sm:flex"
        aria-label="Live chat"
      >
        <MessageCircle className="h-5 w-5" />
        Live Chat
      </button>
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg sm:h-12 sm:w-12"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}

function HomeStyleFooter() {
  return (
    <section className="bg-[#0a1628] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Subscribe to Our Newsletter</h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Get the latest in AI, voice, messaging, and Salesforce—delivered to your inbox.
          </p>
        </div>
        <form
          className="mt-8 flex w-full max-w-lg flex-col gap-2 rounded-2xl bg-white p-2 shadow-lg sm:mt-0 sm:flex-row lg:max-w-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter Your Address"
            className="min-h-11 flex-1 rounded-xl border-0 px-4 text-sm text-slate-900 outline-none"
          />
          <button
            type="submit"
            className="rounded-xl bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-600"
          >
            Subscribe
          </button>
        </form>
      </div>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-end gap-2 text-white">
                <img src="/Kloudvault logo.png" alt="Kloudvault" className="h-14 w-auto" />
              </div>
              <p className="mt-4 text-sm font-semibold">Let&apos;s Connect</p>
              <div className="mt-4 flex gap-2">
                {[
                  {
                    label: "LinkedIn",
                    char: "in",
                    href: "https://www.linkedin.com/company/kloudrac/posts/?feedView=all",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white hover:bg-sky-500"
                    aria-label={s.label}
                  >
                    {s.char}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Email Us</h3>
              <a href="mailto:contact@Kloudvault.com" className="mt-2 block text-sm text-slate-300 hover:text-white">
                contact@Kloudvault.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold">Features</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {[
                  { t: "Inbound Call Workflow", href: "/inbound-outbound" },
                  { t: "Outbound Call Process", href: "/call-routing" },
                  { t: "Call Routing & Distribution", href: "/ai-automation" },
                  { t: "Agent Management & Availability", href: "/agent-and-lead" },
                  { t: "Call Monitoring and Compliance", href: "/call-monitoring" },
                  { t: "Call Accessibility & Mobility", href: "/mobile-call-management" },
                ].map(({ t, href }) => (
                  <li key={t}>
                    <Link href={href} className="hover:text-white">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Solutions</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {[
                  { t: "Contact Centers", href: "/contact-center" },
                  { t: "Sales", href: "/sales-telephony" },
                  { t: "Operations", href: "/operations" },
                  { t: "Remote call center", href: "/remote-call-center" },
                ].map(({ t, href }) => (
                  <li key={t}>
                    <Link href={href} className="hover:text-white">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
            <p>Copyright {new Date().getFullYear()} Kloudvault | All Right Reserved.</p>
            <p>
              <span className="hover:text-slate-300">→ Our Business</span>{" "}
              <a href="#" className="hover:text-slate-300">
                Privacy
              </a>
              ,{" "}
              <a href="#" className="hover:text-slate-300">
                Terms &amp; Condition
              </a>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

const HERO_PATHS = ["/Healthcare-Hero.png", "/Healthcare-Hero.jpg"];
const AI_DRIVEN_IMG_PATHS = ["/AI-Driven.png", "/AI-Driven.jpg", "/AIDriven.png"];
const OFFER_IMG_PATHS = ["/Offer.png", "/Offer.jpg", "/offer.png"];

const statCards = [
  { big: "24x7", small: "Patient Support Availability" },
  { big: "Zero", small: "Appointment Follow-Up Gaps" },
  { big: "99.9%", small: "Communication Reliability" },
  { big: "Smart", small: "Care-Team Routing" },
  { big: "Salesforce-Native", small: "Clinical Workflows" },
  { big: "Enterprise", small: "Compliance Controls" },
];

function statCardClass(i) {
  return i % 2 === 0
    ? "border border-slate-300/40 bg-[#E1EBF4] shadow-sm"
    : "border border-sky-300/50 bg-[#A9D1E1] shadow-sm";
}

export default function Healthcare() {
  const [heroBgIndex, setHeroBgIndex] = useState(0);
  const heroBgFailed = heroBgIndex >= HERO_PATHS.length;
  const [aiDrivenImgIndex, setAiDrivenImgIndex] = useState(0);
  const [offerImgIndex, setOfferImgIndex] = useState(0);

  const impactStats = [
    {
      pct: "39%",
      title: "Faster Patient Query Resolution",
      body: "Intelligent routing and guided call flows help patients reach the right care team quickly and reduce average response time.",
    },
    {
      pct: "33%",
      title: "Lower No-Show Rates",
      body: "Automated reminders and timely callback workflows improve appointment adherence and strengthen patient engagement.",
    },
    {
      pct: "28%",
      title: "Improved Patient Experience Scores",
      body: "Consistent communication quality and better care coordination increase trust and improve overall service satisfaction.",
    },
  ];

  const aiDrivenCards = [
    {
      title: "Route Patients to the Right Department Quickly",
      body: "Use intent-based routing for appointments, billing, and support so patients connect to the right team without long transfers.",
    },
    {
      title: "Automate Appointment and Care Follow-Ups",
      body: "Run reminder and follow-up workflows to reduce missed visits, improve continuity, and keep patients informed at every step.",
    },
    {
      title: "Protect Sensitive Healthcare Conversations",
      body: "Support compliant communication with secure call handling, access controls, and workflow visibility for clinical and support teams.",
    },
  ];

  const offerCards = [
    {
      title: "Strengthen After-Hours Response Coverage",
      body: "Forward urgent calls to on-call teams with controlled escalation logic so patient-critical communication is never delayed.",
    },
    {
      title: "Improve Cross-Team Care Coordination",
      body: "Use warm transfers and conferencing to connect departments in real time and resolve patient requests with less friction.",
    },
    {
      title: "Coach Teams with Communication Insights",
      body: "Review call outcomes and interaction patterns to improve staff training, conversation quality, and patient support consistency.",
    },
  ];

  const testimonials = [
    {
      title: "Improved communication consistency across clinics",
      quote:
        "Our teams now manage patient calls and follow-ups in one Salesforce workflow. Response times improved and escalation handling is much more reliable.",
      name: "Dr. Neha Sethi",
      role: "Care Operations Lead",
    },
    {
      title: "Better visibility for patient support operations",
      quote:
        "Appointment teams and support staff are now aligned on every interaction. It has helped us reduce missed callbacks and improve patient confidence.",
      name: "Aarav Mehta",
      role: "Patient Experience Manager",
    },
  ];

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900">
      <Navbar />
      {/* 1 — Hero */}
      <section className="relative flex min-h-[min(85vh,640px)] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" aria-hidden />
        {!heroBgFailed && (
          <img
            key={HERO_PATHS[heroBgIndex]}
            src={encodeURI(HERO_PATHS[heroBgIndex])}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-45"
            onError={() => setHeroBgIndex((i) => i + 1)}
            decoding="async"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950/78 via-slate-900/85 to-slate-950"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-24">
          <div className="hero-content-from-left flex w-full max-w-5xl flex-col items-center opacity-0">
            <span className="inline-block rounded-full border border-white/50 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              Healthcare Communication Cloud
            </span>
            <h1 className="mx-auto mt-8 max-w-5xl text-[40px] font-bold leading-[1.12] tracking-tight text-white">
              Elevate Patient Communication with AI-Led Kloudvault
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
              Unify appointment calls, care coordination, and support workflows in Salesforce to deliver faster and more trusted patient experiences.
            </p>
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full bg-sky-600 px-10 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
            >
              Schedule a Healthcare Demo
            </Link>
          </div>
        </div>
      </section>


      {/* 3 — Impact */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hero-content-from-left opacity-0">
            <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              Healthcare Outcomes You Can Measure
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {impactStats.map((s) => (
              <div key={s.title} className="text-center">
                <p className="text-4xl font-bold text-slate-900 sm:text-5xl">{s.pct}</p>
                <p className="mt-2 text-lg font-medium text-slate-900">{s.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 — AI-Driven + image right */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hero-content-from-left opacity-0">
            <h2 className="mx-auto max-w-5xl text-center text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-[2.5rem] md:leading-tight">
              Smarter Calling Workflows for Better Patient Support
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
              Improve response speed, reduce communication delays, and strengthen care delivery with Salesforce-native calling workflows.
            </p>
          </div>
          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="hero-content-from-left space-y-4 opacity-0">
              {aiDrivenCards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-slate-200/80 bg-[#f0f4f8] p-5 shadow-sm sm:p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
                </div>
              ))}
            </div>
            <div className="-mt-14 flex justify-center sm:-mt-16 lg:-mt-8 lg:justify-end">
              {aiDrivenImgIndex < AI_DRIVEN_IMG_PATHS.length ? (
                <img
                  key={AI_DRIVEN_IMG_PATHS[aiDrivenImgIndex]}
                  src={encodeURI(AI_DRIVEN_IMG_PATHS[aiDrivenImgIndex])}
                  alt="AI-driven Salesforce calling for better patient care"
                  className="hero-content-from-right h-auto w-full max-w-xl rounded-2xl object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={() => setAiDrivenImgIndex((i) => i + 1)}
                />
              ) : (
                <div className="flex min-h-[200px] w-full max-w-xl flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-8 text-center text-sm text-slate-600">
                  <LogoMark className="h-12 w-12 opacity-40" />
                  <p>
                    Add <span className="font-mono text-xs">public/AI-Driven.png</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Offer.png left + cards */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="hero-content-from-left order-2 -mt-12 flex justify-center opacity-0 sm:-mt-14 lg:order-1 lg:-mt-20 lg:-translate-y-4 lg:justify-start">
              {offerImgIndex < OFFER_IMG_PATHS.length ? (
                <img
                  key={OFFER_IMG_PATHS[offerImgIndex]}
                  src={encodeURI(OFFER_IMG_PATHS[offerImgIndex])}
                  alt="Healthcare cloud phone and contact center"
                  className="h-auto w-full max-w-xl rounded-2xl object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={() => setOfferImgIndex((i) => i + 1)}
                />
              ) : (
                <div className="flex min-h-[200px] w-full max-w-xl flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm text-slate-600">
                  <LogoMark className="h-12 w-12 opacity-40" />
                  <p>
                    Add <span className="font-mono text-xs">public/Offer.png</span>
                  </p>
                </div>
              )}
            </div>
            <div className="hero-content-from-left order-1 space-y-4 opacity-0 lg:order-2">
              {offerCards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-sky-100 bg-[#eff6ff] p-5 shadow-sm sm:p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Case study CTA */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="hero-content-from-left flex flex-col items-stretch justify-between gap-6 rounded-2xl bg-[#3B8DEB] px-6 py-8 opacity-0 shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-9">
            <p className="text-center text-lg font-semibold leading-snug text-white sm:max-w-[55%] sm:text-left sm:text-xl">
              Want to see results
              <br />
              from real healthcare use cases?
            </p>
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 sm:px-6"
            >
              Download the Healthcare Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — Stats */}
      <section
        className="py-14 sm:py-20"
        style={{
          backgroundColor: "#eef2ff",
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hero-content-from-left opacity-0">
            <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Secure, Compliant Communication for Care Teams
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {statCards.map((s, i) => (
                <div key={`${s.big}-${s.small}-${i}`} className={`rounded-2xl p-6 text-left ${statCardClass(i)}`}>
                  <p className="text-2xl font-bold text-slate-900">{s.big}</p>
                  <p className="mt-1 text-sm text-slate-600">{s.small}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Testimonials */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hero-content-from-left opacity-0">
            <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              What Healthcare Teams Say About Kloudvault
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="hero-content-from-left relative flex min-h-[260px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-[#f8f8f8] p-8 shadow-md"
              >
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 font-bold text-slate-900">{t.title}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{t.quote}</p>
                <div className="relative z-[1] mt-8">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
                <span
                  className="pointer-events-none absolute bottom-4 right-4 text-8xl font-serif leading-none text-white/90"
                  aria-hidden
                >
                  &ldquo;
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — Final CTA */}
      <section
        className="py-16 sm:py-24"
        style={{
          backgroundColor: "#f5f3ff",
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      >
        <div className="hero-content-from-left mx-auto max-w-[min(100%,1200px)] px-4 text-center opacity-0">
          <div className="flex justify-center overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <h2
              className="font-bold tracking-tight text-slate-900 whitespace-nowrap"
              style={{ fontSize: "clamp(11px, 2.1vw, 1.875rem)" }}
            >
              Faster Support. Better Coordination. Stronger Patient Trust.
            </h2>
          </div>
          <p className="mt-4 text-lg text-slate-700">
            Talk to our experts to design a Salesforce communication workflow.
          </p>
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-[#008ecc] px-8 py-3 font-semibold text-white hover:bg-sky-700"
          >
            Talk to a Healthcare Specialist
          </Link>
        </div>
      </section>

      <HomeStyleFooter />
      <FloatingChat />
    </div>
  );
}
