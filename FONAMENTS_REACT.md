# Fonaments de React

## Què és React?
React és una llibreria de JavaScript per construir interfícies d'usuari (UI) basades en components reutilitzables.

## Conceptes clau

### 1. Components
Un component és una peça d'interfície independent.

```jsx
function Salutacio() {
  return <h1>Hola, món!</h1>;
}
```

### 2. JSX
JSX permet escriure codi semblant a HTML dins de JavaScript.

```jsx
const element = <p>Això és JSX</p>;
```

### 3. Props
Les `props` són dades que un component pare passa a un component fill.

```jsx
function Salutacio({ nom }) {
  return <h2>Hola, {nom}</h2>;
}

<Salutacio nom="Marc" />
```

### 4. State
L'`state` és informació interna d'un component que pot canviar amb el temps.

```jsx
import { useState } from "react";

function Comptador() {
  const [compt, setCompt] = useState(0);

  return (
    <button onClick={() => setCompt(compt + 1)}>
      Comptador: {compt}
    </button>
  );
}
```

### 5. Hooks bàsics
- `useState`: gestiona estat local.
- `useEffect`: executa efectes secundaris (peticions, subscripcions, timers, etc.).

```jsx
import { useEffect, useState } from "react";

function ExempleEffecte() {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    console.log("El valor ha canviat:", valor);
  }, [valor]);

  return <button onClick={() => setValor(valor + 1)}>Sumar</button>;
}
```

### 6. Esdeveniments
En React, els esdeveniments s'escriuen en camelCase.

```jsx
<button onClick={gestionaClick}>Clica'm</button>
```

### 7. Renderitzat de llistes
Per mostrar col·leccions, fes servir `.map()` i una `key` única.

```jsx
const usuaris = ["Anna", "Pau", "Júlia"];

<ul>
  {usuaris.map((u) => (
    <li key={u}>{u}</li>
  ))}
</ul>
```

### 8. Renderitzat condicional
Pots renderitzar elements segons condicions.

```jsx
{estaLogat ? <p>Benvingut!</p> : <p>Inicia sessió</p>}
```

## Flux de dades
React segueix principalment un flux de dades unidireccional:
- Pare -> Fill via `props`
- Els fills notifiquen canvis via funcions callback

## Estructura típica d'una app React
- `src/index.jsx`: punt d'entrada
- `App.jsx`: component principal
- Components dins carpetes pròpies (`components/`, `editor/`, etc.)

## Bones pràctiques inicials
- Crea components petits i reutilitzables.
- Evita duplicar estat innecessàriament.
- Posa noms clars a variables i components.
- Mantén separats la lògica i l'estil.
- Fes servir `key` estable en llistes.

## Passos següents recomanats
1. Practicar components + props.
2. Fer un mini projecte amb `useState`.
3. Afegir `useEffect` amb una crida a API.
4. Aprendre React Router i Context API.
