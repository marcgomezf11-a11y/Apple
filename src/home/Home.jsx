import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <main className="home">
      <section className="home__card">
        <p className="home__eyebrow">Git Academy</p>
        <h1 className="home__title">Bienvenido al Home</h1>
        <p className="home__text">
          Esta es la pagina principal en una ruta independiente para que puedas compartirla facilmente.
        </p>
        <div className="home__actions">
          <Link to="/editor" className="home__btn home__btn--primary">Abrir editor</Link>
          <Link to="/login" className="home__btn home__btn--ghost">Login</Link>
          <Link to="/registro" className="home__btn home__btn--ghost">Registro</Link>
          <Link to="/informacion" className="home__btn home__btn--ghost">Informacion</Link>
          <Link to="/test" className="home__btn home__btn--ghost">Ir a test</Link>
        </div>
      </section>
    </main>
  );
}
