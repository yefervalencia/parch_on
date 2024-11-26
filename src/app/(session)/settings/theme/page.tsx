import { Theme } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theme",
  description: "Choose your theme preferred",
};
export default function ThemePage() {
  return <Theme />;
}
