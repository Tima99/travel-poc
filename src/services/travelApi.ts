import axios, { HeadersDefaults, InternalAxiosRequestConfig, type AxiosResponse } from "axios";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import { blogs } from "@/data/blogs";
import { testimonials } from "@/data/testimonials";
import type { Destination } from "@/types/destination";
import type { Tour } from "@/types/tour";
import type { Blog } from "@/types/blog";
import type { Testimonial } from "@/types/testimonial";

const client = axios.create();

const simulateLatency = async <TData>(
  data: TData,
  min = 120,
  max = 260,
): Promise<AxiosResponse<TData>> => {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          data,
          status: 200,
          statusText: "OK",
          headers: {},
          config: client.defaults as unknown as InternalAxiosRequestConfig<HeadersDefaults>,
        } as AxiosResponse<TData>),
      delay,
    ),
  );
};

export const travelApi = {
  async getDestinations(): Promise<Destination[]> {
    const response = await simulateLatency(destinations);
    return response.data;
  },

  async getTours(): Promise<Tour[]> {
    const response = await simulateLatency(tours);
    return response.data;
  },

  async getTourBySlug(slug: string): Promise<Tour | undefined> {
    const response = await simulateLatency(
      tours.find((tour) => tour.slug === slug),
    );
    return response.data;
  },

  async getBlogs(): Promise<Blog[]> {
    const response = await simulateLatency(blogs);
    return response.data;
  },

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    const response = await simulateLatency(
      blogs.find((blog) => blog.slug === slug),
    );
    return response.data;
  },

  async getTestimonials(): Promise<Testimonial[]> {
    const response = await simulateLatency(testimonials);
    return response.data;
  },
};

