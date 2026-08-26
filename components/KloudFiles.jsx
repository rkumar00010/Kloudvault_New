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
  File,
  Paperclip,
  FileText,
  History,
  Link2,
  Database,
  Clock,
  RefreshCw,
  Calendar,
  Lock,
  RotateCcw,
  Search,
  Layers,
  Bell,
  ClipboardList,
  Shield,
  Zap,
  Target,
  Gauge,
  Activity,
  Eye,
  Trash2,
  AlertTriangle,
  Settings,
  Building2,
  LayoutDashboard,
  Scale,
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

const FILES_STATS = [
  { value: "Backup", title: "Automated protection", detail: "Files, attachments & documents", icon: Database },
  { value: "Protect", title: "Secure & controlled", detail: "Encryption, retention & monitoring", icon: Shield },
  { value: "Recover", title: "Fast restoration", detail: "Individual or bulk file recovery", icon: RotateCcw },
];

const PILLARS = [
  {
    title: "Backup",
    body: "Automatically back up Salesforce Files, Attachments, Documents, and associated content.",
    icon: Database,
  },
  {
    title: "Protect",
    body: "Secure backed-up content with controlled access, encryption, retention policies, and monitoring.",
    icon: Lock,
  },
  {
    title: "Recover",
    body: "Quickly search for and restore individual files or large sets of files when needed.",
    icon: RotateCcw,
  },
];

const PROTECTS = [
  {
    title: "Salesforce Files",
    body: "Back up files stored using Salesforce Files and preserve their associated information.",
    icon: File,
  },
  {
    title: "Attachments",
    body: "Protect legacy Salesforce attachments and their relationship with Salesforce records.",
    icon: Paperclip,
  },
  {
    title: "Documents",
    body: "Back up Salesforce documents and other supported file content.",
    icon: FileText,
  },
  {
    title: "File Versions",
    body: "Maintain historical versions of files so previous versions can be recovered when required.",
    icon: History,
  },
  {
    title: "Record Relationships",
    body: "Preserve the relationship between files and the Salesforce records they belong to.",
    icon: Link2,
  },
];

const KEY_CAPABILITIES = [
  { title: "Automated Backup", body: "Schedule automated backups to continuously protect important Salesforce content.", icon: Clock },
  { title: "Incremental Backup", body: "Back up only changed or newly added content to improve efficiency.", icon: RefreshCw },
  { title: "Scheduled Backup", body: "Configure backup schedules according to your organization's requirements.", icon: Calendar },
  { title: "Secure Storage", body: "Protect backed-up files using secure and encrypted storage.", icon: Lock },
  { title: "Point-in-Time Recovery", body: "Recover files from a specific backup point when previous versions are required.", icon: History },
  { title: "Individual File Recovery", body: "Quickly find and restore a specific file without restoring an entire dataset.", icon: File },
  { title: "Bulk Recovery", body: "Restore multiple files efficiently when larger-scale recovery is required.", icon: Layers },
  { title: "File Version Management", body: "Maintain and recover previous versions of files.", icon: History },
  { title: "Search & Retrieval", body: "Quickly locate backed-up files using relevant search and filtering options.", icon: Search },
  { title: "Retention Policies", body: "Define how long backed-up content should be retained.", icon: ClipboardList },
  { title: "Monitoring & Alerts", body: "Monitor backup activity and receive notifications for failures or important events.", icon: Bell },
  { title: "Audit Trail", body: "Maintain visibility into backup and recovery activities.", icon: Eye },
];

const RECOVERY_STEPS = [
  { title: "Find", body: "Search your backup environment for the required file or content.", icon: Search },
  { title: "Select", body: "Choose the required file, version, or group of files.", icon: Target },
  { title: "Restore", body: "Restore the content back to the appropriate Salesforce location.", icon: RotateCcw },
];

const RELATIONSHIP_STEPS = ["Salesforce Record", "Associated File", "File Version", "Backup"];

const BUILT_FOR_SALESFORCE = [
  "Protect Salesforce content",
  "Reduce the risk of permanent file loss",
  "Simplify recovery",
  "Maintain historical versions",
  "Improve business continuity",
  "Support internal retention requirements",
  "Monitor backup health",
];

const USE_CASES = [
  { title: "Accidental Deletion", body: "Recover files that were accidentally removed by users or automated processes.", icon: Trash2 },
  { title: "Data Corruption", body: "Restore clean versions of files when content becomes corrupted or damaged.", icon: AlertTriangle },
  { title: "User Errors", body: "Protect against unintended changes or deletion.", icon: Settings },
  { title: "System & Integration Changes", body: "Maintain recoverable copies when integrations, deployments, or automated processes affect Salesforce content.", icon: RefreshCw },
  { title: "Business Continuity", body: "Ensure critical business files can be recovered when unexpected incidents occur.", icon: Building2 },
];

const MANAGEMENT = [
  { title: "Monitor", body: "Track backup status and activity.", icon: Activity },
  { title: "Search", body: "Find backed-up files quickly.", icon: Search },
  { title: "Review", body: "View backup history and file versions.", icon: Eye },
  { title: "Recover", body: "Restore individual files or perform bulk recovery.", icon: RotateCcw },
  { title: "Audit", body: "Track backup and recovery activities.", icon: ClipboardList },
];

