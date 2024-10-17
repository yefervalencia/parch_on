import { EventList } from "@/components";

export default function eventPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Próximos eventos</h1>
      <EventList />
    </div>
  );
}
