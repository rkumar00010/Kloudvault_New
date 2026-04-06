"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const HERO_PATHS = ["/FinancialServices-Hero.jpg", "/FinancialServices-Hero.png"];
const ACCELERATE_IMG_PATHS = [
  "/Accelerate Financial.png",
  "/Accelerate-Financial.png",
  "/AccelerateFinancial.png",
];
const PAYMENT_IMG_PATHS = ["/Improve Payment.png", "/Improve-Payment.png", "/ImprovePayment.png"];

const statCards = [
  { big: "13+", small: "Years of Trust" },
  { big: "Zero", small: "Integration Hassle" },
  { big: "100%", small: "Free Support" },
  { big: "No Code", small: "Telephony Solution" },
  { big: "Salesforce-Native", small: "Telephony" },
  { big: "100%", small: "Data Security" },
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
      pct: "35%",
      title: "Faster Loan & Policy Processing",
      body: "On-point conversations with routed calls and automated follow-ups reduce delays, shorten processing cycles, and accelerate client decision-making.",
    },
    {
      pct: "29%",
      title: "Higher Client Satisfaction & Retention",
      body: "Consistent advisor connections, secure and personalized engagement, build long-term trust and improve loyalty and satisfaction.",
    },
    {
      pct: "28%",
      title: "More Efficient Operations",
      body: "Automated calls, advanced routing, reminders, and monitoring reduce manual effort, ensure compliance, and streamline finance support workflows.",
    },
  ];

  const accelerateCards = [
    {
      title: "Speed up Loan Processing",
      body: "Instantly route inquiries to mortgage or loan officers based on caller intent with advanced call routing, shortening loan cycles, and enhancing customer experiences.",
    },
    {
      title: "Secure Client Conversations",
      body: "Ensure private, masked calls between advisors and clients with call masking—protecting PII and ensuring compliance with financial regulations.",
    },
    {
      title: "Deliver Quality Service in Real-time",
      body: "Monitor live calls to ensure compliance, coach advisors using whisper mode, and maintain service quality with CTI for call centers in finance, support teams, and more.",
    },
  ];

  const paymentCards = [
    {
      title: "Improve Payment Collections",
      body: "Schedule automated payment reminders and alerts with voice broadcast, reducing late payments, improving collection, and boosting customer retention effortlessly.",
    },
    {
      title: "Build Stronger Client Relationships",
      body: "Understand client needs through live AI transcripts and sentiment analysis, automate timely follow-ups, ensure consistent advisor calls, and build lasting relationships.",
    },
    {
      title: "Personalize Financial Consultations",
      body: "Connect returning clients with the same advisor automatically using Sticky sender, ensuring personalized interactions, continuity, and trust in long-term financial guidance.",
    },
  ];

  const testimonials = [
    {
      title: "Great Solution for Calling.",
      quote:
        "We recently switched from 'Ameyo' to '360 CTI' and have found the experience largely positive. The overall support from the team has been goo...",
      name: "Arun Narvekar",
      role: "Developer",
    },
    {
      title: "360 CTI Simplified Client Follow-Ups and Improved Customer Service!",
      quote:
        "In financial services, staying in touch with clients quickly and efficiently is crucial. With 360 CTI, we've seen improvements in both our client communication and team productivity.",
      name: "Anchal Pal",
      role: "Administrator",
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
          <div className="hero-content-from-left mx-auto max-w-full opacity-0">
            <span className="inline-block rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
              360 CTI for Financial Services
            </span>
            <h1 className="mx-auto mt-8 text-[40px] font-bold leading-[1.12] tracking-tight text-white whitespace-nowrap">
              Build Stronger Client Relationships with Salesforce CTI
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              Automate client outreach, securely route loan and policy calls, and streamline follow-ups to enhance
              customer experience and trust.
            </p>
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-lg bg-sky-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Book a 1:1 Demo
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — Trusted + marquee */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hero-content-from-left mx-auto flex max-w-4xl justify-center opacity-0">
            <p className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm text-slate-800 shadow-sm sm:text-base">
              <span className="font-medium text-slate-700">Trusted by </span>
              <span className="font-semibold text-sky-600">Leading Financial Firms</span>
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

      {/* 3 — Drive outcomes */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Drive Outcomes: Higher Satisfaction, More Retention
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
            Accelerate Financial Engagement with AI-Led Salesforce Calling
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Transform client outreach—connect efficiently, manage high-value conversations, and support faster
            decision-making with AI-driven calling in Salesforce.
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
              from actual use cases?
            </p>
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 sm:px-6"
            >
              Download the Case Study Now!
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
            Secure and Compliant Telephony for Financial Communication
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
            Trusted by Leading Financial Institutions—Read Their Stories
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
          <h2
            className="font-bold tracking-tight text-slate-900 whitespace-nowrap"
            style={{ fontSize: "clamp(11px, 2.1vw, 1.875rem)" }}
          >
            Faster Decisions. Trusted Conversations. Better Client Experiences.
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Have questions or want to know more about AI-led 360 CTI?
          </p>
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-[#008ecc] px-8 py-3 font-semibold text-white hover:bg-sky-700"
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
