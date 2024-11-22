"use client";

import { NavbarS, Footer } from "@/components";
import "./layout.css";

export default function SessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarS />
      <main>{children}</main>
      <Footer />
    </>
  );
}
