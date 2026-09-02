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
  Archive,
  Cloud,
  Eye,
  CheckCircle2,
  Clock,
  RotateCcw,
  Layers,
  Database,
  FileText,
  Users,
  Shield,
  Sparkles,
  Zap,
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

function FeatureRow({ title, body, icon, lines, reverse = false }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className={reverse ? "lg:order-2" : ""}>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-slate-600">{body}</p>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <VisualPanel icon={icon} title={title} lines={lines} />
      </div>
    </div>
  );
}

const PLATFORM_CAPABILITIES = [
  {
    title: "Enterprise-Scale Architecture",
    body: "Designed to handle massive Salesforce datasets while maintaining reliability, performance, and data integrity.",
    icon: Layers,
    lines: ["Multi-org datasets", "Integrity checks on", "No performance trade-off"],
  },
  {
    title: "Automated Protection",
    body: "Schedule daily backups, configure retention policies, and automate archival based on your business requirements.",
    icon: Clock,
    lines: ["Daily backups", "Retention policies", "Archival rules"],
  },
  {
    title: "Fast Recovery",
    body: "Restore individual records, related data with powerful search-based and point-in-time recovery capabilities.",
    icon: RotateCcw,
    lines: ["Record-level restore", "Related datasets", "Point-in-time recovery"],
  },
  {
    title: "Intelligent Archival",
    body: "Move historical and inactive data out of Salesforce while keeping it accessible, searchable, and connected to its original relationships.",
    icon: Archive,
    lines: ["Inactive data off-org", "Searchable archive", "Relationships preserved"],
  },
  {
    title: "Secure Cloud Storage",
    body: "Store archived Salesforce data on scalable AWS infrastructure while keeping your Salesforce environment optimized.",
    icon: Cloud,
    lines: ["AWS storage", "Salesforce optimized", "Enterprise encryption"],
  },
  {
    title: "Complete Visibility",
    body: "Monitor backup, restore, and archival operations through real-time dashboards, audit logs, and detailed operation history.",
    icon: Eye,
    lines: ["Live dashboards", "Audit logs", "Operation history"],
  },
];

const BACKUP_FEATURES = [
  {
    title: "Automated Daily Backup",
    body: "Automatically protect your Salesforce data on a scheduled basis without relying on manual processes.",
    icon: Clock,
    lines: ["Daily schedule · 02:00 UTC", "Last run · success", "Next backup · 18h"],
  },
  {
    title: "Metadata-Driven Backups",
    body: "Choose exactly what needs to be protected with flexible object and field-level backup configuration.",
    icon: Database,
    lines: ["Objects selected · 48", "Field-level rules on", "Custom objects included"],
  },
  {
    title: "Audit Logs",
    body: "Maintain a detailed history of backup and restore activities for operational visibility and governance.",
    icon: FileText,
    lines: ["Restore · completed", "Backup · 2h ago", "Policy change · logged"],
  },
  {
    title: "Role-Based Access Control",
    body: "Control who can access backup, restore, archival, and administrative capabilities.",
    icon: Users,
    lines: ["Admin · full access", "Operator · restore only", "Viewer · audit logs"],
  },
  {
    title: "Scalable Data Protection",
    body: "Designed to support massive Salesforce datasets and enterprise environments.",
    icon: Shield,
    lines: ["Multi-org coverage", "Enterprise volume ready", "Integrity checks on"],
  },
];

const WHY_CHOOSE = [
  {
    title: "Native by Design",
    body: "Built specifically for Salesforce rather than being a generic external backup solution.",
    icon: Sparkles,
  },
  {
    title: "Built for Scale",
    body: "Handle growing data volumes without redesigning your data protection strategy.",
    icon: Layers,
  },
  {
    title: "Automated by Default",
    body: "Reduce manual effort through scheduled backups, configurable policies, automated archival, and intelligent retries.",
    icon: Zap,
  },
  {
    title: "Recovery When It Matters",
    body: "Recover exactly what you need — from individual records to large related datasets.",
    icon: RotateCcw,
  },
  {
    title: "Archive Without Losing Access",
    body: "Reduce Salesforce data volume while keeping historical information searchable and accessible.",
    icon: Archive,
  },
  {
    title: "Enterprise Governance",
    body: "Audit logs, retention controls, access management, and compliance-oriented capabilities provide greater control over your data.",
    icon: Shield,
  },
];

