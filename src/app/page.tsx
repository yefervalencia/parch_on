import React from "react";
import { Navbar, Footer } from "@/components";
import Link from "next/link";
import { Manizales } from "../components/atoms/Manizales";
import "./page.css";

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
            <Link href="/register">
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
