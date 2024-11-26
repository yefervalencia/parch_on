import { Metadata } from "next";
import { Home } from "@/components";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Parchon's family",
};
export default function HomePage() {
  return <Home />;
}
