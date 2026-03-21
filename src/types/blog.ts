export interface Blog {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
  blurDataUrl: string;
  readingTime: number;
  publishedAt: string;
}

