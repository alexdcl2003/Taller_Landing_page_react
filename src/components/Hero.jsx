import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Inscripción recibida para ${formData.name}`);
    console.log('Datos enviados:', formData);
  };

  return (
    <section id="registro" aria-labelledby="hero-title" className="hero">
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
      </div>

      <form onSubmit={handleSubmit} className="form-card">
        <h2>Reserva tu cupo gratuito</h2>
        <p className="form-subtext">Únete a la siguiente cohorte de especialización web.</p>

        <div>
          <label htmlFor="user-name">Nombre completo *</label>
          <input
            type="text"
            id="user-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={60}
            pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
            title="Solo se permiten letras y espacios."
            autoComplete="name"
            placeholder="Ej. Ana Martínez"
          />
        </div>

        <div>
          <label htmlFor="user-email">Correo profesional o académico *</label>
          <input
            type="email"
            id="user-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="ana@empresa.com"
          />
        </div>

        <div>
          <label htmlFor="user-phone">Teléfono celular (10 dígitos) *</label>
          <input
            type="tel"
            id="user-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Ingresa exactamente 10 dígitos numéricos."
            autoComplete="tel"
            placeholder="0991234567"
          />
        </div>

        <div>
          <label htmlFor="user-role">Nivel de experiencia actual *</label>
          <select
            id="user-role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecciona tu nivel</option>
            <option value="estudiante">Estudiante Universitario</option>
            <option value="junior">Desarrollador Junior</option>
            <option value="mid">Desarrollador Mid / Senior</option>
          </select>
        </div>

        <fieldset>
          <legend>Términos y condiciones *</legend>
          <p className="checkbox-group">
            <input
              type="checkbox"
              id="terms-accept"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms-accept">
              Acepto las <a href="/politicas" target="_blank" rel="noopener">políticas de privacidad</a> y el tratamiento de mis datos personales.
            </label>
          </p>
        </fieldset>

        <button type="submit">Iniciar Inscripción Directa</button>
        <small>Garantía de privacidad. Sin cargos ocultos.</small>
      </form>
    </section>
  );
}