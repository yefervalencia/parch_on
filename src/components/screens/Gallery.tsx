"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { GalleryImage } from "@/components/";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// Interfaz para las imágenes
interface GalleryImage {
  id: string;
  url: string;
  user: string;
  userProfile: string;
  event: string;
}

const sampleImages: GalleryImage[] = [
  {
    id: "1",
    url: "/det.png",
    user: "John Doe",
    userProfile: "/manizales.jpg",
    event: "Event A",
  },
  {
    id: "2",
    url: "/2150.png",
    user: "Jane Smith",
    userProfile: "/manizales.jpg",
    event: "Event B",
  },
  {
    id: "10",
    url: "https://images.pexels.com/photos/7715329/pexels-photo-7715329.jpeg",
    user: "Jane Smith",
    userProfile: "/manizales.jpg",
    event: "Event B",
  },
  {
    id: "5",
    url: "/hero.jpg",
    user: "Jane Smith",
    userProfile: "/manizales.jpg",
    event: "Event B",
  },
  {
    id: "12",
    url: "/2150.png",
    user: "Jane Smith",
    userProfile: "/manizales.jpg",
    event: "Event B",
  },
];

export const Gallery = () => {
  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {t("gallery")} {}
      </h1>
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="flex -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {sampleImages.map((image) => (
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
    </div>
  );
};
