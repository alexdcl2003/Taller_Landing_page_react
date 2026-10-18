export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero hero-promo">
      <div className="hero-content">
        <span className="badge">Octavo Semestre | Ingeniería de Software</span>
        <h1 id="hero-title">Acelera tu Carrera con Arquitectura Web Avanzada</h1>
        <p>
          Aprende a maquetar profesionalmente, domina las reglas de accesibilidad WCAG
          y optimiza el posicionamiento SEO desde el motor del DOM.
        </p>

        <figure className="hero-banner">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
            alt="Estudiantes de ingeniería colaborando en desarrollo de software"
            width="800"
            height="450"
          />
          <figcaption>Clases en vivo y proyectos reales enfocados en código limpio.</figcaption>
        </figure>

        <a href="./registro.html" className="btn btn-primary hero-cta">
          Reserva tu cupo
        </a>
      </div>
    </section>
  );
}
