import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Agregar lógica para verificar si el usuario está autenticado
    // Ejemplo: verificar token en localStorage o una cookie
    const token = localStorage.getItem("user");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    // Lógica para iniciar sesión
    // Lógica de autenticación (llamada a API)
    if (localStorage.getItem("user") === "root") {
      setIsAuthenticated(true);
      router.push("./home");
    }
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    router.push("./");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
