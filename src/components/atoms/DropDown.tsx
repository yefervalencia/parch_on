"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./DropDown.css";

interface DropDownProps {
  principal: string; // Texto del menú principal
  link: string;
  items: Array<{ href: string; text: string; onClick?: () => void }>; // Array con los href y el texto de las subopciones
}

export const DropDown: React.FC<DropDownProps> = ({
  principal,
  link,
  items,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Función para alternar el menú desplegable
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li
      className="dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <Link href={link}>{principal}</Link>

      {isDropdownOpen && (
        <ul className="dropdownMenu">
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.href} onClick={item.onClick}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
