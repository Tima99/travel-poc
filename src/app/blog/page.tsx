import type { Metadata } from "next";
import { travelApi } from "@/services/travelApi";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/travel/BlogCard";

export const metadata: Metadata = {
  title: "Travel Blog | TourLandHolidays",
  description:
    "Browse travel guides, planning checklists, and destination stories from the TourLandHolidays editorial desk.",
  openGraph: {
    title: "Travel Blog | TourLandHolidays",
    description:
      "Travel guides, planning checklists, and destination stories for modern travellers.",
  },
};

export default async function BlogPage() {
  const blogs = await travelApi.getBlogs();

  return (
    <div className="flex w-full flex-col gap-8">
      <SectionHeader
        eyebrow="Travel stories"
        title="Ideas, checklists, and stories for your next holiday."
        subtitle="Short, practical reads based on real itineraries crafted by TourLandHolidays curators."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

