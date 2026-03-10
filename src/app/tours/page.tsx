import type { Metadata } from "next";
import { travelApi } from "@/services/travelApi";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TourPackageCard } from "@/components/travel/TourPackageCard";

export const metadata: Metadata = {
  title: "Tour Packages | TourLandHolidays",
  description:
    "Discover curated holiday packages across beaches, mountains, cities, and international getaways.",
  openGraph: {
    title: "Tour Packages | TourLandHolidays",
    description:
      "Browse curated holiday packages designed by TourLandHolidays experts.",
  },
};

export default async function ToursPage() {
  const tours = await travelApi.getTours();

  return (
    <div className="flex w-full flex-col gap-8">
      <SectionHeader
        eyebrow="Holiday packages"
        title="Signature itineraries, crafted end‑to‑end."
        subtitle="Every itinerary is built with thoughtful pacing, curated stays, and trusted partners for a seamless holiday."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {tours.map((tour) => (
          <TourPackageCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}

