import { Metadata } from "next";
import { FAQ } from "@/components";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions about ParchOn",
};

export default function FAQPage() {
  return <FAQ />;
}
