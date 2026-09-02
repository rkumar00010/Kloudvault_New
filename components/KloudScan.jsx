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
  Scan,
  FileText,
  Brain,
  ShieldCheck,
  Workflow,
  Upload,
  CheckCircle2,
  Plug,
  Bot,
  Sparkles,
  Table,
  PenLine,
  Hash,
  GitBranch,
  FileSearch,
  Copy,
  AlertTriangle,
  UserCheck,
  Link2,
  Database,
  Layers,
  Zap,
  Target,
  Gauge,
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

const SCAN_STATS = [
  { value: "Capture", title: "Upload & ingest", detail: "From existing business workflows", icon: Upload },
  { value: "Understand", title: "AI document context", detail: "Beyond traditional OCR", icon: Brain },
  { value: "Automate", title: "Workflow ready", detail: "Integrate into your systems", icon: Workflow },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Capture",
    body: "Upload or capture documents and images from your existing business workflows.",
    icon: Upload,
  },
  {
    step: "02",
    title: "Extract",
    body: "AI-powered OCR identifies and extracts relevant text, fields, tables, and other information.",
    icon: Scan,
  },
  {
    step: "03",
    title: "Understand",
    body: "AI analyzes the document structure and context to understand what the extracted information means.",
    icon: Brain,
  },
  {
    step: "04",
    title: "Validate",
    body: "Extracted information can be validated against predefined rules and business requirements.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Integrate",
    body: "Send structured data directly into your existing applications, CRM, ERP, or business workflows.",
    icon: Plug,
  },
  {
    step: "06",
    title: "Automate",
    body: "Use the extracted information to trigger downstream business processes and reduce manual work.",
    icon: Bot,
  },
];

const KEY_CAPABILITIES = [
  { title: "AI-Powered OCR", icon: Scan },
  { title: "Intelligent Data Extraction", icon: Sparkles },
  { title: "Document Classification", icon: FileSearch },
  { title: "Table & Line-Item Extraction", icon: Table },
  { title: "Handwritten Text Recognition", icon: PenLine },
  { title: "Field-Level Extraction", icon: Hash },
  { title: "Data Validation", icon: ShieldCheck },
  { title: "Confidence Scoring", icon: Gauge },
  { title: "Document Understanding", icon: Brain },
  { title: "Duplicate Detection", icon: Copy },
  { title: "Anomaly Detection", icon: AlertTriangle },
  { title: "Human-in-the-Loop Review", icon: UserCheck },
];

const PIPELINE_STEPS = ["Document", "OCR", "AI Understanding", "Structured Data", "Validation", "Business Workflow"];

const COMPLEX_DOC_CHALLENGES = [
  "Different layouts",
  "Different formats",
  "Tables and line items",
  "Multiple pages",
  "Handwritten information",
  "Poor-quality scans",
  "Different languages",
  "Unstructured content",
];

const EXTRACT_TYPES = [
  {
    title: "Text",
    body: "Names, addresses, descriptions, references and other content.",
    icon: FileText,
  },
  {
    title: "Fields",
    body: "Dates, numbers, IDs, amounts, codes and other key attributes.",
    icon: Hash,
  },
  {
    title: "Tables",
    body: "Line items, quantities, prices and structured tabular information.",
    icon: Table,
  },
  {
    title: "Relationships",
    body: "Understand how different pieces of information within a document relate to each other.",
    icon: GitBranch,
  },
];

const VALIDATION_CHECKS = [
  "Missing information",
  "Invalid values",
  "Duplicate documents",
  "Extraction inconsistencies",
  "Low-confidence fields",
  "Data anomalies",
];

const INTEGRATIONS = [
  "CRM platforms",
  "ERP systems",
  "Salesforce",
  "Business applications",
  "Document management systems",
  "Internal applications",
  "APIs and custom workflows",
];

