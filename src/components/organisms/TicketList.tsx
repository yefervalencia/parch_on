// TicketList.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Toast } from "primereact/toast";
import { Ticket, TicketModal } from "@/components";
import { getTicketTiers } from "@/libs/api";
import { getColorByTier } from "@/utils/getColorByTierUtils";

interface TicketData {
  id: number;
  price: number;
  quantity: number;
  tier: {
    tier: string;
    description: string;
  };
}

export const TicketList: React.FC = () => {
  const [cart, setCart] = useState<TicketData[]>([]);
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const toast = useRef<Toast>(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchTickets = async () => {
      // Obtén el id de los parámetros de la URL
      if (id) {
        const ticketData = await getTicketTiers(id as string); // Pasa el id a getTicketTiers
        if (ticketData) {
          // Ordena los tickets por precio descendente
          const sortedTickets = ticketData.sort(
            (a: TicketData, b: TicketData) => Number(b.price) - Number(a.price)
          );
          setTickets(sortedTickets);
        }
      }
    };
    fetchTickets();
  }, [id]);

  const handleAddToCart = (ticket: TicketData) => {
    const existingTicket = cart.find(
      (item) => item.tier.tier === ticket.tier.tier
    );
    if (existingTicket) {
      setCart(
        cart.map((item) =>
          item.tier.tier === ticket.tier.tier
            ? { ...item, quantity: item.quantity + ticket.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, ticket]);
    }

    // Mostrar Toast de éxito
    toast.current?.show({
      severity: "success",
      summary: "Ticket Added",
      detail: `${ticket.tier.tier} ticket added to cart!`,
      life: 3000,
    });
  };

  const handleOrder = () => setShowModal(true);

  const handleConfirmOrder = () => {
    setCart([]);
    setShowModal(false);
  };

  const handleCancelOrder = () => setShowModal(false);

  return (
    <div className="p-4">
      <Toast ref={toast} />

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Tickets</h1>
        <div className="relative">
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            {cart.length}
          </span>
          <button
            onClick={handleOrder}
            className="bg-white text-white font-semibold py-2 px-8 rounded hover:bg-gray-200 transition"
          >
            <Image
              src="/shopping-cart.svg"
              alt="Shopping Cart"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {tickets.map((ticket, index) => (
          <Ticket
            key={index}
            id={ticket.id}
            tier={ticket.tier.tier}
            color={getColorByTier(ticket.tier.tier)}
            price={ticket.price}
            description={ticket.tier.description}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {showModal && (
        <TicketModal
          onConfirm={handleConfirmOrder}
          onCancel={handleCancelOrder}
          tickets={cart}
        />
      )}
    </div>
  );
};
