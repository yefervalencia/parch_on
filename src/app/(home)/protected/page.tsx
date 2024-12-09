import { Metadata } from "next";
import { Protected } from "@/components";

export const metadata: Metadata = {
  title: "Protected",
  description: "page is protected and only accessible by authenticated users",
};

export default function ProtectedPage() {
  return <Protected />;
}
