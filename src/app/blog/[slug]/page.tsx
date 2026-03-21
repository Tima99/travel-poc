import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { travelApi } from "@/services/travelApi";
import { CalendarDays } from "lucide-react";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  props: BlogDetailPageProps,
): Promise<Metadata> {
  const params = await props.params;
  const blog = await travelApi.getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog not found | TourLandHolidays",
      description: "The article you are looking for could not be found.",
    };
  }

  return {
    title: `${blog.title} | TourLandHolidays`,
    description: blog.excerpt,
    openGraph: {
      title: `${blog.title} | TourLandHolidays`,
      description: blog.excerpt,
    },
  };
}

export default async function BlogDetailPage(props: BlogDetailPageProps) {
  const params = await props.params;
  const blog = await travelApi.getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          {blog.category}
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {blog.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-primary" />
            {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span>· {blog.readingTime} min read</span>
        </div>
      </header>

      <div className="relative h-56 overflow-hidden rounded-3xl">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          priority
          placeholder="blur"
          blurDataURL={blog.blurDataUrl}
          className="object-cover"
          sizes="(min-width: 1024px) 896px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-slate-900/0" />
      </div>

      <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        {blog.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-xs text-slate-600">
        This article is part of the TourLandHolidays UI POC. In a production
        setup, this section can contain author details, related trips, and CTAs
        connected to your CMS.
      </footer>
    </article>
  );
}

