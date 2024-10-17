"use client";
// components/EventCard.tsx
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatDate, formatTimeToAMPM } from "@/utils/dateUtils";

interface EventCardProps {
  id: string;
  event: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  id,
  event,
  date,
  time,
  location,
  description,
  image,
}) => {
  const router = useRouter();
  // Función para convertir hora de 24 hrs a AM/PM
  const { day, month } = formatDate(date);
  const formattedTime = formatTimeToAMPM(time);

  // Handler para redirigir con un parámetro adicional
  const handleViewDetails = () => {
    router.push(`/events/${id}`);
  };

  return (
    <div className="relative w-full flex bg-black text-white rounded-lg shadow-lg overflow-hidden">
      {/* Contenedor para la imagen */}
      <div className="relative w-1/3 h-64">
        <Image
          src={image}
          alt="Event image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />

        {/* Letrero de la fecha */}
        <div className="absolute top-0 left-0 bg-[#ff3385] text-white p-2 text-center rounded-br-lg">
          <p className="text-xs font-bold">{day}</p>
          <p className="text-xs">{month}</p>
        </div>
      </div>

      {/* Contenido del evento */}
      <div className="w-2/3 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[#ff6699] mb-2">
            <span>{location}</span>
            <span className="text-sm">{formattedTime}</span>
          </div>
          <h2 className="text-2xl font-bold">{event}</h2>
          <p className="text-gray-400 text-sm mt-2">{description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handleViewDetails}
            className="bg-[#ff0066] text-white px-4 py-2 rounded-lg hover:bg-[#e6005c]"
          >
            Ver detalles →
          </button>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-300">
              <i className="fas fa-heart"></i>
            </button>
            <button className="text-gray-500 hover:text-gray-300">
              <i className="fas fa-share"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
