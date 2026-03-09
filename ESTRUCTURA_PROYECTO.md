# Estructura y funcionamiento del proyecto

## 1. Estructura general

```text
.git-academy/
|-- index.js                  # Backend Express (API de lectura/escritura)
|-- package.json              # Dependencias y script de arranque
|-- craco.config.js           # Ajustes de webpack via CRACO (aliases, css modules)
|-- webpack.config.js         # Configuracion webpack adicional
|-- README.md
|-- public/
|   `-- index.html            # HTML base donde se monta React
`-- src/
    |-- index.jsx             # Entrada principal de React + rutas
    |-- style.css             # Estilos globales
    |-- home/
    |   |-- Home.jsx          # Vista Home
    |   `-- home.css          # Estilos de Home
    `-- editor/
        |-- index.jsx         # Layout del editor + preview en iframe
        |-- Editor.jsx        # Monaco editor + guardado/carga
        |-- index.module.css
        |-- test.jsx
        `-- test/
            `-- 001/
                |-- index.jsx
                |-- index.js
                `-- style.css
```

## 2. Como arranca el proyecto

En `package.json` tienes:

```json
"start": "concurrently \"craco start\" \"nodemon index\""
```

Eso levanta 2 procesos a la vez:

1. Frontend React con CRACO (normalmente en `http://localhost:3000`).
2. Backend Express con Nodemon (en `http://localhost:3002`).

## 3. Flujo del frontend (React)

Archivo clave: `src/index.jsx`.

- Crea el root con `createRoot(...)`.
- Monta `BrowserRouter`.
- Define rutas:

1. `/home` -> renderiza `Home`.
2. `/` -> redirige a `/home`.
3. `/editor` -> renderiza el editor principal.
4. `/test/*` -> renderiza la zona de test.

En resumen: cuando entras a `http://localhost:3000/home`, React muestra `src/home/Home.jsx`.

## 4. Que hace la pantalla Home

`src/home/Home.jsx` es una landing simple con botones de navegacion:

1. Boton a `/editor` para abrir el editor.
2. Boton a `/test` para ir al entorno de test.

Los estilos de esa pantalla estan en `src/home/home.css`.

## 5. Como funciona el editor

### `src/editor/index.jsx`

- Divide la pantalla en dos columnas:
1. Izquierda: componente `Editor` (Monaco).
2. Derecha: `iframe` que carga `src={`/test/${test}`}`.

Con el estado `test = '001'`, el iframe apunta a `/test/001`.

### `src/editor/Editor.jsx`

Este componente:

1. Carga archivos de test (`index.jsx`, `style.css`, `index.js`) desde el backend.
2. Permite editarlos en Monaco.
3. Guarda cambios al backend (`PUT /api/test`).
4. Captura `Ctrl+S` para guardar rapido.

## 6. Flujo del backend (Express)

Archivo clave: `index.js`.

API en puerto `3002`:

1. `POST /api/test/`
Recibe rutas de archivos y devuelve su contenido.

2. `PUT /api/test`
Recibe arrays `paths` + `content` y escribe cambios en disco dentro de:
`./src/editor/test/...`

Esto permite que el editor web lea y modifique archivos reales del proyecto.

## 7. Relacion frontend-backend

1. Frontend en `3000` muestra UI (Home, Editor, Test).
2. Frontend llama al backend en `3002` para leer/escribir archivos.
3. El backend toca los archivos dentro de `src/editor/test/001`.
4. El iframe de `/test/...` refleja esos cambios en la vista previa.

## 8. Ruta que estabas pidiendo

Tu Home esta en:

`http://localhost:3000/home`

Y la app redirige `/` -> `/home`.

## 9. Comandos utiles

```bash
npm install --legacy-peer-deps
npm start
```

Si aparece conflicto de puertos, cierra procesos que usen `3000` o `3002` y vuelve a ejecutar `npm start`.
