import { user } from "@/types/socialCityApi"

const API = 'http://127.0.0.1:8000'

export const getAllCities = async () => {
  try {
    const response = await fetch(`${API}/cities`);
    console.log('Response status:', response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData = await response.json();
    console.log('Raw data:', rawData);
    const data = rawData; 

    return data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
}


/*export const getInfoUser = async (body: DtoUser) => {
  const info = await fetch(`${API}/user`, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  const rawData = await info.json()
  const { data } = rawData 

  return data
}*/