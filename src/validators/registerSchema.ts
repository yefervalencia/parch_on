import { z } from "zod";

// Función para validar que el usuario tenga al menos 14 años
const validateBornDate = (dateString: string) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Ajusta la edad si aún no ha sido el cumpleaños este año
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 14;
};

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(1, "* El nombre es obligatorio")
            .regex(/^[a-zA-Z\s]+$/, "* El nombre solo puede contener letras y espacios"),

        lastname: z
            .string()
            .min(1, "* El apellido es obligatorio")
            .regex(/^[a-zA-Z\s]+$/, "* El apellido solo puede contener letras y espacios"),

        email: z
            .string()
            .min(1, "* El correo es obligatorio")
            .email("* Correo electrónico no válido"),

        password: z
            .string()
            .min(8, "* La contraseña debe tener al menos 8 caracteres")
            .regex(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/,
                "* La contraseña debe tener al menos una letra mayúscula, un número y un carácter especial"
            ),

        confirmPassword: z
            .string()
            .min(8, "* Debes confirmar la contraseña"),

        birth: z
            .string()
            .min(1, "* La fecha de nacimiento es obligatoria")
            .refine(validateBornDate, {
                message: "* Debes ser mayor de 14 años",
            }),

        phone: z
            .string()
            .min(1, "* El número de celular es obligatorio")
            .regex(/^\d{10}$/, "* El número de celular debe tener 10 dígitos")

        //city: z
        //.number({
        //required_error: "* La ciudad es obligatoria",
        //invalid_type_error: "* Debes seleccionar una ciudad válida",
        //})
        //.int("* El ID de la ciudad debe ser un número entero")
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
    });
