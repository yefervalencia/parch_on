"use client";

import "./Register.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirm: data.confirmPassword,
    };
    console.log(body);
  };

  return (
    <div className="register-page">
      <h1>Registro</h1>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          {errors.name && <span>{errors.name.message}</span>}
          <input
            type="text"
            placeholder="Nombre Completo"
            {...register("name", { required: "* El nombre es obligatorio" })}
          />
        </div>

        <div className="input-container">
          {errors.email && <span>{errors.email.message}</span>}
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email", {
              required: "* El correo es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Correo electrónico no válido",
              },
            })}
          />
        </div>

        <div className="input-container">
          {errors.password && <span>{errors.password.message}</span>}
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "* La contraseña es obligatoria",
              minLength: { value: 8, message: "Mínimo 8 caracteres" },
            })}
          />
        </div>

        <div className="input-container">
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
          <input
            type="password"
            placeholder="Confirmar contraseña"
            {...register("confirmPassword", {
              required: "* Debes confirmar la contraseña",
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })}
          />
        </div>
        <div className="buttons">
          <button type="submit" className="btn-register">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}