const KEY_BENEFITS = [
  { title: "Reduce Risk", body: "Protect critical Salesforce files against accidental loss and corruption.", icon: Shield },
  { title: "Recover Faster", body: "Quickly locate and restore the content you need.", icon: Zap },
  { title: "Minimize Data Loss", body: "Maintain regular backups and historical file versions.", icon: Database },
  { title: "Improve Business Continuity", body: "Keep critical content recoverable when unexpected events occur.", icon: Building2 },
  { title: "Simplify File Recovery", body: "Restore individual files or larger groups without complicated recovery processes.", icon: RotateCcw },
  { title: "Increase Visibility", body: "Monitor backup operations and maintain an audit history.", icon: Gauge },
];

const WHY_FILES = [
  { title: "Salesforce-Focused", body: "Designed specifically for protecting Salesforce content.", icon: Link2 },
  { title: "Automated", body: "Reduce manual backup activities with scheduled and automated protection.", icon: Clock },
  { title: "Secure", body: "Protect backed-up content using secure storage and encryption.", icon: Lock },
  { title: "Flexible Recovery", body: "Recover individual files, versions, or multiple files according to your needs.", icon: Layers },
  { title: "Scalable", body: "Designed to support organizations managing large volumes of Salesforce content.", icon: Scale },
  { title: "Easy to Manage", body: "Monitor, search, and recover files from a centralized experience.", icon: LayoutDashboard },
];

const FAQS = [
  {
    q: "What Salesforce content does KloudFiles protect?",
    a: "KloudFiles backs up Salesforce Files, legacy attachments, documents, file versions, and preserves relationships between files and the records they belong to.",
  },
  {
    q: "Can I restore a single file without a full restore?",
    a: "Yes. You can search for and restore individual files, specific versions, or perform bulk recovery when larger-scale restoration is required.",
  },
  {
    q: "Are backups encrypted?",
    a: "Yes. KloudFiles uses secure, encrypted storage with controlled access, retention policies, and monitoring.",
  },
  {
    q: "When should we use KloudFiles?",
    a: "Whenever you need protection against accidental deletion, corruption, user errors, integration changes, or any incident that puts Salesforce file content at risk.",
  },
];

export default function KloudFiles() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">KloudFiles</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Salesforce Files Backup & Recovery
            </h1>
            <p className="mt-4 text-xl font-semibold text-sky-700">Protect Your Salesforce Files. Recover With Confidence.</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Secure your critical Salesforce files, attachments, and documents with automated backup and reliable recovery.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">
              KloudFiles helps organizations protect business-critical content, preserve file relationships and versions,
              and quickly restore files when they are accidentally deleted, corrupted, or lost.
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
                productName="KloudFiles"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-sky-50"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-xl">
              <img
                src="/Dashboard.png"
                alt="KloudFiles backup and recovery dashboard"
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
            {FILES_STATS.map((stat) => (
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
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Your Salesforce Files Need Protection Too</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">Salesforce data isn&apos;t limited to records.</p>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Organizations rely on Salesforce to store and manage important files, attachments, documents, and business
            content. Accidental deletion, data corruption, user errors, or system changes can put that information at
            risk.
          </p>
          <p className="mt-3 text-base font-semibold text-sky-700">
            KloudFiles provides an additional layer of protection for your Salesforce files.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Backup. Protect. <span className="text-sky-600">Recover.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            KloudFiles provides a simple approach to Salesforce file protection:
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PILLARS.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-sky-100 bg-sky-50/80 p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">What KloudFiles Protects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            KloudFiles can help protect different types of content stored within Salesforce.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROTECTS.map((item, index) => (
              <article
                key={item.title}
                className={`group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)] ${
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Key Capabilities</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {KEY_CAPABILITIES.map((item) => (
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

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Recover What Matters</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              When something goes wrong, recovery shouldn&apos;t be complicated.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {RECOVERY_STEPS.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-semibold uppercase tracking-[0.14em] text-sky-600">
            Simple recovery when you need it most.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Protect More Than Just Files</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                KloudFiles helps preserve the connection between your files and Salesforce data.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Instead of simply storing a copy of a file, maintain important relationships such as:
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {RELATIONSHIP_STEPS.map((step, index) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm font-semibold text-slate-800">
                      {step}
                    </span>
                    {index < RELATIONSHIP_STEPS.length - 1 && <ArrowRight className="h-4 w-4 text-sky-400" />}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                This makes recovered content more useful and helps maintain the context in which the file was originally
                used.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-6">
              <h3 className="text-lg font-bold text-slate-900">Built for Salesforce</h3>
              <p className="mt-2 text-sm text-slate-600">
                KloudFiles is designed specifically around Salesforce data and file management. It helps organizations:
              </p>
              <ul className="mt-6 space-y-3">
                {BUILT_FOR_SALESFORCE.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <Shield className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" strokeWidth={1.75} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">When Do You Need KloudFiles?</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((item, index) => (
              <article
                key={item.title}
                className={`group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)] ${
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Centralized Backup Management</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Manage your Salesforce file protection from a centralized interface.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {MANAGEMENT.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-sky-100 bg-sky-50/80 p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-3 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Key Benefits</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {KEY_BENEFITS.map((item) => (
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
              Why <span className="text-sky-600">KloudFiles?</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_FILES.map((item) => (
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

      <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">KloudFiles FAQ</h2>
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
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Ready to protect your Salesforce files?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Talk to a Kloudvault specialist. We will map file backup, retention, and recovery to your Salesforce
            workflows.
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
                  { t: "KloudFiles", href: "/kloudfiles" },
                  { t: "KloudScan", href: "/kloudscan" },
                  { t: "KloudConnect", href: "/kloudconnect" },
                  { t: "Kloudvault Backup", href: "/klouddata/backup-and-recovery" },
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