const KEY_BENEFITS = [
  {
    title: "Reduce Manual Data Entry",
    body: "Automate repetitive document processing and minimize manual extraction.",
    icon: Zap,
  },
  {
    title: "Improve Data Accuracy",
    body: "Use AI-powered extraction and validation to reduce errors.",
    icon: Target,
  },
  {
    title: "Process Documents Faster",
    body: "Turn documents into structured information in significantly less time.",
    icon: Gauge,
  },
  {
    title: "Handle Document Variations",
    body: "Process documents with different layouts, formats, and structures.",
    icon: Layers,
  },
  {
    title: "Improve Operational Efficiency",
    body: "Connect extracted information directly to your existing business workflows.",
    icon: Workflow,
  },
  {
    title: "Scale Document Processing",
    body: "Process large volumes of documents without increasing manual effort at the same rate.",
    icon: Scale,
  },
];

const WHY_SCAN = [
  {
    title: "OCR + AI + Automation",
    body: "Combine document capture, intelligent extraction, validation, and workflow automation in one solution.",
    icon: Sparkles,
  },
  {
    title: "Intelligent, Not Just Automated",
    body: "Go beyond text recognition with AI-powered document understanding.",
    icon: Brain,
  },
  {
    title: "Flexible",
    body: "Configure extraction requirements according to your business processes.",
    icon: Layers,
  },
  {
    title: "Integration Ready",
    body: "Connect structured document data with the systems you already use.",
    icon: Link2,
  },
  {
    title: "Human-in-the-Loop",
    body: "Allow users to review and correct low-confidence results when required.",
    icon: UserCheck,
  },
  {
    title: "Enterprise Ready",
    body: "Designed to support organizations processing documents at scale.",
    icon: Database,
  },
];

const FAQS = [
  {
    q: "How is KloudScan different from traditional OCR?",
    a: "Traditional OCR extracts text. KloudScan understands documents — combining OCR with AI to capture fields, tables, relationships, and context, then validate and integrate structured data into your workflows.",
  },
  {
    q: "What types of documents can KloudScan process?",
    a: "KloudScan handles structured and unstructured documents with varying layouts, formats, handwritten content, poor-quality scans, multiple pages, and different languages.",
  },
  {
    q: "Can low-confidence extractions be reviewed?",
    a: "Yes. Human-in-the-loop review routes low-confidence fields for validation before data enters downstream systems.",
  },
  {
    q: "Does KloudScan integrate with CRM and ERP systems?",
    a: "KloudScan integrates with CRM platforms, ERP systems, Salesforce, document management systems, internal applications, and APIs or custom workflows.",
  },
];

