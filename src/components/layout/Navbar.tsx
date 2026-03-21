 "use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Plane, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/tours", label: "Tours" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 shadow-soft",
        mobileOpen
          ? "bg-white backdrop-blur-none"
          : "bg-white/90 backdrop-blur-xl",
      )}
    >
      <nav className="mx-auto flex h-[var(--navbar-height)] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-accent text-white shadow-soft">
            <Plane className="h-4 w-4" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-slate-900">
              TourLandHolidays
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
              Travel Crafted For You
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "relative text-sm font-medium tracking-tight transition-colors",
                  active ? "text-primary!" : "text-black! hover:text-primary!",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-primary to-accent px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
          >
            Plan a Trip
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-900 transition hover:bg-slate-50 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <div
        className={clsx(
          "fixed inset-0 z-50 bg-slate-950/45 transition-opacity duration-300 md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-[60] isolate w-[86%] max-w-xs border-r border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent text-white shadow-soft">
              <Plane className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-slate-900">
              TourLandHolidays
            </span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-col gap-1 p-4">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-white"
                    : "!text-black hover:bg-slate-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/tours"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent px-4 py-3 text-sm font-semibold text-white shadow-soft"
          >
            Plan a Trip
          </Link>
        </div>
      </aside>
    </header>
  );
};

