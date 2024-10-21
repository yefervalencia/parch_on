import { DTOUser, DTOlogin } from "@/types/DTO/api";
import { jwtDecode } from "jwt-decode";

const API = 'http://localhost:4000'

// Sign up User
export const registerUser = async (body: DTOUser) => {
  try {
    const response = await fetch(`${API}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
}

export const loginUser = async (body: DTOlogin) => {
  try {
    const response = await fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
}

export const logoutUser = async () => {
  try {
    const response = await fetch(`${API}/logout`, {
      method: "POST",
      credentials: "include", // Asegúrate de incluir las credenciales para que la cookie se borre
    });
    if (!response.ok) {
      throw new Error("Logout failed");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
}

export const getUserById = async () => {
  try {
    const response = await fetch(`${API}/users/1`)

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    // Obtener los datos de usuario
    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
}

export const getUserByCookie = async () => {
  try {
    const response = await fetch(`${API}/users/cookie`, {
      method: "POST",
      credentials: "include"
    })

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    // Obtener los datos de usuario
    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
}

export const getCookieExists = async () => {
  try {
    const response = await fetch(`${API}/cookie`, {
      credentials: "include"
    })

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    // Obtener los datos de usuario
    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return { isAuthenticated: false };
  }
}

export const getEvents = async () => {
  try {
    const response = await fetch(`${API}/events`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
}

export const getCities = async () => {
  try {
    const response = await fetch(`${API}/cities`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
}

export const getEventCard = async () => {
  try {
    const response = await fetch(`${API}/events/cards`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
}

export const getEventDetails = async (id: string) => {
  try {
    const response = await fetch(`${API}/events/details/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
};
