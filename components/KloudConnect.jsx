"use client";

import { INDUSTRIES_NAV_DROPDOWN } from "@/lib/industries/navDropdown";
import { useState } from "react";
import Link from "next/link";
import WhyScrollButton from "@/components/WhyScrollButton";
import SharedNavbar from "./SharedNavbar";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  Globe,
  Phone,
  PhoneCall,
  MessageSquare,
  Mic,
  Zap,
  Sparkles,
  BarChart3,
  Link2,
  Users,
  Headphones,
  Briefcase,
  Laptop,
  Smartphone,
  Lightbulb,
  TrendingUp,
  Target,
  Cloud,
  LayoutDashboard,
  GitBranch,
  Layers,
} from "lucide-react";

const CONTACT = "https://360cti.com/contact/";

function LogoMark({ className = "h-16 w-16" }) {
  return (
    <svg viewBox="0 0 64 72" className={className} aria-hidden>
      <circle cx="32" cy="28" r="14" fill="#38bdf8" />
      <text x="32" y="33" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">
        360
      </text>
      <path d="M12 30c0-11 9-20 20-20s20 9 20 20" fill="none" stroke="#0c4a6e" strokeWidth="4" strokeLinecap="round" />
      <path d="M14 30v6c0 3 2 5 5 5h2" fill="none" stroke="#0c4a6e" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M50 30v6c0 3-2 5-5 5h-2" fill="none" stroke="#0c4a6e" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M18 48c2 8 8 12 14 12s12-4 14-12" fill="none" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
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
    label: "Product",
    href: "#products",
    dropdown: [
      {
        label: "KloudData",
        children: [
          { label: "Backup and Recovery", href: "/klouddata/backup-and-recovery" },
          { label: "Archival", href: "/klouddata/archival" },
          { label: "Metadata Backup", href: "/klouddata/metadata-backup" },
        ],
      },
      { label: "KloudConnect", href: "/kloudconnect" },
      { label: "KloudScan", href: "/kloudscan" },
      { label: "Kloudfiles", href: "/kloudfiles" },
    ],
  },
  {
    label: "Features",
    href: "/kloudvault-cti#capabilities",
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
    href: "/kloudvault-cti#results",
    dropdown: [
      { label: "Contact Centers", href: "/contact-center" },
      { label: "Sales", href: "/sales-telephony" },
      { label: "Operations", href: "/operations" },
      { label: "Remote Call Center", href: "/remote-call-center" },
    ],
  },
  {
    label: "Industries",
    href: "/kloudvault-cti#testimonials",
    dropdown: INDUSTRIES_NAV_DROPDOWN,
  },
];

function pathMatches(href, pathname) {
  if (typeof href !== "string" || href.startsWith("http")) return false;
  const pathPart = href.split("#")[0].split("?")[0];
  if (!pathPart) return false;
  if (pathPart === "/" && href.includes("#")) return false;
  return pathname === pathPart || pathname.startsWith(`${pathPart}/`);
}

function navItemIsActive(item, pathname) {
  if (item.external) return false;
  if (item.dropdown) {
    return item.dropdown.some((d) => {
      if (typeof d !== "string" && d.children) {
        return d.children.some((child) => pathMatches(child.href, pathname));
      }
      const href = typeof d === "string" ? item.href : d.href;
      return pathMatches(href, pathname);
    });
  }
  return pathMatches(item.href, pathname);
}

