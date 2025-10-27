# Baby Shower — Invitación móvil (single-file)

Página de invitación mobile-first, scroll narrativo con un astronauta que desciende entre secciones.

Cómo usar

- Abre `index.html` en tu teléfono o en el navegador (mejor en servidor local para evitar restricciones de archivos). Puedes arrastrar el archivo a tu navegador o usar un pequeño servidor (ej. `npx serve` o `python -m http.server 3000`).

Estructura

- `index.html` — Página principal (mobile-first)
- `styles.css` — Estilos y tema
- `script.js` — Lógica de scroll y toggles
- `assets/*` — SVGs ligeros (astronauta, regalo, estrellas, luna)

Notas y siguientes pasos recomendados

- Para transformar a React/Next.js: mover la estructura de `index.html` a componentes y usar `useEffect` para el scroll handler o `framer-motion` `useScroll` para animaciones declarativas.
- Añadir enlaces reales de Google Maps y Google Forms.
- Reemplazar SVGs placeholder por ilustraciones optimizadas (exportar como SVGs minificados).
- Opcional: añadir una pequeña backend para RSVP o integrar directamente Google Forms/Sheet.

Colores/Tipografía utilizados

- Azul marino profundo (#0D1B2A)
- Azul brillante (#1E3A8A)
- Plata suave (#E5E7EB)
- Dorado pastel (#FBBF24)
- Tipografías: Nunito / Poppins (Google Fonts)

Si querés, puedo convertir esto ahora mismo a un pequeño proyecto en React + Vite con Framer Motion y componentes reutilizables (toma ~10-15 min). ¿Querés que lo haga?