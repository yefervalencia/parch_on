"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/app/i18n"; // Importa la configuración de i18next
import Image from "next/image";
import Link from "next/link";
import { LanguageList } from "@/components";
import "./Navbar.css";

export const Navbar = () => {
  const { t } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);

  const navLinks = [
    { href: "/about", text: t("about") },
    { href: "/contact", text: t("contact") },
    { href: "/testimonies", text: t("testimonial") },
    { href: "/FAQ", text: t("questions") },
  ];

  const authLinks = [
    { href: "/login", text: t("login"), className: "loginBtn" },
    { href: "/register", text: t("signup"), className: "registerBtn" },
  ];

  const currentLanguage = i18n.language;

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

      <div className="languageSelector relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setShowLanguages(!showLanguages)}
        >
          {/* <span className={`flag-icon flag-icon-${currentLanguage}`} /> */}
          <span className="ml-2 capitalize">{currentLanguage}</span>
        </div>
        {showLanguages && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md">
            <LanguageList />
          </div>
        )}
      </div>
    </nav>
  );
};
