import { Metadata } from "next";
import { Language } from "@/components";

export const metadata: Metadata = {
  title: "Language",
  description: "Language settings",
};

export default function LanguagePage() {
  return <Language />;
}
