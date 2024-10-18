"use client"; // Agrega esta línea para convertir el componente en un Client Component

import React, { useEffect, useState } from 'react';

// Suponiendo que tienes una función para obtener los datos del usuario
const fetchUserData = async () => {
  const response = await fetch('http://localhost:4000/users/1'); // Cambia la URL según tu API
  if (!response.ok) {
    throw new Error('Error fetching user data');
  }
  return response.json();
};

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserData()
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Esta es la página de inicio del perfil</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {user && (
        <div>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Apellido:</strong> {user.lastname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
        </div>
      )}
      {!loading && !user && <p>No se encontraron datos del usuario.</p>}
    </div>
  );
}
