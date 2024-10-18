"use client"; 

import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';

const fetchUserData = async () => {
  const response = await fetch('http://localhost:4000/users/1'); 
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
    <div className={styles.container}>
      <h1 className={styles.header}>Perfil de Usuario</h1>
      {loading && <p className={styles.loading}>Cargando...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}
      {user && (
        <div className={styles.card}>
          <h2 className={styles.title}>Información Personal</h2>
          <p className={styles.userData}><strong>Nombre:</strong> {user.name}</p>
          <p className={styles.userData}><strong>Apellido:</strong> {user.lastname}</p>
          <p className={styles.userData}><strong>Email:</strong> {user.email}</p>
          <p className={styles.userData}><strong>Teléfono:</strong> {user.phone}</p>
        </div>
      )}
      {!loading && !user && <p>No se encontraron datos del usuario.</p>}
    </div>
  );
}
