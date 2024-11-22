"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { ClockIcon, LocationIcon } from "@primer/octicons-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getEventDetails } from "@/libs/api";
import { formatDate, formatTimeToAMPM } from "@/utils/dateUtils";

export default function DetailEvent() {
  const { t } = useTranslation();
  const { details: id } = useParams();
  const [event, setEvent] = useState<null | {
    event: string;
    details: string;
    date: string;
    time: string;
    image: string;
    place: { place: string };
  }>(null);

  useEffect(() => {
    if (id) {
      const eventId = Array.isArray(id) ? id[0] : id;
      getEventDetails(eventId).then((data) => {
        if (data) {
          setEvent(data);
        }
      });
    }
  }, [id]);

  if (!event) return <p>Loading...</p>;

  const { event: title, details, date, time, image, place } = event;
  const { place: location } = place;

  // Función para convertir hora de 24 hrs a AM/PM
  const { day, month } = formatDate(date);
  const formattedTime = formatTimeToAMPM(time);

  // Separar el texto por saltos de línea para crear párrafos
  const detailParagraphs = details.split("\r\n\r\n");

  return (
    <div className="p-10 min-h-screen bg-black/90">
      <div className="flex justify-center mt-2 w-full">
        <div className="relative w-3/4 h-96">
          <Image
            src={image}
            alt="Event image"
            layout="fill"
            objectFit="cover"
            priority={true}
          />

          {/* Letrero de la fecha */}
          <div className="absolute top-2 left-2 bg-[#ff3385] text-white p-2 text-center rounded-br-lg">
            <p className="text-lg font-bold">{day}</p>
            <p className="text-lg">{month}</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="font-mono font-bold mb-4 text-white">{title}</h1>
        <div className="text-white text-xl mb-4 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <ClockIcon size={24} />
            <span className="font-bold">{formattedTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LocationIcon size={24} />
            <span className="font-bold">{location}</span>
          </div>
        </div>
        <div className="mt-8">
          <Link href={`/tickets?id=${id}`}>
            <button
              type="button"
              className="bg-[#ff0066] font-bold text-white text-2xl px-4 py-2 rounded-2xl hover:bg-[#e6005c] "
            >
              {t("buyTickets")}
            </button>
          </Link>
        </div>

        <div className="mt-8 text-white w-3/4 text-xl">
          {detailParagraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
