import { Manizales } from "../atoms/Manizales";

import "./Home.css";

export const Home = () => {
  return (
    <section className="manizales-section">
      <div className="manizales-text">
        <h1>En</h1>
        <h1>Manizales</h1>
        <h1>Ven y Sales</h1>
        <p>
          Prepárate para vivir momentos únicos en los spots más cool de
          Manizales. ¡La ciudad te espera!
        </p>
        <button className="cta-button">Comenzar</button> {/* Botón añadido */}
      </div>
      <div className="manizales-image">
        <Manizales />
      </div>
    </section>
  );
};
