// utils/whatsappUtils.ts

/**
 * Genera el mensaje de WhatsApp basado en los tickets seleccionados.
 * @param tickets Lista de tickets con tier, precio y cantidad.
 * @param total Total de la compra.
 * @returns Mensaje codificado para WhatsApp.
 */
export const generateWhatsAppMessage = (
    tickets: Array<{ tier: { tier: string }; price: number; quantity: number }>,
    total: number
) => {
    const header = `🎟️ *Order Confirmation*\n\n`;
    const ticketDetails = tickets
        .map(
            (ticket) =>
                `- ${ticket.tier.tier} (x${ticket.quantity}): $${(
                    ticket.price * ticket.quantity
                ).toFixed(2)}`
        )
        .join("\n");
    const footer = `\n\n💰 *Total:* $${total.toFixed(2)}\n\nThank you for your order!`;

    return encodeURIComponent(`${header}${ticketDetails}${footer}`);
};

/**
 * Abre WhatsApp en una nueva pestaña con el mensaje predefinido.
 * @param tickets Lista de tickets.
 * @param total Total de la compra.
 * @param phoneNumber Número de WhatsApp al que se enviará el mensaje.
 */
export const sendWhatsAppMessage = (
    tickets: Array<{ tier: { tier: string }; price: number; quantity: number }>,
    total: number,
    phoneNumber: string
) => {
    const message = generateWhatsAppMessage(tickets, total);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
};
