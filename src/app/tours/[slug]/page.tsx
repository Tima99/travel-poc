import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { travelApi } from "@/services/travelApi";
import { Button } from "@/components/ui/Button";
import { CalendarDays, MapPin, User, CheckCircle2, XCircle } from "lucide-react";

interface TourDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  props: TourDetailPageProps,
): Promise<Metadata> {
  const params = await props.params;
  const tour = await travelApi.getTourBySlug(params.slug);

  if (!tour) {
    return {
      title: "Tour not found | TourLandHolidays",
      description: "The tour you&apos;re looking for could not be found.",
    };
  }

  return {
    title: `${tour.title} | TourLandHolidays`,
    description: tour.summary,
    openGraph: {
      title: `${tour.title} | TourLandHolidays`,
      description: tour.summary,
    },
  };
}

export default async function TourDetailPage(props: TourDetailPageProps) {
  const params = await props.params;
  const tour = await travelApi.getTourBySlug(params.slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="grid gap-6 lg:grid-cols-[ minmax(0,1.6fr), minmax(0,1.1fr) ]">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            {tour.category} · Signature itinerary
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {tour.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {tour.location}, {tour.country}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-primary" />
              {tour.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-primary" />
              {tour.groupSize}
            </span>
          </div>
          <p className="text-sm text-slate-700 sm:text-base">{tour.summary}</p>
        </div>

        <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="relative mb-3 h-40 overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${tour.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-slate-900/0" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Starting from
              </div>
              <div className="text-2xl font-semibold tracking-tight text-slate-900">
                ₹{tour.price.toLocaleString("en-IN")}
              </div>
              <div className="text-[11px] text-slate-500">
                Per person · land package
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Traveller rating
              </div>
              <div className="text-base font-semibold text-amber-500">
                ★ {tour.rating.toFixed(1)}
              </div>
            </div>
          </div>
          <Button fullWidth size="lg">
            Enquire for this itinerary
          </Button>
          <p className="text-[11px] text-slate-500">
            This is a UI‑only demo. In a production build this CTA can open a
            lead form or connect to booking APIs.
          </p>
        </aside>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
          <h2 className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
            Highlights
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            {tour.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
          <h2 className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
            Quick itinerary overview
          </h2>
          <ol className="space-y-2 text-sm text-slate-700">
            {tour.itinerary.map((day) => (
              <li key={day}>{day}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
          <h2 className="flex items-center gap-2 text-sm font-semibold tracking-tight text-emerald-900 sm:text-base">
            <CheckCircle2 className="h-4 w-4" />
            What&apos;s included
          </h2>
          <ul className="space-y-1.5 text-sm text-emerald-900/90">
            {tour.inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-rose-100 bg-rose-50/70 p-4">
          <h2 className="flex items-center gap-2 text-sm font-semibold tracking-tight text-rose-900 sm:text-base">
            <XCircle className="h-4 w-4" />
            What&apos;s not included
          </h2>
          <ul className="space-y-1.5 text-sm text-rose-900/90">
            {tour.exclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

