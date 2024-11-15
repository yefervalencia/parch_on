"use client";

import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";

const navLinks = [
  { href: "/about", text: "Nosotros" },
  { href: "/contact", text: "Contacto" },
  { href: "/testimonies", text: "Testimonio" },
  { href: "/FAQ", text: "Preguntas frecuentes" },
];

const authLinks = [
  { href: "/login", text: "Iniciar sesión", className: "loginBtn" },
  { href: "/register", text: "Registrarse", className: "registerBtn" },
];

export const Navbar = () => {
  return (
    <nav className="navbar" suppressHydrationWarning>
      <div className="logo">
        <Link href="/">
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
        {navLinks.map(({ href, text }) => (
          <li key={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>

      <div className="authButtons">
        {authLinks.map(({ href, text, className }) => (
          <Link href={href} key={href}>
            <button className={className}>{text}</button>
          </Link>
        ))}
      </div>
    </nav>
  );
};
