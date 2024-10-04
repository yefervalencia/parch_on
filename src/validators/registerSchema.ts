import { z } from "zod";

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(1, "* El nombre es obligatorio")
            .regex(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras y espacios"),
        email: z
            .string()
            .min(1, "* El correo es obligatorio")
            .email("Correo electrónico no válido"),
        password: z
            .string()
            .min(8, "* La contraseña debe tener al menos 8 caracteres")
            .regex(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/,
                "La contraseña debe tener al menos una letra mayúscula, un número y un carácter especial"
            ),
        confirmPassword: z
            .string()
            .min(8, "* Debes confirmar la contraseña"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
    })
