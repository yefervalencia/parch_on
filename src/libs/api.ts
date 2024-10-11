import { DTOUser, DTOlogin } from "@/types/DTO/api";

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
    console.error('Error registering user:', error);
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
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    const rawData = await response.json();
    return rawData;
  } catch (error) {
    console.error('Error registering user:', error);
    return null;
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
    console.error('Error registering user:', error);
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
    console.error('Error registering user:', error);
    return null;
  }
}