"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Smartphone,
  Sparkles,
  Database,
  Lock,
  Voicemail,
  Info,
  MessageCircle,
  Star,
  MousePointerClick,
  PhoneForwarded,
  Network,
  Factory,
  Cog,
} from "lucide-react";

/* —— Logo (SVG) —— */
function LogoMark({ className = "h-16 w-16" }) {
  return (
    <svg
      viewBox="0 0 64 72"
      className={className}
      aria-hidden
    >
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
      <text
        x="40"
        y="68"
        fill="#0c4a6e"
        fontSize="14"
        fontWeight="800"
        fontFamily="system-ui,sans-serif"
      >
        CTI
      </text>
    </svg>
  );
}

function NavbarLogo() {
  const [useSvg, setUseSvg] = useState(false);
  if (useSvg) {
    return <LogoMark className="h-16 w-16" />;
  }
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

function DashboardPreview() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 bg-slate-100 px-6 py-16 text-center">
        <LogoMark className="h-20 w-20 opacity-60" />
        <p className="max-w-md text-sm text-slate-600">
          Dashboard image missing or invalid. Add your file as{" "}
          <span className="rounded bg-white px-1.5 py-0.5 font-mono text-xs text-slate-800">
            my-app/public/Dashboard.gif
          </span>{" "}
          and refresh.
        </p>
      </div>
    );
  }
  return (
    <img
      src="/Dashboard.gif"
      alt="360 CTI dashboard"
      className="h-auto w-full object-cover object-top"
      onError={() => setFailed(true)}
      loading="lazy"
      decoding="async"
    />
  );
}

