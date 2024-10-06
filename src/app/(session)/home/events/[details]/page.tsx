"use client";

import { useParams } from "next/navigation";

export default function DetailEvent() {
  const { details } = useParams();
  return (
    <div>
      <h1>Esta es la pagina de detalle del evento</h1>
      <h3>{details}</h3>
    </div>
  );
}
