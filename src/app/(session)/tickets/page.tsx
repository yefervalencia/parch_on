import { TicketList } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy tickets",
  description: "Ticket zone information",
};

export default function ticketsPage() {
  return (
    <div className="p-6">
      <TicketList />
    </div>
  );
}
