"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SharedNavbar({
  navItems,
  NavbarLogo,
  ChevronIcon,
  MenuIcon,
  CloseIcon,
  navItemIsActive,
  logoHref = "#top",
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mobileExpand, setMobileExpand] = useState(null);

  useEffect(() => {
    const onDocumentClick = (event) => {
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href.includes("360cti.com")) return;

      event.preventDefault();
      event.stopPropagation();
      router.push("/contact-center");
    };

    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, [router]);

  const scrollToHash = (href, closeMenu = false) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return false;

    const pathPart = href.slice(0, hashIndex);
    const hash = href.slice(hashIndex);
    if (pathPart && pathPart !== pathname) return false;

    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return false;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `${pathname}${hash}`);
    if (closeMenu) setOpen(false);
    return true;
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [pathname]);

  const handleNavClick = (event, href, closeMenu = false) => {
    if (scrollToHash(href, closeMenu)) {
      event.preventDefault();
    }
  };

  const isActive = (item) => {
    if (typeof navItemIsActive !== "function") return false;
    return Boolean(navItemIsActive(item, pathname));
  };

  const renderDesktopDropdownItem = (item, d) => {
    const label = typeof d === "string" ? d : d.label;
    const href = typeof d === "string" ? item.href : d.href;

    if (typeof d !== "string" && d.children) {
      return (
        <div key={label} className="group/child relative">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600"
          >
            {label}
            <ChevronIcon className="h-3.5 w-3.5 shrink-0 -rotate-90 opacity-60 transition group-hover/child:text-sky-600" />
          </button>
          <div className="invisible absolute left-full top-0 z-[60] flex min-w-[240px] -translate-x-3 pl-3 opacity-0 transition group-hover/child:visible group-hover/child:opacity-100">
            <div className="w-full rounded-xl border border-sky-100 bg-white p-2 shadow-[0_12px_32px_rgba(14,165,233,0.14)]">
              <div className="space-y-1">
                {d.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block rounded-lg border border-transparent px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-sky-100 hover:bg-sky-50 hover:text-sky-600"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        key={label}
        href={href}
        className="block rounded-md px-3 py-2 text-base text-slate-600 hover:bg-sky-50 hover:text-sky-600"
      >
        {label}
      </Link>
    );
  };

  const renderMobileDropdownItem = (item, d, closeMenu) => {
    const label = typeof d === "string" ? d : d.label;
    const href = typeof d === "string" ? item.href : d.href;
    const childKey = `${item.label}-${label}`;

    if (typeof d !== "string" && d.children) {
      return (
        <div key={label}>
          <button
            type="button"
            className="flex w-full items-center justify-between py-1 text-left text-base font-medium text-slate-800"
            onClick={() => setMobileExpand((e) => (e === childKey ? null : childKey))}
          >
            {label}
            <ChevronIcon className={`h-4 w-4 ${mobileExpand === childKey ? "rotate-180" : ""}`} />
          </button>
          {mobileExpand === childKey && (
            <div className="ml-3 border-l border-slate-200 pl-3 pb-1">
              {d.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block py-1 text-sm text-slate-700 hover:text-sky-700"
                  onClick={closeMenu}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={label}
        href={href}
        className="block py-1 text-base text-slate-700 hover:bg-sky-50 hover:text-sky-700"
        onClick={closeMenu}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex min-h-[52px] min-w-0 max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-3 sm:px-6 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:justify-normal lg:gap-x-6 lg:px-8">
        <Link
          href={logoHref}
          className="relative flex h-12 min-w-0 max-w-[56vw] shrink-0 items-center sm:h-14 sm:max-w-none"
          onClick={() => setOpen(false)}
        >
          <NavbarLogo />
        </Link>

        <nav className="hidden min-w-0 items-center justify-center gap-3 lg:flex xl:gap-4" aria-label="Primary">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="group relative shrink-0">
                <button
                  type="button"
                  className={`flex items-center gap-0.5 rounded-md px-2 py-2 text-base font-medium text-slate-900 hover:bg-slate-100 xl:px-2.5 ${
                    isActive(item) ? "text-sky-700" : "text-slate-900"
                  }`}
                  onClick={() => scrollToHash(item.href)}
                >
                  {item.label}
                  <ChevronIcon className="h-3.5 w-3.5 opacity-60" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 flex min-w-[220px] translate-y-1 flex-col overflow-visible rounded-lg border border-slate-200 bg-white py-1 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.dropdown.map((d) => renderDesktopDropdownItem(item, d))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`shrink-0 rounded-md px-2 py-2 text-base font-medium text-slate-900 hover:bg-slate-100 xl:px-2.5 ${
                  isActive(item) ? "text-sky-700" : "text-slate-900"
                }`}
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="https://360cti.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[#0c2d5c] px-3 py-2 text-xs font-semibold text-white hover:bg-[#0a2449] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Let&apos;s Talk
          </Link>

          <button
            type="button"
            className="shrink-0 rounded-lg p-2 text-slate-900 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 px-4 py-3 lg:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between py-2 text-left text-base font-semibold ${
                      isActive(item) ? "text-sky-700" : "text-slate-900"
                    }`}
                    onClick={() => setMobileExpand((e) => (e === item.label ? null : item.label))}
                  >
                    {item.label}
                    <ChevronIcon className={`h-4 w-4 ${mobileExpand === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpand === item.label && (
                    <div className="ml-2 border-l border-slate-200 pl-3 pb-2">
                      {item.dropdown.map((d) => renderMobileDropdownItem(item, d, () => setOpen(false)))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`block py-2 text-base font-medium ${isActive(item) ? "text-sky-700" : "text-slate-900"}`}
                  onClick={(event) => handleNavClick(event, item.href, true)}
                >
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
