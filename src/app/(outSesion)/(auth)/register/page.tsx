import "./Register.css"; // Asegúrate de crear este archivo para los estilos

export const metadata = {
  title: "Registro de usuario",
  description:
    "Regístrate para obtener una cuenta completando el formulario con tu información personal.",
};

export default function Register() {
  return (
    <div className="register-page">
      <h1>Registro</h1>
      <form className="register-form">
        <input type="text" placeholder="Nombre Completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="password" placeholder="Confirmar contraseña" required />
        <div className="buttons">
          <button type="submit" className="btn-register">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}
