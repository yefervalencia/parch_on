"use client";
/*
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { SyncIcon } from "@primer/octicons-react";
*/
import { NavbarS, Footer } from "@/components";
import "./layout.css";

export default function SessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/login"); // Redirige al login si no está autenticado
    } else {
      setLoading(false); // Deja de cargar una vez que haya verificado la autenticación
    }
  }, [isAuthenticated, router]);

  if (loading) {
    return (
      <div className="spinner-container">
        <SyncIcon size={48} className="spinner" />
        <p>Loading...</p>
      </div>
    );
  }
    */

  return (
    <>
      <NavbarS />
      <main>{children}</main>
      <Footer />
    </>
  );
}
