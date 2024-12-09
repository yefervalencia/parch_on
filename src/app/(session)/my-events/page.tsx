import { Metadata } from "next";
import { MyEvents } from "@/components";

export const metadata: Metadata = {
  title: "My events",
  description: "Welcome to Parchon's family",
};
export default function MyEventsPage() {
  return <MyEvents />;
}