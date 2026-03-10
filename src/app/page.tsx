import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { DestinationCard } from "@/components/travel/DestinationCard";
import { TourPackageCard } from "@/components/travel/TourPackageCard";
import { TestimonialCard } from "@/components/travel/TestimonialCard";
import { BlogCard } from "@/components/travel/BlogCard";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";
import { CTASection } from "@/components/home/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { travelApi } from "@/services/travelApi";

export const metadata: Metadata = {
  title: "TourLandHolidays | Modern Travel Booking UI",
  description:
    "Explore curated destinations, signature tour packages, and travel inspiration with TourLandHolidays, a modern travel booking UI experience.",
  openGraph: {
    title: "TourLandHolidays | Modern Travel Booking UI",
    description:
      "Explore curated destinations, signature tour packages, and travel inspiration with TourLandHolidays.",
  },
};

export default async function HomePage() {
  const [destinations, tours, testimonials, blogs] = await Promise.all([
    travelApi.getDestinations(),
    travelApi.getTours(),
    travelApi.getTestimonials(),
    travelApi.getBlogs(),
  ]);

  return (
    <div className="flex w-full flex-col gap-10 pb-10">
      <HeroSection />

      <StatsSection />

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Popular now"
          title="Handpicked destinations travellers love."
          subtitle="Discover favourite getaways curated by TourLandHolidays experts across beaches, mountains, and cities."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Signature tours"
          title="Curated holiday packages for every kind of traveller."
          subtitle="From honeymoon escapes to family holidays and small-group adventures, pick an itinerary that matches your pace."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourPackageCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Why travellers trust us"
          title="Built on expertise, powered by people."
          subtitle="A dedicated team of travel specialists, on‑ground partners, and concierge support to make every trip feel effortless."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Travel stories"
          title="Ideas for your next holiday."
          subtitle="Curated travel stories, destination guides, and planning checklists from the TourLandHolidays editorial desk."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      <CTASection />

      <NewsletterSignup />
    </div>
  );
}
