 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane } from "lucide-react";
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

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/90 shadow-soft backdrop-blur-xl">
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

        {/* Mobile: horizontal nav with active highlight */}
        <div className="flex items-center gap-3 text-xs font-medium text-slate-900 md:hidden">
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap">
            {navItems.slice(1, 4).map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "rounded-full px-3 py-1.5 shadow-sm",
                    active
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-slate-900",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

