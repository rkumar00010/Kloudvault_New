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

const HERO_PATHS = ["/FinancialServices-Hero.jpg", "/FinancialServices-Hero.png"];
const ACCELERATE_IMG_PATHS = [
  "/Accelerate Financial.png",
  "/Accelerate-Financial.png",
  "/AccelerateFinancial.png",
];
const PAYMENT_IMG_PATHS = ["/Improve Payment.png", "/Improve-Payment.png", "/ImprovePayment.png"];

const statCards = [
  { big: "24x7", small: "Client Support Readiness" },
  { big: "Zero", small: "Manual Follow-Up Delays" },
  { big: "99.9%", small: "Calling Reliability" },
  { big: "Smart", small: "Risk-Based Routing" },
  { big: "Salesforce-Native", small: "Advisor Workflows" },
  { big: "Enterprise", small: "Compliance Controls" },
];

function statCardClass(i) {
  return i % 2 === 0
    ? "border border-slate-300/40 bg-[#D6E6F2] shadow-sm"
    : "border border-slate-400/35 bg-[#A3C9E2] shadow-sm";
}

export default function FinancialServices() {
  const [heroBgIndex, setHeroBgIndex] = useState(0);
  const heroBgFailed = heroBgIndex >= HERO_PATHS.length;
  const [accelerateImgIndex, setAccelerateImgIndex] = useState(0);
  const [paymentImgIndex, setPaymentImgIndex] = useState(0);

  const impactStats = [
    {
      pct: "32%",
      title: "Faster Case Resolution",
      body: "Context-aware routing and guided call workflows help advisors resolve client requests quicker across lending, insurance, and servicing teams.",
    },
    {
      pct: "36%",
      title: "Stronger Client Retention",
      body: "Personalized conversations and timely follow-ups improve trust, reduce churn, and keep high-value relationships active over time.",
    },
    {
      pct: "30%",
      title: "Higher Team Productivity",
      body: "Automation reduces repetitive call logging and improves visibility so operations teams can focus on quality, speed, and compliance outcomes.",
    },
  ];

  const accelerateCards = [
    {
      title: "Accelerate Lending and Service Journeys",
      body: "Route calls to the right specialist based on account type and intent, helping teams reduce wait time and move client requests forward faster.",
    },
    {
      title: "Protect Sensitive Financial Conversations",
      body: "Use secure workflows and controlled call handling to safeguard customer information while supporting regulatory and internal policy requirements.",
    },
    {
      title: "Improve Service Quality in Real Time",
      body: "Supervisors can monitor interactions, coach advisors instantly, and maintain consistent client experience across branches and remote teams.",
    },
  ];

  const paymentCards = [
    {
      title: "Strengthen Payment and Renewal Follow-Ups",
      body: "Automate reminder workflows for due payments and renewals so teams can improve collection discipline and reduce missed opportunities.",
    },
    {
      title: "Deliver More Personalized Advisory Calls",
      body: "Provide advisors with complete Salesforce context before every call to improve recommendations, relationship quality, and decision confidence.",
    },
    {
      title: "Ensure Continuity for Returning Clients",
      body: "Route repeat interactions intelligently so clients connect with familiar advisors, helping build trust and improving long-term account outcomes.",
    },
  ];

  const testimonials = [
    {
      title: "Operational visibility improved across departments",
      quote:
        "Our servicing and collections teams now work from one Salesforce-driven communication flow. It reduced response delays and improved manager oversight significantly.",
      name: "Rohit Malhotra",
      role: "Head of Operations",
    },
    {
      title: "Better advisor-client engagement quality",
      quote:
        "Follow-ups are structured, client history is always available, and our teams spend less time on manual updates. It has improved both speed and service quality.",
      name: "Megha Suri",
      role: "CRM Program Manager",
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
        <div className="relative z-10 mx-auto w-full max-w-[min(100%,1200px)] px-4 py-20 text-center sm:px-6 sm:py-24">
          <div className="hero-content-from-left mx-auto max-w-full min-w-0 opacity-0">
            <span className="inline-block rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
              Financial Services Communication Cloud
            </span>
            <h1 className="mx-auto mt-8 max-w-4xl px-2 text-3xl font-bold leading-snug tracking-tight text-white sm:px-0 sm:text-4xl lg:text-5xl lg:leading-tight break-words">
              Modernize Financial Client Communication with AI-Led Kloudvault
            </h1>
            <p className="mx-auto mt-6 max-w-2xl break-words px-2 text-base leading-relaxed text-white/90 sm:px-0 sm:text-lg">
              Unify advisor calls, service follow-ups, and compliance-ready workflows inside Salesforce to deliver faster and more trusted client experiences.
            </p>
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-lg bg-sky-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Schedule a Financial Services Demo
            </Link>
          </div>
        </div>
      </section>


      {/* 3 — Drive outcomes */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Business Outcomes for Financial Teams
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

      {/* 4 — Accelerate Financial + image right */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-5xl text-center text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-[2.5rem] md:leading-tight">
            Accelerate Client Servicing with Salesforce-Native Calling
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Improve response speed, maintain consistent advisory quality, and keep every client conversation connected to real-time CRM context.
          </p>
          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="hero-content-from-left space-y-4 opacity-0">
              {accelerateCards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-slate-200/80 bg-[#f0f4f8] p-5 shadow-sm sm:p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
                </div>
              ))}
            </div>
            <div className="-mt-4 flex justify-center sm:-mt-6 lg:-mt-10 lg:justify-end">
              {accelerateImgIndex < ACCELERATE_IMG_PATHS.length ? (
                <img
                  key={ACCELERATE_IMG_PATHS[accelerateImgIndex]}
                  src={encodeURI(ACCELERATE_IMG_PATHS[accelerateImgIndex])}
                  alt="Accelerate financial engagement with Salesforce calling"
                  className="h-auto w-full max-w-xl rounded-2xl object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={() => setAccelerateImgIndex((i) => i + 1)}
                />
              ) : (
                <div className="flex min-h-[200px] w-full max-w-xl flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-8 text-center text-sm text-slate-600">
                  <LogoMark className="h-12 w-12 opacity-40" />
                  <p>
                    Add <span className="font-mono text-xs">public/Accelerate Financial.png</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Improve Payment.png left + cards */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="hero-content-from-left order-2 -mt-4 flex justify-center opacity-0 sm:-mt-6 lg:order-1 lg:-mt-10 lg:justify-start">
              {paymentImgIndex < PAYMENT_IMG_PATHS.length ? (
                <img
                  key={PAYMENT_IMG_PATHS[paymentImgIndex]}
                  src={encodeURI(PAYMENT_IMG_PATHS[paymentImgIndex])}
                  alt="Improve payment collections and client relationships"
                  className="h-auto w-full max-w-xl rounded-2xl object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={() => setPaymentImgIndex((i) => i + 1)}
                />
              ) : (
                <div className="flex min-h-[200px] w-full max-w-xl flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm text-slate-600">
                  <LogoMark className="h-12 w-12 opacity-40" />
                  <p>
                    Add <span className="font-mono text-xs">public/Improve Payment.png</span>
                  </p>
                </div>
              )}
            </div>
            <div className="order-1 space-y-4 lg:order-2">
              {paymentCards.map((c) => (
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
          <div className="flex flex-col items-stretch justify-between gap-6 rounded-2xl bg-[#2563eb] px-6 py-8 shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-9">
            <p className="text-center text-lg font-semibold leading-snug text-white sm:max-w-[55%] sm:text-left sm:text-xl">
              Want to see results
              <br />
              from real financial use cases?
            </p>
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 sm:px-6"
            >
              Download the Finance Case Study
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
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Secure, Compliant, and Scalable Financial Telephony
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {statCards.map((s, i) => (
              <div key={`${s.big}-${s.small}-${i}`} className={`rounded-2xl p-6 ${statCardClass(i)}`}>
                <p className="text-2xl font-bold text-slate-900">{s.big}</p>
                <p className="mt-1 text-sm text-slate-600">{s.small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Testimonials */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            What Financial Teams Say About Kloudvault
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="relative flex min-h-[260px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-[#f8f9fa] p-8 shadow-md"
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
        <div className="mx-auto max-w-[min(100%,1200px)] px-4 text-center">
          <h2 className="font-bold tracking-tight text-slate-900 text-[clamp(1rem,3.6vw,2rem)] leading-tight">
            Faster Service. Smarter Advisory Calls.
            <br className="sm:hidden" />
            <span className="sm:ml-1">Stronger Client Trust.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-slate-700 sm:text-lg">
            Speak with our team to design a Salesforce-native communication workflow for your financial operations.
          </p>
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-[#008ecc] px-8 py-3 font-semibold text-white hover:bg-sky-700"
          >
            Talk to a Financial Specialist
          </Link>
        </div>
      </section>

      <HomeStyleFooter />
      <FloatingChat />
    </div>
  );
}
