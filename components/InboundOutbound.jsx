"use client";

import { useState } from "react";
import Link from "next/link";
import SharedNavbar from "./SharedNavbar";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Smartphone,
  PhoneForwarded,
  RefreshCw,
  LayoutGrid,
  CheckCircle2,
  Star,
} from "lucide-react";

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
      { label: "Real Estate", href: "/real-estate" },
      { label: "Non Profit", href: "/non-profit" },
      { label: "Financial Services", href: "/financial-services" },
      { label: "Education", href: "/education" },
      { label: "Professional Services", href: "/professional-services" },
      { label: "Healthcare", href: "/healthcare" },
    ],
  },
];

function navItemIsActive(item, pathname) {
  if (item.external) return false;
  if (item.dropdown) {
    return item.dropdown.some((d) => {
      const href = typeof d === "string" ? item.href : d.href;
      if (typeof href !== "string" || href.startsWith("http")) return false;
      const pathPart = href.split("#")[0].split("?")[0];
      if (!pathPart) return false;
      if (pathPart === "/" && href.includes("#")) return false;
      return pathname === pathPart || pathname.startsWith(`${pathPart}/`);
    });
  }
  const href = item.href;
  if (typeof href !== "string" || href.startsWith("http")) return false;
  const pathPart = href.split("#")[0].split("?")[0];
  return pathname === pathPart || pathname.startsWith(`${pathPart}/`);
}

