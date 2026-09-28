export default function Header() {
  return (
    <header>
      <a href="/" aria-label="Inicio de Tech Academy">
        <svg width="180" height="40" viewBox="0 0 180 40" aria-hidden="true">
          <rect x="0" y="4" width="32" height="32" rx="8" fill="#0284c7" />
          <path
            d="M9 15L4 20L9 25M23 15L28 20L23 25M18 13L14 27"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <text x="40" y="26" fontFamily="sans-serif" fontWeight="800" fontSize="19" fill="#0f172a">
            Tech
          </text>
          <text x="88" y="26" fontFamily="sans-serif" fontWeight="400" fontSize="19" fill="#0284c7">
            Academy
          </text>
        </svg>
      </a>
      <nav aria-label="Navegación principal">
        <ul>
          <li><a href="#programa">Programa</a></li>
          <li><a href="#instructores">Instructores</a></li>
          <li><a href="#faq">Preguntas</a></li>
          <li><a href="#registro" className="nav-cta">Inscribirse</a></li>
        </ul>
      </nav>
    </header>
  );
}