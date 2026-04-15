"use client";

import { useState } from "react";
import Link from "next/link";
import SharedNavbar from "./SharedNavbar";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  UserCog,
  Network,
  PhoneForwarded,
  Brain,
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
    q: "How does outbound calling work natively inside Salesforce?",
    a: "Reps can launch calls from the CTI utility bar, click-to-call fields, or campaign lists. Screen pop intelligence pulls matching Salesforce records instantly so teams work with live context from the first second.",
  },
  {
    q: "What is the advantage of native vs integrated dialers?",
    a: "Native calling avoids connector dependencies and delayed sync cycles. Notes, outcomes, and activities stay on one Salesforce timeline, reducing admin overhead and reporting drift.",
  },
  {
    q: "Can we support warm transfer, conferencing, and recording without leaving Salesforce?",
    a: "Yes. Agents can run warm/cold transfer, conferencing, hold/mute controls, and call recording directly in the same workspace while keeping activity logs and notes in real time.",
  },
  {
    q: "Will this help improve follow-up speed and rep productivity?",
    a: "Teams move faster because call context, notes, and outcomes are captured during the call. This shortens after-call work and helps reps focus on next-best actions quickly.",
  },
  {
    q: "Do we need external connectors or middleware to deploy?",
    a: "No. The outbound workflow is designed for Salesforce-native operation, so most teams can configure routing logic and controls within Salesforce without adding external integration layers.",
  },
  {
    q: "How quickly can we evaluate ROI before full rollout?",
    a: "You can model gains using your agent count, daily calls, and current manual logging time. We help compare native and integrated workflows so you can estimate time savings before deployment.",
  },
];

const CALL_ROUTING_HERO_IMG = "/Call%20Routing.png";

