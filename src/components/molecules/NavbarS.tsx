"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@primer/octicons-react";
import { DropDown } from "@/components";
import { getUserByCookie, logoutUser } from "@/libs/api";

import "./NavbarS.css";
import { useRouter } from "next/navigation";

// Interfaz para el payload del JWT
interface JwtPayload {
  id: string;
  email: string;
  name: string;
  lastname: string;
  role: string;
}

export const NavbarS = () => {
  const router = useRouter();
  // State para controlar si el menú desplegable está abierto
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");

  // Función para alternar el menú desplegable
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Función para obtener el nombre del usuario usando el ID extraído del token
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Obtener los datos del usuario a través de la función getUserByCookie
        const userData = await getUserByCookie();

        console.log(userData);

        if (userData) {
          // Obtener el primer nombre y el primer apellido
          const firstName = userData.name.split(" ")[0];
          const lastName = userData.lastname.split(" ")[0];
          setUserName(`${firstName} ${lastName}`);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Función para manejar el cierre de sesión
  const handleLogout = async () => {
    await logoutUser();
    router.push("/"); // Redirige al usuario a la página de inicio después de cerrar sesión
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
          <Link href="/gallery">Galería</Link>
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
            { href: "#", onClick: handleLogout, text: "Cerrar sesión" },
          ]}
        />
      </ul>
      <div className="search">
        <input placeholder="Buscar..." type="text" />
        <span className="search-icon">
          <SearchIcon />
        </span>
      </div>

      <div className="user-profile">
        <Image
          className="profile-image"
          src="/manizales.jpg"
          alt="User Profile"
          width={40}
          height={40}
        />
        <span className="user-name">{userName}</span>
      </div>
    </nav>
  );
};
