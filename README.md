# Tech Academy - Landing Page

Landing page para promocionar el programa de Arquitectura Web Avanzada. Proyecto académico de la práctica de Desarrollo Web, construido con React y Bootstrap.

## Tecnologías

- React 19 y JSX
- Bootstrap 5.3
- Vite
- CSS propio para complementar el diseño

## Funcionalidades

- Interfaz organizada en componentes para navegación, presentación, estadísticas, programa, instructores, preguntas frecuentes y pie de página.
- Diseño adaptable a pantallas móviles y de escritorio, con grillas y utilidades de Bootstrap.
- Formulario controlado con `useState`, eventos de cambio y envío, y validación de nombre, correo, teléfono, nivel de experiencia y aceptación de términos.
- Mensajes accesibles de error y confirmación dentro del formulario.
- El formulario es demostrativo: valida los datos en el navegador, pero no los envía ni los almacena en un servidor.

## Ejecución local

Requiere Node.js y npm.

```bash
npm ci
npm run dev
```

Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

Verificaciones de calidad:

```bash
npm run lint
```

## Estructura

- `src/App.jsx`: composición de las secciones de la landing page.
- `src/components/`: componentes funcionales de la interfaz.
- `src/index.css` y `src/root.css`: estilos responsivos y variables visuales.
- `public/`: recursos públicos.

## Repositorio

[GitHub: Taller_Landing_page_react](https://github.com/alexdcl2003/Taller_Landing_page_react)

El enlace al video demostrativo de Google Drive debe incluirse en el PDF de entrega una vez que el video esté publicado y tenga permisos de visualización.
