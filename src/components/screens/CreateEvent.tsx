"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { eventSchema } from "@/validators/newEventSchema"; // Asegúrate de definir el esquema de validación correspondiente.
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  getCategories,
  getPlaces,
  createEvent,
  getUserByCookie,
} from "@/libs/api"; // Ajusta tus funciones API
import { useRouter } from "next/navigation";

type Inputs = {
  event: string;
  description: string;
  details: string;
  date: Date;
  time: string;
  image: string;
  capacity: number;
  rating: number;
  id_place: string;
  id_category: string;
  id_user: string;
};

export const CreateEvent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "all",
    resolver: zodResolver(eventSchema),
  });

  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [places, setPlaces] = useState<
    { id: number; place: string; address: string; city: string }[]
  >([]);
  const [categories, setCategories] = useState<
    { id: number; category: string }[]
  >([]);
  const [hasTickets, setHasTickets] = useState(false);
  const [ticketCount, setTicketCount] = useState<number>(0);

  useEffect(() => {
    getUserByCookie()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setError(err.message);
      });
    const fetchCategories = async () => {
      const categoriesData = await getCategories();
      console.log("categorias:", categoriesData);
      setCategories(categoriesData);
    };
    const fetchPlaces = async () => {
      const placesData = await getPlaces();
      console.log("palces:", placesData);
      setPlaces(placesData);
    };
    fetchPlaces();
    fetchCategories();
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const body = {
      ...data,
      id_place: parseInt(data.id_place, 10),
      id_category: parseInt(data.id_category, 10),
      id_user: user.id,
      rating: 0,
    };

    try {
      console.log(body);
      const createdEvent = await createEvent(body);

      if (createdEvent && hasTickets) {
        console.log("Evento creado, redirigiendo para crear tickets...");
        router.push(`/create-tickets?eventId=${createdEvent.id}&ticketTypes=${ticketCount}`);
      } else {
        router.push(`/events`);
      }
    } catch (error) {
      console.error("error al crear el evento", error);
    }
  };

  return (
    <div>
      <h1>Crear Evento</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-6 bg-white shadow-md rounded"
      >
        <div className="mb-4">
          <label htmlFor="event" className="block text-gray-700">
            Nombre del evento
          </label>
          <input
            type="text"
            id="event"
            placeholder="nombre del evento"
            {...register("event")}
            className="mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300 text-black"
          />
          {errors.event && (
            <span className="text-red-500">{errors.event.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Descripción
          </label>
          <textarea
            id="description"
            {...register("description")}
            className="text-black mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="details" className="block text-gray-700">
            detalles
          </label>
          <textarea
            id="details"
            {...register("details")}
            className="text-black mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
          {errors.details && (
            <span className="text-red-500">{errors.details.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">
            Fecha
          </label>
          <input
            type="date"
            id="date"
            placeholder="fecha del evento"
            {...register("date")}
            className="text-black mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.date && (
            <span className="text-red-500">{errors.date.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700">
            Hora
          </label>
          <input
            type="time"
            id="time"
            placeholder="hora del evento"
            {...register("time")}
            className="text-black mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.time && (
            <span className="text-red-500">{errors.time.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">
            Imagen
          </label>
          <input
            type="text"
            id="image"
            placeholder="imagen del evento"
            {...register("image")}
            className="text-black mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.image && (
            <span className="text-red-500">{errors.image.message}</span>
          )}
        </div>

        {/* Otros campos del formulario */}
        <div className="mb-4">
          <label htmlFor="capacity" className="block text-gray-700">
            Capacidad
          </label>
          <input
            type="number"
            id="capacity"
            {...register("capacity", { valueAsNumber: true })}
            className="text-black mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.capacity && (
            <span className="text-red-500">{errors.capacity.message}</span>
          )}
        </div>

        <div className="text-black mb-4">
          {errors.id_place && <span>{errors.id_place.message}</span>}
          <label htmlFor="id_place" className="block text-gray-700">
            Lugar
          </label>
          <select {...register("id_place")}>
            <option value="">Seleccione un lugar</option>
            {places === null || places.length === 0 ? (
              <option disabled>Cargando lugares...</option>
            ) : (
              places.map((place) => (
                <option key={place.id} value={place.id.toString()}>
                  {place.place}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="text-black mb-4">
          {errors.id_category && <span>{errors.id_category.message}</span>}
          <label htmlFor="id_category" className="block text-gray-700">
            Categoria
          </label>
          <select {...register("id_category")}>
            <option value="">Seleccione una categoria</option>
            {categories === null || categories.length === 0 ? (
              <option disabled>Cargando categorias...</option>
            ) : (
              categories.map((category) => (
                <option key={category.id} value={category.id.toString()}>
                  {category.category}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="hasTickets" className="block text-gray-700">
            ¿El evento tiene tickets?
          </label>
          <input
            type="checkbox"
            id="hasTickets"
            onChange={(e) => setHasTickets(e.target.checked)}
            className="mt-1 block"
          />
        </div>

        {hasTickets && (
          <div className="mb-4">
            <label htmlFor="ticketTypes" className="block text-gray-700">
              cantidad de tipos de tickets
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              onChange={(e) => setTicketCount(Number(e.target.value))}
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Crear Evento
        </button>
      </form>
    </div>
  );
};