const NAV = [
  { label: "Home", href: "#top" },
  {
    label: "Features",
    href: "#capabilities",
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
    href: "#results",
    dropdown: [
      { label: "Contact Centers", href: "/contact-center" },
      { label: "Sales", href: "/sales-telephony" },
      { label: "Operations", href: "/operations" },
      { label: "Remote Call Center", href: "/remote-call-center" },
    ],
  },
  {
    label: "Industries",
    href: "#testimonials",
    dropdown: [
      { label: "Real Estate", href: "/real-estate" },
      { label: "Non Profit", href: "/non-profit" },
      { label: "Financial Services", href: "/financial-services" },
      { label: "Education", href: "/education" },
      { label: "Professional Services", href: "/professional-services" },
      { label: "Healthcare", href: "/healthcare" },
    ],
  },
  { label: "Our Story", href: "/our-story" },
  { label: "360CTI on AppExchange", href: "https://appexchange.salesforce.com", external: true },
  { label: "Blog", href: "https://360cti.com/blog/", external: true },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileExpand, setMobileExpand] = useState(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex min-h-[52px] min-w-0 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:justify-normal lg:gap-x-6 lg:px-8">
        <Link
          href="#top"
          className="relative flex h-14 shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <NavbarLogo />
        </Link>

        <nav
          className="hidden min-w-0 items-center justify-center gap-3 lg:flex xl:gap-4"
          aria-label="Primary"
        >
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="group relative shrink-0">
                <button
                  type="button"
                  className="flex items-center gap-0.5 rounded-md px-2 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 xl:px-2.5"
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
                        className="block px-3 py-2 text-base text-slate-600 hover:bg-sky-50 hover:text-sky-600"
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
                  item.label === "Home" ? "text-sky-600" : "text-slate-700"
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
                    className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-slate-900"
                    onClick={() =>
                      setMobileExpand((e) => (e === item.label ? null : item.label))
                    }
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
                            className="block py-1 text-base text-slate-600 hover:bg-sky-50 hover:text-sky-600"
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
                  className="block py-2 text-base font-medium text-slate-800"
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

const faqs = [
  {
    q: "How does this Salesforce CTI solution differ from other Salesforce CTI software in setup and onboarding time?",
    a: "This Salesforce CTI integration software enables same-day, no-code onboarding. Unlike many Salesforce telephony solutions that require developers or long setup cycles, admins can activate the CTI directly inside Salesforce.",
  },
  {
    q: "What makes this one of the best Salesforce CTI software options for growing sales teams?",
    a: "This cloud telephony software for Salesforce combines AI automation with built-in calling intelligence. AI voice assistance, real-time transcription, sentiment insights, and intelligent routing help sales teams scale without increasing manual work.",
  },
  {
    q: "How does this Salesforce telephony integration improve call-handling efficiency?",
    a: "This Salesforce phone integration solution automates dialing, screen pops, and call updates. AI summaries and live insights reduce wrap-up time and help agents handle more calls per day.",
  },
  {
    q: "What ROI can teams expect from a Salesforce CTI integration solution like this?",
    a: "Teams typically see higher agent productivity, faster call resolution, and improved conversion rates. Automation, AI-driven coaching, and intelligent routing reduce effort and deliver measurable ROI within months.",
  },
  {
    q: "Can this Salesforce CTI solution support high-volume outbound calling?",
    a: "Yes. This Salesforce CTI solution supports high-volume outbound campaigns using power dialing and automated scheduling. Sales teams reach more prospects while keeping talk time high and idle time low.",
  },
  {
    q: "What are the system requirements for cloud telephony integration with Salesforce?",
    a: "A supported Salesforce edition, active user licenses, and a stable internet connection are required. As a cloud telephony solution for Salesforce, no on-premise hardware is needed, and everything runs inside Salesforce.",
  },
];

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

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* 1 — Hero (email + gradient + decor) */}
      <section className="relative overflow-hidden pb-24 pt-24 sm:pb-32 sm:pt-28 lg:pb-36 lg:pt-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, #ffffff 0%, #eef9ff 42%, #bfe9ff 100%),
              radial-gradient(circle at 18% 55%, rgb(56 189 248 / 0.35) 0%, transparent 38%),
              radial-gradient(circle at 82% 52%, rgb(14 165 233 / 0.28) 0%, transparent 40%),
              radial-gradient(circle at 50% 100%, rgb(2 132 199 / 0.22) 0%, transparent 52%)`,
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full border border-sky-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-800">
            #1 CTI Software
          </span>
          <h1 className="mt-6 text-4xl  tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Call Smarter, Convert Faster with 360 CTI
          </h1>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl">
            #1 AI-Powered Salesforce Telephony Solution
          </p>
          <form
            className="mx-auto mt-10 flex max-w-xl flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:flex-row sm:items-stretch"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter Your Email Address"
              className="min-h-12 flex-1 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-sky-400"
            />
            <button
              type="submit"
              className="rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Book a Demo
            </button>
          </form>
        </div>

        {/* floating decor icons (from public/) */}
        {/* Left side */}
        <div className="pointer-events-none absolute left-10 top-36 hidden md:block lg:left-14 lg:top-40">
          <img
            src="/Icons_Call-automation-1.svg"
            alt="Call automation"
            className="h-10 w-10 opacity-95 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pointer-events-none absolute left-4 top-64 hidden md:block lg:left-6 lg:top-72">
          <img
            src="/Icons_call-recording.svg"
            alt="Call recording"
            className="h-10 w-10 opacity-95 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pointer-events-none absolute left-12 top-[22rem] hidden md:block lg:left-16 lg:top-[25rem]">
          <img
            src="/Icons_data-security.svg"
            alt="Data security"
            className="h-10 w-10 opacity-95 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Right side */}
        <div className="pointer-events-none absolute right-10 top-36 hidden md:block lg:right-14 lg:top-40">
          <img
            src="/Icons_Mobile-app.svg"
            alt="Mobile app"
            className="h-10 w-10 opacity-95 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pointer-events-none absolute right-4 top-64 hidden md:block lg:right-6 lg:top-72">
          <img
            src="/Icons_productivity.svg"
            alt="Productivity"
            className="h-10 w-10 opacity-95 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pointer-events-none absolute right-12 top-[22rem] hidden md:block lg:right-16 lg:top-[25rem]">
          <img
            src="/Icons-01-1.svg"
            alt="360 CTI icon"
            className="h-10 w-10 opacity-95 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* 2 & 3 — Dashboard preview (image: public/Dashboard.gif) */}
      <section className="bg-sky-100/60 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* 4 — Trusted + headline + feature cards */}
      <section id="about" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-600">
            The Most Trusted Modern{" "}
            <span className="font-semibold text-sky-600">Salesforce CTI</span> Worldwide
          </p>
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
          <h2 className="mx-auto mt-16 max-w-4xl text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Next-Generation AI Telephony, Natively Integrated with Salesforce
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600">
            Deliver meaningful conversations through seamless Salesforce telephony integration, AI-powered
            calling, real-time insights, and enterprise-grade security—without leaving Salesforce.
          </p>
          <div id="capabilities" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Native Integration",
                body: "No more toggling tabs—360 CTI works natively inside Salesforce, keeping your data and calls connected.",
              },
              {
                title: "Smarter Calling",
                body: "Leverage AI-led automation and click-to-dial to slash call time and improve conversion rates.",
              },
              {
                title: "Live Analytics",
                body: "Track team performance, call quality, and customer engagement—all in real time within your CRM.",
              },
              {
                title: "Data Security",
                body: "100% secure. Your call logs, recordings, and customer data stay protected with robust compliance protocols.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-2xl bg-sky-50 p-6 text-left shadow-sm ring-1 ring-sky-100"
              >
                <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full border border-sky-200/60" />
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — AI-powered Call Transcript */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            A Sales–Centric Telephony Platform with Powerful Capabilities
          </h2>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <img
                  src="/AI-powered.svg"
                  alt="AI-powered"
                  className="h-8 w-8"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">AI-powered Call Transcript</h3>
              <p className="mt-3 text-xl font-semibold text-slate-800">
                Auto-Transcribe Calls, Improve Call Handling
              </p>
              <p className="mt-4 max-w-xl text-slate-600">
                Leverage AI to automatically generate call transcripts and analyze sentiment, enabling smarter
                decision-making and enhanced CX
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/Person.gif"
                alt="AI-powered call transcript"
                className="w-full max-w-2xl rounded-2xl object-contain shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Click-to-Dial */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/Ashish.gif"
              alt="Ashish"
              className="w-full max-w-2xl rounded-2xl object-contain shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <div className="mb-4 inline-flex rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <img
                src="/Click-to-Dial.svg"
                alt="Click-to-Dial"
                className="h-8 w-8"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Click-to-Dial</h2>
            <p className="mt-2 text-xl font-semibold text-slate-800">Dial in One Click, Save Time</p>
            <p className="mt-4 text-slate-600">
              Dial prospects instantly with a single click, eliminate manual dialing, reduce errors, and connect
              faster with more leads
            </p>
          </div>
        </div>
      </section>

      {/* 7 — Power Dialer */}
      <section className="bg-slate-100/80 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-4 inline-flex rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <img
                src="/Power-Dialer.png"
                alt="Power Dialer"
                className="h-8 w-8 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Power Dialer</h2>
            <p className="mt-2 text-xl font-semibold text-slate-800">Automate Dialling, Maximize Productivity</p>
            <p className="mt-4 text-slate-600">
              Automate bulk dialing your prospects with smarter controls like Skip, Call, and Break to boost agent
              productivity
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/360%20CTI.png"
              alt="360 CTI"
              className="w-full max-w-xl rounded-2xl object-contain shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* 8 — Multilevel IVR */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/message.gif"
              alt="Multilevel IVR"
              className="w-full max-w-2xl rounded-2xl object-contain shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <div className="mb-4 inline-flex rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <img
                src="/Multilevel-IVR.svg"
                alt="Multilevel IVR"
                className="h-8 w-8"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Multilevel IVR</h2>
            <p className="mt-2 text-xl font-semibold text-slate-800">
              Offer &apos;Self-help&apos;, Improve Efficiency
            </p>
            <p className="mt-4 text-slate-600">
              Route calls efficiently with a customizable multilevel IVR, enhancing customer experience and reducing
              wait times
            </p>
          </div>
        </div>
      </section>

      {/* 8 — Stats strip + testimonials */}
      <section id="testimonials" className="scroll-mt-24">
        <div className="grid grid-cols-2 divide-x divide-white/20 bg-sky-600 text-white lg:grid-cols-4">
          {[
            { icon: Phone, big: "24", small: "x 7", label: "Technical Support" },
            { icon: Star, big: "4.9", small: "+", label: "AppExchange Rating" },
            { icon: Cog, big: "13", small: "+", label: "Years of Service" },
            { icon: Factory, big: "6", small: "+", label: "Industries" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 px-4 py-8 sm:px-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/15">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold sm:text-3xl">
                  {s.big}
                  <span className="text-sky-200">{s.small}</span>
                </p>
                <p className="text-xs text-sky-100 sm:text-sm">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Hear from our 360 CTI Users
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Fully native CTI app for Salesforce.",
                quote:
                  "Finally a fully native CTI app for Salesforce. Do yourself a favor and trial this app. The time based call routing is awesome.",
                name: "Josh Rodgers",
                role: "COO",
              },
              {
                title: "A wonderful CTI created by the team.",
                quote:
                  "An amazing experience to the customer. Great working with them. Highly recommended to customers looking to add CTI to their Salesforce environment.",
                name: "Sabbas Pereira",
                role: "Director",
              },
            ].map((t) => (
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
                <div className="relative z-[1] mt-8 text-right">
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

      {/* 9 — Proven results */}
      <section
        id="results"
        className="scroll-mt-24 bg-gradient-to-br from-[#002b5c] via-[#043d7a] to-[#0c4a6e] py-16 text-white sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Proven Results That Scale with Your Business</h2>
              <p className="mt-4 text-lg text-sky-100">100% Proven Results From Salesforce Teams</p>
              <div className="mt-4 h-1 w-16 rounded-full bg-white/60" />
            </div>
            <div className="rounded-2xl border-2 border-dashed border-white/50 p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    n: "01",
                    t: "29% ROI Boost",
                    b: "AI and call monitoring help you auto-transcribe conversations, understand tone and sentiment, improve call handling, and boost ROI",
                  },
                  {
                    n: "02",
                    t: "↑ 43% Call Closure Rate",
                    b: "Intelligent routing and real-time agent coaching lead to quicker resolutions and more successful call outcomes",
                  },
                  {
                    n: "03",
                    t: "↑ 67% More Revenue",
                    b: "Personalized, consistent outreach and faster follow-ups turn more conversations into conversions, increasing deal volume",
                  },
                  {
                    n: "04",
                    t: "37% Faster Sales Closures",
                    b: "Sticky Agent, Power Dialer, and automated follow-ups accelerate sales cycles and reduce lead drop-off.",
                  },
                ].map((x) => (
                  <div key={x.n} className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/30 text-sm font-bold">
                      {x.n}
                    </span>
                    <div>
                      <h3 className="font-bold">{x.t}</h3>
                      <p className="mt-2 text-sm text-sky-100/90">{x.b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-14 flex justify-center">
            <div className="rounded-full bg-white/95 px-8 py-3 text-sm font-medium text-slate-800 shadow-lg">
              To get any furthur information or any question.{" "}
              <a
                href="https://360cti.com/contact/"
                className="font-semibold text-sky-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Support Team ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10–11 — FAQ */}
      <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">FAQs</h2>
          <p className="mt-3 text-center text-slate-600">
            Frequently Asked Questions about Salesforce CTI
          </p>
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

      {/* 12 — Final CTA */}
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
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-4xl">
            Turn Every Conversation into a Better Outcome
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

      {/* 13 — Newsletter + footer */}
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

      <FloatingChat />
    </div>
  );
}
