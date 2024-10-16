"use client";

import "./Register.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerSchema } from "@/validators/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect, useState } from "react";
import { registerUser, getCities } from "@/libs/api";
import { useRouter } from "next/navigation";

type Inputs = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  birth: Date;
  gender: string;
  phone: string;
  id_city: string;
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

  const [cities, setCities] = useState<{ id: number; city: string }[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const citiesData = await getCities();
      console.log("cities", citiesData);
      setCities(citiesData);
    };
    fetchCities();
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const body = {
      ...data,
      id_city: parseInt(data.id_city, 10),
    };

    const result = await registerUser(body);

    if (result) {
      console.log(body);
      router.push(`/home?name=${data.name}`);
    } else {
      console.error("Error al registrar el usuario");
    }
  };

  return (
    <div className="register-page">
      <h1>Registro</h1>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          {errors.name && <span>{errors.name.message}</span>}
          <input type="text" placeholder="Nombre" {...register("name")} />
        </div>

        <div className="input-container">
          {errors.lastname && <span>{errors.lastname.message}</span>}
          <input
            type="text"
            placeholder="Apellidos"
            {...register("lastname")}
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

        <div className="input-container">
          {errors.birth && <span>{errors.birth.message}</span>}
          <input
            type="date"
            placeholder="Fecha de Nacimiento"
            {...register("birth")}
          />
        </div>

        <div className="input-container">
          {errors.gender && <span>{errors.gender.message}</span>}
          <select {...register("gender")}>
            <option value="">Seleccione género</option>
            <option value="m">Masculino</option>
            <option value="f">Femenino</option>
            <option value="o">Otro</option>
          </select>
        </div>

        <div className="input-container">
          {errors.id_city && <span>{errors.id_city.message}</span>}
          <select {...register("id_city")}>
            <option value="">Seleccione una ciudad</option>
            {cities === null || cities.length === 0 ? (
              <option disabled>Cargando ciudades...</option>
            ) : (
              cities.map((city) => (
                <option key={city.id} value={city.id.toString()}>
                  {city.city}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="input-container">
          {errors.phone && <span>{errors.phone.message}</span>}
          <input type="tel" placeholder="Teléfono" {...register("phone")} />
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
