"use client";

import { Navbar, Footer } from "@/components";
import { usePathname } from "next/navigation";

import "./layout.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/login" && pathname !== "/register" && <Navbar />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
