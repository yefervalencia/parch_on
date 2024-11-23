"use client";

import "./Login.css";

import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from "@/validators/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginUser } from "@/libs/api";

type Inputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "all",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const body = {
      ...data,
    };

    const result = await loginUser(body);

    if (result) {
      router.push(`/home`);
    } else {
      console.error("Error al iniciar sesión");
    }
  };

  return (
    <div className="login-page">
      <div className="recent-logins">
        <h2>
          <strong>{t("recentLogins")}</strong>
        </h2>
        <p>{t("clickOnAPhotoOrAddAnAccount")}</p>
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
          <input type="email" placeholder={t("email")} {...register("email")} />

          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
          <input
            type="password"
            placeholder={t("password")}
            {...register("password")}
          />

          <button type="submit" className="btn-login">
            {t("login")}
          </button>
        </form>
        <Link href="/register">
          <button type="button" className="btn-register">
            {t("signup")}
          </button>
        </Link>
      </div>
    </div>
  );
};
