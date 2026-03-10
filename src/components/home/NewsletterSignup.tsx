import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const NewsletterSignup: React.FC = () => {
  return (
    <section className="overflow-hidden rounded-3xl bg-slate-900 px-4 py-8 text-white shadow-soft sm:px-8 sm:py-10">
      <div className="absolute -left-20 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
      <div className="relative grid gap-6 md:grid-cols-[ minmax(0,1.4fr), minmax(0,1fr) ] md:items-center">
        <div className="space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
            Stay inspired
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Get handpicked getaways in your inbox.
          </h2>
          <p className="text-sm text-slate-200 sm:text-base">
            No spam, only honest travel stories, limited-time deals, and
            destination guides from our experts.
          </p>
        </div>
        <form className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center">
          <input
            type="email"
            required
            placeholder="Enter your work email"
            className="h-10 w-full rounded-full border border-white/15 bg-white/10 px-4 text-xs text-slate-100 placeholder:text-slate-400 outline-none backdrop-blur focus:border-sky-300 sm:flex-1"
          />
          <Button
            type="submit"
            size="lg"
            className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100"
          >
            Join newsletter
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </form>
      </div>
    </section>
  );
};

