"use client";

import "./Register.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerSchema } from "@/validators/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "all",
    resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirm: data.confirmPassword,
    };
    console.log(body);
    router.push(`./home?name=${data.name}`);
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
            {...register("name")}
          />
        </div>

        <div className="input-container">
          {errors.email && <span>{errors.email.message}</span>}
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email")}
          />
        </div>

        <div className="input-container">
          {errors.password && <span>{errors.password.message}</span>}
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password")}
          />
        </div>

        <div className="input-container">
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
          <input
            type="password"
            placeholder="Confirmar contraseña"
            {...register("confirmPassword")}
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
};
