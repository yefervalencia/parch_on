import { EventList } from "@/components";

export default function eventPage() {
  const events = [
    {
      id: "fc-241208mde",
      title: "Ferxxo Calipsis",
      date: "2024-12-08",
      time: "21:00",
      location: "Estadio Atanasio Girardot, Medellín",
      description: "Disfruta de un concierto de Feid completamente en vivo.",
      imageUrl: "/manizales.jpg",
    },
    {
      id: "rcp-241018mzl",
      title: "RCP 2024",
      date: "2024-10-18",
      time: "22:00",
      location: "2150",
      description:
        "La mejor fiesta para los estudiantes de medicina de Manizales.",
      imageUrl: "/manizales.jpg",
    },
    {
      id: "rcp-251018mzl",
      title: "RCP 2025",
      date: "2025-10-18",
      time: "22:00",
      location: "2150",
      description:
        "La mejor fiesta para los estudiantes de medicina de Manizales.",
      imageUrl: "/manizales.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Próximos eventos</h1>
      <EventList events={events} />
    </div>
  );
}
