"use client";

import { useEffect, useState } from "react";

type NavLink = { readonly href: string; readonly label: string };

type SiteHeaderProps = {
  links: readonly NavLink[];
};

export function SiteHeader({ links }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        scrolled
          ? "page-shell-header page-shell-header--scrolled"
          : "page-shell-header"
      }
    >
      <a
        href="#about"
        className="group flex min-w-0 items-center gap-2.5 rounded-xl pr-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-500 to-sky-400 text-xs font-bold tracking-tight text-white shadow-[0_8px_24px_rgba(54,86,245,0.35)]">
          QA
        </div>
        <div className="hidden min-w-0 flex-col sm:flex">
          <span className="truncate text-sm font-semibold text-slate-100">
            Mark Cordero
          </span>
          <span className="truncate text-[10px] font-medium text-slate-500">
            QA Engineer Portfolio
          </span>
        </div>
      </a>

      <nav className="hidden items-center gap-1 lg:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-2.5 py-1.5 text-xs text-slate-400 transition hover:bg-slate-800/60 hover:text-brand-300"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-2">
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-brand-500 to-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(54,86,245,0.35)] transition hover:brightness-110 sm:inline-flex"
        >
          Let&apos;s talk
        </a>

        <details
          className="mobile-nav relative lg:hidden"
          open={mobileMenuOpen}
          onToggle={(e) => setMobileMenuOpen(e.currentTarget.open)}
        >
          <summary
            aria-label="Open navigation menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-200 transition hover:border-slate-700 hover:bg-slate-800/80"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="absolute right-0 top-full z-50 mt-1.5 w-[min(100vw-2rem,9.5rem)] rounded-xl border border-slate-800/90 bg-slate-950 p-1.5 shadow-[0_24px_60px_rgba(2,6,23,0.75)] backdrop-blur-md">
            <nav className="flex flex-col gap-0.5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800/80 hover:text-brand-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
