"use client";
// components/EventList.tsx
import React, { useEffect, useState } from "react";
import { EventCard } from "@/components";
import { getEventCard } from "@/libs/api";

interface Event {
  id: string;
  event: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  place: {
    place: string;
    address: string;
  };
}

export const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await getEventCard();
      if (eventData) {
        setEvents(eventData);
      }
    };
    fetchEvents();
  }, []);

  // Agrupar los eventos por año
  const eventsByYear = events.reduce(
    (acc: { [key: string]: Event[] }, event) => {
      const year = new Date(event.date).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(event);
      return acc;
    },
    {}
  );

  return (
    <div>
      {Object.keys(eventsByYear).map((year) => (
        <div key={year} className="mb-8">
          {/* Encabezado del año */}
          <h2 className="text-3xl font-bold text-[#ff6699] mb-4">{year}</h2>
          <div className="space-y-6">
            {eventsByYear[year].map((event, index) => (
              <EventCard
                key={index}
                id={event.id}
                event={event.event}
                date={event.date}
                time={event.time}
                location={event.place.place}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
