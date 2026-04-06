"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";

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

const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Features",
    href: "/#capabilities",
    dropdown: [
      { label: "Inbound & Outbound", href: "/inbound-outbound" },
      { label: "Call Routing & Distribution", href: "/call-routing" },
      { label: "AI and Automation", href: "/ai-automation" },
      { label: "Agent & Lead Management", href: "/agent-and-lead" },
      { label: "Call Monitoring & Compliance", href: "/call-monitoring" },
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
      { label: "Remote call center", href: "/remote-call-center" },
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

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileExpand, setMobileExpand] = useState(null);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex min-h-[52px] min-w-0 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-x-6 lg:px-8">
        <Link href="/" className="relative flex h-14 shrink-0 items-center" onClick={() => setOpen(false)}>
          <NavbarLogo />
        </Link>
        <nav className="hidden min-w-0 items-center justify-center gap-3 lg:flex xl:gap-4" aria-label="Primary">
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="group relative shrink-0">
                <button type="button" className="flex items-center gap-0.5 rounded-md px-2 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 xl:px-2.5">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 min-w-[230px] translate-y-1 rounded-lg border border-slate-200 bg-white py-1 shadow-lg opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.dropdown.map((d) => {
                    const label = typeof d === "string" ? d : d.label;
                    const href = typeof d === "string" ? item.href : d.href;
                    return (
                      <Link key={label} href={href} className="block px-4 py-2 text-base text-slate-600 hover:bg-sky-50 hover:text-sky-600">
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
                className={`shrink-0 rounded-md px-2 py-2 text-base font-medium hover:bg-slate-50 xl:px-2.5 ${item.label === "Our Story" ? "text-sky-600" : "text-slate-700"}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="https://360cti.com/contact/" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full bg-[#0c2d5c] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0a2449] sm:px-5 sm:py-2.5">
            Let&apos;s Talk
          </Link>
          <button type="button" className="shrink-0 rounded-lg p-2 text-slate-700 lg:hidden" onClick={() => setOpen((o) => !o)}>
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
                  <button type="button" className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-slate-900" onClick={() => setMobileExpand((e) => (e === item.label ? null : item.label))}>
                    {item.label}
                    <ChevronDown className={`h-4 w-4 ${mobileExpand === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpand === item.label && (
                    <div className="ml-2 border-l border-slate-200 pl-3 pb-2">
                      {item.dropdown.map((d) => {
                        const label = typeof d === "string" ? d : d.label;
                        const href = typeof d === "string" ? item.href : d.href;
                        return (
                          <Link key={label} href={href} className="block py-1 text-base text-slate-600 hover:bg-sky-50 hover:text-sky-600" onClick={() => setOpen(false)}>
                            {label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="block py-2 text-base font-medium text-slate-800" onClick={() => setOpen(false)}>
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

function Footer() {
  return (
    <section className="bg-[#0a1628] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Subscribe to Our Newsletter</h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Get the latest in AI, voice, messaging, and Salesforce-delivered to your inbox.
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
                  { label: "X", char: "x" },
                  { label: "LinkedIn", char: "in" },
                  { label: "YouTube", char: ">" },
                  { label: "Instagram", char: "o" },
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
                  "Inbound & Outbound Call Management",
                  "Call Routing & Distribution",
                  "AI and Automation",
                  "Agent & Lead Management",
                  "Call Monitoring & Compliance",
                  "Mobile Call Management",
                ].map((t) => (
                  <li key={t}>{t}</li>
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
              <span className="hover:text-slate-300">Our Business</span> Privacy, Terms &amp; Condition
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default function OurStoryPage() {
  const leaders = [
    { name: "Siddharth Sehgal", role: "Founder/CEO", img: "/Shidhart.png", body: "A communication visionary and author of Cracking the SMS Conversion Code, Siddharth leads 360 Degree Cloud with 15+ years of expertise." },
    { name: "Pooja Singhal", role: "Co-Founder", img: "/Pooja.png", body: "Pooja, Co-Founder and AppExchange Partner, brings 11+ years of Salesforce expertise and drives innovation-led growth." },
    { name: "Aditya Kathpalia", role: "Director Sales", img: "/Aditya.png", body: "Aditya drives global sales with precision-building lasting relationships and ensuring customer journey success." },
    { name: "Shruti Jaidka Bhargva", role: "VP-HR", img: "/Shruti.png", body: "Shruti transforms HR through strategy and tech-leading talent acquisition, performance, and policy integration." },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="border-y border-slate-100 bg-gradient-to-b from-sky-50 to-sky-100 py-16 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl"><span className="text-sky-700">360 Degree Cloud:</span> Your Trusted Growth Partner</h1>
        <p className="mx-auto mt-5 max-w-3xl text-xl">Enabling Salesforce Excellence. Innovating Around Your Goals.</p>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 lg:grid-cols-2 lg:px-8">
        <img src="/Our mission.png" alt="Our Mission" className="h-[280px] w-full rounded-xl bg-white object-contain" />
        <div>
          <h2 className="text-4xl font-bold leading-tight">Our Mission: Excellence on Salesforce. Success for Every Customer.</h2>
          <p className="mt-5 text-lg text-slate-600">We help businesses grow better-by enabling smarter ways to work, connect, and scale on Salesforce.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-5xl font-bold">Our Story</h2>
          <p className="mt-4 text-lg text-slate-600">360 Degree Cloud began as a five-member team with a clear vision: help businesses get more from Salesforce.</p>
          <p className="mt-4 text-lg text-slate-600">Today, we are a Salesforce Summit Partner with 13+ years of experience and global project success.</p>
          <p className="mt-4 text-lg text-slate-600">360 CTI is one of our latest breakthroughs-an AI-powered, Salesforce-native telephony solution rated 4.9/5 on AppExchange.</p>
        </div>
        <img src="/Our Story.jpg" alt="Our Story" className="h-[360px] w-full rounded-xl bg-white object-contain" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="bg-gradient-to-r from-[#0f69c5] to-[#2196f3] p-6 text-center text-white">
            <h3 className="text-4xl font-bold">Trusted. Awarded. Proven.</h3>
            <p className="mt-2 text-lg">Our work speaks through the trust of our customers and recognition of Salesforce.</p>
          </div>
          <img src="/Trusted.png" alt="Trusted Awards" className="h-auto w-full bg-white object-contain p-2" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-2 lg:px-8">
        <img src="/our-journey.png" alt="Our Journey timeline" className="h-auto w-full rounded-3xl bg-[#eef3fa] object-contain p-3" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <h2 className="text-center text-4xl font-bold">Our Leadership- The Minds Behind the Mission</h2>
        <p className="mt-3 text-center text-4xl font-bold text-sky-700">Pioneering Innovation, Driving Customer Success</p>
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg text-slate-600">At 360 Degree Cloud, our leadership blends strategic foresight with deep Salesforce expertise to drive lasting impact.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {leaders.slice(0, 2).map((l) => (
            <article key={l.name} className="grid grid-cols-[160px_1fr] gap-4 rounded-xl bg-slate-50 p-4">
              <img src={l.img} alt={l.name} className="h-52 w-40 rounded-lg bg-white object-contain" />
              <div>
                <p className="text-base text-slate-600">{l.body}</p>
                <div className="mt-6 rounded-lg bg-white p-3">
                  <p className="text-xl font-bold">{l.name}</p>
                  <p className="text-sm text-slate-500">{l.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {leaders.slice(2).map((l) => (
            <article key={l.name} className="grid grid-cols-[160px_1fr] gap-4 rounded-xl bg-slate-50 p-4">
              <img src={l.img} alt={l.name} className="h-52 w-40 rounded-lg bg-white object-contain" />
              <div>
                <p className="text-base text-slate-600">{l.body}</p>
                <div className="mt-6 rounded-lg bg-white p-3">
                  <p className="text-xl font-bold">{l.name}</p>
                  <p className="text-sm text-slate-500">{l.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="rounded-3xl bg-slate-100 p-8 sm:p-10">
          <h3 className="text-center text-4xl font-bold sm:text-5xl">AppExchange Excellence, Powered by Innovation</h3>
          <p className="mt-3 text-center text-lg text-slate-600">Native to Salesforce. Powered by AI. Proven to drive results.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { name: "360 Line", desc: "Tap into advanced Salesforce Line messaging", badge: "360 LINE" },
              { name: "Textolic", desc: "Power messaging across any CRM with open APIs.", badge: "TEXTOLIC" },
              { name: "360 File Sync", desc: "Save costs on expensive data storage.", badge: "360 FILESYNC" },
              { name: "360 Verify the phone & Email", desc: "Boost Email, call deliverability.", badge: "VERIFY" },
            ].map((p) => (
              <article key={p.name} className="relative rounded-xl bg-white px-4 pb-4 pt-12 shadow-sm">
                <div className="absolute left-1/2 top-0 w-[120px] -translate-x-1/2 -translate-y-1/2 rounded bg-[#dbeaf5] px-3 py-2 text-center shadow-md">
                  <span className="block truncate text-xs font-semibold text-slate-700">{p.badge}</span>
                </div>
                <div className="flex min-h-[250px] flex-col">
                  <h4 className="text-center text-3xl font-bold leading-tight">{p.name}</h4>
                  <p className="mt-3 text-center text-base leading-relaxed text-slate-600">{p.desc}</p>
                  <button className="mt-auto w-full rounded-md bg-sky-700 py-3 text-base font-semibold text-white">
                    Know more
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 text-center lg:px-8">
        <h3 className="text-5xl font-bold">AI Innovations.Trusted on AppExchange.</h3>
        <p className="mt-3 text-lg text-slate-600">Native to Salesforce. Powered by AI. Proven to drive results.</p>
        <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative bg-gradient-to-r from-sky-500 to-cyan-500 pb-20 pt-10 text-white">
            <p className="text-7xl font-bold">4.93</p>
            <p className="mt-1 text-3xl">★★★★★</p>
            <p className="text-xl">Rated</p>
            <div className="pointer-events-none absolute -bottom-10 left-0 h-20 w-full rounded-[50%] bg-white" />
          </div>
          <div className="flex items-center justify-between px-6 pb-4 pt-2">
            <p className="text-sm font-medium text-slate-500">salesforce appexchange</p>
            <button className="rounded-full bg-[#0c2d5c] px-5 py-2 text-sm font-semibold text-white">
              Read our reviews
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="rounded-3xl border border-sky-200 p-10 text-center">
          <h3 className="text-5xl font-bold">
            <span className="text-sky-700">Call with Precision. Engage Smarter.</span> Close Faster.
          </h3>
          <p className="mt-5 text-3xl text-sky-700">AI-powered calling, built for Salesforce.</p>
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#0c2d5c] px-10 py-3 text-lg font-semibold text-white"
          >
            See 360 CTI in action
          </Link>
        </div>
      </section>

      <Footer />

      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
        <button type="button" className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg"><MessageCircle className="h-5 w-5" />Live Chat</button>
        <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"><MessageCircle className="h-6 w-6" /></button>
      </div>
    </div>
  );
}

