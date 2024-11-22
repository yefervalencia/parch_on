"use client";

import React, { useState } from "react";
import {
  HeartIcon,
  HeartFillIcon,
  DownloadIcon,
  XIcon,
} from "@primer/octicons-react";
import Image from "next/image";

interface ImageModalProps {
  image: {
    id: string;
    url: string;
    user: string;
    userProfile: string;
    event: string;
  };
  onClose: () => void;
}

export const GalleryImage: React.FC<ImageModalProps> = ({ image, onClose }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = image.url;
    link.download = "image.jpg";
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-[#181818] rounded-lg p-4 max-w-[90vw] max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-50 hover:text-gray-800"
        >
          <XIcon className="w-6 h-6" />
        </button>
        <div className="flex items-center justify-center mb-4">
          <Image
            src={image.userProfile} // URL de la foto de perfil del usuario
            alt={image.user}
            className="w-10 h-10 rounded-full mr-2"
            width={40}
            height={40}
          />
          <span className="text-white font-bold">{image.user}</span>
        </div>
        <div className="mb-4">
          <Image
            src={image.url}
            alt={image.event}
            width={500}
            height={500}
            className="max-h-[60vh] max-w-max rounded-md"
          />
        </div>
        <div className="text-center text-white">{image.event}</div>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={toggleLike}
            className="flex items-center text-red-500 hover:text-red-700 transition"
          >
            {liked ? (
              <HeartFillIcon className="w-6 h-6 mr-1" />
            ) : (
              <HeartIcon className="w-6 h-6 mr-1" />
            )}
            Me gusta
          </button>
          <button
            onClick={downloadImage}
            className="flex items-center text-blue-500 hover:text-blue-700 transition"
          >
            <DownloadIcon className="w-6 h-6 mr-1" />
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
};
