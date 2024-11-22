"use client";

import { updateUserData, getUserByCookie } from "@/libs/api";
import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editedUser, setEditedUser] = useState<any>(null);
  const [activeSection, setActiveSection] = useState<string>("Cuenta");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    getUserByCookie()
      .then((data) => {
        setUser(data);
        setEditedUser(data);
        setSelectedImage(data.profileImage || null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setEditedUser({ ...editedUser, profileImage: file });
    }
  };

  const handleSave = () => {
    setLoading(true);
    const newEdited = {
      name: editedUser.name,
      lastname: editedUser.lastname,
      phone: editedUser.phone,
      profileImage: editedUser.profileImage,
    };

    if (newEdited.name === user.name) delete newEdited.name;
    if (newEdited.lastname === user.lastname) delete newEdited.lastname;
    if (newEdited.phone === user.phone) delete newEdited.phone;
    if (newEdited.profileImage === user.profileImage) delete newEdited.profileImage;

    if (Object.keys(newEdited).length > 0) {
      updateUserData(editedUser.id, newEdited)
        .then((updatedData) => {
          setUser(updatedData);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditedUser(user);
    setSelectedImage(user?.profileImage || null);
  };

  return (
    <div className={styles.profileContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.imageContainer}>
          <img
            src={selectedImage || "/default-profile.jpg"} // Fallback image
            alt="Profile"
            className={styles.profileImage}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.imageInput}
          />
        </div>
        <h2 className={styles.userName}>
          {user ? `${user.name} ${user.lastname}` : "Usuario"}
        </h2>
        <ul className={styles.navList}>
          <li
            className={`${styles.navItem} ${activeSection === "Cuenta" ? styles.active : ""}`}
            onClick={() => setActiveSection("Cuenta")}
          >
            Cuenta
          </li>
          <li
            className={`${styles.navItem} ${activeSection === "Contraseña" ? styles.active : ""}`}
            onClick={() => setActiveSection("Contraseña")}
          >
            Contraseña
          </li>
          <li
            className={`${styles.navItem} ${activeSection === "Seguridad" ? styles.active : ""}`}
            onClick={() => setActiveSection("Seguridad")}
          >
            Seguridad
          </li>
          <li
            className={`${styles.navItem} ${activeSection === "Aplicación" ? styles.active : ""}`}
            onClick={() => setActiveSection("Aplicación")}
          >
            Aplicación
          </li>
          <li
            className={`${styles.navItem} ${activeSection === "Notificación" ? styles.active : ""}`}
            onClick={() => setActiveSection("Notificación")}
          >
            Notificación
          </li>
        </ul>
      </aside>
      <main className={styles.mainContent}>
        {activeSection === "Cuenta" && (
          <>
            <h1 className={styles.header}>Configuración de la Cuenta</h1>
            {loading && <p className={styles.loading}>Cargando...</p>}
            {error && <p className={styles.error}>Error: {error}</p>}
            {user && (
              <div className={styles.card}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Nombre</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Apellido</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="lastname"
                    value={editedUser.lastname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Correo Electrónico</label>
                  <input
                    className={`${styles.input} ${styles.readOnly}`}
                    type="email"
                    name="email"
                    value={editedUser.email}
                    readOnly
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Teléfono</label>
                  <input
                    className={styles.input}
                    type="tel"
                    name="phone"
                    value={editedUser.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.buttons}>
                  <button onClick={handleSave} className={styles.saveButton}>
                    Guardar
                  </button>
                  <button onClick={handleCancel} className={styles.cancelButton}>
                    Cancelar
                  </button>
                </div>
              </div>
            )}
            {!loading && !user && <p>No se encontraron datos del usuario.</p>}
          </>
        )}
        {activeSection !== "Cuenta" && (
          <div className={styles.otherSection}>
            <h1 className={styles.header}>{activeSection}</h1>
            <p>Contenido de la sección {activeSection}</p>
          </div>
        )}
      </main>
    </div>
  );
}
