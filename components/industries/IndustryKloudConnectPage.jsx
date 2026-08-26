"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageCircle, Star } from "lucide-react";
import { navItemIsActive } from "@/lib/navUtils";
import { INDUSTRIES_NAV_DROPDOWN } from "@/lib/industries/navDropdown";
import SharedNavbar from "@/components/SharedNavbar";

const CONTACT = "https://360cti.com/contact/";

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
    dropdown: INDUSTRIES_NAV_DROPDOWN,
  },
];

function NavbarLogo() {
  const [useFallback, setUseFallback] = useState(false);
  if (useFallback) {
    return <span className="text-lg font-bold text-sky-600">Kloudvault</span>;
  }
  return (
    <img
      src="/Kloudvault.png"
      alt="Kloudvault"
      width={200}
      height={64}
      className="h-14 w-auto max-h-16 object-contain sm:h-16"
      onError={() => setUseFallback(true)}
      decoding="async"
    />
  );
}

function Navbar() {
  return (
    <SharedNavbar
      navItems={NAV}
      NavbarLogo={NavbarLogo}
      ChevronIcon={ChevronDown}
      MenuIcon={Menu}
      CloseIcon={X}
      navItemIsActive={navItemIsActive}
      logoHref="#top"
    />
  );
}

function FloatingChat() {
  return (
    <div className="fixed bottom-4 right-4 z-[60]">
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
              <img src="/Kloudvault logo.png" alt="Kloudvault" className="h-14 w-auto" />
              <p className="mt-4 text-sm font-semibold">Let&apos;s Connect</p>
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
          <div className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
            <p>Copyright {new Date().getFullYear()} Kloudvault | All Right Reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

function ImageWithFallback({ paths, alt, className }) {
  const [index, setIndex] = useState(0);
  if (index >= paths.length) {
    return (
      <div className="flex min-h-[200px] w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm text-slate-600">
        {alt}
      </div>
    );
  }
  return (
    <img
      key={paths[index]}
      src={encodeURI(paths[index])}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setIndex((i) => i + 1)}
    />
  );
}

function statCardClass(i) {
  return i % 2 === 0
    ? "border border-slate-200/90 bg-[#EFF6FF] shadow-sm"
    : "border border-sky-300/80 bg-[#BAE6FD] shadow-sm";
}

export default function IndustryKloudConnectPage({ content }) {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroPaths = content.hero.imagePaths || ["/Dashboard.png"];
  const heroFailed = heroIndex >= heroPaths.length;

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative flex min-h-[min(85vh,640px)] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" aria-hidden />
        {!heroFailed && (
          <img
            key={heroPaths[heroIndex]}
            src={encodeURI(heroPaths[heroIndex])}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-45"
            onError={() => setHeroIndex((i) => i + 1)}
            decoding="async"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/88 to-slate-950" aria-hidden />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-24">
          <span className="inline-block rounded-full border border-white/50 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white">
            {content.hero.badge}
          </span>
          <h1 className="mx-auto mt-8 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[45px]">
            {content.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
            {content.hero.description}
          </p>
          <Link
            href={CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-sky-600 px-10 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
          >
            {content.hero.cta}
          </Link>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">{content.impact.title}</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {content.impact.stats.map((s) => (
              <div key={s.title} className="text-center">
                <p className="text-4xl font-bold text-slate-900 sm:text-5xl">{s.pct}</p>
                <p className="mt-2 text-lg font-medium text-slate-900">{s.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-5xl text-center text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[45px]">
            {content.primarySection.title}{" "}
            <span className="text-sky-600">{content.primarySection.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            {content.primarySection.subtitle}
          </p>
          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              {content.primarySection.cards.map((c) => (
                <div key={c.title} className="rounded-2xl border border-sky-100 bg-sky-50/90 p-5 shadow-sm sm:p-6">
                  <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
                </div>
              ))}
            </div>
            <div className="flex shrink-0 justify-center self-start lg:-mt-28 lg:justify-end">
              <ImageWithFallback
                paths={content.primarySection.imagePaths}
                alt={content.primarySection.imageAlt}
                className="h-auto w-full max-w-xl rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 mt-4 flex justify-center self-start sm:mt-5 lg:order-1 lg:mt-0 lg:justify-start">
              <ImageWithFallback
                paths={content.secondarySection.imagePaths}
                alt={content.secondarySection.imageAlt}
                className="h-auto w-full max-w-xl rounded-2xl object-contain sm:max-w-2xl"
              />
            </div>
            <div className="order-1 space-y-4 lg:order-2">
              {content.secondarySection.cards.map((c) => (
                <div key={c.title} className="rounded-2xl border border-sky-100 bg-sky-50/90 p-5 shadow-sm sm:p-6">
                  <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex flex-col items-stretch justify-between gap-6 rounded-2xl bg-[#3B8DEB] px-6 py-8 shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-9">
            <p className="text-center text-lg font-semibold leading-snug text-white sm:max-w-[55%] sm:text-left sm:text-xl">
              {content.caseStudy.text}
            </p>
            <Link
              href={CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 sm:px-6"
            >
              {content.caseStudy.button}
            </Link>
          </div>
        </div>
      </section>

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
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">{content.capabilities.title}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.capabilities.stats.map((s, i) => (
              <div key={`${s.big}-${s.small}`} className={`rounded-2xl p-6 ${statCardClass(i)}`}>
                <p className="text-2xl font-bold text-slate-900">{s.big}</p>
                <p className="mt-1 text-sm text-slate-600">{s.small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">{content.testimonials.title}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {content.testimonials.items.map((t) => (
              <article
                key={t.name}
                className="relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-8 shadow-sm"
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
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {content.finalCta.title}
          </h2>
          <p className="mt-4 text-lg text-slate-700">{content.finalCta.description}</p>
          <Link
            href={CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-600"
          >
            {content.finalCta.button}
          </Link>
        </div>
      </section>

      <HomeStyleFooter />
      <FloatingChat />
    </div>
  );
}
