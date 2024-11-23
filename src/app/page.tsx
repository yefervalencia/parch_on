import React from "react";
import type { Metadata } from "next";
import { Navbar, Footer, Main } from "@/components";

export const metadata: Metadata = {
  title: "ParchOn",
  description: "Home Page",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
