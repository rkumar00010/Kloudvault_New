"use client";

import { navItemIsActive, PRODUCT_NAV_ITEM } from "@/lib/navUtils";
import { INDUSTRIES_NAV_DROPDOWN } from "@/lib/industries/navDropdown";
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
    dropdown: INDUSTRIES_NAV_DROPDOWN,
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

const HERO_BG = "/Real-Estate-Hero.jpg";
const IMG_PROPERTIES_FASTER = "/Properties Faster.png";
/** Try common filename variants (spaces vs hyphens, casing). */
const SCHEDULE_IMG_PATHS = [
  "/Schedule More Proeperty.png",
  "/Schedule-More-Proeperty.png",
  "/Schedule More Property.png",
  "/Schedule-More-Property.png",
  "/ScheduleMoreProperty.png",
  "/schedule more property.png",
];

const statCards = [
  { big: "24x7", small: "Lead Response Window" },
  { big: "Zero", small: "Missed Follow-Up Hassle" },
  { big: "99.9%", small: "Calling Reliability" },
  { big: "Smart", small: "Prospect Prioritization" },
  { big: "Salesforce-Native", small: "Deal Workflows" },
  { big: "Enterprise", small: "Data Protection" },
];

/** Alternating card colors like reference: pale blue / sky-200 checkerboard (3×2 grid). */
function statCardClass(i) {
  return i % 2 === 0
    ? "border border-slate-200/90 bg-[#EFF6FF] shadow-sm"
    : "border border-sky-300/80 bg-[#BAE6FD] shadow-sm";
}

