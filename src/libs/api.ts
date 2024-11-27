import { DTOUser, DTOlogin, DTOEvent } from "@/types/DTO/api";
import { API } from "@/config/env.local";

export const createEvent = async (body: DTOEvent) => {
  try {
    const response = await fetch(`${API}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
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

export const getPlaces = async () => {
  try {
    const response = await fetch(`${API}/places`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
}

export const getCategories = async () => {
  try {
    const response = await fetch(`${API}/categories`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
}

// Sign up User
export const registerUser = async (body: DTOUser) => {
  try {
    const response = await fetch(`${API}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include'
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
    const token = rawData.token;
    localStorage.setItem("authToken", token);

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

export const getUserById = async (id: string) => {
  try {
    const response = await fetch(`${API}/users/${id}`)

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

export const getRoleByCookie = async (token: string | undefined) => {
  try {
    if (!token) {
      return { role: "Guest" };
    }

    const response = await fetch(`${API}/role`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    console.error('Error al obtener el rol:', error);
    return { role: "Guest" };
  }
};

export const getRoleByCookie2 = async () => {
  try {
    const response = await fetch(`${API}/role`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    console.error('Error al obtener el rol:', error);
    return { role: "Guest" };
  }
};

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
    const response = await fetch(`${API}/events-cards`);

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
    const response = await fetch(`${API}/events-details/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
};

export const getTicketTiers = async (id: string) => {
  try {
    const response = await fetch(`${API}/tickets/tiers/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return null;
  }
};

export const fetchUserData = async (userId: number) => {
  const response = await fetch(`${API}/${userId}`);
  if (!response.ok) {
    throw new Error('Error fetching user data');
  }
  return response.json();
};
// Edit function name!!!
export const updateUserData = async (userId: number, updatedUser: any) => {
  return fetch(`${API}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  })
    .then(res => { console.log(res); return res.json() });
};

export const createImage = async () => {
  try {
    const response = await fetch(`${API}/images`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
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

export const uploadImage = async (formData: FormData): Promise<any> => {
  try {
    const response = await fetch(`${API}/images`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const getImagesFullData = async () => {
  try {
    const response = await fetch(`${API}/images-full`, {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
