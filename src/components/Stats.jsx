const statsData = [
  { value: '98%', label: 'Empleabilidad Egresados' },
  { value: '100%', label: 'Proyectos Prácticos' },
  { value: 'W3C', label: 'Estándares Oficiales' },
  { value: '4.9/5', label: 'Calificación Alumnos' },
];

export default function Stats() {
  return (
    <section aria-label="Estadísticas del programa" className="stats-bar">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-item">
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}