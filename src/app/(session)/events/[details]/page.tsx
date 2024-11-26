import { EventDetails } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Details",
  description: "Details about events",
};
export default function EventDetailsPage() {
  return <EventDetails />;
}
