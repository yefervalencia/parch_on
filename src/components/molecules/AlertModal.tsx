// Molecules/AlertModal.tsx
import React from "react";
import { Icon } from "@/components";

interface AlertModalProps {
  type: "confirm" | "cancel";
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  type,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
      <div className="bg-white text-black rounded-lg p-4 max-w-sm w-full flex flex-col items-center">
        {/* Ícono de alerta */}
        <Icon type={type === "confirm" ? "confirm" : "cancel"} />

        {/* Mensaje de confirmación */}
        <p className="text-lg mb-4 text-center">{message}</p>

        {/* Botones de acción */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="py-1 px-4 text-gray-500 rounded hover:bg-gray-200 transition"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className={`py-1 px-4 ${
              type === "confirm"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            } text-white rounded transition`}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
