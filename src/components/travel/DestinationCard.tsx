import { MapPin } from "lucide-react";
import Image from "next/image";
import type { Destination } from "@/types/destination";

export interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
}) => {
  return (
    <article className="group flex transform flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 gradient-sky opacity-70 transition-opacity duration-200 group-hover:opacity-90" />
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          placeholder="blur"
          blurDataURL={destination.blurDataUrl}
          className="object-cover"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-slate-900/0" />
        <div className="relative flex h-full flex-col justify-between p-4">
          <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-50 backdrop-blur">
            {destination.region}
          </span>
          <div className="space-y-1 text-white">
            <h3 className="text-lg font-semibold tracking-tight">
              {destination.name}
            </h3>
            <p className="flex items-center text-xs text-slate-200">
              <MapPin className="mr-1.5 h-3.5 w-3.5" />
              {destination.country}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="line-clamp-2 text-sm text-slate-600">
          {destination.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Starting from
            </span>
            <span className="text-sm font-semibold text-slate-900">
              ₹{destination.startingPrice.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-50">
            {destination.bestSeason}
          </div>
        </div>
      </div>
    </article>
  );
};

