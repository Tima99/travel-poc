import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | TourLandHolidays",
  description:
    "Reach out to the TourLandHolidays team for itinerary design, booking support, or partnership opportunities.",
  openGraph: {
    title: "Contact | TourLandHolidays",
    description:
      "Connect with the TourLandHolidays team for trip planning and support.",
  },
};

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s design your next holiday."
        subtitle="Share a few details about your trip and a travel specialist will be in touch with ideas and pricing options."
      />

      <div className="grid gap-8 md:grid-cols-[ minmax(0,1.4fr), minmax(0,1fr) ]">
        <form className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">
                Full name
              </label>
              <input
                type="text"
                required
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none focus:border-primary"
                placeholder="e.g. Arjun Mehta"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                required
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none focus:border-primary"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">
                Phone (WhatsApp preferred)
              </label>
              <input
                type="tel"
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none focus:border-primary"
                placeholder="+91‑98xxxxxx"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">
                Destination or region
              </label>
              <input
                type="text"
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none focus:border-primary"
                placeholder="e.g. Maldives, Bali, Europe"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">
                Tentative dates
              </label>
              <input
                type="text"
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none focus:border-primary"
                placeholder="e.g. 15–22 Aug or flexible"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">
                Travellers
              </label>
              <input
                type="text"
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none focus:border-primary"
                placeholder="e.g. 2 adults, 1 child"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700">
              Tell us a bit about the trip
            </label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-primary"
              placeholder="Special occasions, must‑do experiences, budget range, or any preferences you already know."
            />
          </div>

          <Button size="lg" fullWidth>
            Submit enquiry (UI only)
          </Button>
          <p className="text-[11px] text-slate-500">
            This form is part of a UI POC and does not send data anywhere yet.
            In production, it can be connected to your CRM or booking engine.
          </p>
        </form>

        <aside className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
          <h2 className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
            Prefer talking first?
          </h2>
          <div className="space-y-3 text-xs text-slate-700">
            <div className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <div className="font-semibold text-slate-900">
                  Dedicated travel line
                </div>
                <div>+91‑98xx‑xxx‑xxx (placeholder)</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <div className="font-semibold text-slate-900">
                  Concierge inbox
                </div>
                <div>hello@tourlandholidays.example</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <div className="font-semibold text-slate-900">
                  Working hours
                </div>
                <div>Mon–Sat · 10:00 AM – 7:00 PM IST</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

