"use client";

import { PRODUCT_NAV_ITEM } from "@/lib/navUtils";

import { INDUSTRIES_NAV_DROPDOWN } from "@/lib/industries/navDropdown";
import { useState } from "react";
import Link from "next/link";
import SharedNavbar from "./SharedNavbar";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  CalendarClock,
  Mic2,
  UserCheck,
  Scale,
  Target,
  BarChart3,
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
    q: "How does Agent Management improve daily call operations?",
    a: "Agent Management provides real-time visibility into who is online, busy, or offline, so calls and leads are assigned to the right people instantly. This keeps queues moving and helps teams maintain consistent response quality.",
  },
  {
    q: "What role does availability status play in call distribution?",
    a: "Availability status ensures only ready agents receive new interactions. When agents switch to away or offline, routing rules automatically skip them, reducing missed calls and preventing uneven workload distribution.",
  },
  {
    q: "Can supervisors monitor agent availability in real time?",
    a: "Yes. Supervisors can track active agents, queue pressure, and response trends from live Salesforce views. This helps them rebalance teams quickly during peak hours and improve service-level performance.",
  },
  {
    q: "How does the system prevent lead leakage when agents are unavailable?",
    a: "If an agent is unavailable, leads and callbacks can be reassigned through predefined rules instead of waiting in personal queues. This protects follow-up timelines and improves conversion opportunities.",
  },
  {
    q: "Is Agent Management and Availability useful for remote teams?",
    a: "Absolutely. Remote agents can update status, handle calls, and follow the same routing logic as office teams. Managers still get a unified view of team capacity and activity inside Salesforce.",
  },
  {
    q: "How quickly can teams implement Agent Management workflows in Salesforce?",
    a: "Most teams start quickly by enabling status-based routing and supervisor visibility first, then expanding to advanced assignment rules and analytics. This phased setup delivers fast improvements without disrupting existing processes.",
  },
];

const HERO_IMG = "/Agent.png";

export default function AgentAndLead() {
  const [faqOpen, setFaqOpen] = useState(0);

  const featureCards = [
    {
      title: "Real-Time Agent Availability",
      body: "Agents update Online, Away, and Offline status directly from CTI softphone so supervisors can route calls with live presence visibility.",
      icon: CalendarClock,
      bg: "bg-white border border-slate-200",
    },
    {
      title: "Automated Lead Record Creation",
      body: "Unknown inbound calls instantly create Salesforce lead records with caller details, helping teams respond faster and avoid lead leakage.",
      icon: Mic2,
      bg: "bg-violet-50/80 border border-violet-100",
    },
  ];

  const managementFlowCards = [
    {
      title: "Agent Status Control",
      body: "Agents log in to CTI softphone and set availability status (Online, Away, Offline). Supervisors get real-time visibility to manage live queue capacity.",
      icon: UserCheck,
    },
    {
      title: "Workload Balancing",
      body: "Only online agents receive calls. The system distributes interactions evenly to prevent overload, reduce wait times, and keep team performance stable.",
      icon: Scale,
    },
    {
      title: "Intelligent Lead Assignment",
      body: "When inbound calls arrive from unknown numbers, CTI automatically creates lead records and assigns them using routing rules for immediate follow-up.",
      icon: Target,
    },
    {
      title: "Performance Tracking",
      body: "Dashboards report conversion rates, agent productivity, availability trends, and workload distribution for continuous coaching and process optimization.",
      icon: BarChart3,
    },
  ];

  const statCards = [
    { big: "13+", small: "Years supporting Salesforce teams" },
    { big: "24x7", small: "Live availability visibility" },
    { big: "100%", small: "Auto lead capture consistency" },
    { big: "0", small: "External routing middleware required" },
    { big: "Salesforce-Native", small: "Agent and lead operations" },
    { big: "Real-Time", small: "Workload and performance insights" },
  ];

  const statBg = (i) =>
    i % 2 === 0 ? "bg-sky-50 ring-1 ring-sky-100" : "bg-sky-300/40 ring-1 ring-sky-400/30";

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
          <div className="overflow-hidden rounded-3xl bg-[#f4f2f8] px-6 py-10 shadow-sm sm:px-10 sm:py-12 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:px-12">
            <div className="hero-content-from-left opacity-0">
              <h1 className="text-3xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
                Improve Response Speed with Agent Management &amp; Availability
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-snug text-slate-600 lg:max-w-[28rem]">
                Keep agent status, workload balancing, lead assignment, and tracking in one Salesforce-native workflow
                so every incoming opportunity gets immediate action.
              </p>
              <Link
                href="https://360cti.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-lg bg-sky-600 px-8 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Contact our Experts
              </Link>
            </div>
            <div className="mt-10 flex justify-center lg:mt-0 lg:h-full lg:justify-end lg:items-stretch">
              <img
                src={HERO_IMG}
                alt="Salesforce agent and lead management"
                className="h-auto w-full max-w-xl object-contain sm:max-w-2xl lg:h-full lg:max-w-none lg:object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 3 — Smarter agent & lead */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Smarter Agent &amp; Lead Operations in Salesforce
            </h2>
            <div className="pointer-events-none absolute left-1/2 top-full mt-2 hidden h-8 w-px bg-slate-200 lg:block" style={{ marginLeft: "-1px" }} />
            <div className="pointer-events-none absolute left-[15%] right-[15%] top-[calc(100%+2.25rem)] hidden h-px bg-slate-200 lg:block" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {featureCards.map((c) => (
              <div key={c.title} className={`flex min-h-[260px] flex-col rounded-2xl p-6 shadow-sm ${c.bg}`}>
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

      {/* 4 — Pill CTA */}
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-stretch justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:rounded-full sm:px-8 sm:flex-row sm:items-center">
          <p className="text-center text-base font-bold text-slate-900 sm:text-left">Want to upgrade calls with AI?</p>
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-[#0c2d5c] px-6 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#0a2449] sm:w-auto sm:shrink-0 sm:px-8"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* 5 — Agent management and availability flow */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2f65] to-[#0a2540] px-4 py-12 sm:px-8 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
            aria-hidden
          />
          <h2 className="relative text-left text-2xl font-bold text-white sm:text-3xl">
            Agent Management &amp; Availability
          </h2>
          <div className="relative mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {managementFlowCards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-sky-200">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-100">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Stats */}
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
            AI-Led CTI Built for Availability and Assignment
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

      {/* 7 — Testimonials */}
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

      {/* 8 — FAQ */}
      <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">FAQs</h2>
          <p className="mt-3 text-center text-slate-600">FAQs About Agent Management &amp; Availability</p>
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
          <h2 className="mx-auto max-w-4xl text-balance text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl">
            Turn Every Inbound Opportunity Into Action Faster
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-slate-700 sm:text-lg">
            Design a Salesforce-native model for status control, balanced workloads, and intelligent lead assignment.
          </p>
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-600"
          >
            Contact our Experts
          </Link>
        </div>
      </section>

      <HomeStyleFooter />
      <FloatingChat />
    </div>
  );
}
