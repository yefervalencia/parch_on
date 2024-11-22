import { Metadata } from "next";
import { CreateEvent } from "@/components/screens/CreateEvent";

export const metadata: Metadata = {
  title: "create an event",
  description: "create an event page",
};

export default function createEventPage() {
  return <CreateEvent/>;
}

