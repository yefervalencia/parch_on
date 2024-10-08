"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@primer/octicons-react";
import { DropDown } from "@/components";

import "./NavbarS.css";

export const NavbarS = () => {
  // State para controlar si el menú desplegable está abierto
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Función para alternar el menú desplegable
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/home">
          <Image
            className="parchon"
            src="/nav-image.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
      </div>
      <ul className="navLinks">
        <li>
          <Link href="/gallery">Gallería</Link>
        </li>
        <DropDown
          principal="Eventos"
          link="/events"
          items={[
            { href: "/events", text: "Ver eventos" },
            { href: "/create-event", text: "Crear evento" },
          ]}
        />
        <DropDown
          principal="Configuración"
          link="/settings"
          items={[
            { href: "/settings", text: "Configuración" },
            { href: "/profile", text: "Perfil" },
            { href: "/", text: "Cerrar sesión" },
          ]}
        />
      </ul>
      <div className="search">
        <input placeholder="Buscar..." type="text" />
        <span className="search-icon">
          <SearchIcon />
        </span>
      </div>
    </nav>
  );
};
