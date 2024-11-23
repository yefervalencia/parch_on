"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { contactSchema } from "@/validators/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import "./Contact.css";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const body = {
      user: data.name,
      pass: data.email,
      mess: data.message,
    };
    console.log(body);
  };

  return (
    <div className="contact-page">
      <div className="contact-section">
        <h2 className="contact-title">{t("contactUs")}</h2>
        <p className="subtitle">{t("weAreHereToHelpYou")}</p>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">{t("name")}</label>
          <input
            type="text"
            id="name"
            required
            placeholder={t("name")}
            {...register("name")}
          />

          <label htmlFor="email">{t("email")}</label>
          <input
            type="email"
            id="email"
            required
            placeholder={t("email")}
            {...register("email")}
          />

          <label htmlFor="message">{t("message")}</label>
          <textarea
            id="message"
            required
            placeholder={t("message")}
            {...register("message")}
          ></textarea>

          <button type="submit" className="send-input">
            {t("send")}
          </button>
        </form>
      </div>
    </div>
  );
};
