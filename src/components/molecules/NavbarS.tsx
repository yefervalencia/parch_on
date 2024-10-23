"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@primer/octicons-react";
import { DropDown } from "@/components";
import { getUserByCookie, logoutUser } from "@/libs/api";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
            priority={true}
          />
        </Link>
      </div>
      <ul className="navLinks">
        <li>
          <Link href="/gallery">{t("gallery")}</Link>
        </li>
        <DropDown
          principal="events"
          link="/events"
          items={[
            { href: "/events", text: "viewEvents" },
            { href: "/create-event", text: "createEvent" },
          ]}
        />
      </ul>
      <div className="search">
        <input name="search" placeholder={t("search")} type="text" />
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
        <ul className="navLinks">
          <DropDown
            principal={userName}
            link="#"
            items={[
              { href: "/settings", text: "settings" },
              { href: "/profile", text: "profile" },
              { href: "#", onClick: handleLogout, text: "logout" },
            ]}
          />
        </ul>
      </div>
    </nav>
  );
};
