import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './style.css'

import Editor from './editor'
import Home from './home/Home'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Informacion from './pages/Informacion'

import Test from './editor/test/001/index.jsx'


const root = createRoot(document.getElementById("app"));

const Layout = () => {
  return (
    <div>

          <BrowserRouter>
            <Routes>
              <Route
                path="/home"
                element={<Home />}
              />
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route
                path="/editor"
                element={<Editor />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/informacion" element={<Informacion />} />
              <Route path="/test/*" element={<Test />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
};

root.render(<Layout />);
