const faqs = [
  {
    q: '¿Se requiere experiencia previa en programación?',
    a: 'Es recomendable tener conocimientos básicos de computación y lógica. El curso inicia con los fundamentos de estructura semántica y avanza hasta niveles profesionales de ingeniería web.',
  },
  {
    q: '¿Qué certificación obtendré al finalizar?',
    a: 'Al aprobar los talleres prácticos, recibirás un certificado digital verificable en "Arquitectura y Semántica Web Avanzada" avalado por Tech Academy.',
  },
  {
    q: '¿El curso incluye las normas de accesibilidad gubernamentales?',
    a: 'Sí, cubrimos los estándares WCAG 2.1 niveles A y AA necesarios para cumplir con normativas internacionales y locales de accesibilidad digital.',
  },
];

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="faq-section">
      <h2 id="faq-title" className="section-title">Preguntas Frecuentes</h2>

      {faqs.map((faq, index) => (
        <details key={index}>
          <summary>{faq.q}</summary>
          <p>{faq.a}</p>
        </details>
      ))}
    </section>
  );
}