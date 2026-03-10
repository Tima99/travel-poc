import { Button } from "@/components/ui/Button";
import { Plane } from "lucide-react";
import Link from "next/link";

export const CTASection: React.FC = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-gradient-to-tr from-sky-50 via-white to-indigo-50 px-4 py-8 shadow-card sm:px-8 sm:py-10">
      <div className="grid gap-6 md:grid-cols-[ minmax(0,1.6fr), minmax(0,1fr) ] md:items-center">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <Plane className="h-3.5 w-3.5" />
            Premium travel concierge
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Prefer talking to a travel specialist?
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Share your dream trip and our experts will craft a personalised
            itinerary with handpicked stays, experiences, and flights.
          </p>
        </div>
        <div className="flex flex-col items-start justify-end gap-3 md:items-end">
          <Link href="/contact">
            <Button size="lg">Talk to an expert</Button>
          </Link>
          <p className="text-[11px] text-slate-500">
            Response within business hours · No booking obligation
          </p>
        </div>
      </div>
    </section>
  );
};

