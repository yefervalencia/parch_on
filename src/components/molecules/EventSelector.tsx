"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface Event {
  id: number;
  event: string;
}

interface EventSelectorProps {
  events: Event[];
  onEventSelect: (event: Event) => void; // Ahora envía todo el objeto del evento
}

export const EventSelector: React.FC<EventSelectorProps> = ({
  events,
  onEventSelect,
}) => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  // Actualizar eventos filtrados cuando cambie el término de búsqueda
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = events.filter((event) =>
      event.event.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={t("searchEvents")}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="p-2 border rounded w-full mb-2 text-black"
      />
      <ul className="max-h-40 overflow-y-auto border rounded bg-white shadow">
        {filteredEvents.map((event) => (
          <li
            key={event.id}
            onClick={() => onEventSelect(event)} // Enviar el objeto completo
            className="cursor-pointer p-2 text-black hover:bg-gray-100"
          >
            {event.event}
          </li>
        ))}
      </ul>
    </div>
  );
};
