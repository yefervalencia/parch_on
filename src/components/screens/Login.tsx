"use client";

import "./Login.css";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from "@/validators/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };
    console.log(body);
  };

  return (
    <div className="login-page">
      <div className="recent-logins">
        <h2>
          <strong>Inicios de sesión recientes</strong>
        </h2>
        <p>Haz clic en una foto o agrega una cuenta.</p>
        <div className="profile-grid">
          <div className="profile-box">
            <Image src="/image_2.jpg" alt="Profile" width={100} height={100} />
          </div>
          <div className="profile-box">
            <Image
              src="/image_2.jpg"
              alt="Add new profile"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email")}
          />

          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password")}
          />

          <button type="submit" className="btn-login">
            Iniciar sesión
          </button>
        </form>
        <Link href="/register">
          <button type="button" className="btn-register">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
};
