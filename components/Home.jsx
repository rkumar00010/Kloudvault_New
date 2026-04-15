"use client";

import { useState } from "react";
import Link from "next/link";
import SharedNavbar from "./SharedNavbar";
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
      alt="Kloudvault dashboard"
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
];

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

const faqs = [
  {
    q: "What is Kloudvault and how does it work inside Salesforce?",
    a: "Kloudvault is an AI-powered telephony layer that runs natively in Salesforce. Agents click to dial, see screen pops on incoming calls, and log outcomes to the right records—without switching to a separate phone system.",
  },
  {
    q: "How long does setup and onboarding usually take?",
    a: "Most teams go live quickly with admin-led configuration inside Salesforce. There is no separate server stack to maintain; you connect your telephony provider, map users and objects, and start calling from the CRM your team already uses.",
  },
  {
    q: "Which Salesforce editions and telephony providers are supported?",
    a: "Kloudvault is built for common Salesforce clouds and editions your account team can confirm for your org. Carrier and provider options depend on your region and package—book a demo to validate your exact stack.",
  },
  {
    q: "How does Kloudvault help sales and support teams handle more calls?",
    a: "Automation for dialing and routing, contextual screen pops, and AI-assisted summaries cut manual work after each call. Supervisors get clearer visibility into activity so coaching and queue health improve over time.",
  },
  {
    q: "Can Kloudvault handle high-volume outbound and blended teams?",
    a: "Yes. Teams use Kloudvault for outbound campaigns, inbound queues, and blended workflows—with scheduling and routing rules that keep agents productive while respecting your business hours and priorities.",
  },
  {
    q: "Is call data secure and where does it live?",
    a: "Call metadata and recordings follow your Salesforce security model, roles, and sharing rules. As a cloud-native approach, you avoid on-premise PBX hardware while keeping customer data tied to the CRM record model you already govern.",
  },
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
            Kloudvault — telephony built for Salesforce teams
          </span>
          <h1 className="mt-6 text-4xl  tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
           Smarter Calls. Faster Conversions with Kloudvault
          </h1>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl">
            The Leading AI-Powered Telephony Solution for Salesforce
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
            src="/AI-powered.svg"
            alt="AI powered telephony"
            className="h-10 w-10 opacity-95 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pointer-events-none absolute left-4 top-64 hidden md:block lg:left-6 lg:top-72">
          <img
            src="/Click-to-Dial.svg"
            alt="Click to dial"
            className="h-10 w-10 opacity-95 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pointer-events-none absolute left-12 top-[22rem] hidden md:block lg:left-16 lg:top-[25rem]">
          <img
            src="/Multilevel-IVR.svg"
            alt="Multilevel IVR"
            className="h-10 w-10 opacity-95 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Right side */}
        <div className="pointer-events-none absolute right-10 top-36 hidden md:block lg:right-14 lg:top-40">
          <img
            src="/Multilevel-IVR.svg"
            alt="Multilevel IVR"
            className="h-10 w-10 opacity-95 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pointer-events-none absolute right-4 top-64 hidden md:block lg:right-6 lg:top-72">
          <img
            src="/AI-powered.svg"
            alt="AI powered telephony"
            className="h-10 w-10 opacity-95 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pointer-events-none absolute right-12 top-[22rem] hidden md:block lg:right-16 lg:top-[25rem]">
          <img
            src="/Click-to-Dial.svg"
            alt="Click to dial"
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
          <h2 className="mx-auto mt-4 sm:mt-8 max-w-4xl text-center text-3xl font-bold text-slate-900 sm:text-4xl">
           Future-Ready AI Telephony, Built Inside Salesforce
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600">
            Create impactful conversations with native Salesforce integration, AI-driven calling, real-time analytics, and enterprise-grade security—everything you need, all in one place.
          </p>
         
          <div id="capabilities" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Built Natively for Salesforce",
                body: "Keep everything in one place with a fully native Salesforce experience. Access calls, data, and insights seamlessly—no integrations, no disruptions.",
              },
              {
                title: "Intelligent Calling, Better Results",
                body: "Use AI-driven automation and one-click dialing to reduce manual effort, connect faster, and turn more conversations into conversions.",
              },
              {
                title: "Real-Time Insights That Drive Performance",
                body: "Stay on top of every call and agent with real-time analytics that help you improve performance, enhance quality, and boost engagement.",
              },
              {
                title: "Built for Maximum Data Protection",
                body: "Safeguard sensitive data with robust encryption, secure storage, and compliance-driven architecture you can trust.",
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
           A Telephony Platform Built for Sales Excellence
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
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">AI-Driven Call Intelligence</h3>
              <p className="mt-3 text-xl font-semibold text-slate-800">
                Capture Every Word, Understand Every Emotion
              </p>
              <p className="mt-4 max-w-xl text-slate-600">
                Transform your calls into actionable insights with AI-powered transcription and sentiment analysis. Gain complete visibility into customer interactions, improve agent performance, and deliver exceptional customer experiences.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/ai-call-dashboard-v4.png"
                alt="AI call transcription, sentiment analysis, and conversation insights"
                className="w-full max-w-2xl rounded-2xl object-contain shadow-lg ring-1 ring-slate-200/80"
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
              src="/One-Click Dialing.png"
              alt="One-Click Dialing"
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
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">One-Click Dialing Made Simple</h2>
            <p className="mt-2 text-xl font-semibold text-slate-800">Connect Faster, Close More Deals</p>
            <p className="mt-4 text-slate-600">
              Eliminate manual dialing and connect with prospects instantly. With a single click, boost agent productivity, reduce errors, and accelerate your sales process.
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
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Smart Power Dialer</h2>
            <p className="mt-2 text-xl font-semibold text-slate-800">Automate Calls, Accelerate Conversions</p>
            <p className="mt-4 text-slate-600">
            Boost your team’s efficiency with automated dialing that connects agents to more prospects in less time. Use intelligent controls like skip, pause, and resume to manage calls effortlessly and maximize productivity.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/360%20CTI.png"
              alt="Kloudvault"
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
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Intuitive IVR System</h2>
            <p className="mt-2 text-xl font-semibold text-slate-800">
              Simplify Support, Boost Efficiency
            </p>
            <p className="mt-4 text-slate-600">
              Empower callers with easy self-service options through a customizable multilevel IVR. Direct calls accurately, reduce agent workload, and enhance overall service efficiency.
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
            Hear from our Kloudvault Users
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
            <h2 className="text-2xl font-bold sm:text-4xl">Results That Grow with Your Business</h2>
              <p className="mt-4 text-lg text-sky-100">Trusted Performance Delivered by Salesforce Teams</p>
              <div className="mt-4 h-1 w-16 rounded-full bg-white/60" />
            </div>
            <div className="rounded-2xl border-2 border-dashed border-white/50 p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    n: "01",
                    t: "↑ 31% ROI Growth",
                    b: "Leverage AI-driven insights and smart call analytics to capture every interaction, analyze customer sentiment, and continuously refine agent performance—resulting in stronger ROI.",
                  },
                  {
                    n: "02",
                    t: "↑ 48% Higher Call Success Rate",
                    b: "Advanced call routing and real-time guidance empower agents to handle conversations more effectively, increasing first-call resolution and overall success.",
                  },
                  {
                    n: "03",
                    t: "↑ 62% Revenue Uplift",
                    b: "Engage prospects with personalized communication and timely follow-ups, turning every interaction into a revenue-generating opportunity.",
                  },
                  {
                    n: "04",
                    t: "↑ 42% Faster Deal Closures",
                    b: "With features like predictive dialing, Sticky Agent, and automated workflows, your sales team can close deals quicker and minimize missed opportunities.",
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
            <div className="rounded-2xl bg-white/95 px-5 py-3 text-sm font-medium text-slate-800 shadow-lg sm:rounded-full sm:px-8">
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
            Frequently asked questions about Kloudvault for Salesforce
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
           Smarter Conversations. Stronger Results.
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Discover how AI-powered Kloudvault transforms every interaction into meaningful business outcomes.
Have questions? Let’s connect and explore the possibilities.
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

      <FloatingChat />
    </div>
  );
}
