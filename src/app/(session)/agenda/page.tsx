import { Metadata } from "next";
import { MyAgenda } from "@/components";

export const metadata: Metadata = {
  title: "myAgenda",
  description: "esta es la pagina de las agenda del perfil en sesion",
};
export default function MyAgendaPage() {
  return <MyAgenda />;
}
