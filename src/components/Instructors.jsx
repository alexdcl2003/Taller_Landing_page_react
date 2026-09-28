const instructors = [
  {
    name: 'Ing. Sofía Ramos',
    role: 'Lead Frontend Architect',
    bio: 'Especialista en accesibilidad web y sistemas de diseño a escala para empresas internacionales.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
  },
  {
    name: 'Msc. Carlos Mendoza',
    role: 'Consultor SEO Técnico',
    bio: 'Más de 10 años optimizando el rendimiento de plataformas de alto tráfico y arquitecturas Web.',
    img: '/src/assets/avatar.jpeg',
  },
];

export default function Instructors() {
  return (
    <section id="instructores" aria-labelledby="instructores-title">
      <h2 id="instructores-title" className="section-title">
        Aprende con Expertos de la Industria
      </h2>

      <div className="instructors-grid">
        {instructors.map((prof, index) => (
          <article key={index} className="instructor-card">
            <img
              src={prof.img}
              alt={`Fotografía de ${prof.name}`}
              className="avatar"
              width="120"
              height="120"
              loading="lazy"
            />
            <h3>{prof.name}</h3>
            <p className="role">{prof.role}</p>
            <p>{prof.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}