function Navbar() {
  return (
    <SharedNavbar
      navItems={NAV}
      NavbarLogo={NavbarLogo}
      ChevronIcon={ChevronDown}
      MenuIcon={Menu}
      CloseIcon={X}
      navItemIsActive={typeof navItemIsActive === "function" ? navItemIsActive : undefined}
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

const faqs = [
  {
    q: "What is an Inbound Call Workflow in Salesforce?",
    a: "Inbound Call Workflow is the complete process from incoming call to resolution inside Salesforce. It includes call routing, screen pop, call controls, note capture, and automatic logging so every interaction is tracked end-to-end.",
  },
  {
    q: "How does smart inbound routing reduce missed opportunities?",
    a: "Smart routing sends callers to the right team based on queue rules, skill tags, or customer context. This minimizes missed calls, avoids unnecessary transfers, and improves first-call resolution for support and sales teams.",
  },
  {
    q: "Can agents see customer details before answering inbound calls?",
    a: "Yes. With screen pop, agents can instantly view relevant lead, contact, account, or case records when a call arrives. This reduces handle time and helps agents respond with full context from the first hello.",
  },
  {
    q: "How are inbound calls logged and tracked in Salesforce?",
    a: "Inbound calls are automatically logged with key details like duration, timestamps, status, and notes. This ensures accurate reporting, better follow-up, and complete call history without manual data entry.",
  },
  {
    q: "How does Inbound Call Workflow help supervisors and managers?",
    a: "Managers get live visibility into queue volume, agent availability, and call outcomes from Salesforce dashboards. This helps them balance workloads quickly, coach teams effectively, and maintain service-level targets.",
  },
  {
    q: "Why is a Salesforce-native inbound workflow better than disconnected tools?",
    a: "A Salesforce-native workflow keeps telephony and CRM in one system, so data stays clean and processes stay consistent. Teams avoid sync delays, reduce manual updates, and deliver faster, more reliable customer support.",
  },
];

const statCards = [
  { big: "13+", small: "Years Serving Salesforce Teams" },
  { big: "0", small: "External Connectors Required" },
  { big: "100%", small: "Real-Time Salesforce Logging" },
  { big: "43%", small: "Faster Follow-Up Cycles" },
  { big: "67%", small: "Higher Productive Talk Time" },
  { big: "24x7", small: "Support Readiness" },
];

const statBg = (i) =>
  i % 2 === 0 ? "bg-sky-50 ring-1 ring-sky-100" : "bg-sky-300/40 ring-1 ring-sky-400/30";

export default function InboundOutbound() {
  const [faqOpen, setFaqOpen] = useState(0);

  const advancedCards = [
    {
      title: "Smart Inbound Routing",
      body: "Route every incoming call to the right queue or agent using IVR choices, skill rules, and availability logic to reduce wait time and improve first-call resolution.",
      icon: PhoneForwarded,
      bg: "bg-white border border-slate-200",
    },
    {
      title: "Screen Pop with Caller Context",
      body: "Show lead, contact, account, or case details instantly when a call arrives so agents can respond with full context from the first second.",
      icon: Smartphone,
      bg: "bg-violet-50/80 border border-violet-100",
    },
    {
      title: "Live Queue & Agent Availability",
      body: "Track online agents and queue load in real time so supervisors can balance traffic, reduce hold times, and maintain service levels during peak hours.",
      icon: LayoutGrid,
      bg: "bg-white border border-slate-200",
    },
    {
      title: "Automatic Inbound Call Logging",
      body: "Capture duration, timestamps, notes, and call outcomes automatically in Salesforce to ensure complete records, faster follow-up, and better reporting accuracy.",
      icon: RefreshCw,
      bg: "bg-slate-50 border border-slate-200",
    },
  ];

  const whyAiCards = [
    {
      title: "Eliminate Data Silos",
      body: "Calls, notes, dispositions, and customer context stay in Salesforce from the first ring. Teams collaborate on one live data source, not disconnected tools.",
    },
    {
      title: "Real-Time Operations Visibility",
      body: "Managers can track queues, call outcomes, and agent activity instantly in Salesforce dashboards with no sync delay or spreadsheet handoff.",
    },
    {
      title: "Faster Time-to-Value",
      body: "Deploy native telephony quickly with familiar Salesforce administration. No heavy integration layer means teams start delivering value sooner.",
    },
  ];

  const inboundWorkflow = [
    {
      title: "Customer Initiates Call",
      body: "The call lands on your support or sales number and enters your Salesforce-native CTI flow.",
    },
    {
      title: "IVR & Queue Logic",
      body: "Caller input and availability logic route the interaction to the most relevant queue or agent.",
    },
    {
      title: "Incoming Notification",
      body: "The Salesforce utility bar displays a live call alert with context so agents can act immediately.",
    },
    {
      title: "Record Search",
      body: "Caller number auto-matches leads, contacts, or cases to surface the right record instantly.",
    },
    {
      title: "Automatic Logging",
      body: "Disposition, notes, and call metadata are written to related Salesforce records in real time.",
    },
  ];

  const testimonials = [
    {
      title: "Awesome tech support",
      quote: "Always quick, & friendly. Ashutosh & Mayank went above & beyond. Thanks",
      name: "Gerald Maguire",
      role: "Sr Mortgage Advisor",
    },
    {
      title: "Dependability and provides the best native salesforce solution",
      quote:
        "I have worked with multiple enterprise calling solutions in the past and Kloudvault beats them on dependability and provides the best native...",
      name: "Rachel Reece",
      role: "System Administrator",
    },
  ];

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* 1 — Hero */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#f4f2f8] px-6 py-10 shadow-sm sm:px-10 sm:py-12 lg:grid lg:grid-cols-2 lg:gap-10 lg:px-12">
            <div className="lg:col-start-1 lg:row-start-1">
              <h1 className="text-3xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
                Run Every Customer Conversation Natively Inside Salesforce
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-snug text-slate-600 lg:max-w-[28rem]">
                Eliminate integration overhead and data silos with Salesforce-native inbound and outbound calling.
                Get real-time call context, faster handling, and cleaner CRM data from first ring to final
                disposition.
              </p>
            </div>
            <div className="mt-1 lg:col-start-1 lg:row-start-2 lg:mt-2">
              <Link
                href="https://360cti.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-sky-600 px-8 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Contact our Experts
              </Link>
            </div>
            <div className="mt-10 flex justify-center lg:col-start-2 lg:row-start-1 lg:mt-0 lg:h-full lg:justify-end lg:items-stretch">
              <img
                src="/Inbound.png"
                alt="Salesforce calling"
                className="h-auto w-full max-w-xl object-contain sm:max-w-2xl lg:h-full lg:max-w-none lg:object-contain lg:object-right"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 3 — Inbound workflow */}
      <section className="bg-slate-900 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Inbound Call Workflow </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-slate-300 sm:text-base">
            Every inbound interaction follows a structured workflow with live CRM context and automatic record
            updates.
          </p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4">
            {inboundWorkflow.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-sky-300">Step {i + 1}</p>
                <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-sky-500 px-7 py-3 text-sm font-semibold text-white hover:bg-sky-600"
            >
              Build This Workflow for My Team
            </Link>
          </div>
        </div>
      </section>

      {/* 4 — Advanced capabilities */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Advanced Inbound Call Workflow Capabilities</h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Configure high-performance inbound call operations natively inside Salesforce
            </p>
            <div className="pointer-events-none absolute left-1/2 top-full mt-2 hidden h-8 w-px bg-slate-200 lg:block" style={{ marginLeft: "-1px" }} />
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[calc(100%+2.25rem)] hidden h-px bg-slate-200 lg:block" />
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advancedCards.map((c) => (
              <div
                key={c.title}
                className={`flex min-h-[280px] flex-col rounded-2xl p-5 shadow-sm ${c.bg}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Pill CTA */}
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-stretch justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:rounded-full sm:px-8 sm:flex-row sm:items-center">
          <p className="text-center text-base font-bold text-slate-900 sm:text-left">
            Compare Native vs Integrated Calling for your team
          </p>
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-[#0c2d5c] px-6 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#0a2449] sm:w-auto sm:shrink-0 sm:px-8"
          >
            See the Native Advantage
          </Link>
        </div>
      </section>

      {/* 6 — Why Native */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-b from-sky-500 to-sky-400 px-4 py-12 sm:px-8 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
              backgroundSize: "18px 18px",
            }}
            aria-hidden
          />
          <h2 className="relative text-center text-2xl font-bold text-white sm:text-3xl">
            Why Native Wins: No Silos. No Sync Delays.
          </h2>
          <div className="relative mt-10 grid gap-6 md:grid-cols-3">
            {whyAiCards.map((c) => (
              <div key={c.title} className="relative rounded-2xl bg-white p-6 pt-8 shadow-md">
                <div className="absolute -left-1 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white shadow">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Trusted partner stats */}
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
            Your Trusted Partner for Service Excellence
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {statCards.map((s, i) => (
              <div key={`${s.big}-${s.small}-${i}`} className={`rounded-2xl p-6 shadow-sm ${statBg(i)}`}>
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
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Hear What Our Customers Say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-8"
              >
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 font-bold text-slate-900">{t.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.quote}</p>
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

      {/* 9–10 — FAQ (single list, same pattern as Home.jsx) */}
      <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">FAQs</h2>
          <p className="mt-3 text-center text-slate-600">FAQs About Salesforce Calling Solutions</p>
          <div className="mt-10 space-y-3">
            {faqs.map((item, i) => {
              const isOpen = faqOpen === i;
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl border shadow-sm ${
                    isOpen ? "border-slate-400 bg-slate-100" : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setFaqOpen(isOpen ? null : i)}
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">{item.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
                        isOpen ? "bg-sky-600 text-white" : "border-2 border-slate-300 text-slate-800"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-200 px-5 pb-4 pt-0">
                      <p className="pt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#0c2d5c] px-10 py-3.5 text-sm font-semibold text-white hover:bg-[#0a2449]"
            >
              Need more Info ?
            </Link>
          </div>
        </div>
      </section>

      {/* 11 — Final CTA */}
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
          <h2 className="mx-auto max-w-4xl text-balance text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:max-w-none lg:text-4xl">
            Turn Every Salesforce Call into a Real-Time Revenue Signal.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-slate-700 sm:text-lg">
            See how native telephony can reduce admin effort, remove data silos, and improve conversion outcomes.
          </p>
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-600"
          >
            Calculate My Operational Savings
          </Link>
        </div>
      </section>

      <HomeStyleFooter />
      <FloatingChat />
    </div>
  );
}
