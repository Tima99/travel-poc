import { CalendarDays, Map, User } from "lucide-react";
import type { Tour } from "@/types/tour";
import Link from "next/link";

export interface TourPackageCardProps {
  tour: Tour;
}

export const TourPackageCard: React.FC<TourPackageCardProps> = ({ tour }) => {
  return (
    <article className="group flex transform flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tour.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-900/0" />
        <div className="relative flex h-full flex-col justify-between p-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-50 backdrop-blur">
              {tour.category}
            </span>
            <span className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur">
              ★ {tour.rating.toFixed(1)}
            </span>
          </div>
          <div className="space-y-1 text-white">
            <h3 className="text-lg font-semibold tracking-tight">
              {tour.title}
            </h3>
            <p className="flex items-center text-xs text-slate-200">
              <Map className="mr-1.5 h-3.5 w-3.5" />
              {tour.location}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="line-clamp-2 text-sm text-slate-600">{tour.summary}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1">
            <CalendarDays className="mr-1.5 h-3.5 w-3.5 text-primary" />
            {tour.duration}
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1">
            <User className="mr-1.5 h-3.5 w-3.5 text-primary" />
            {tour.groupSize} guests
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Per person
            </span>
            <span className="text-base font-semibold text-slate-900">
              ₹{tour.price.toLocaleString("en-IN")}
            </span>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-50 transition hover:bg-slate-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

