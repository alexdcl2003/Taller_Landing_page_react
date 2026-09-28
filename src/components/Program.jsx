const modules = [
  {
    tag: 'Módulo 1',
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=80',
    alt: 'Estructura de código en pantalla',
    title: 'Semántica y Arquitectura DOM',
    desc: 'Aprende a estructurar documentos web limpios sin "divitis", optimizando el árbol del DOM para motores de búsqueda y tecnologías de asistencia.',
  },
  {
    tag: 'Módulo 2',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80',
    alt: 'Panel de analítica y rendimiento web',
    title: 'SEO Técnico y Performance',
    desc: 'Configura Open Graph, datos estructurados Schema.org, metadatos dinámicos y mejora la velocidad según las métricas Core Web Vitals.',
  },
  {
    tag: 'Módulo 3',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&auto=format&fit=crop&q=80',
    alt: 'Persona usando lector de pantalla y teclado adaptado',
    title: 'Accesibilidad Web (A11y)',
    desc: 'Aplica las directrices WCAG 2.1, etiquetas ARIA, manejo correcto del foco del teclado y pruebas interactivas con lectores de pantalla.',
  },
];

export default function Program() {
  return (
    <section id="programa" aria-labelledby="programa-title">
      <h2 id="programa-title" className="section-title">
        ¿Qué Vas a Dominar en este Programa?
      </h2>

      <div className="grid-cards">
        {modules.map((item, index) => (
          <article key={index} className="card">
            <figure>
              <img
                src={item.img}
                alt={item.alt}
                width="500"
                height="300"
                loading="lazy"
              />
              <figcaption>{item.tag}</figcaption>
            </figure>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}