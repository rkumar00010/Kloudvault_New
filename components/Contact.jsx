"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  PhoneCall,
  Timer,
  CheckCircle2,
  Bot,
  Funnel,
  UsersRound,
  TrendingUp,
  Settings,
  Handshake,
  BarChart3,
  Monitor,
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
      src="/logo.png"
      alt="360 CTI"
      width={200}
      height={64}
      className="h-14 w-auto max-h-16 object-contain sm:h-16"
      onError={() => setUseSvg(true)}
      decoding="async"
    />
  );
}

const partnerLogos = [
  { src: "/partner-logos/Asset-13.svg", alt: "Bank", w: 46, h: 21 },
  { src: "/partner-logos/Asset-14.svg", alt: "AMGEN", w: 78, h: 11 },
  { src: "/partner-logos/Asset-15.svg", alt: "Abbott", w: 28, h: 28 },
  { src: "/partner-logos/Asset-12.svg", alt: "Liberis", w: 74, h: 16 },
  { src: "/partner-logos/Asset-11.svg", alt: "INSEAD", w: 67, h: 20 },
  { src: "/partner-logos/Asset-10.svg", alt: "PageGroup", w: 56, h: 14 },
  { src: "/partner-logos/Asset-9.svg", alt: "togetherTV", w: 69, h: 17 },
  { src: "/partner-logos/Asset-8.svg", alt: "Partner 8", w: 71, h: 20 },
  { src: "/partner-logos/Asset-7.svg", alt: "Partner 7", w: 49, h: 22 },
  { src: "/partner-logos/Asset-6.svg", alt: "Partner 6", w: 71, h: 15 },
  { src: "/partner-logos/Asset-5.svg", alt: "Partner 5", w: 84, h: 15 },
  { src: "/partner-logos/Asset-4.svg", alt: "Partner 4", w: 57, h: 16 },
  { src: "/partner-logos/Asset-3.svg", alt: "Partner 3", w: 51, h: 31 },
  { src: "/partner-logos/Asset-2.svg", alt: "Partner 2", w: 55, h: 29 },
  { src: "/partner-logos/Asset-1.svg", alt: "Partner 1", w: 96, h: 37 },
];

