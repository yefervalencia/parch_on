"use client";

import "./Contact.css";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { contactSchema } from "@/validators/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
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
        <h2 className="contact-title">Contáctanos</h2>
        <p className="subtitle">
          Estamos aquí para ayudarte, envíanos un mensaje.
        </p>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            required
            placeholder="Nombre"
            {...register("name")}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Correo electrónico"
            {...register("email")}
          />

          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            required
            placeholder="Mensaje"
            {...register("message")}
          ></textarea>

          <button type="submit" className="send-input">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
