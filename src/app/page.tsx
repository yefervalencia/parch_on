import React from "react";
import type { Metadata } from "next";
import { Navbar, Footer, Manizales } from "@/components";
import Link from "next/link";
import "./page.css";

export const metadata: Metadata = {
  title: "ParchOn",
  description: "Home Page",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section className="manizales-section">
        <div className="manizales-text">
          <h1>En</h1>
          <h1>Manizales</h1>
          <h1>Ven y Sales</h1>
          <p>
            Prepárate para vivir momentos únicos en los spots más cool de
            Manizales. ¡La ciudad te espera!
          </p>
          <div className="cont-btn">
            <Link href="/login">
              <button className="cta-button">Comenzar</button>{" "}
              {/* Botón añadido */}
            </Link>
          </div>
        </div>
        <div className="manizales-image">
          <Manizales />
        </div>
      </section>
      <Footer />
    </>
  );
}