const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Features",
    href: "/#capabilities",
    dropdown: [
      { label: "Inbound & Outbound", href: "/inbound-outbound" },
      { label: "Call Routing & Distribution", href: "/call-routing" },
      { label: "AI and Automation", href: "/ai-automation" },
      { label: "Agent and Lead Management", href: "/agent-and-lead" },
      { label: "Call Monitoring and Compliance", href: "/call-monitoring" },
      { label: "Mobile Call Management", href: "/mobile-call-management" },
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
      "Real Estate",
      "Non Profit",
      "Financial Services",
      "Education",
      "Professional Services",
      "Healthcare",
    ],
  },
  { label: "Our Story", href: "/our-story" },
  { label: "360CTI on AppExchange", href: "https://appexchange.salesforce.com", external: true },
  { label: "Blog", href: "https://360cti.com/blog/", external: true },
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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileExpand, setMobileExpand] = useState(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex min-h-[52px] min-w-0 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:justify-normal lg:gap-x-6 lg:px-8">
        <Link href="/" className="relative flex h-14 shrink-0 items-center" onClick={() => setOpen(false)}>
          <NavbarLogo />
        </Link>

        <nav className="hidden min-w-0 items-center justify-center gap-3 lg:flex xl:gap-4" aria-label="Primary">
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="group relative shrink-0">
                <button
                  type="button"
                  className={`flex items-center gap-0.5 rounded-md px-2 py-2 text-base font-medium hover:bg-slate-50 xl:px-2.5 ${
                    navItemIsActive(item, pathname) ? "text-sky-600" : "text-slate-700"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 min-w-[200px] translate-y-1 rounded-lg border border-slate-200 bg-white py-1 shadow-lg opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.dropdown.map((d) => {
                    const label = typeof d === "string" ? d : d.label;
                    const href = typeof d === "string" ? item.href : d.href;
                    return (
                      <Link
                        key={label}
                        href={href}
                        className="block px-3 py-2 text-base text-slate-600 hover:bg-slate-50"
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`shrink-0 rounded-md px-2 py-2 text-base font-medium hover:bg-slate-50 xl:px-2.5 ${
                  navItemIsActive(item, pathname) ? "text-sky-600" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[#0c2d5c] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0a2449] sm:px-5 sm:py-2.5"
          >
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            className="shrink-0 rounded-lg p-2 text-slate-700 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 px-4 py-3 lg:hidden">
          {NAV.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between py-2 text-left text-base font-semibold ${
                      navItemIsActive(item, pathname) ? "text-sky-600" : "text-slate-900"
                    }`}
                    onClick={() => setMobileExpand((e) => (e === item.label ? null : item.label))}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 ${mobileExpand === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpand === item.label && (
                    <div className="ml-2 border-l border-slate-200 pl-3 pb-2">
                      {item.dropdown.map((d) => {
                        const label = typeof d === "string" ? d : d.label;
                        const href = typeof d === "string" ? item.href : d.href;
                        return (
                          <Link
                            key={label}
                            href={href}
                            className="block py-1 text-base text-slate-600"
                            onClick={() => setOpen(false)}
                          >
                            {label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`block py-2 text-base font-medium ${
                    navItemIsActive(item, pathname) ? "text-sky-600" : "text-slate-800"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

function FloatingChat() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <button
        type="button"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
        aria-label="Live chat"
      >
        <MessageCircle className="h-5 w-5" />
        Live Chat
      </button>
      <button
        type="button"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
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
                <LogoMark className="h-14 w-14 [&_text]:fill-white" />
              </div>
              <p className="mt-4 text-sm font-semibold">Let&apos;s Connect</p>
              <div className="mt-4 flex gap-2">
                {[
                  { label: "Facebook", char: "f" },
                  { label: "X", char: "𝕏" },
                  { label: "LinkedIn", char: "in" },
                  { label: "YouTube", char: "▶" },
                  { label: "Instagram", char: "◎" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
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
              <a href="mailto:contact@360cti.com" className="mt-2 block text-sm text-slate-300 hover:text-white">
                contact@360cti.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold">Features</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {[
                  { t: "Inbound & Outbound Call Management", href: "/inbound-outbound" },
                  { t: "Call Routing & Distribution", href: "/call-routing" },
                  { t: "AI and Automation", href: "/ai-automation" },
                  { t: "Agent & Lead Management", href: "/agent-and-lead" },
                  { t: "Call Monitoring & Compliance", href: "/call-monitoring" },
                  { t: "Mobile Call Management", href: "/mobile-call-management" },
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
            <p>Copyright {new Date().getFullYear()} 360 CTI | All Right Reserved.</p>
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

const HERO_IMG = "/Contact Center.png";

const faqs = [
  {
    q: "How does Salesforce call center integration improve agent productivity and response times?",
    a: "Native CTI connects calls to Salesforce records and queues so agents see context instantly, reduce after-call work, and route work to the right skill faster.",
  },
  {
    q: "What makes a cloud contact center for Salesforce more scalable than on-premises telephony?",
    a: "Cloud capacity scales with demand without hardware projects, and you can add channels, queues, and users in Salesforce while keeping governance centralized.",
  },
  {
    q: "How does Salesforce CTI for contact centers reduce call handling time and manual work?",
    a: "Screen pop, click-to-dial, and automated disposition reduce lookup time and logging, while workflows can trigger follow-ups without leaving the CRM.",
  },
  {
    q: "Can contact center AI for Salesforce improve routing, coaching, and call outcomes?",
    a: "Yes. AI can assist with routing suggestions, surfacing insights during calls, and summarizing transcripts for coaching and quality programs.",
  },
  {
    q: "What should businesses look for in the best contact center solution for Salesforce?",
    a: "Look for native Salesforce alignment, reliable telephony, observability, compliance controls, and fast implementation with minimal custom integration.",
  },
  {
    q: "How does a Salesforce cloud telephony contact center handle high call volume spikes?",
    a: "Carrier-backed cloud capacity scales elastically, while queues, overflow rules, and skills-based routing help distribute load across teams.",
  },
];

function ResolveFasterIcon() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
      <PhoneCall className="h-6 w-6" strokeWidth={1.75} />
      <Timer className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5" strokeWidth={2.5} />
      <CheckCircle2 className="absolute -bottom-0.5 -left-0.5 h-3.5 w-3.5 text-sky-500" strokeWidth={2.5} />
    </div>
  );
}

function ProductivityIcon() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
      <UsersRound className="h-6 w-6" strokeWidth={1.75} />
      <TrendingUp className="absolute -right-1 top-0 h-3.5 w-3.5" strokeWidth={2.5} />
      <Settings className="absolute bottom-0 -left-0.5 h-3.5 w-3.5 opacity-90" strokeWidth={2.5} />
    </div>
  );
}

function DataDecisionsIcon() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
      <Monitor className="h-6 w-6" strokeWidth={1.75} />
      <BarChart3 className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5" strokeWidth={2.5} />
    </div>
  );
}

export default function Contact() {
  const [faqOpen, setFaqOpen] = useState(0);

  const elevateCards = [
    {
      title: "Resolve Queries Faster",
      body: "360 CTI accelerates query resolution by smart call routing and automated distribution, directing inquiries to the right agents, minimizing wait times, and enhancing efficiency.",
      icon: null,
      bg: "bg-sky-50 border border-sky-100",
      custom: "resolve",
    },
    {
      title: "Get AI-Driven Insights",
      body: "Enhance customer interactions by leveraging AI-driven insights, enabling agents to provide personalized, relevant, and efficient support, improving satisfaction.",
      icon: Bot,
      bg: "bg-white border border-slate-200",
    },
    {
      title: "Drive Higher Conversions",
      body: "Boost conversions by streamlining outreach and follow-ups with automated calls, ensuring timely, consistent engagement that drives customer action and sales.",
      icon: Funnel,
      bg: "bg-sky-50 border border-sky-100",
    },
    {
      title: "Improve Agent Productivity & Performance",
      body: "Enhance agent productivity with call monitoring, Power Dialer, and Click-to-Dial by coaching agents in real-time and reducing manual dialing efforts.",
      icon: null,
      bg: "bg-white border border-slate-200",
      custom: "productivity",
    },
    {
      title: "Build Stronger Relationships",
      body: "Build stronger relationships by enabling personalized conversations with screen popups for customer data and caller history, creating meaningful, tailored customer interactions.",
      icon: Handshake,
      bg: "bg-sky-50 border border-sky-100",
    },
    {
      title: "Make Data-driven Decisions",
      body: "Leverage comprehensive call tracking and AI chat transcripts to make data-driven decisions, improving strategies and optimizing customer interactions.",
      icon: null,
      bg: "bg-white border border-slate-200",
      custom: "data",
    },
  ];

  const statCards = [
    { big: "13+", small: "Years of Trust" },
    { big: "Zero", small: "Integration Hassle" },
    { big: "100%", small: "Free Support" },
    { big: "No Code", small: "Telephony Solution" },
    { big: "Salesforce-Native", small: "Telephony" },
    { big: "100%", small: "Data Security" },
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
      quote:
        "This app is a time saver, keeps everything in line with your follow-up needs, and is not over-complicated",
      name: "Mike Adams",
      role: "Founder and President at Smart Stays Inv Smart Stays Inc",
    },
  ];

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* 1 — Hero */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#f4f2f8] px-6 py-10 shadow-sm sm:px-10 sm:py-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10 lg:px-12">
            <div className="hero-content-from-left opacity-0">
              <h1 className="text-[45px] font-bold leading-[1.1] tracking-tight text-slate-900">
                Deliver Seamless Support with Salesforce Call Center Solutions
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-snug text-slate-600 lg:max-w-[28rem]">
                Enable agents to manage customer interactions efficiently with Salesforce cloud contact center capabilities
                and reliable service operations.
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
            <div className="mt-10 flex shrink-0 justify-center self-start lg:mt-0 lg:justify-end">
              <img
                src={encodeURI(HERO_IMG)}
                alt="Salesforce contact center cloud and AI"
                className="h-auto w-full max-w-xl rounded-2xl object-contain sm:max-w-2xl xl:max-w-3xl"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Chosen by + marquee */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl justify-center">
            <p className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm text-slate-600 shadow-sm sm:text-base">
              Chosen by Forward-Thinking{" "}
              <span className="font-semibold text-sky-600">Contact Centers</span>
            </p>
          </div>
          <div className="mt-8 flex min-h-[60px] items-center justify-center overflow-hidden">
            <div className="w-full overflow-hidden">
              <div className="partner-marquee-logos opacity-100">
                <div className="partner-marquee-track flex w-max">
                  <div className="flex w-max items-center gap-x-6 sm:gap-x-12">
                    {partnerLogos.map((logo, idx) => (
                      <a key={`${logo.src}-${idx}-a`} href="#" className="flex items-center justify-center">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          width={logo.w}
                          height={logo.h}
                          className="block"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    ))}
                  </div>
                  <div aria-hidden="true" className="flex w-max items-center gap-x-6 sm:gap-x-12">
                    {partnerLogos.map((logo, idx) => (
                      <a key={`${logo.src}-${idx}-b`} href="#" className="flex items-center justify-center">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          width={logo.w}
                          height={logo.h}
                          className="block"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Elevate */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Elevate Your Salesforce Contact Center with 360 CTI
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Reimagine customer service by improving agent performance, resolving queries faster, and delivering
            consistent experiences across your Salesforce call center operations.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {elevateCards.map((c) => (
              <div key={c.title} className={`flex min-h-[240px] flex-col rounded-2xl p-5 shadow-sm ${c.bg}`}>
                {c.custom === "resolve" && <ResolveFasterIcon />}
                {c.custom === "productivity" && <ProductivityIcon />}
                {c.custom === "data" && <DataDecisionsIcon />}
                {c.icon && !c.custom && (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <c.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                )}
                <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Stats */}
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
            AI-led 360 CTI, Built to Deliver Results
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

      {/* 5 — Testimonials */}
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

      {/* 6 — FAQs */}
      <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">FAQs</h2>
          <p className="mt-3 text-center text-slate-600">FAQs About Salesforce Contact Center</p>
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

      {/* 7 — Final CTA */}
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
          <h2 className="text-balance text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl">
            Power Every Salesforce Call Center Interaction
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Have questions or want to know more about AI-powered 360 CTI?
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
