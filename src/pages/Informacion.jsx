import React from 'react';
import { Link } from 'react-router-dom';
import './auth-pages.css';

export default function Informacion() {
  return (
    <main className="page-shell">
      <section className="page-card">
        <h1 className="page-title">Informacion</h1>
        <p className="page-text">Esta seccion resume para que sirve este proyecto y como usarlo.</p>

        <ul className="info-list">
          <li>Frontend con React y React Router.</li>
          <li>Editor de codigo con Monaco.</li>
          <li>Backend Express para leer y guardar archivos de test.</li>
          <li>Rutas principales: Home, Login, Registro, Informacion y Editor.</li>
        </ul>

        <div className="page-actions">
          <Link to="/home" className="page-btn page-btn--secondary">Volver a Home</Link>
          <Link to="/editor" className="page-btn page-btn--primary">Abrir Editor</Link>
        </div>
      </section>
    </main>
  );
}
