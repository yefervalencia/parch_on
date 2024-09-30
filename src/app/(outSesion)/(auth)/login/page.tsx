"use client";

import React from "react";
import "./Login.css";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginInputs = {
  Email: string;
  Password: string;
};

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
    const body = {
      email: data.Email,
      password: data.Password,
    };
  };

  return (
    <div className="login-page">
      <div className="recent-logins">
        <h2><strong>Inicios de sesión recientes</strong></h2>
        <p>Haz clic en una foto o agrega una cuenta.</p>
        <div className="profile-grid">
          <div className="profile-box">
            <img src="/image_2.jpg" alt="Profile" />
          </div>
          <div className="profile-box">
            <img src="/image_2.jpg" alt="Add new profile" />
          </div>
        </div>
      </div>

      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("Email", {
              required: "El correo electrónico es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Formato de correo electrónico no válido",
              },
            })}
            type="email"
            placeholder="Correo electrónico"
          />
          {errors.Email && <span className="error-message">{errors.Email.message}</span>}

          <input
            {...register("Password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
            type="password"
            placeholder="Contraseña"
          />
          {errors.Password && <span className="error-message">{errors.Password.message}</span>}

          <input type="submit" className="btn-login" value="Iniciar sesión" />

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