export default function RealEstate() {
  const [heroBgFailed, setHeroBgFailed] = useState(false);
  const [scheduleImgIndex, setScheduleImgIndex] = useState(0);

  const impactStats = [
    {
      pct: "41%",
      title: "Higher Qualified Conversation Rate",
      body: "Teams connect with serious buyers faster using context-rich calling, cleaner lead segmentation, and timely outreach from one Salesforce workspace.",
    },
    {
      pct: "33%",
      title: "Faster Site-Visit Scheduling",
      body: "Automated reminders and guided follow-up flows reduce scheduling delays, helping agents move prospects from inquiry to property visits quickly.",
    },
    {
      pct: "29%",
      title: "Shorter Deal Closure Timelines",
      body: "Real-time call visibility and structured next-step tracking keep negotiations moving, reduce drop-offs, and improve closure consistency.",
    },
  ];

  const propertiesCards = [
    {
      title: "Connect with High-Intent Buyers First",
      body: "Prioritize the right leads with Salesforce context so agents spend more time on serious prospects and less on low-value callbacks.",
    },
    {
      title: "Automate Follow-Ups Across the Funnel",
      body: "Keep every inquiry warm with automated call tasks, reminders, and disposition-driven next steps inside your existing CRM flow.",
    },
    {
      title: "Deliver Personalized Buyer Conversations",
      body: "Give agents complete history before every call so they can tailor discussions by budget, location preference, and buying timeline.",
    },
  ];

  const scheduleCards = [
    {
      title: "Increase Confirmed Property Visits",
      body: "Use smart reminders and confirmation workflows to reduce no-shows and keep your site-visit calendar full.",
    },
    {
      title: "Respond to New Leads Instantly",
      body: "Capture and qualify inbound interest quickly with AI-assisted interactions, then route prospects to the right agent without delay.",
    },
    {
      title: "Coach Teams with Call Insights",
      body: "Track conversation quality, objections, and outcomes to improve scripts, coaching plans, and conversion performance over time.",
    },
  ];

  const testimonials = [
    {
      title: "Stronger pipeline visibility for our brokers",
      quote:
        "We now track every buyer interaction in Salesforce, so follow-ups are timely and team handoffs are smooth. It significantly improved our conversion discipline.",
      name: "Karan Bhatia",
      role: "Sales Director, UrbanNest Realty",
    },
    {
      title: "Reliable calling setup across multiple projects",
      quote:
        "From first response to final negotiation calls, our agents work faster with less manual effort. The Salesforce-native flow is a big operational win.",
      name: "Sneha Arora",
      role: "CRM Manager, PrimeHomes Group",
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
            src={encodeURI(HERO_BG)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-45"
            onError={() => setHeroBgFailed(true)}
            decoding="async"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/88 to-slate-950"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-24">
          <div className="hero-content-from-left flex w-full max-w-5xl flex-col items-center opacity-0">
            <span className="inline-block rounded-full border border-white/50 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              Real Estate Cloud Telephony
            </span>
            <h1 className="mx-auto mt-8 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[45px]">
              Convert More Property Leads with AI-Led Kloudvault
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
              Unify calling, follow-ups, and buyer context in Salesforce so your teams can respond faster and close with confidence.
            </p>
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full bg-sky-600 px-10 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
            >
              Schedule a Live Demo
            </Link>
          </div>
        </div>
      </section>


      {/* 3 — Driving impact */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Real Estate Outcomes You Can Measure
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
      </section>

      {/* 4 — Close properties faster + image right */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-5xl text-center text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[45px]">
            Build a Faster Buyer Journey with{" "}
            <span className="text-sky-600">Salesforce-Native Calling</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Run smarter outreach, reduce lead leakage, and help agents close deals sooner with a single communication layer inside Salesforce.
          </p>
          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="hero-content-from-left space-y-4 opacity-0">
              {propertiesCards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-sky-100 bg-sky-50/90 p-5 shadow-sm sm:p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
                </div>
              ))}
            </div>
            <div className="flex shrink-0 justify-center self-start lg:-mt-28 lg:justify-end">
              <img
                src={encodeURI(IMG_PROPERTIES_FASTER)}
                alt="Close properties faster with Salesforce telephony"
                className="h-auto w-full max-w-xl rounded-2xl object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Image left + cards right */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="hero-content-from-left order-2 mt-4 flex justify-center self-start opacity-0 sm:mt-5 lg:order-1 lg:mt-0 lg:justify-start">
              {scheduleImgIndex < SCHEDULE_IMG_PATHS.length ? (
                <img
                  key={SCHEDULE_IMG_PATHS[scheduleImgIndex]}
                  src={encodeURI(SCHEDULE_IMG_PATHS[scheduleImgIndex])}
                  alt="Schedule more property visits with Salesforce"
                  className="h-auto w-full max-w-xl rounded-2xl object-contain sm:max-w-2xl"
                  loading="lazy"
                  decoding="async"
                  onError={() => setScheduleImgIndex((i) => i + 1)}
                />
              ) : (
                <div className="flex min-h-[200px] w-full max-w-xl flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm text-slate-600 sm:max-w-2xl">
                  <LogoMark className="h-12 w-12 opacity-40" />
                  <p>
                    Add image as{" "}
                    <span className="rounded bg-white px-1 font-mono text-xs">
                      Schedule More Proeperty.png
                    </span>{" "}
                    /{" "}
                    <span className="font-mono text-xs">Schedule More Property.png</span>
                  </p>
                </div>
              )}
            </div>
            <div className="order-1 space-y-4 lg:order-2">
              {scheduleCards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-sky-100 bg-sky-50/90 p-5 shadow-sm sm:p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Case study CTA (narrow centered card) */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex flex-col items-stretch justify-between gap-6 rounded-2xl bg-[#3B8DEB] px-6 py-8 shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-9">
            <p className="text-center text-lg font-semibold leading-snug text-white sm:max-w-[55%] sm:text-left sm:text-xl">
              Want to see a real estate implementation blueprint?
            </p>
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 sm:px-6"
            >
              Get the Use-Case Deck
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — Stats grid */}
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
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            AI-Led Kloudvault Built for Real Estate Teams
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {statCards.map((s, i) => (
              <div
                key={`${s.big}-${s.small}-${i}`}
                className={`rounded-2xl p-6 ${statCardClass(i)}`}
              >
                <p className="text-2xl font-bold text-slate-900">{s.big}</p>
                <p className="mt-1 text-sm text-slate-600">{s.small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Testimonials */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Trusted by Real Estate Revenue Teams
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-8 shadow-sm"
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
                  className="pointer-events-none absolute bottom-4 right-4 text-8xl font-serif leading-none text-white/80"
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
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-bold tracking-tight text-slate-900 text-2xl leading-tight sm:text-3xl lg:text-4xl">
            Smarter Outreach. Stronger Client Conversations.
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Talk to our team to design a Salesforce telephony workflow tailored for your brokerage operations.
          </p>
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-600"
          >
            Talk to a Real Estate Specialist
          </Link>
        </div>
      </section>

      <HomeStyleFooter />
      <FloatingChat />
    </div>
  );
}
