"use client";

import { INDUSTRIES_NAV_DROPDOWN } from "@/lib/industries/navDropdown";
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
  Shield,
  ArrowRight,
  Globe,
  Users,
  Activity,
  Archive,
  ScanSearch,
  Files,
  Zap,
  Layers,
  Radio,
  ExternalLink,
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

const IMPACT_STATS = [
  { value: "500+", unit: "PB", label: "Data Protected", icon: Database },
  { value: "99.99", unit: "%", label: "Platform Uptime", icon: Shield },
  { value: "50", unit: "+", label: "Enterprise Clients", icon: Users },
  { value: "180", unit: "+", label: "Countries Served", icon: Globe },
  { value: "2", unit: "T+", label: "Daily Signals Processed", icon: Activity },
];

const NAV = [
  {
    label: "Home",
    href: "/",
  },
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

function Navbar() {
  return (
    <SharedNavbar
      navItems={NAV}
      NavbarLogo={NavbarLogo}
      ChevronIcon={ChevronDown}
      MenuIcon={Menu}
      CloseIcon={X}
      navItemIsActive={typeof navItemIsActive === "function" ? navItemIsActive : undefined}
      logoHref="/"
    />
  );
}

const PRODUCTS = [
  {
    title: "Backup and Recovery",
    description: "Protect mission-critical data from loss and corruption.",
    href: "/klouddata/backup-and-recovery",
    icon: Database,
  },
  {
    title: "Archival",
    description: "Compliance-grade long-term retention for regulated data.",
    href: "/klouddata/archival",
    icon: Archive,
  },
  {
    title: "Metadata Backup",
    description: "Preserve Salesforce metadata so orgs recover with full context.",
    href: "/klouddata/metadata-backup",
    icon: Shield,
  },
  {
    title: "KloudConnect",
    description: "Unify systems and data flows across your enterprise stack.",
    href: "/kloudconnect",
    icon: Network,
  },
  {
    title: "KloudScan",
    description: "Detect risks early with continuous cloud security scanning.",
    href: "/kloudscan",
    icon: ScanSearch,
  },
  {
    title: "Kloudfiles",
    description: "Store, share, and govern files with enterprise-grade control.",
    href: "/kloudfiles",
    icon: Files,
  },
];

const WHY_PILLARS = [
  {
    title: "Zero-Trust Architecture",
    body: "Every request is verified. No implicit trust. Fine-grained RBAC and identity-aware access across every product surface.",
    icon: Lock,
  },
  {
    title: "Global Edge Infrastructure",
    body: "60+ PoPs worldwide. Sub-20ms latency to 95% of enterprise users, with data sovereignty options in every major region.",
    icon: Globe,
  },
  {
    title: "AI-Accelerated Operations",
    body: "ML models reduce alert fatigue by 87% and surface actionable intelligence automatically — no manual triage required.",
    icon: Zap,
  },
  {
    title: "Sovereign Deployment Options",
    body: "Dedicated regions, BYOK encryption, and air-gapped deployments for regulated, government, and critical infrastructure.",
    icon: Layers,
  },
  {
    title: "Always-On Monitoring",
    body: "Continuous health checks, anomaly detection, and automated failover ensure your data is always protected and accessible.",
    icon: Radio,
  },
  {
    title: "Unified Control Plane",
    body: "Manage Archive, Backup, and CTI from a single pane of glass. Unified audit logs, billing, and policy enforcement.",
    icon: Database,
  },
];

const COMPLIANCE_BADGES = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR",
  "PCI DSS",
  "NIST CSF",
];

const INTEGRATION_PARTNERS = [
  "ServiceNow",
  "Palo Alto",
  "IBM QRadar",
  "Okta",
  "HashiCorp Vault",
  "Elastic",
  "Splunk",
  "Microsoft Sentinel",
  "CrowdStrike",
  "AWS",
  "Azure",
  "Google Cloud",
];