function VisualPanel({ icon: Icon, title, lines }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-[0_12px_32px_rgba(14,165,233,0.1)]">
      <div className="flex items-center gap-2 border-b border-sky-100 bg-sky-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-sky-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-sky-100" />
        <span className="ml-2 text-xs font-semibold text-slate-500">{title}</span>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        {lines.map((line) => (
          <div key={line} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">
            <span>{line}</span>
            <span className="h-2 w-16 rounded-full bg-sky-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureRow({ title, body, icon, lines, reverse = false, children }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className={reverse ? "lg:order-2" : ""}>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-slate-600">{body}</p>
        {children}
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <VisualPanel icon={icon} title={title} lines={lines} />
      </div>
    </div>
  );
}

const CONNECT_STATS = [
  { value: "One", title: "Unified Workspace", detail: "Calls, SMS, and CRM in one place", icon: Layers },
  { value: "CRM", title: "Native Integration", detail: "Activity connected to every record", icon: Link2 },
  { value: "Anywhere", title: "Work From Any Device", detail: "Desktop, web, and mobile", icon: Cloud },
];

const TEAM_NEEDS = [
  { title: "Cloud Calling", body: "Make and receive business calls from anywhere.", icon: Phone },
  { title: "Click to Call", body: "Call contacts instantly without manually dialing numbers.", icon: PhoneCall },
  { title: "SMS", body: "Send and manage customer and candidate messages.", icon: MessageSquare },
  { title: "Call Recording", body: "Record conversations for training, quality, and review.", icon: Mic },
  { title: "Power Dialer", body: "Move through contact lists faster and increase calling productivity.", icon: Zap },
  { title: "AI Call Summaries", body: "Turn conversations into searchable summaries and actionable insights.", icon: Sparkles },
  { title: "Real-Time Analytics", body: "Monitor team activity and communication performance.", icon: BarChart3 },
  { title: "CRM Integration", body: "Automatically connect communication activity with your CRM records.", icon: Link2 },
];

const TEAM_TYPES = [
  {
    title: "Sales Teams",
    body: "Reach more prospects, reduce manual work, and keep every customer interaction connected to your CRM.",
    tags: ["Click to Call", "Power Dialer", "SMS", "Call Analytics"],
    icon: Briefcase,
  },
  {
    title: "Recruitment Teams",
    body: "Communicate with candidates and clients while keeping call history and conversations connected to your recruitment workflow.",
    tags: ["Candidate Calling", "SMS", "Call Recording", "CRM/ATS Integration"],
    icon: Users,
  },
  {
    title: "Customer Service Teams",
    body: "Give your teams the context they need to deliver better conversations and faster support.",
    tags: ["Call Routing", "Call Recording", "Screen Pops", "Real-Time Monitoring"],
    icon: Headphones,
  },
];

const INSIGHT_STEPS = [
  {
    title: "Understand",
    body: "What are customers and candidates saying?",
    icon: Lightbulb,
  },
  {
    title: "Improve",
    body: "Where can your team improve?",
    icon: TrendingUp,
  },
  {
    title: "Act",
    body: "What should happen next?",
    icon: Target,
  },
];

const CRM_INTEGRATIONS = [
  {
    title: "Salesforce",
    body: "Bring calling, SMS, activity tracking, and communication insights into your Salesforce workflow.",
    icon: Link2,
  },
  {
    title: "Recruitment Platforms",
    body: "Keep candidate and client communications connected to your recruitment workflow.",
    icon: Users,
  },
  {
    title: "Your Workflow",
    body: "Integrate communications into the tools your team already relies on.",
    icon: GitBranch,
  },
];

const KEY_FEATURES = [
  { feature: "Cloud Calling", benefit: "Make and receive calls from anywhere" },
  { feature: "Click to Call", benefit: "Start calls instantly" },
  { feature: "Power Dialer", benefit: "Contact more people in less time" },
  { feature: "SMS", benefit: "Communicate through text" },
  { feature: "Call Recording", benefit: "Review and improve conversations" },
  { feature: "AI Summaries", benefit: "Turn conversations into actionable insights" },
  { feature: "Screen Pops", benefit: "Get relevant contact information during calls" },
  { feature: "IVR", benefit: "Route callers to the right team" },
  { feature: "Call Queues", benefit: "Manage inbound calls efficiently" },
  { feature: "Real-Time Dashboards", benefit: "Monitor team performance" },
  { feature: "CRM Integration", benefit: "Keep communication and CRM data connected" },
];

const WHY_CONNECT = [
  {
    title: "Increase Productivity",
    body: "Spend less time switching between systems and more time communicating.",
    icon: Zap,
  },
  {
    title: "Keep Data Connected",
    body: "Automatically capture communication activity within your CRM workflow.",
    icon: Link2,
  },
  {
    title: "Improve Visibility",
    body: "Understand team activity through reporting, dashboards, recordings, and analytics.",
    icon: LayoutDashboard,
  },
  {
    title: "Work Anywhere",
    body: "Give distributed teams access to business communication across devices.",
    icon: Smartphone,
  },
  {
    title: "Scale With Your Business",
    body: "Build a communication environment that can grow with your team.",
    icon: Layers,
  },
];

const FAQS = [
  {
    q: "Does KloudConnect work inside my CRM?",
    a: "Yes. KloudConnect integrates communication directly into systems your teams already use, including Salesforce and leading recruitment platforms such as Bullhorn, Vincere, and JobDiva.",
  },
  {
    q: "Can my team work remotely?",
    a: "KloudConnect delivers a consistent communication experience across desktop, web, and mobile — whether your team is in the office, remote, or on the move.",
  },
  {
    q: "What communication channels are supported?",
    a: "Cloud calling, click to call, SMS, call recording, power dialer, AI summaries, and real-time analytics — all connected to your CRM records.",
  },
  {
    q: "How does KloudConnect help managers?",
    a: "Call recording, AI-powered transcription and summaries, reporting, and real-time dashboards help you understand team activity and identify opportunities to improve.",
  },
];

export default function KloudConnect() {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SharedNavbar
        navItems={NAV}
        NavbarLogo={NavbarLogo}
        ChevronIcon={ChevronDown}
        MenuIcon={Menu}
        CloseIcon={X}
        navItemIsActive={navItemIsActive}
        logoHref="/"
      />

      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, #ffffff 0%, #eef9ff 42%, #dbeafe 100%),
              radial-gradient(circle at 18% 55%, rgb(56 189 248 / 0.25) 0%, transparent 38%),
              radial-gradient(circle at 82% 52%, rgb(14 165 233 / 0.18) 0%, transparent 40%)`,
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">KloudConnect</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Connect. Communicate. Convert.
            </h1>
            <p className="mt-4 text-xl font-semibold text-sky-700">Powerful cloud communication built into your CRM.</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Make calls, send messages, manage conversations, and track every interaction from one connected workspace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <WhyScrollButton
                productName="KloudConnect"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-sky-50"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-xl">
              <img
                src="/Contact Center.png"
                alt="KloudConnect communication dashboard"
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, #eef9ff 0%, #f0f9ff 50%, #e0f2fe 100%),
              radial-gradient(circle at 12% 50%, rgb(56 189 248 / 0.18) 0%, transparent 42%),
              radial-gradient(circle at 88% 50%, rgb(14 165 233 / 0.16) 0%, transparent 44%)`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {CONNECT_STATS.map((stat) => (
              <article
                key={stat.title}
                className="group rounded-2xl border border-sky-100 bg-white/90 px-6 py-8 text-center shadow-[0_8px_24px_rgba(14,165,233,0.08)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.14)]"
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white group-hover:ring-sky-500">
                  <stat.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl">{stat.value}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{stat.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{stat.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              One Platform for Every{" "}
              <span className="text-sky-600">Conversation</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Stop switching between your CRM, phone system, and messaging tools.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              KloudConnect brings business communications directly into your workflow, helping teams connect with
              customers, candidates, and prospects faster while keeping communication history organized.
            </p>
          </div>
          <h3 className="mt-14 text-center text-2xl font-bold text-slate-900">Everything your team needs</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_NEEDS.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h4 className="mt-4 text-base font-bold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          <FeatureRow
            title="Your CRM. Your Communications. One Experience."
            body="KloudConnect integrates communication directly into the systems your teams already use. Instead of switching between applications, your team can communicate while keeping relevant activity connected to CRM records."
            icon={Link2}
            lines={["CRM record opened", "Call in progress", "Activity logged"]}
          >
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-sky-700">
              {["CRM", "Call", "Conversation", "Activity", "Insights"].map((step, index) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1">{step}</span>
                  {index < 4 && <ArrowRight className="h-3.5 w-3.5 text-sky-400" />}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-medium text-slate-600">Everything stays connected.</p>
          </FeatureRow>
        </div>
      </section>

      <section
        className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20"
        style={{
          backgroundImage: `
            linear-gradient(180deg, #ffffff 0%, #f8fcff 100%),
            linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 28px 28px, 28px 28px",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Built for <span className="text-sky-600">High-Performance Teams</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {TEAM_TYPES.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Work From Anywhere</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                KloudConnect gives your team a consistent communication experience across desktop, web, and mobile.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Whether your team is in the office, working remotely, or on the move, communication stays connected.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-sky-600">
                One platform. Multiple devices.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Desktop", icon: Laptop },
                { label: "Web", icon: Globe },
                { label: "Mobile", icon: Smartphone },
              ].map((device) => (
                <div
                  key={device.label}
                  className="flex flex-col items-center rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                    <device.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <p className="mt-3 text-sm font-bold text-slate-900">{device.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Turn Conversations Into Insights</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Every conversation can become a source of valuable business intelligence. With call recording, AI-powered
              transcription and summaries, reporting, and real-time analytics, managers can understand what is happening
              across their teams and identify opportunities for improvement.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {INSIGHT_STEPS.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-sky-100 bg-sky-50/80 p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Connect KloudConnect With Your CRM</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              KloudConnect is designed to work alongside leading CRM and ATS platforms, including Salesforce and
              recruitment platforms such as Bullhorn, Vincere, and JobDiva.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {CRM_INTEGRATIONS.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Key Features</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-500">
            KloudConnect communication and CRM capabilities at a glance.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
            <div className="hidden grid-cols-[1fr_1.4fr] gap-4 border-b border-sky-100 bg-sky-50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 sm:grid">
              <span>Feature</span>
              <span>Benefit</span>
            </div>
            <div className="divide-y divide-sky-50">
              {KEY_FEATURES.map((row) => (
                <div
                  key={row.feature}
                  className="grid gap-1 px-6 py-4 transition-colors hover:bg-sky-50/50 sm:grid-cols-[1fr_1.4fr] sm:gap-4"
                >
                  <p className="font-semibold text-slate-900">{row.feature}</p>
                  <p className="text-sm text-slate-600">{row.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="why"
        className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20"
        style={{
          backgroundImage: `
            linear-gradient(180deg, #ffffff 0%, #f8fcff 100%),
            linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 28px 28px, 28px 28px",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Why <span className="text-sky-600">KloudConnect?</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CONNECT.map((item, index) => (
              <article
                key={item.title}
                className={`group rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)] ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">KloudConnect FAQ</h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = faqOpen === i;
              return (
                <div
                  key={item.q}
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
                    <div className="border-t border-slate-200 px-5 pb-4">
                      <p className="pt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 40%, rgb(224 242 254 / 0.95) 0%, #ffffff 70%)`,
        }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Ready to connect your communications?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Talk to a Kloudvault specialist. We will map calling, messaging, and CRM integration to how your team
            works today.
          </p>
          <Link
            href={CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3 text-sm font-semibold text-white hover:bg-sky-700"
          >
            Book a demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-sky-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="sm:col-span-2 lg:col-span-1">
              <NavbarLogo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
                Enterprise cloud security for the most demanding workloads — from regulated industries to critical
                infrastructure.
              </p>
              <a
                href="https://www.kloudvault.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700"
              >
                <Globe className="h-4 w-4" />
                www.kloudvault.ai
              </a>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Products</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                {[
                  { t: "KloudConnect", href: "/kloudconnect" },
                  { t: "Kloudvault Archive", href: "/klouddata/archival" },
                  { t: "Kloudvault Backup", href: "/klouddata/backup-and-recovery" },
                  { t: "Kloudvault CTI", href: "/kloudvault-cti" },
                ].map(({ t, href }) => (
                  <li key={t}>
                    <Link href={href} className="hover:text-sky-600">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Solutions</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                {[
                  { t: "Financial Services", href: "/industry/financial-services/kloudconnect" },
                  { t: "Healthcare", href: "/industry/healthcare/kloudconnect" },
                  { t: "Government", href: "/operations" },
                  { t: "Critical Infrastructure", href: "/operations" },
                ].map(({ t, href }) => (
                  <li key={t}>
                    <Link href={href} className="hover:text-sky-600">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Resources</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                {["Documentation", "API Reference", "Status Page", "Security Blog"].map((t) => (
                  <li key={t}>
                    <Link href={CONTACT} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Company</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li>
                  <Link href="/our-story" className="hover:text-sky-600">
                    About Us
                  </Link>
                </li>
                {["Careers", "Press", "Contact"].map((t) => (
                  <li key={t}>
                    <Link href={CONTACT} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-sky-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Kloudvault, Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((t) => (
                <Link key={t} href="#" className="hover:text-sky-600">
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
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
    </div>
  );
}
