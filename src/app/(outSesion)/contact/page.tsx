"use client"

import React from "react";
import "./Contact.css";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  Name: string
  Email: string
  Message: string
}

export default function Contact() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    const body = {
      user: data.Name,
      pass: data.Email,
      mess: data.Message
    }
  }

  return ( 
    <div className="contact-page">
      <div className="contact-section">
        <h2 className="contact-title">Contáctanos</h2>
        <p className="subtitle">
          Estamos aquí para ayudarte, envíanos un mensaje.
        </p>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nombre:</label>
          <input {...register("Name")} type="text" id="name" required placeholder="Name" />

          <label htmlFor="email">Email:</label>
          <input {...register("Email")} type="email" id="email" required  placeholder="Email"/>

          <label htmlFor="message">Mensaje:</label>
          <textarea {...register("Message")} id="message" required placeholder="Message"></textarea>

          <input type="submit" className="send-input">
            
          </input>
        </form>
      </div>
    </div>
  );
}