const BACKUP_STATS = [
  {
    value: "99.9%",
    title: "Backup Success Rate",
    detail: "Across all Salesforce orgs",
    icon: CheckCircle2,
  },
  {
    value: "<15 min",
    title: "Recovery Time",
    detail: "Point-in-time restore",
    icon: Clock,
  },
  {
    value: "100%",
    title: "Data Fidelity",
    detail: "Relationships & metadata preserved",
    icon: Database,
  },
];

const FAQS = [
  {
    q: "How often should I back up my data?",
    a: "Backup frequency should match how fast your org changes. Daily automated backups are the default for most teams. Use on-demand backups before deployments or mass updates, and add continuous protection for records that change by the minute.",
  },
  {
    q: "What data is included in a backup?",
    a: "Kloudvault Backup captures critical CRM data and metadata: standard and custom objects, attachments, files, knowledge articles, chatter, and related records so restores keep relationships intact.",
  },
  {
    q: "How long does recovery take?",
    a: "Recovery time depends on data volume and how precisely you restore. Isolate changed records, restore only what you need, and keep valid new data that arrived after the incident.",
  },
  {
    q: "Does this help with compliance?",
    a: "Yes. Configurable retention, searchable backups, and granular restore support GDPR, CCPA, HIPAA, and similar data-subject and audit requirements.",
  },
  {
    q: "Is continuous data protection included?",
    a: "Continuous Data Protection is available as an add-on when interval backups are not enough. It captures every change so you can recover to a specific point in time.",
  },
];

export default function BackupAndRecovery() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">KloudData · Backup & Recover</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Salesforce Backup and Restore Solutions
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Protect your data with automated backups, proactive notifications of loss or corruption, and intuitive
              restoration.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Watch demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <WhyScrollButton
                productName="KloudData"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-sky-50"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-xl">
              <img
                src="/Dashboard.png"
                alt="Kloudvault backup and recovery dashboard"
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
            {BACKUP_STATS.map((stat) => (
              <article
                key={stat.title}
                className="group rounded-2xl border border-sky-100 bg-white/90 px-6 py-8 text-center shadow-[0_8px_24px_rgba(14,165,233,0.08)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.14)]"
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white group-hover:ring-sky-500">
                  <stat.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="text-4xl font-bold tracking-tight text-sky-600 sm:text-[2.5rem]">{stat.value}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{stat.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{stat.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              One Platform. Complete{" "}
              <span className="text-sky-600">Salesforce Data Protection.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Protect your Salesforce environment from data loss, performance issues, compliance risks, and
              uncontrolled data growth.
            </p>
          </div>
          {PLATFORM_CAPABILITIES.map((item, index) => (
            <FeatureRow
              key={item.title}
              title={item.title}
              body={item.body}
              icon={item.icon}
              lines={item.lines}
              reverse={index % 2 === 1}
            />
          ))}
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Why KloudData</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Why <span className="text-sky-600">KloudData</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Salesforce Data Protection, Designed Around Your Business.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
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

      <section id="more-ways" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              More Ways to Strengthen Your Salesforce Data
            </h2>
            <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
              Your Salesforce Data. Always Recoverable.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Salesforce data is critical to your business. Protect it against accidental deletion, data corruption,
              failed deployments, user errors, and unexpected changes.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Our Backup & Restore capabilities provide automated protection and flexible recovery options — from a
              single record to enterprise-scale datasets.
            </p>
          </div>
          <h3 className="mt-12 text-center text-2xl font-bold text-slate-900">Backup Features</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BACKUP_FEATURES.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-sky-100 bg-sky-50/80 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white">
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
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Kloudvault Backup & Recover FAQ</h2>
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
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Ready to protect your Salesforce data?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Talk to a Kloudvault specialist. We will map backup, monitoring, and recovery to your compliance and
            recovery objectives.
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
                  { t: "Kloudvault Archive", href: "/klouddata/archival" },
                  { t: "Kloudvault Backup", href: "/klouddata/backup-and-recovery" },
                  { t: "Kloudvault CTI", href: "/kloudvault-cti" },
                  { t: "Data Backup & Restore", href: "/klouddata/backup-and-recovery" },
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
