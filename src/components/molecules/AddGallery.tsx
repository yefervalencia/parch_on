"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { EventSelector } from "@/components";
import { getEvents, uploadImage } from "@/libs/api";

interface AddPhotoFormProps {
  onSubmit: (data: { image: File; event: string }) => void;
}

export const AddPhotoForm: React.FC<AddPhotoFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [image, setImage] = useState<File | null>(null);
  const [events, setEvents] = useState<{ id: number; event: string }[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<{
    id: number;
    name: string;
  } | null>(null);

  useEffect(() => {
    // Llamada para obtener los eventos al montar el componente
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data); // Asume que `data` es un array de eventos
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image || !selectedEvent) return;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("id_event", selectedEvent.id.toString());
    formData.append("id_user", "1"); // Cambia por el ID del usuario autenticado

    console.log("IMAGE", image);
    console.log("EVENT", selectedEvent.id);
    console.log("NAME", selectedEvent.name);

    try {
      const data = await uploadImage(formData); // Llama a la función de API
      console.log("Image uploaded:", data);

      // Comunica el nuevo dato al componente Gallery
      onSubmit({
        image,
        event: selectedEvent.name,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">{t("selectImage")}</label>
        <input
          type="file"
          title="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="mt-1 w-full text-gray-700"
        />
      </div>
      <div>
        <label className="block text-gray-700">{t("chooseEvent")}</label>
        <EventSelector
          events={events}
          onEventSelect={(event) =>
            setSelectedEvent({ id: event.id, name: event.event })
          }
        />
        {selectedEvent && (
          <p className="text-sm text-gray-500 mt-2">
            {t("selectedEvent")}: {selectedEvent.name}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {t("upload")}
      </button>
    </form>
  );
};
