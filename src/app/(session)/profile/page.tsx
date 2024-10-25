"use client";

import { updateUserData, getUserByCookie } from "@/libs/api";
import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
const jwt_decode = require("jwt-decode"); // Usar require en vez de import
import Cookies from 'js-cookie';

const fetchUserData = async () => {
  try {
    // Obtener los datos del usuario a través de la función getUserByCookie
    const userData = await getUserByCookie();

    if (userData) {
      const response = await fetch(`http://localhost:4000/users/${userData.id}`, {
        method: 'GET', // Método de la petición
        headers: {
          'Content-Type': 'application/json', // Puedes agregar otros headers si es necesario
        },
        credentials: 'include', // Para incluir las cookies
      });

      return response.json();
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<any>(null);

  useEffect(() => {
    fetchUserData()
      .then((data) => {
        setUser(data);
        setEditedUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    console.log("Cancelado", isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    setLoading(true);
    const newEdited = {
      name: editedUser.name,
      lastname: editedUser.lastname,
      email: editedUser.email,
      phone: editedUser.phone,
    };

    if (newEdited.name === user.name) delete newEdited.name;
    if (newEdited.lastname === user.lastname) delete newEdited.lastname;
    if (newEdited.email === user.email) delete newEdited.email;
    if (newEdited.phone === user.phone) delete newEdited.phone;
    if (Object.keys(newEdited).length > 0) {
      updateUserData(editedUser.id, newEdited)
        .then((updatedData) => {
          console.log(updatedData);
          setUser(updatedData);
          setIsEditing(false);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);

          setError(err.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Perfil de Usuario</h1>
      {loading && <p className={styles.loading}>Cargando...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}
      {user && (
        <div className={styles.card}>
          <h2 className={styles.title}>Información Personal</h2>
          {!isEditing ? (
            <>
              <p className={styles.userData}>
                <strong>Nombre:</strong> {user.name}
              </p>
              <p className={styles.userData}>
                <strong>Apellido:</strong> {user.lastname}
              </p>
              <p className={styles.userData}>
                <strong>Email:</strong> {user.email}
              </p>
              <p className={styles.userData}>
                <strong>Teléfono:</strong> {user.phone}
              </p>
              <button onClick={handleEdit} className={styles.editButton}>
                Editar
              </button>
            </>
          ) : (
            <>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
              />
              <input
                className={styles.input}
                type="text"
                name="lastname"
                value={editedUser.lastname}
                onChange={handleInputChange}
              />
              <input
                className={styles.input}
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
              <input
                className={styles.input}
                type="tel"
                name="phone"
                value={editedUser.phone}
                onChange={handleInputChange}
              />
              <button onClick={handleSave} className={styles.saveButton}>
                Guardar
              </button>
              <button onClick={handleCancel} className={styles.editButton}>
                Cancelar
              </button>
            </>
          )}
        </div>
      )}
      {!loading && !user && <p>No se encontraron datos del usuario.</p>}
    </div>
  );
}