export default function KloudScan() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">KloudScan</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              AI-Powered Document Intelligence
            </h1>
            <p className="mt-4 text-xl font-semibold text-sky-700">Turn Documents Into Actionable Data</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Transform unstructured documents and images into accurate, structured, and actionable data with AI-powered
              OCR and intelligent document processing.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">
              KloudScan automatically captures information, understands document context, validates extracted data, and
              seamlessly integrates it into your business workflows.
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
                productName="KloudScan"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-sky-50"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-xl">
              <img
                src="/ai-call-intelligence.png"
                alt="KloudScan document intelligence dashboard"
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
            {SCAN_STATS.map((stat) => (
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
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Go Beyond Traditional OCR</h2>
          <p className="mt-4 text-lg font-semibold text-slate-800">Traditional OCR extracts text.</p>
          <p className="mt-2 text-lg font-semibold text-sky-700">KloudScan understands documents.</p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From extracting individual fields to understanding tables, relationships, and document context, KloudScan
            combines OCR with AI to turn complex documents into structured business data.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-sky-700">
            {["Capture", "Understand", "Validate", "Automate"].map((step, index) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-sky-200 bg-white px-3 py-1">{step}</span>
                {index < 3 && <ArrowRight className="h-3.5 w-3.5 text-sky-400" />}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">How KloudScan Works</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOW_IT_WORKS.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600">{item.step}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
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
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Intelligent Document Processing</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              KloudScan can process a wide range of structured and unstructured documents.
            </p>
          </div>
          <h3 className="mt-12 text-center text-2xl font-bold text-slate-900">Key Capabilities</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_CAPABILITIES.map((item) => (
              <article
                key={item.title}
                className="group flex items-center gap-3 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="text-sm font-semibold text-slate-800">{item.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              From Unstructured Documents to Structured Data
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A document contains information that is difficult to use directly. KloudScan transforms it into structured
              information that your applications can understand.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {PIPELINE_STEPS.map((step, index) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-xl border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-slate-800">
                  {step}
                </span>
                {index < PIPELINE_STEPS.length - 1 && <ArrowRight className="h-4 w-4 text-sky-400" />}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-slate-600">
            This allows organizations to move from manual document processing to intelligent, automated workflows.
          </p>
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Handle Complex Documents With AI</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Real-world documents are rarely consistent. They can have:
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {COMPLEX_DOC_CHALLENGES.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-100 bg-white px-3 py-1.5 text-xs font-semibold text-sky-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                KloudScan uses AI to identify relevant information even when documents don&apos;t follow a fixed format.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-[0_12px_32px_rgba(14,165,233,0.1)]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600">Extract the data that matters</p>
              <p className="mt-3 text-sm text-slate-600">
                Define the information your business needs and let KloudScan extract it automatically.
              </p>
              <div className="mt-6 space-y-3">
                {EXTRACT_TYPES.map((item) => (
                  <div key={item.title} className="flex gap-3 rounded-xl bg-slate-50 p-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                      <item.icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.title}</p>
                      <p className="text-xs leading-relaxed text-slate-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-6">
              <p className="text-sm font-medium text-slate-500">Instead of simply extracting:</p>
              <p className="mt-2 font-mono text-lg font-bold text-slate-800">INV-10245</p>
              <p className="mt-6 text-sm font-medium text-slate-500">KloudScan can identify it as:</p>
              <div className="mt-3 space-y-2 rounded-xl border border-sky-100 bg-white p-4 text-sm text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">Document:</span> Invoice
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Invoice Number:</span> INV-10245
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Date:</span> 25 August 2026
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Total Amount:</span> ₹2,45,000
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Supplier:</span> ABC Enterprises
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">AI-Powered Document Understanding</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                KloudScan doesn&apos;t just identify text—it provides context.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                This makes extracted information ready for downstream business processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Improve Accuracy With Intelligent Validation</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Extracted information can be validated using configurable rules and business logic.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALIDATION_CHECKS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-600" strokeWidth={1.75} />
                <p className="text-sm font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-slate-600">
            Low-confidence results can be routed for human review before entering downstream systems.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Connect With Your Existing Systems</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              KloudScan can integrate with the applications and platforms your organization already uses.
            </p>
          </div>
          <h3 className="mt-10 text-center text-lg font-bold text-slate-900">Integrate With</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {INTEGRATIONS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-semibold uppercase tracking-[0.14em] text-sky-600">
            Extract once. Use everywhere.
          </p>
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Built for Automation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Turn document processing into an automated workflow.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Instead of</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Upload", "Read", "Copy", "Verify", "Enter", "Process"].map((step, index) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">{step}</span>
                    {index < 5 && <ArrowRight className="h-3.5 w-3.5 text-slate-400" />}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600">Build</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Upload", "KloudScan", "Extract", "Validate", "Integrate", "Automate"].map((step, index) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-sky-100 bg-white px-3 py-1.5 text-sm font-semibold text-sky-800">
                      {step}
                    </span>
                    {index < 5 && <ArrowRight className="h-3.5 w-3.5 text-sky-400" />}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-slate-600">
            Reduce repetitive manual work and allow teams to focus on higher-value activities.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Key Benefits</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {KEY_BENEFITS.map((item) => (
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
              Why <span className="text-sky-600">KloudScan?</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_SCAN.map((item) => (
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
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">KloudScan FAQ</h2>
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
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Ready to turn documents into data?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Talk to a Kloudvault specialist. We will map OCR, extraction, validation, and integration to your document
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
                  { t: "KloudScan", href: "/kloudscan" },
                  { t: "KloudConnect", href: "/kloudconnect" },
                  { t: "Kloudvault Archive", href: "/klouddata/archival" },
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
