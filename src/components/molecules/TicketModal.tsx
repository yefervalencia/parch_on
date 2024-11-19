// Organisms/TicketModal.tsx
"use client";

import React, { useState } from "react";
import { AlertModal } from "@/components";
import { XIcon } from "@primer/octicons-react";
import { sendWhatsAppMessage } from "@/utils/whatsappUtils";

interface TicketModalProps {
  tickets: Array<{ tier: { tier: string }; price: number; quantity: number }>;
  onConfirm: () => void;
  onCancel: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({
  tickets,
  onConfirm,
  onCancel,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<"confirm" | "cancel" | null>(null);

  const total = tickets.reduce(
    (acc, ticket) => acc + ticket.price * ticket.quantity,
    0
  );

  const handleActionConfirmation = (type: "confirm" | "cancel") => {
    setShowAlert(true);
    setAlertType(type);
  };

  const handleConfirmAction = () => {
    if (alertType === "confirm") {
      const phoneNumber = "525655880974";
      sendWhatsAppMessage(tickets, total, phoneNumber);
      onConfirm();
    } else if (alertType === "cancel") {
      onConfirm();
    }
    setShowAlert(false);
    setAlertType(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white text-black rounded-lg p-6 max-w-md w-full">
        {/* Botón de cierre (X) */}
        <button
          onClick={onCancel}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition"
        >
          <XIcon size={24} />
        </button>
        <h3 className="text-xl font-semibold mb-4">Purchase Summary</h3>
        <ul className="mb-4">
          {tickets.map((ticket, index) => (
            <li key={index} className="flex justify-between">
              <span>
                {ticket.tier.tier} (x{ticket.quantity})
              </span>
              <span>${(ticket.price * ticket.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="font-bold text-lg mb-4">Total: ${total.toFixed(2)}</p>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => handleActionConfirmation("cancel")}
            className="py-2 px-4 text-red-500 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => handleActionConfirmation("confirm")}
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Confirm Order
          </button>
        </div>

        {showAlert && alertType && (
          <AlertModal
            type={alertType}
            message={
              alertType === "confirm"
                ? "Are you sure you want to confirm the order?"
                : "Are you sure you want to cancel the order?"
            }
            onConfirm={handleConfirmAction}
            onCancel={() => setShowAlert(false)}
          />
        )}
      </div>
    </div>
  );
};
