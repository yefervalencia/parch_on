"use client";

import { updateUserData, getUserByCookie } from "@/libs/api";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Profile.css";

export const Profile = () => {
  const { t } = useTranslation();
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
    if (newEdited.profileImage === user.profileImage)
      delete newEdited.profileImage;

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
    <div className="profileContainer">
      <aside className="sidebar">
        <div className="imageContainer">
          <img
            src={selectedImage || "/default-profile.jpg"} // Fallback image
            alt="Profile"
            className="profileImage"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="imageInput"
          />
        </div>
        <h2 className="userName">
          {user ? `${user.name} ${user.lastname}` : "Usuario"}
        </h2>
        <ul className="navList">
          <li
            className={`navItem ${activeSection === "Cuenta" ? "active" : ""}`}
            onClick={() => setActiveSection("Cuenta")}
          >
            {t("account")}
          </li>
          <li
            className={`navItem ${
              activeSection === "Contraseña" ? "active" : ""
            }`}
            onClick={() => setActiveSection("Contraseña")}
          >
            {t("password")}
          </li>
          <li
            className={`navItem ${
              activeSection === "Seguridad" ? "active" : ""
            }`}
            onClick={() => setActiveSection("Seguridad")}
          >
            {t("security")}
          </li>
          <li
            className={`navItem ${
              activeSection === "Aplicación" ? "active" : ""
            }`}
            onClick={() => setActiveSection("Aplicación")}
          >
            {t("application")}
          </li>
          <li
            className={`navItem ${
              activeSection === "Notificación" ? "active" : ""
            }`}
            onClick={() => setActiveSection("Notificación")}
          >
            {t("notifications")}
          </li>
        </ul>
      </aside>
      <main className="mainContent">
        {activeSection === "Cuenta" && (
          <>
            <h1 className="header">{t("accountSettings")}</h1>
            {loading && <p className="loading">{t("loading")}</p>}
            {error && <p className="error">Error: {error}</p>}
            {user && (
              <div className="card">
                <div className="formGroup">
                  <label className="label">{t("name")}</label>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formGroup">
                  <label className="label">{t("surname")}</label>
                  <input
                    className="input"
                    type="text"
                    name="lastname"
                    value={editedUser.lastname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formGroup">
                  <label className="label">{t("email")}</label>
                  <input
                    className="input readOnly"
                    type="email"
                    name="email"
                    value={editedUser.email}
                    readOnly
                  />
                </div>
                <div className="formGroup">
                  <label className="label">{t("phone")}</label>
                  <input
                    className="input"
                    type="tel"
                    name="phone"
                    value={editedUser.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="buttons">
                  <button onClick={handleSave} className="saveButton">
                    {t("save")}
                  </button>
                  <button onClick={handleCancel} className="cancelButton">
                    {t("cancel")}
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        {activeSection !== "Cuenta" && (
          <div className="otherSection">
            <h1 className="header">{activeSection}</h1>
            <p>Contenido de la sección {activeSection}</p>
          </div>
        )}
      </main>
    </div>
  );
};
