// Ticket.tsx
"use client";

import React, { useState } from "react";

interface TicketProps {
  id: number;
  tier: string;
  color: string;
  price: number;
  description: string;
  onAddToCart: (ticket: {
    id: number;
    price: number;
    quantity: number;
    tier: {
      tier: string;
      description: string;
    };
  }) => void;
}

export const Ticket: React.FC<TicketProps> = ({
  id,
  price,
  color,
  tier,
  description,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    onAddToCart({ id, tier: { tier, description }, price, quantity });
    setQuantity(1);
  };

  return (
    <div
      className={`flex flex-col p-6 rounded-lg shadow-lg text-white ${color}`}
    >
      <h2 className="text-4xl font-semibold mb-2">{tier}</h2>
      <p className="text-lg font-bold mb-2">${Number(price).toFixed(2)}</p>
      <p className="text-sm mb-4">{description}</p>

      <div className="flex items-center mb-4">
        <button
          onClick={decrement}
          className="px-3 py-1 bg-gray-300 text-black rounded-l"
        >
          -
        </button>
        <span className="px-4 py-2 bg-white text-black">{quantity}</span>
        <button
          onClick={increment}
          className="px-3 py-1 bg-gray-300 text-black rounded-r"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-auto bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};