function ProductCard({ title, description, href, icon: Icon }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
    >
      <div
        className="relative flex h-40 shrink-0 items-center justify-center overflow-hidden sm:h-44"
        style={{
          backgroundImage: `linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 55%, #ffffff 100%)`,
        }}
      >
        <div className="pointer-events-none absolute -left-8 -top-6 h-24 w-24 rounded-full border border-sky-200/70" />
        <div className="pointer-events-none absolute -right-4 top-8 h-20 w-20 rounded-full bg-sky-100/80" />
        <div className="pointer-events-none absolute bottom-4 left-1/3 h-14 w-20 rounded-full bg-sky-200/30 blur-md" />
        <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-sky-600 shadow-sm ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white group-hover:ring-sky-500">
          <Icon className="h-8 w-8" strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center bg-white px-6 pb-8 pt-1 text-center">
        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{title}</h3>
        <p className="mt-3 max-w-[240px] flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors group-hover:text-sky-700">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
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


export default function KloudvaultCti() {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* 1 — Hero */}
      <section className="relative overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-12 lg:pb-32 lg:pt-12">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, #ffffff 0%, #eef9ff 42%, #bfe9ff 100%),
              linear-gradient(rgba(148, 163, 184, 0.14) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.14) 1px, transparent 1px),
              radial-gradient(circle at 18% 55%, rgb(56 189 248 / 0.25) 0%, transparent 38%),
              radial-gradient(circle at 82% 52%, rgb(14 165 233 / 0.2) 0%, transparent 40%)`,
            backgroundSize: "100% 100%, 56px 56px, 56px 56px, 100% 100%, 100% 100%",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-700 backdrop-blur-sm sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" aria-hidden />
            Enterprise Cloud Security Platform
          </span>

          <h1 className="mt-8 font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:mt-10">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">Protect.</span>
            <span
              className="mt-1 block text-5xl text-transparent sm:mt-2 sm:text-6xl lg:text-7xl xl:text-8xl"
              style={{ WebkitTextStroke: "2px rgb(56 189 248)" }}
            >
              Connect.
            </span>
            <span className="mt-1 block text-5xl sm:mt-2 sm:text-6xl lg:text-7xl xl:text-8xl">Grow.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-10 sm:text-lg">
            Kloudvault delivers enterprise-grade{" "}
            <span className="font-semibold text-slate-800">Data Archiving, Backup,</span> and{" "}
            <span className="font-semibold text-slate-800">Cyber Threat Intelligence</span> in a unified cloud
            platform — built for security-critical workloads.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
            <Link
              href="#products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/90 px-7 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — Impact stats */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, #eef9ff 0%, #ffffff 55%, #e0f2fe 100%),
              radial-gradient(circle at 12% 50%, rgb(56 189 248 / 0.18) 0%, transparent 42%),
              radial-gradient(circle at 88% 50%, rgb(14 165 233 / 0.16) 0%, transparent 44%)`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
            {IMPACT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center rounded-2xl border border-sky-100 bg-white/80 px-3 py-6 text-center shadow-[0_8px_24px_rgba(14,165,233,0.08)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.14)] sm:px-4 sm:py-8"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white group-hover:ring-sky-500">
                  <stat.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="text-2xl font-bold tracking-tight text-sky-600 sm:text-3xl lg:text-[1.75rem] xl:text-3xl">
                  {stat.value}
                  <span className="text-xl font-bold text-sky-500 sm:text-2xl">{stat.unit}</span>
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Our Products</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Kloudvault */}
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
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Why Kloudvault</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Enterprise security by{" "}
                <span className="text-sky-600">design.</span>
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Kloudvault was architected from the ground up for enterprises in regulated industries — financial
                services, healthcare, government, and critical infrastructure — where a breach is not an option.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {COMPLIANCE_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-md border border-sky-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-700"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className="group rounded-2xl border border-sky-100 bg-sky-50/80 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white group-hover:ring-sky-500">
                  <pillar.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations ticker */}
      <section className="relative overflow-hidden bg-sky-50/70 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 sm:text-sm">
            Integrates with your existing security stack
          </p>
        </div>
        <div className="relative mt-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-sky-50 to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-sky-50 to-transparent sm:w-28" />
          <div className="group partner-marquee-logos overflow-hidden">
            <div className="partner-marquee-track flex w-max gap-3 group-hover:[animation-play-state:paused] sm:gap-4">
              {[...INTEGRATION_PARTNERS, ...INTEGRATION_PARTNERS].map((name, index) => (
                <span
                  key={`${name}-${index}`}
                  className="shrink-0 rounded-lg border border-sky-200 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-[0_4px_14px_rgba(14,165,233,0.08)] transition-colors hover:border-sky-400 hover:bg-sky-50 hover:text-sky-800 sm:px-5 sm:text-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section
        className="relative overflow-hidden py-20 sm:py-24"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 40%, rgb(224 242 254 / 0.95) 0%, rgb(248 252 255 / 0.9) 42%, #ffffff 100%),
            linear-gradient(rgba(125, 211, 252, 0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(125, 211, 252, 0.18) 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
      >
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-700 backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5" strokeWidth={2} />
            Start protecting your data
          </span>

          <h2 className="mt-8 font-black uppercase leading-[0.95] tracking-tight text-slate-900">
            <span className="block text-4xl sm:text-5xl lg:text-6xl">Secure your data.</span>
            <span
              className="mt-2 block text-4xl text-transparent sm:text-5xl lg:text-6xl"
              style={{ WebkitTextStroke: "2px rgb(14 165 233)" }}
            >
              Start today.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Talk to a Kloudvault security architect. We&apos;ll map the right products to your compliance
            requirements, threat profile, and infrastructure.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(2,132,199,0.28)] transition-colors hover:bg-sky-700"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://360cti.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white/90 px-7 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-sky-300 hover:bg-sky-50"
            >
              View Documentation
              <ExternalLink className="h-4 w-4 text-sky-600" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-sky-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center">
                <NavbarLogo />
              </div>
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
                  { t: "Kloudvault Archive", href: "/klouddata/archival" },
                  { t: "Kloudvault Backup", href: "/klouddata/backup-and-recovery" },
                  { t: "Kloudvault CTI", href: "/kloudvault-cti" },
                  { t: "Data Backup & Restore", href: "/klouddata/backup-and-recovery" },
                ].map(({ t, href }) => (
                  <li key={t}>
                    <Link href={href} className="transition-colors hover:text-sky-600">
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
                    <Link href={href} className="transition-colors hover:text-sky-600">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Resources</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                {[
                  { t: "Documentation", href: "https://360cti.com/contact/" },
                  { t: "API Reference", href: "https://360cti.com/contact/" },
                  { t: "Status Page", href: "https://360cti.com/contact/" },
                  { t: "Security Blog", href: "https://360cti.com/contact/" },
                ].map(({ t, href }) => (
                  <li key={t}>
                    <Link
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="transition-colors hover:text-sky-600"
                    >
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Company</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                {[
                  { t: "About Us", href: "/our-story" },
                  { t: "Careers", href: "https://360cti.com/contact/" },
                  { t: "Press", href: "https://360cti.com/contact/" },
                  { t: "Contact", href: "https://360cti.com/contact/" },
                ].map(({ t, href }) => (
                  <li key={t}>
                    <Link
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="transition-colors hover:text-sky-600"
                    >
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
              {[
                { t: "Privacy Policy", href: "#" },
                { t: "Terms of Service", href: "#" },
                { t: "Cookie Policy", href: "#" },
                { t: "Security", href: "#" },
              ].map(({ t, href }) => (
                <Link key={t} href={href} className="hover:text-sky-600">
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <FloatingChat />
    </div>
  );
}
