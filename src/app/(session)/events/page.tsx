import { EventList } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Show all events upcoming",
};

export default function EventPage() {
  return (
    <div className="container mx-auto p-4">
      <EventList />
    </div>
  );
}
