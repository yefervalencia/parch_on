import "./layout.css";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function OutSesionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Image src="/ParchOn.png" alt="Logo" width={60} height={60} />
        </div>
        <ul className="navLinks">
          <li>
            <Link href="./home">Inicio</Link>
          </li>
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
            <Link href="./events">Eventos</Link>
          </li>
        </ul>
        <div className="authButtons">
          <Link href="/login">
            <button className="loginBtn">Iniciar Sesión</button>
          </Link>
          <Link href="/register">
            <button className="registerBtn">Registrarme</button>
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
