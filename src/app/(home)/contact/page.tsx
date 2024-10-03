import { Metadata } from "next";
import { Contact } from "@/components";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};

export default function contactPage() {
  return <Contact />;
}
