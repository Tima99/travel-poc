import { Plane, Sparkles, MapPinned } from "lucide-react";
import { SearchTabs } from "@/components/travel/SearchTabs";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-full overflow-hidden rounded-[2.5rem] bg-slate-900 px-4 py-10 text-white shadow-soft sm:px-8 sm:py-12 lg:px-12">
      <div className="absolute inset-0 gradient-sky opacity-80" />
      <div className="absolute -left-44 top-10 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[ minmax(0,1.4fr), minmax(0,1fr) ] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-100 backdrop-blur">
            <Sparkles className="h-3 w-3 text-amber-300" />
            Trusted by 50,000+ modern travellers
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Design your next{" "}
              <span className="bg-gradient-to-tr from-amber-200 via-white to-sky-200 bg-clip-text text-transparent">
                unforgettable escape
              </span>
              .
            </h1>
            <p className="max-w-xl text-sm text-slate-200 sm:text-base">
              Discover curated holidays, handpicked stays, and seamless travel
              plans. From weekend getaways to once-in-a-lifetime journeys,
              TourLandHolidays makes every trip feel bespoke.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-200 sm:text-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 backdrop-blur">
              <Plane className="h-3.5 w-3.5 text-sky-300" />
              IATA certified partners
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 backdrop-blur">
              <MapPinned className="h-3.5 w-3.5 text-emerald-300" />
              120+ destinations worldwide
            </div>
          </div>
        </div>

        <div className="glass-surface relative mx-auto w-full max-w-md border-slate-500/30 p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-200">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Start planning
              </div>
              <div className="text-sm font-semibold text-slate-50">
                Search flights, stays & tours
              </div>
            </div>
          </div>
          <SearchTabs />
        </div>
      </div>
    </section>
  );
};

