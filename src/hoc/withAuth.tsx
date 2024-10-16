import { validateAuthentication } from "@/hooks/validateAuthentication";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";

const withAuth = (
  WrappedComponent: ComponentType<any>,
  requiredRole: "admin" | "super" | null = null
) => {
  return (props: any) => {
    const { isAuthenticated, typeUser } = validateAuthentication();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login");
      } else if (requiredRole && typeUser !== requiredRole) {
        router.push("/unauthorized"); // Página para usuarios no autorizados
      }
    }, [isAuthenticated, typeUser, router]);

    if (!isAuthenticated || (requiredRole && typeUser !== requiredRole)) {
      return null; // Para evitar mostrar el contenido mientras redirige
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
