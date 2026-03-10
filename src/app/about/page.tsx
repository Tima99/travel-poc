import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/travel/FeatureCard";
import { Globe2, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About TourLandHolidays",
  description:
    "Learn how TourLandHolidays designs premium, end‑to‑end travel experiences with trusted global partners.",
  openGraph: {
    title: "About TourLandHolidays",
    description:
      "TourLandHolidays curates premium, end‑to‑end travel experiences with trusted partners around the world.",
  },
};

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <SectionHeader
        eyebrow="About"
        title="TourLandHolidays in a snapshot."
        subtitle="We combine design‑first thinking, trusted partnerships, and human travel experts to craft journeys that feel effortless."
      />

      <section className="grid gap-6 md:grid-cols-[ minmax(0,1.6fr), minmax(0,1.1fr) ] md:items-start">
        <div className="space-y-4 text-sm text-slate-700 sm:text-base">
          <p>
            TourLandHolidays is envisioned as a modern travel booking layer for
            discerning Indian travellers. This UI POC demonstrates how a
            design‑forward platform can feel premium, trustworthy, and intuitive
            – even before any backend systems are wired in.
          </p>
          <p>
            While today you&apos;re exploring mock data, the architecture and
            component system are production‑ready. This foundation can plug into
            real inventory, payments, and CRM flows without redesigning the core
            experience.
          </p>
          <p>
            From weekend getaways and family holidays to long‑haul bucket‑list
            trips, TourLandHolidays is built to surface the right itineraries,
            clearly explain what&apos;s included, and give travellers the
            confidence to book.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            icon={<Globe2 className="h-5 w-5" />}
            title="Design‑first journeys"
            description="Every screen is crafted to surface the right detail at the right time, mirroring how travellers actually plan."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Trusted partners"
            description="The UI is ready for ratings, reviews, and verified partners to be surfaced contextually when connected to live systems."
          />
          <FeatureCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Scalable UI foundation"
            description="Component‑driven architecture ensures new products – flights, hotels, experiences – can be added without starting over."
          />
        </div>
      </section>
    </div>
  );
}

