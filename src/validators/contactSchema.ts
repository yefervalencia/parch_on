import { z } from "zod";

export const contactSchema = z
    .object({
        name: z
            .string()
            .min(1, "* El nombre es obligatorio")
            .regex(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras y espacios"),
        email: z
            .string()
            .min(1, "* El correo es obligatorio")
            .email("Correo electrónico no válido"),
        message: z
            .string()
            .min(1, "* El mensaje es obligatorio")
            .max(1000, "El mensaje no puede exceder de 1000 caracteres")
            .refine(
                (msg) => msg.trim().split(/\s+/).length <= 250,
                { message: "El mensaje no puede exceder de 250 palabras" }
            )
    })
