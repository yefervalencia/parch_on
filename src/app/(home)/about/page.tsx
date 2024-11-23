import { Metadata } from "next";
import { About } from "@/components";

export const metadata: Metadata = {
  title: "About us",
  description: "Information about ParchOn and us",
};

export default function AboutPage() {
  return <About />;
}
