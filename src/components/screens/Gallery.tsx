"use client";

import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { GalleryImage, Modal, AddPhotoForm } from "@/components/";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { getImagesFullData } from "@/libs/api";

interface GalleryImage {
  id: string;
  url: string;
  user: string;
  userProfile: string;
  event: string;
}

export const Gallery = () => {
  const { t } = useTranslation();

  const [isModalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Carga las imágenes al montar el componente
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getImagesFullData();
        // Mapea los datos del backend a tu interfaz `GalleryImage`
        const formattedImages: GalleryImage[] = data.map((img: any) => ({
          id: img.id,
          url: img.url,
          user: `${img.user.name} ${img.user.lastname}`,
          userProfile: "/image_2.jpg", // Asigna un valor fijo o agrega esta propiedad en el backend
          event: img.event.event,
        }));
        setImages(formattedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleAddPhoto = (data: { image: File; event: string }) => {
    const newImage: GalleryImage = {
      id: String(Date.now()),
      url: URL.createObjectURL(data.image), // Vista previa (temporal)
      user: "Current User",
      userProfile: "/path/to/profile.jpg",
      event: data.event,
    };
    setImages((prev) => [...prev, newImage]);
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl text-white font-bold mb-6">
        {t("gallery")} {}
      </h1>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 mb-6 rounded hover:bg-blue-600"
      >
        {t("addNewPhoto")}
      </button>
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="flex -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="mb-4 cursor-pointer rounded overflow-hidden shadow-md"
            onClick={() => openModal(image)}
          >
            <Image
              src={image.url}
              alt={image.event}
              className="w-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </Masonry>

      {selectedImage && (
        <GalleryImage image={selectedImage} onClose={closeModal} />
      )}

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddPhotoForm onSubmit={handleAddPhoto} />
      </Modal>
    </div>
  );
};
