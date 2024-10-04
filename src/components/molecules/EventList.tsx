// components/EventList.tsx
import React from "react";
import { EventCard } from "@/components";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
}

interface EventListProps {
  events: Event[];
}

export const EventList: React.FC<EventListProps> = ({ events }) => {
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
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                imageUrl={event.imageUrl}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
