"use client";

import "./Register.css";
import { useForm, SubmitHandler, UseFormRegisterReturn } from "react-hook-form";
import { registerSchema } from "@/validators/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { useEffect, useState } from "react";
import { getAllCities } from "@/libs/api";
import { useRouter } from "next/navigation";


/*type Inputs = {
  name: string;
  email: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  bornDate: string;
  cellphone: string;
  city: string;
};*/

const user = z.object({
  name: z.string(),
  email: z.string(),
  lastName: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  bornDate: z.string().date(),
  cellphone: z.string(),
  city: z.number(),
});

type User = z.infer<typeof user>;

export const Register = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<User>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const [cities, setCities] = useState<
    { country: string; name: string; id: number; zip: string }[]
  >([]);

  useEffect(() => {
    const fetchCities = async () => {
      const citiesData = await getAllCities();
      console.log("cities", citiesData);
      setCities(citiesData);
    };
    fetchCities();
  }, []);

  const onSubmit: SubmitHandler<User> = (data) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirm: data.confirmPassword,
      lastname: data.lastName,
      bornDate: data.bornDate,
      cellphone: data.cellphone,
      city: isNaN(Number(data.city)) ? 5 : Number(data.city),
      };
    console.log(body);
    console.log("Errors:", errors);
    //router.push(`./home?name=${data.name}`);
  };

  return (
    <div className="register-page">
      <h1>Registro</h1>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          {errors.name && <span>{errors.name.message}</span>}
          <input type="text" placeholder="Nombres" {...register("name")} />
        </div>

        <div className="input-container">
          {errors.lastName && <span>{errors.lastName.message}</span>}
          <input
            type="text"
            placeholder="Apellidos"
            {...register("lastName")}
          />
        </div>

        <div className="input-container">
          {errors.city && <span>{errors.city.message}</span>}
          <select {...register("city")}
          onChange={(e) => {
            const value = e.target.value;
            console.log("Selected city value:", value);
            setValue("city", value !== "" ? parseInt(value) : 0);
          }}>
            <option value="" >Seleccione una ciudad</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
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
          {errors.bornDate && <span>{errors.bornDate.message}</span>}
          <input
            type="date"
            placeholder="Fecha de Nacimiento"
            {...register("bornDate")}
          />
        </div>

        <div className="input-container">
          {errors.cellphone && <span>{errors.cellphone.message}</span>}
          <input type="text" placeholder="Celular" {...register("cellphone")} />
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
