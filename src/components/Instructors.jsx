const instructors = [
  {
    name: 'Alexis David Cajamarca Largo',
    role: 'Desarrollador Frontend',
    bio: 'Enfocado en crear interfaces claras, responsivas y centradas en la experiencia del usuario.',
    initials: 'AC',
    photo: null,
  },
  {
    name: 'Eduardo Elías Alvarado Escobar',
    role: 'Desarrollador UI y Bootstrap',
    bio: 'Interesado en construir componentes reutilizables y diseños adaptables a distintos dispositivos.',
    initials: 'EA',
    photo: null,
  },
  {
    name: 'Erick Adrian Minda Granja',
    role: 'Desarrollador React',
    bio: 'Trabaja en la organización de componentes y en la integración de interacciones dinámicas.',
    initials: 'EM',
    photo: null,
  },
  {
    name: 'Steven Jose Perea Romero',
    role: 'Desarrollador Web',
    bio: 'Apoya la implementación de formularios accesibles y validaciones para una mejor experiencia.',
    initials: 'SP',
    photo: null,
  },
  {
    name: 'Gabriel Andres Asuncion Perez',
    role: 'Desarrollador de Contenido y SEO',
    bio: 'Enfocado en estructurar contenido web semántico, claro y fácil de encontrar.',
    initials: 'GA',
    photo: null,
  },
];

export default function Instructors() {
  return (
    <section id="instructores" aria-labelledby="instructores-title">
      <h2 id="instructores-title" className="section-title">
        Aprende con Expertos de la Industria
      </h2>

      <div className="instructors-grid">
        {instructors.map((prof) => (
          <article key={prof.name} className="instructor-card">
            {prof.photo ? (
              <img
                src={prof.photo}
                alt={`Fotografía de ${prof.name}`}
                className="avatar"
                width="120"
                height="120"
                loading="lazy"
              />
            ) : (
              <div
                className="avatar avatar-placeholder"
                role="img"
                aria-label={`Espacio reservado para la fotografía de ${prof.name}`}
              >
                <span className="avatar-initials" aria-hidden="true">{prof.initials}</span>
                <span className="avatar-hint" aria-hidden="true">Añadir foto</span>
              </div>
            )}
            <h3>{prof.name}</h3>
            <p className="role">{prof.role}</p>
            <p>{prof.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}