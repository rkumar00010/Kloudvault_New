"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Smartphone,
  MonitorPlay,
  UsersRound,
  UserCheck,
  ClipboardCheck,
  BadgeCheck,
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

const HERO_IMG = "/Remote.png";

const faqs = [
  {
    q: "How does a virtual call center in Salesforce support remote teams effectively?",
    a: "Native CTI keeps calls, records, and workflows inside Salesforce so agents work from anywhere with the same tools, routing, and visibility as in-office teams.",
  },
  {
    q: "What makes Salesforce a strong call center solution for remote teams?",
    a: "A single system of record, omnichannel readiness, and AppExchange solutions like 360 CTI let you scale remote operations without stitching together separate apps.",
  },
  {
    q: "How does remote call center software for Salesforce maintain call quality and reliability?",
    a: "Cloud telephony with QoS-aware networks, monitoring, and failover pairs with Salesforce reporting so supervisors can spot issues and keep service levels stable.",
  },
  {
    q: "Can a remote call center in Salesforce scale quickly for growing teams?",
    a: "Yes. Add licenses and queues as you grow, route by skills or geography, and use automation to onboard new agents faster without heavy IT projects.",
  },
  {
    q: "What features should businesses look for in the best virtual call center software for Salesforce?",
    a: "Prioritize native integration, intelligent routing, mobile access, quality monitoring, analytics, and security controls that fit your compliance needs.",
  },
  {
    q: "How does Salesforce cloud telephony help manage remote call center operations efficiently?",
    a: "Supervisors get real-time dashboards, call outcomes in CRM, and coaching tools—while agents stay productive with click-to-dial, screen pops, and guided workflows.",
  },
];

export default function Remote() {
  const [faqOpen, setFaqOpen] = useState(0);
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  const capabilityCards = [
    {
      title: "Manage Calls with a Mobile App",
      body: "Empower agents to make and receive calls remotely via Salesforce mobile and 360 CTI, ensuring uninterrupted communication from anywhere.",
      icon: Smartphone,
      bg: "bg-sky-50 border border-sky-100",
    },
    {
      title: "Live Call Supervision",
      body: "Use call barging, whispering, and monitoring to coach agents in real time—even from remote locations—to maintain service quality.",
      icon: MonitorPlay,
      bg: "bg-white border border-slate-200",
    },
    {
      title: "Balance Workloads for Remote Teams",
      body: "Distribute inbound calls evenly across remote agents based on availability or skillset, improving call handling speed and team efficiency.",
      icon: UsersRound,
      bg: "bg-sky-50 border border-sky-100",
    },
    {
      title: "Faster Connectivity with Remote Teams",
      body: "Enable remote agents to update their availability (Online, Away, Offline) so calls are routed only to available team members, minimizing delays.",
      icon: UserCheck,
      bg: "bg-white border border-slate-200",
    },
    {
      title: "Boost Remote Team Accountability",
      body: "Track every inbound/outbound call, missed calls, durations, and outcomes by user, ensuring transparency and accountability across remote teams.",
      icon: ClipboardCheck,
      bg: "bg-sky-50 border border-sky-100",
    },
    {
      title: "Deliver a Consistent Customer Experience",
      body: "Ensure repeat callers connect with the same agent using Sticky Agent, building trust and seamless support, so remote teams stay unified and professional.",
      icon: BadgeCheck,
      bg: "bg-white border border-slate-200",
    },
  ];

  const statCards = [
    { big: "13+", small: "Years of Trust" },
    { big: "Zero", small: "Integration Hassle" },
    { big: "100%", small: "Free Support" },
    { big: "Dedicated", small: "Mobile App" },
    { big: "Salesforce-Native", small: "Telephony" },
    { big: "100%", small: "Data Security" },
  ];

  const statBg = (i) =>
    i % 2 === 0 ? "bg-sky-50 ring-1 ring-sky-100" : "bg-sky-300/40 ring-1 ring-sky-400/30";

  const testimonials = [
    {
      title: "It is easy to implement and navigate",
      quote:
        "This app has been great for our team. It is easy to implement and navigate and the 360 team is very responsive in setting up and training. Thank you...",
      name: "Christina Duncan",
      role: "Transaction Manager",
    },
    {
      title: "Very quick and accurate when answering a call.",
      quote:
        "Pankaj has been on top of things during the demo, implementation, and testing phases. Any issues we have had were dealt with quickly by top-notc...",
      name: "Chris Bullion",
      role: "Engineering Director",
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
                Power Your Remote Call Center with Salesforce-Native 360 CTI
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-snug text-slate-600 lg:max-w-[28rem]">
                Enable secure, high-performance customer support for remote teams—fully inside Salesforce.
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
              {heroImgFailed ? (
                <div className="flex min-h-[280px] w-full max-w-xl flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-100 px-6 py-12 text-center text-sm text-slate-600">
                  <LogoMark className="h-16 w-16 opacity-50" />
                  <p>
                    Add your hero image as{" "}
                    <span className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">my-app/public/Remote.png</span>
                  </p>
                </div>
              ) : (
                <img
                  src={encodeURI(HERO_IMG)}
                  alt="Remote call center with Salesforce-native 360 CTI"
                  className="h-auto w-full max-w-xl rounded-2xl object-contain sm:max-w-2xl xl:max-w-3xl"
                  loading="eager"
                  decoding="async"
                  onError={() => setHeroImgFailed(true)}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Trusted by + marquee */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl justify-center">
            <p className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm text-slate-600 shadow-sm sm:text-base">
              Trusted by <span className="font-semibold text-sky-600">India&apos;s Leading Enterprises</span>
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

      {/* 3 — Capabilities */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Capabilities for Remote Call Center Success
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityCards.map((c) => (
              <div key={c.title} className={`flex min-h-[240px] flex-col rounded-2xl p-5 shadow-sm ${c.bg}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <c.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
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
            AI-led CTI Built for Reliable Remote Teams
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
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Voices from the Frontlines of Telephony
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-8 shadow-sm"
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

      {/* 6 — FAQs */}
      <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">FAQs</h2>
          <p className="mt-3 text-center text-slate-600">FAQs About Remote Call Centers</p>
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
              Need more Info?
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
            Deliver Consistent, Connected Customer Experiences—From Anywhere
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Have questions or want to know more about AI-led 360 CTI?
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
