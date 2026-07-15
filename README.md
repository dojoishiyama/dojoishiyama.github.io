# Dojo Katsuya Ishiyama — web app

App del Dojo Katsuya Ishiyama (Altos de la Laguna, Maldonado, Uruguay).
Centro de Artes Marciales y Salud Integral: Karate Shotokan, Jiu-Jitsu Brasilero,
Boxeo Femenino, Yoga, Meditación y Masajes.

## Qué es

Sitio estático + PWA. Sin backend, sin base de datos, sin costos de servidor.
Las consultas e inscripciones salen por WhatsApp con mensaje pre-armado.

- `index.html` — toda la app (contenido, estilos y lógica)
- `img/` — fotos e íconos
- `manifest.webmanifest` + `sw.js` — hacen que se pueda instalar en el celular
  ("agregar a pantalla de inicio") y que abra sin conexión

## Cómo actualizar contenido

Horarios, precios y textos viven como datos dentro de `index.html`
(buscar `DISCIPLINAS`, `CLASES`, `LIBROS`, `GLOSARIO`). Editar, guardar y volver
a subir el archivo: GitHub Pages publica el cambio solo en 1-2 minutos.

## Publicación

Hosteado con GitHub Pages desde este repositorio (Settings → Pages → main).
