export interface Tour {
  id: string;
  slug: string;
  title: string;
  location: string;
  country: string;
  duration: string;
  groupSize: string;
  price: number;
  category: string;
  rating: number;
  summary: string;
  highlights: string[];
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
  imageUrl: string;
}

