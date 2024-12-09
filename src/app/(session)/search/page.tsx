import { Metadata } from "next";
import { Search } from "@/components";

export const metadata: Metadata = {
  title: "Search",
  description: "Welcome to Parchon's family",
};
export default function SearchPage() {
  return <Search />;
}