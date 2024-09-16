import './Login.css';

export const metadata = {
  title: "Inicios de sesión recientes",
  description: "Haz clic en una foto o agrega una para iniciar sesión."
}

export default function Login() {
  return (
    <div className="login-page">
      <div className="recent-logins">
        <h2>Inicios de sesión recientes</h2>
        <p>Haz clic en una foto o agrega una</p>
        <div className="profile-grid">
          <div className="profile-box">
            <img src="./image_2.jpg" alt="Profile" />
          </div>
          <div className="profile-box">
            <img src="./image_2.jpg" alt="Add new profile" />
          </div>
        </div>
      </div>
      <div className="login-form">
        <form>
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit" className="btn-login">Iniciar Sesión</button>
          <button type="button" className="btn-register">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
