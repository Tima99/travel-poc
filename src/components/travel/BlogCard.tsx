import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import type { Blog } from "@/types/blog";

export interface BlogCardProps {
  blog: Blog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <article className="group flex transform flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          placeholder="blur"
          blurDataURL={blog.blurDataUrl}
          className="object-cover"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-slate-900/0" />
        <div className="relative flex h-full flex-col justify-between p-4">
          <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-50 backdrop-blur">
            {blog.category}
          </span>
          <h3 className="max-w-xs text-lg font-semibold tracking-tight text-white">
            {blog.title}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <p className="line-clamp-2 text-sm text-slate-600">{blog.excerpt}</p>
        <div className="mt-auto flex items-center justify-between text-xs text-slate-500">
          <span className="inline-flex items-center">
            <CalendarDays className="mr-1.5 h-3.5 w-3.5 text-primary" />
            {blog.readingTime} min read
          </span>
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center text-xs font-semibold text-primary"
          >
            Read story
            <ArrowRight className="ml-1.5 h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  );
};

