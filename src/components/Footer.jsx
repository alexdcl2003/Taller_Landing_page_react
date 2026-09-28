export default function Footer() {
  return (
    <>
      <aside aria-label="Información complementaria" className="newsletter-aside">
        <h2>¿Quieres recibir guías de estudio gratuitas?</h2>
        <p>Suscríbete a nuestro boletín semanal de desarrollo web y estándares del W3C.</p>
        <a href="#registro" className="cta-button-alt">Ir al Formulario</a>
      </aside>

      <footer>
        <p>&copy; 2026 Tech Academy. Taller de Desarrollo Web - Octavo Semestre de Ingeniería de Software.</p>
        <nav aria-label="Enlaces legales del pie de página">
          <ul>
            <li><a href="/privacidad">Política de Privacidad</a></li>
            <li><a href="/terminos">Términos de Servicio</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </footer>
    </>
  );
}