import type { Metadata } from "next";
import { travelApi } from "@/services/travelApi";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DestinationCard } from "@/components/travel/DestinationCard";

export const metadata: Metadata = {
  title: "Destinations | TourLandHolidays",
  description:
    "Browse popular domestic and international destinations curated by TourLandHolidays travel experts.",
  openGraph: {
    title: "Destinations | TourLandHolidays",
    description:
      "Explore curated domestic and international destinations with TourLandHolidays.",
  },
};

export default async function DestinationsPage() {
  const destinations = await travelApi.getDestinations();

  return (
    <div className="flex w-full flex-col gap-8">
      <SectionHeader
        eyebrow="Destinations"
        title="Where will you travel next?"
        subtitle="From quick weekend escapes to long-haul adventures, start with destinations our travellers love."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}

