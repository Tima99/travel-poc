import React from "react";
import {
  Plane,
  Building2,
  Mountain,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const SearchTabs: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex rounded-full bg-white/5 p-1 text-xs text-slate-200">
        <div className="flex-1 rounded-full bg-white text-slate-900">
          <div className="flex items-center justify-center gap-1.5 py-2">
            <Plane className="h-4 w-4 text-primary" />
            <span className="font-medium">Flights</span>
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-1.5 py-2 text-slate-200/80">
            <Building2 className="h-4 w-4" />
            <span className="font-medium">Hotels</span>
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-1.5 py-2 text-slate-200/80">
            <Mountain className="h-4 w-4" />
            <span className="font-medium">Tours</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-xs text-slate-100">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
              <MapPin className="h-3 w-3 text-sky-300" />
              From
            </label>
            <div className="flex items-center justify-between rounded-xl bg-black/30 px-3 py-2.5 text-xs backdrop-blur">
              <span className="text-slate-100">Delhi</span>
              <span className="text-[11px] text-slate-400">Change</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
              <MapPin className="h-3 w-3 text-emerald-300" />
              To
            </label>
            <div className="flex items-center justify-between rounded-xl bg-black/30 px-3 py-2.5 text-xs backdrop-blur">
              <span className="text-slate-100">Maldives</span>
              <span className="text-[11px] text-slate-400">Explore</span>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
              <CalendarDays className="h-3 w-3 text-amber-300" />
              Dates
            </label>
            <div className="flex items-center justify-between rounded-xl bg-black/30 px-3 py-2.5 text-xs backdrop-blur">
              <span className="text-slate-100">Flexible, next 3 months</span>
              <span className="text-[11px] text-slate-400">Edit</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
              <Users className="h-3 w-3 text-indigo-300" />
              Travellers
            </label>
            <div className="flex items-center justify-between rounded-xl bg-black/30 px-3 py-2.5 text-xs backdrop-blur">
              <span className="text-slate-100">2 Adults · 1 Child</span>
              <span className="text-[11px] text-slate-400">Modify</span>
            </div>
          </div>
        </div>

        <div className="pt-1">
          <Button size="lg" fullWidth>
            Search holiday packages
          </Button>
          <p className="mt-2 text-[10px] text-slate-300">
            This is a UI-only search. Results are powered by mock data and can
            be wired to live APIs later.
          </p>
        </div>
      </div>
    </div>
  );
};

