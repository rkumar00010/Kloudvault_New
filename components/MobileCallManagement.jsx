"use client";

import { useState } from "react";
import Link from "next/link";
import SharedNavbar from "./SharedNavbar";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  History,
  Megaphone,
  Search,
  Cloud,
  RefreshCw,
  MapPin,
  Phone,
  PhoneIncoming,
  Settings,
  Check,
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

const HERO_IMG_PATHS = ["/Call Accessibilty.jpeg", "/Call Accessibility.jpeg", "/Icons_Mobile-app.svg"];

function IconCell({ icon: Icon }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
      <Icon className="h-6 w-6" />
    </div>
  );
}

function CloudSyncIcon() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
      <Cloud className="h-6 w-6" strokeWidth={1.75} />
      <RefreshCw className="absolute bottom-1.5 right-1.5 h-3.5 w-3.5" strokeWidth={2.5} />
    </div>
  );
}

function PhoneMapPinIcon() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
      <Phone className="h-6 w-6" strokeWidth={1.75} />
      <MapPin className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5" strokeWidth={2.5} />
    </div>
  );
}

export default function MobileCallManagement() {
  const [heroImgIdx, setHeroImgIdx] = useState(0);
  const heroSrc = HERO_IMG_PATHS[Math.min(heroImgIdx, HERO_IMG_PATHS.length - 1)];

  const whyCards = [
    {
      title: "Eliminate Data Silos in the Field",
      body: "Call notes, history, and outcomes stay inside Salesforce in real time, so mobile agents and office teams work from one consistent customer timeline.",
    },
    {
      title: "Move Faster on Revenue Moments",
      body: "On-device controls and instant context reduce decision delay, helping reps act on high-intent calls while context is still fresh.",
    },
    {
      title: "Scale Native Operations",
      body: "No connector maintenance, no sync lag, and no duplicate records. Teams scale mobile calling without adding integration complexity.",
    },
  ];

  const statCards = [
    { big: "13+", small: "Years delivering native Salesforce telephony" },
    { big: "0", small: "External integrations required" },
    { big: "100%", small: "Real-time CRM activity visibility" },
    { big: "Dedicated", small: "Mobile-first Salesforce calling experience" },
    { big: "Native", small: "Single source of truth for call data" },
    { big: "24x7", small: "Operational continuity across locations" },
  ];

  const statBg = (i) =>
    i % 2 === 0 ? "bg-sky-50 ring-1 ring-sky-100" : "bg-sky-300/40 ring-1 ring-sky-400/30";

  const row1Features = [
    {
      title: "Call History Insights",
      body: "Complete visibility into incoming, outgoing, and missed calls so reps can review past interactions before every new conversation.",
      icon: History,
      bg: "bg-white border border-slate-200",
    },
    {
      title: "On-Call Controls",
      body: "Manage live conversations with mute, speaker mode, hold, and disconnect controls to keep every interaction smooth and professional.",
      icon: Megaphone,
      bg: "bg-violet-50/80 border border-violet-100",
    },
    {
      title: "Quick Contact Search",
      body: "Search contacts instantly by name or number inside CTI and launch calls without navigating multiple screens.",
      icon: Search,
      bg: "bg-white border border-slate-200",
    },
    {
      title: "Real-Time Sync",
      body: "Call history, notes, and dispositions sync automatically with Salesforce for immediate visibility across teams.",
      icon: null,
      bg: "bg-slate-50 border border-slate-200",
      customIcon: true,
    },
  ];

  const row2Features = [
    {
      title: "Call From' Field",
      body: "Choose approved business numbers for outbound calls and maintain standardized, brand-safe communication.",
      icon: null,
      bg: "bg-sky-50 ring-1 ring-sky-100",
      phoneMap: true,
    },
    {
      title: "Incoming Call Details",
      body: "Surface caller context and linked Salesforce records so agents can respond with relevant insight from the first hello.",
      icon: PhoneIncoming,
      bg: "bg-white border border-slate-200",
    },
    {
      title: "On-Call Controls",
      body: "Run day-to-day call handling on mobile with less friction and better continuity while moving between tasks.",
      icon: Settings,
      bg: "bg-slate-50 border border-slate-200",
    },
  ];

  /** Call Accessibility & Mobility — slide-style timeline (screenshot) */
  const accessibilityTimeline = [
    {
      title: "Call History Insights",
      body: "Complete visibility into incoming, outgoing, and missed calls. Review past interactions before customer engagement.",
      side: "right",
    },
    {
      title: "On-Call Controls",
      body: "Manage calls with mute, speaker mode, hold, or disconnect options during conversation.",
      side: "left",
    },
    {
      title: "Quick Contact Search",
      body: "Instant search for contacts by name or number within CTI. Fast call initiation without navigating screens.",
      side: "right",
    },
    {
      title: "Real-Time Sync",
      body: "All call data (history, notes, dispositions) syncs automatically with Salesforce for real-time visibility.",
      side: "left",
    },
  ];

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
              <h1 className="text-3xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
                When mobile teams need live context to close faster, run calling natively inside Salesforce.
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-snug text-slate-600 lg:max-w-[28rem]">
                Eliminate integration lag and data silos with a Salesforce-native mobile telephony layer that keeps call
                controls, records, and outcomes in one real-time operating system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="https://360cti.com/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
                >
                  Contact our Experts
                </Link>
              </div>
            </div>
            <div className="mt-10 flex justify-center lg:mt-0 lg:justify-end lg:self-start">
              <img
                key={heroSrc}
                src={encodeURI(heroSrc)}
                alt="360 Textolic mobile Salesforce call management"
                className="h-auto w-full max-h-[30rem] max-w-4xl object-contain object-top sm:max-h-[33rem] sm:max-w-5xl lg:max-h-[26rem] lg:max-w-4xl"
                loading="eager"
                decoding="async"
                onError={() => setHeroImgIdx((i) => (i < HERO_IMG_PATHS.length - 1 ? i + 1 : i))}
              />
            </div>
          </div>
        </div>
      </section>


      {/* 3 — Features + image-derived card */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Core Mobile Accessibility Features</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            360 Textolic is Kloudvault&apos;s Salesforce-native mobile app for call management, enabling inbound and outbound
            calling, real-time data sync, and post-call actions on the go.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {row1Features.map((c) => (
              <div key={c.title} className={`flex min-h-[280px] flex-col rounded-2xl p-5 shadow-sm ${c.bg}`}>
                {c.customIcon ? <CloudSyncIcon /> : <IconCell icon={c.icon} />}
                <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-3">
            {row2Features.map((c) => (
              <div key={c.title} className={`flex min-h-[260px] flex-col rounded-2xl p-5 shadow-sm ${c.bg}`}>
                {c.phoneMap ? <PhoneMapPinIcon /> : <IconCell icon={c.icon} />}
                <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>

          {/* Call Accessibility & Mobility — single card, timeline layout (screenshot) */}
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#1a2f65] to-[#0a2540] p-6 shadow-xl sm:p-10">
            <h3 className="text-center text-xl font-bold text-white sm:text-2xl">Call Accessibility &amp; Mobility</h3>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-200">
              Native mobile workflow: history, controls, search, and Salesforce sync in one connected path.
            </p>

            {/* Mobile: stacked cards */}
            <ul className="mt-10 space-y-4 md:hidden">
              {accessibilityTimeline.map((step) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:p-5"
                >
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-100">{step.body}</p>
                </li>
              ))}
            </ul>

            {/* Desktop: zig-zag timeline + center spine */}
            <div className="relative mx-auto mt-10 hidden max-w-3xl md:block">
              <div
                className="pointer-events-none absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/45 to-white/20"
                aria-hidden
              />

              <ul className="relative">
                {accessibilityTimeline.map((step) => (
                  <li
                    key={step.title}
                    className="grid grid-cols-[1fr_auto_1fr] items-center gap-0 py-6"
                  >
                    {step.side === "right" ? (
                      <>
                        <div aria-hidden />
                        <div className="relative z-[1] flex justify-center">
                          <span
                            className="h-3.5 w-3.5 rounded-full border-2 border-white/90 bg-sky-200 shadow-[0_0_14px_rgba(255,255,255,0.55)]"
                            aria-hidden
                          />
                        </div>
                        <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-left backdrop-blur-sm">
                          <h4 className="text-lg font-bold text-white">{step.title}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate-100">{step.body}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-right backdrop-blur-sm">
                          <h4 className="text-lg font-bold text-white">{step.title}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate-100">{step.body}</p>
                        </div>
                        <div className="relative z-[1] flex justify-center">
                          <span
                            className="h-3.5 w-3.5 rounded-full border-2 border-white/90 bg-sky-200 shadow-[0_0_14px_rgba(255,255,255,0.55)]"
                            aria-hidden
                          />
                        </div>
                        <div aria-hidden />
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-stretch justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:rounded-full sm:px-8 sm:flex-row sm:items-center">
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
        </div>
      </section>

      {/* 4 — Why native */}
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
          <h2 className="relative text-center text-2xl font-bold text-white sm:text-3xl">Why Native Salesforce Mobility Wins</h2>
          <div className="relative mt-10 grid gap-6 md:grid-cols-3">
            {whyCards.map((c) => (
              <div key={c.title} className="relative rounded-2xl bg-white p-6 pt-10 text-center shadow-md">
                <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-sky-600 text-white shadow">
                  <Check className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Stats */}
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
            Social Proof for Native Mobile Calling
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

      {/* 6 — Testimonials */}
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

      {/* 7 — Stay Connected CTA */}
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
            Stay Connected with Salesforce Mobile Call Management
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Have questions or want to know more about AI-powered Kloudvault?
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
