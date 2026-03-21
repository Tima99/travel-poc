import type { Tour } from "@/types/tour";
import { getBlurDataUrl } from "@/data/imageBlurPlaceholders";

export const tours: Tour[] = [
  {
    id: "maldives-signature",
    slug: "maldives-signature-overwater-retreat",
    title: "Maldives Signature Overwater Retreat",
    location: "South Male Atoll",
    country: "Maldives",
    duration: "5 Days · 4 Nights",
    groupSize: "Couple / Small family",
    price: 96500,
    category: "Honeymoon",
    rating: 4.9,
    summary:
      "A romantic escape featuring an overwater villa, floating breakfasts, and private sunset cruises.",
    highlights: [
      "3 nights in an overwater villa with lagoon access",
      "All meals with one private candle-light dinner",
      "Sunset cruise & complimentary snorkelling gear",
      "Airport speedboat transfers",
    ],
    itinerary: [
      "Day 1 · Arrival in Malé & speedboat transfer to resort",
      "Day 2 · Lagoon exploration & spa rituals",
      "Day 3 · Sandbank picnic & sunset cruise",
      "Day 4 · Leisure day with optional water sports",
      "Day 5 · Departure with late checkout subject to availability",
    ],
    inclusions: [
      "Breakfast, lunch, and dinner",
      "Return airport–resort–airport transfers",
      "Snorkelling gear and selected non‑motorised activities",
      "Basic travel insurance",
    ],
    exclusions: [
      "International flights",
      "Personal expenses and additional spa treatments",
      "Motorised water sports unless mentioned",
    ],
    imageUrl:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    blurDataUrl: getBlurDataUrl(
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    )!,
  },
  {
    id: "bali-signature",
    slug: "bali-signature-wellness-and-beach",
    title: "Bali Signature Wellness & Beach Escape",
    location: "Ubud · Seminyak",
    country: "Indonesia",
    duration: "6 Days · 5 Nights",
    groupSize: "Couples & friends",
    price: 68500,
    category: "Experience",
    rating: 4.8,
    summary:
      "Split stay between jungle-view pool villas in Ubud and a chic beach resort in Seminyak.",
    highlights: [
      "Jungle-view pool villa in Ubud",
      "Traditional Balinese spa ritual",
      "Sunset at Uluwatu Temple & Kecak dance",
      "Beach club access in Seminyak",
    ],
    itinerary: [
      "Day 1 · Arrival and transfer to Ubud pool villa",
      "Day 2 · Ubud tour – rice terraces, waterfalls & swings",
      "Day 3 · Spa day & local café hopping",
      "Day 4 · Transfer to Seminyak + sunset at Uluwatu",
      "Day 5 · Beach club experience & leisure time",
      "Day 6 · Departure",
    ],
    inclusions: [
      "Daily breakfast",
      "Airport & inter-city transfers",
      "Guided sightseeing as per itinerary",
    ],
    exclusions: [
      "International flights",
      "Lunches and dinners unless specified",
      "Entrance fees not mentioned in inclusions",
    ],
    imageUrl:
      "https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg",
    blurDataUrl: getBlurDataUrl(
      "https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg",
    )!,
  },
  {
    id: "swiss-europe",
    slug: "paris-swiss-alps-signature",
    title: "Paris & Swiss Alps Signature Journey",
    location: "Paris · Interlaken · Lucerne",
    country: "France · Switzerland",
    duration: "8 Days · 7 Nights",
    groupSize: "Small group (12–18)",
    price: 198500,
    category: "Signature",
    rating: 4.9,
    summary:
      "Iconic Europe with river cruise in Paris and mountain excursions to Jungfraujoch or Mt. Titlis.",
    highlights: [
      "Seine river cruise and Eiffel Tower visit",
      "Swiss pass for mountain railways",
      "Guided walking tours in old towns",
    ],
    itinerary: [
      "Day 1–2 · Paris highlights with guided tours",
      "Day 3 · Train to Switzerland",
      "Day 4–6 · Alps excursions & leisure days",
      "Day 7–8 · Lake Lucerne & departure",
    ],
    inclusions: [
      "Daily breakfast",
      "All inter-city train tickets",
      "Guided city tours where mentioned",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Meals not mentioned in inclusions",
    ],
    imageUrl:
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    blurDataUrl: getBlurDataUrl(
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    )!,
  },
];

