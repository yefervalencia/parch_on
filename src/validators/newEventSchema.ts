import { z } from "zod";

export const eventSchema = z.object({
  event: z.string().min(3, "El nombre del evento debe tener al menos 3 caracteres."),
  description: z.string().min(5, "La descripción debe ser más extensa."),
  details: z.string().min(5, "Los detalles deben ser más extensos."),
  date: z
    .string()
    .refine(
      (dateStr) => {
        const today = new Date();
        const eventDate = new Date(dateStr);
        // Compara la fecha del evento con la fecha actual (solo la fecha, sin considerar la hora)
        today.setHours(0, 0, 0, 0);
        return eventDate >= today;
      },
      { message: "La fecha del evento debe ser igual o posterior a la fecha actual" }
    ),
  time: z.string().refine(
    (time) => /\d{2}:\d{2}/.test(time),
    "El formato de la hora debe ser HH:mm."
  ),
  image: z
    .string()
    .url("La URL proporcionada no es válida") // Valida que sea una URL
    .refine((url) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url), {
      message: "La URL debe ser un enlace a una imagen válida (jpg, jpeg, png, gif, webp o svg)",
    }), // La validación será manejada por el manejo de archivos
  capacity: z.number().min(1, "La capacidad debe ser mayor a 0."),
  id_place: z
            .string()
            .min(1, "* el lugar es obligatoria")
            .regex(/^\d+$/, "* Debes seleccionar un lugar válido"),
    
  id_category: z
            .string()
            .min(1, "* la categoria es obligatoria")
            .regex(/^\d+$/, "* Debes seleccionar una categoria válida"),
    
});