import { Quote } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <figure className="flex h-full transform flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-3 flex items-center justify-between">
        <Quote className="h-6 w-6 text-primary" />
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {testimonial.tripType}
        </span>
      </div>
      <blockquote className="mb-4 text-sm text-slate-700">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3 text-xs text-slate-600">
        <div>
          <div className="font-semibold text-slate-900">
            {testimonial.name}
          </div>
          <div>{testimonial.location}</div>
        </div>
        <div className="text-right">
          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Rating
          </div>
          <div className="font-semibold text-amber-500">
            ★ {testimonial.rating.toFixed(1)}
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

