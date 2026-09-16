# Portfolio

Sitio personal hecho con React + TypeScript + Vite.

## Correrlo en tu compu

```bash
npm install
npm run dev
```

Abrí http://localhost:5173

## Qué editar

Todo el contenido está en `src/data.ts`:

1. Completá los campos con `TODO`: nombre, WhatsApp, mail, LinkedIn y GitHub.
2. Agregá capturas en `public/capturas/` (por ejemplo `cremua.png`) y poné la ruta
   en el campo `captura` de cada proyecto: `captura: "/capturas/cremua.png"`.
   Antes de subirlas, tapá datos reales de clientes, precios internos o nombres de usuarios.
3. Cuando tengas testimonios, agregalos en `testimonios`. Si la lista está vacía, la sección no aparece.

Los estilos están en `src/styles.css` (colores en `:root`).

## Subirlo a Vercel (gratis)

1. Subí la carpeta a un repositorio nuevo de GitHub.
2. Entrá a vercel.com, iniciá sesión con GitHub y elegí "Add New > Project".
3. Seleccioná el repo. Vercel detecta Vite solo: dejá todo como está y dale a "Deploy".
4. Cada `git push` actualiza el sitio automáticamente.
