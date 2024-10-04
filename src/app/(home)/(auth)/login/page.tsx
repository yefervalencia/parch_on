import { Metadata } from "next";
import { Login } from "@/components";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default function loginPage() {
  return <Login />;
}
