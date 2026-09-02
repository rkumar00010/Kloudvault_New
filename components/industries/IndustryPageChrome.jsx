"use client";

import Link from "next/link";
import SharedNavbar from "@/components/SharedNavbar";
import { INDUSTRIES_NAV_DROPDOWN } from "@/lib/industries/navDropdown";
import { Menu, X, ChevronDown, MessageCircle, ArrowRight, Globe } from "lucide-react";
import { useState } from "react";

const CONTACT = "https://360cti.com/contact/";

function NavbarLogo() {
  const [useSvg, setUseSvg] = useState(false);
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

export const INDUSTRY_PAGE_NAV = [
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

export function industryPageNavIsActive(item, pathname) {
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

export default function IndustryPageChrome({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SharedNavbar
        navItems={INDUSTRY_PAGE_NAV}
        NavbarLogo={NavbarLogo}
        ChevronIcon={ChevronDown}
        MenuIcon={Menu}
        CloseIcon={X}
        navItemIsActive={industryPageNavIsActive}
        logoHref="/"
      />
      {children}
      <footer className="border-t border-sky-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Kloudvault, Inc. All rights reserved.</p>
            <a
              href="https://www.kloudvault.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700"
            >
              <Globe className="h-4 w-4" />
              www.kloudvault.ai
            </a>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4 z-[60]">
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

export function IndustryCta({ title, description, button = "Book a Demo" }) {
  return (
    <section
      className="py-16 sm:py-20"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 40%, rgb(224 242 254 / 0.95) 0%, #ffffff 70%)`,
      }}
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-slate-600">{description}</p>
        <Link
          href={CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3 text-sm font-semibold text-white hover:bg-sky-700"
        >
          {button}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
