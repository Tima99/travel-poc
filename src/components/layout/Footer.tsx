import Link from "next/link";
import { Plane, Instagram, Facebook, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Experiences",
    items: [
      { label: "Honeymoon Trips", href: "/tours" },
      { label: "Family Holidays", href: "/tours" },
      { label: "Weekend Getaways", href: "/tours" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center", href: "#" },
      { label: "Cancellation Policy", href: "#" },
      { label: "Terms & Privacy", href: "#" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/60 bg-white/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
          <div className="max-w-sm space-y-4">
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
            <p className="text-sm text-slate-900">
              Curated getaways, seamless planning, and trusted partners across
              the globe – so you only focus on making memories.
            </p>
          </div>

          <div className="grid gap-6 text-sm text-slate-900 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-slate-900 transition hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-dashed border-border/70 pt-4 text-xs text-slate-800 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} TourLandHolidays. Crafted as a UI POC
            for premium travel experiences.
          </p>
          <div className="flex items-center gap-2">
            <span className="mr-1 text-[11px] uppercase tracking-[0.18em] text-slate-900">
              Follow
            </span>
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/80 text-slate-700 transition hover:border-primary/60 hover:text-primary"
            >
              <Instagram className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/80 text-slate-700 transition hover:border-primary/60 hover:text-primary"
            >
              <Facebook className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/80 text-slate-700 transition hover:border-primary/60 hover:text-primary"
            >
              <Youtube className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

