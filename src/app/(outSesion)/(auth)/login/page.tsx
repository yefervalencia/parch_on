import Link from "next/link";

import "./Login.css";

import Image from "next/image";

export const metadata = {
  title: "Inicios de sesión recientes",
  description: "Haz clic en una foto o agrega una para iniciar sesión.",
};

export default function Login() {
  return (
    <div className="login-page">
      <div className="recent-logins">
        <h2>
          <strong>Inicios de sesión recientes</strong>
        </h2>
        <p>Haz clic en una foto o agrega una cuenta.</p>
        <div className="profile-grid">
          <div className="profile-box">
            <Image src="/image_2.jpg" alt="Profile" width={50} height={50} />
          </div>
          <div className="profile-box">
            <Image
              src="/image_2.jpg"
              alt="Add new profile"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="login-form">
        <form>
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit" className="btn-login">
            Iniciar sesión
          </button>
          <Link href="/register">
            <button type="button" className="btn-register">
              Registrarse
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
