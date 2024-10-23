import Image from "next/image";
import Link from "next/link";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="./">
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
          <Link href="./about">Nosotros</Link>
        </li>
        <li>
          <Link href="./contact">Contacto</Link>
        </li>
        <li>
          <Link href="./testimonies">Testimonio</Link>
        </li>
        <li>
          <Link href="./FAQ">Preguntas frecuentes</Link>
        </li>
      </ul>
      <div className="authButtons">
        <Link href="/login">
          <button className="loginBtn">Iniciar sesión</button>
        </Link>
        <Link href="/register">
          <button className="registerBtn">Registrarse</button>
        </Link>
      </div>
    </nav>
  );
};
