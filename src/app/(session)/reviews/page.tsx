import { Metadata } from "next";
import { MyReviews } from "@/components";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Parchon's family",
};
export default function MyReviewsPage() {
  return <MyReviews />;
}