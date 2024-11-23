import { Metadata } from "next";
import { Testimonial } from "@/components";

export const metadata: Metadata = {
  title: "Testimonial",
  description: "Testimonial description",
};
export default function TestimoniesPage() {
  return <Testimonial />;
}
