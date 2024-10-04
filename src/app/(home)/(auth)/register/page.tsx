import { Metadata } from "next";
import { Register } from "@/components";

export const metadata: Metadata = {
  title: "Register",
  description: "Register page",
};

export default function registerPage() {
  return <Register />;
}
