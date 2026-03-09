import React from 'react';
import { Link } from 'react-router-dom';
import './auth-pages.css';

export default function Login() {
  return (
    <main className="page-shell">
      <section className="page-card">
        <h1 className="page-title">Iniciar sesion</h1>
        <p className="page-text">Accede a tu cuenta para continuar en la plataforma.</p>

        <form className="page-form" onSubmit={(event) => event.preventDefault()}>
          <div className="page-field">
            <label className="page-label" htmlFor="login-email">Correo electronico</label>
            <input id="login-email" className="page-input" type="email" placeholder="tu@email.com" />
          </div>

          <div className="page-field">
            <label className="page-label" htmlFor="login-password">Contrasena</label>
            <input id="login-password" className="page-input" type="password" placeholder="********" />
          </div>

          <button type="submit" className="page-btn page-btn--primary">Entrar</button>
        </form>

        <div className="page-actions">
          <Link to="/home" className="page-btn page-btn--secondary">Volver a Home</Link>
          <Link to="/registro" className="page-btn page-btn--secondary">Ir a Registro</Link>
        </div>
      </section>
    </main>
  );
}
