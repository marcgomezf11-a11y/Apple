import React from 'react';
import { Link } from 'react-router-dom';
import './auth-pages.css';

export default function Registro() {
  return (
    <main className="page-shell">
      <section className="page-card">
        <h1 className="page-title">Registro</h1>
        <p className="page-text">Crea una cuenta nueva para empezar a usar la aplicacion.</p>

        <form className="page-form" onSubmit={(event) => event.preventDefault()}>
          <div className="page-field">
            <label className="page-label" htmlFor="register-name">Nombre</label>
            <input id="register-name" className="page-input" type="text" placeholder="Tu nombre" />
          </div>

          <div className="page-field">
            <label className="page-label" htmlFor="register-email">Correo electronico</label>
            <input id="register-email" className="page-input" type="email" placeholder="tu@email.com" />
          </div>

          <div className="page-field">
            <label className="page-label" htmlFor="register-password">Contrasena</label>
            <input id="register-password" className="page-input" type="password" placeholder="********" />
          </div>

          <button type="submit" className="page-btn page-btn--primary">Crear cuenta</button>
        </form>

        <div className="page-actions">
          <Link to="/home" className="page-btn page-btn--secondary">Volver a Home</Link>
          <Link to="/login" className="page-btn page-btn--secondary">Ir a Login</Link>
        </div>
      </section>
    </main>
  );
}