export default function CallRouting() {
  const [faqOpen, setFaqOpen] = useState(0);
  const [comparisonView, setComparisonView] = useState("native");
  const [calculator, setCalculator] = useState({
    agents: 25,
    callsPerDay: 40,
    manualMinutes: 2,
  });

  const advancedCards = [
    {
      title: "Automated Call Distribution",
      body: "Route calls by business rules and team capacity so outbound and callback queues stay balanced during peak windows.",
      icon: UserCog,
      bg: "bg-white border border-slate-200",
    },
    {
      title: "Salesforce IVR Integration",
      body: "Use Salesforce-linked IVR flows to guide customers to the right queue and improve intent capture before an agent joins.",
      icon: Network,
      bg: "bg-violet-50/80 border border-violet-100",
    },
    {
      title: "Call Forwarding & Routing",
      body: "Direct calls by skill, availability, time, and priority logic so no opportunity is lost due to misrouting or delays.",
      icon: PhoneForwarded,
      bg: "bg-white border border-slate-200",
    },
    {
      title: "Salesforce Sticky Agent",
      body: "Reconnect repeat callers with the same rep to preserve continuity, accelerate outcomes, and improve customer trust.",
      icon: Brain,
      bg: "bg-slate-50 border border-slate-200",
    },
  ];

  const processColumns = [
    {
      title: "Call Initiation Methods",
      items: [
        "Manual dialing from CTI softphone in Utility Bar.",
        "Click-to-call on phone fields in Lead, Contact, and Account records.",
        "Automated dialer for campaign lists.",
      ],
    },
    {
      title: "During Call Features",
      items: [
        "Real-time note-taking in call log window.",
        "Warm/cold transfer to other agents.",
        "Call conferencing with multiple participants.",
        "Mute and hold controls with music.",
        "Call recording for quality monitoring.",
      ],
    },
  ];

  const whyNative = [
    "Eliminate data silos with one customer timeline across calls, notes, and follow-ups.",
    "Show real-time routing intelligence instantly without delayed syncing.",
    "Deploy and optimize inside Salesforce without external middleware complexity.",
  ];

  const imagePrompts = [
    "Modern enterprise Salesforce-native outbound calling dashboard, live screen pop panel, lead/contact context, call controls and activity timeline, blue-slate UI, conversion-focused, no clutter, no heavy text, web hero composition, clean B2B SaaS style.",
    "Dark command-center process graphic with two aligned columns: Call Initiation Methods and During Call Features, connected timeline nodes, subtle glow, Salesforce-inspired iconography, professional enterprise aesthetic.",
    "Split-screen concept: integrated stack with fragmented tools and latency vs native Salesforce stack with instant updates and unified records, modern enterprise UI cards, blue/grey palette.",
    "Set of four SaaS feature illustrations for automated distribution, IVR, call forwarding, and sticky agent continuity, consistent visual style, rounded UI cards, clean typography placeholders.",
  ];

  const comparisonData = {
    native: {
      title: "Native Salesforce Stack",
      bullets: [
        "Instant record updates and logging",
        "Lower admin overhead and setup complexity",
        "Unified reporting accuracy in one system",
      ],
    },
    integrated: {
      title: "Integrated External Stack",
      bullets: [
        "Connector dependency and sync lag risk",
        "More maintenance across multiple tools",
        "Fragmented reporting and activity timelines",
      ],
    },
  };

  const statCards = [
    { big: "13+", small: "Years serving Salesforce teams" },
    { big: "0", small: "External connectors required" },
    { big: "100%", small: "Real-time Salesforce logging" },
    { big: "43%", small: "Faster follow-up cycles" },
    { big: "67%", small: "Higher productive talk time" },
    { big: "24x7", small: "Support readiness" },
  ];

  const statBg = (i) =>
    i % 2 === 0 ? "bg-sky-50 ring-1 ring-sky-100" : "bg-sky-300/40 ring-1 ring-sky-400/30";

  const testimonials = [
    {
      title: "Better than 5 other apps, A GREAT CTI.!",
      quote: "I've implemented 5 different CTI solutions for consulting clients— this one is by far my favorite.",
      name: "Daniel Howell",
      role: "Systems Administrator",
    },
    {
      title: "A TIME-SAVING Product and Setup",
      quote: "This app is a time saver, keeps everything in line with your follow-up needs, and is not over-complicated",
      name: "Mike Adams",
      role: "Founder and President at Smart Stays Inc",
    },
  ];

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* 1 — Hero */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#f4f2f8] px-4 py-10 shadow-sm sm:px-10 sm:py-12 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:px-12">
            <div className="min-w-0 max-w-full">
              <h1 className="text-3xl font-semibold leading-[1.05] tracking-tight text-slate-900 break-words sm:text-5xl lg:text-[3.5rem]">
                When reps need instant customer context to convert faster, run outbound calling natively inside Salesforce.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 break-words">
                <span className="block">
                  Eliminate integration overhead and data silos with a Salesforce-native telephony layer that delivers
                  real-time record context, call controls, and logging from one workspace.
                </span>
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="https://360cti.com/contact/" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700">
                  Contact our Experts
                </Link>
                {/* <Link href="https://360cti.com/contact/" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                  Design My Salesforce Calling Flow
                </Link>
                <Link href="#comparison" className="inline-flex rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                  Run Native vs Integrated Comparison
                </Link> */}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="#roi-calculator" className="inline-flex text-sm font-semibold text-sky-700 hover:text-sky-800">
                  Calculate My Calling ROI
                </Link>
                <span className="text-slate-300">|</span>
                <Link href="#outbound-process" className="inline-flex text-sm font-semibold text-sky-700 hover:text-sky-800">
                  See My Screen Pop Journey
                </Link>
              </div>
            </div>
            <div className="mt-10 flex justify-center lg:mt-0 lg:h-full lg:justify-end lg:items-stretch">
              <img
                src={CALL_ROUTING_HERO_IMG}
                alt="Outbound call process dashboard with screen pop intelligence"
                className="h-auto w-full max-w-xl object-contain sm:max-w-2xl lg:h-full lg:max-w-none lg:object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 3 — Process map */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div id="outbound-process" className="rounded-3xl bg-gradient-to-br from-[#0a2540] to-[#1a2f65] p-6 text-white sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Outbound Call Process</h2>
            <p className="mt-4 max-w-4xl text-sm text-slate-200 sm:text-base">
              Screen Pop Intelligence identifies matching Salesforce records before the call connects, giving agents
              immediate context. Calls can start manually from the CTI utility bar, via click-to-call from CRM fields,
              or through campaign dialers.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {processColumns.map((col) => (
                <div key={col.title} className="rounded-2xl border border-white/20 bg-white/10 p-5">
                  <h3 className="text-lg font-semibold">{col.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-100">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-200">
              During the call, agents can take live notes, transfer warm/cold, conference participants, apply hold/mute
              controls, and record for QA without leaving Salesforce.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — Feature cards */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Outbound Process Features
            </h2>
            <div className="pointer-events-none absolute left-1/2 top-full mt-2 hidden h-8 w-px bg-slate-200 lg:block" style={{ marginLeft: "-1px" }} />
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[calc(100%+2.25rem)] hidden h-px bg-slate-200 lg:block" />
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advancedCards.map((c) => (
              <div key={c.title} className={`flex min-h-[280px] flex-col rounded-2xl p-5 shadow-sm ${c.bg}`}>
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

      {/* 5 — Comparison quick CTA */}
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-stretch justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:rounded-full sm:px-8 sm:flex-row sm:items-center">
          <p className="text-center text-base font-bold text-slate-900 sm:text-left">
            Compare native Salesforce calling against external integrated stacks.
          </p>
          <Link
            href="#comparison"
            className="w-full rounded-full bg-[#0c2d5c] px-6 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#0a2449] sm:w-auto sm:shrink-0 sm:px-8"
          >
            Run Native vs Integrated Comparison
          </Link>
        </div>
      </section>

      {/* 6 — Why native + comparison + ROI */}
      <section id="comparison" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Why Native Salesforce Calling?</h2>
            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              {whyNative.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
              <button
                type="button"
                onClick={() => setComparisonView("native")}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  comparisonView === "native" ? "bg-sky-600 text-white" : "text-slate-600"
                }`}
              >
                Native
              </button>
              <button
                type="button"
                onClick={() => setComparisonView("integrated")}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  comparisonView === "integrated" ? "bg-sky-600 text-white" : "text-slate-600"
                }`}
              >
                Integrated
              </button>
            </div>
            <div className="mt-5 rounded-2xl bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">{comparisonData[comparisonView].title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {comparisonData[comparisonView].bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="roi-calculator" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900">Calculate My Calling ROI</h3>
            <p className="mt-2 text-sm text-slate-600">
              Estimate daily productivity recovered from manual post-call logging.
            </p>
            <div className="mt-6 grid gap-4">
              <label className="text-sm font-medium text-slate-700">
                Number of agents
                <input
                  type="number"
                  min="1"
                  value={calculator.agents}
                  onChange={(e) => setCalculator((p) => ({ ...p, agents: Number(e.target.value) || 0 }))}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Calls per agent per day
                <input
                  type="number"
                  min="1"
                  value={calculator.callsPerDay}
                  onChange={(e) => setCalculator((p) => ({ ...p, callsPerDay: Number(e.target.value) || 0 }))}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Manual logging minutes per call
                <input
                  type="number"
                  min="0"
                  value={calculator.manualMinutes}
                  onChange={(e) => setCalculator((p) => ({ ...p, manualMinutes: Number(e.target.value) || 0 }))}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                />
              </label>
            </div>
            <div className="mt-6 rounded-2xl bg-[#eef2ff] p-5">
              <p className="text-sm text-slate-600">Estimated manual minutes recovered per day</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {calculator.agents * calculator.callsPerDay * calculator.manualMinutes} mins
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {(calculator.agents * calculator.callsPerDay * calculator.manualMinutes / 60).toFixed(1)} hours/day
              </p>
            </div>
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Design My Salesforce Calling Flow
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — Social proof */}
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
            Social Proof for Outbound Performance
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

      {/* 9 — FAQ */}
      <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">FAQs</h2>
          <p className="mt-3 text-center text-slate-600">FAQs About Call Routing &amp; Distribution</p>
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
              Need More Info?
            </Link>
          </div>
        </div>
      </section>

      {/* 10 — Final CTA */}
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
            Run Salesforce-Native Call Routing and Eliminate Data Silos Faster
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Compare native vs integrated architecture, map your routing flow, and calculate business impact.
          </p>
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-600"
          >
            Calculate My Calling ROI
          </Link>
        </div>
      </section>

      <HomeStyleFooter />
      <FloatingChat />
    </div>
  );
}
