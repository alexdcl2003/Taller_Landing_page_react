import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    country: '',
    password: '',
    confirmPassword: '',
    role: '',
    terms: false,
  });
  const [feedback, setFeedback] = useState(null);

  const validateField = (name, value, data = formData) => {
    const validators = {
      name: () => value.trim().length >= 3 && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value),
      email: () => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value),
      age: () => /^\d+$/.test(value) && Number(value) >= 18 && Number(value) <= 99,
      phone: () => /^\d{10}$/.test(value),
      country: () => value.length > 0,
      password: () => value.length >= 8 && /[A-Za-záéíóúÁÉÍÓÚñÑ]/.test(value) && /\d/.test(value),
      confirmPassword: () => value === data.password,
      role: () => value.length > 0,
      terms: () => value,
    };
    const messages = {
      name: 'Ingresa tu nombre (mínimo 3 letras, solo letras y espacios).',
      email: 'Ingresa un correo electrónico válido.',
      age: 'La edad debe ser un número entero entre 18 y 99.',
      phone: 'Ingresa exactamente 10 dígitos numéricos.',
      country: 'Selecciona tu país.',
      password: 'Usa al menos 8 caracteres, incluyendo una letra y un número.',
      confirmPassword: 'Las contraseñas deben coincidir.',
      role: 'Selecciona tu nivel de experiencia.',
      terms: 'Debes aceptar las políticas de privacidad.',
    };

    return validators[name]() ? '' : messages[name];
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    const updatedData = { ...formData, [name]: fieldValue };
    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue, updatedData),
      ...(name === 'password' && Object.hasOwn(prev, 'confirmPassword')
        ? { confirmPassword: validateField('confirmPassword', formData.confirmPassword, updatedData) }
        : {}),
    }));
    setFeedback(null);
  };

  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, type === 'checkbox' ? checked : value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = Object.fromEntries(
      Object.entries(formData).map(([name, value]) => [name, validateField(name, value)]),
    );
    setErrors(formErrors);

    if (Object.values(formErrors).some(Boolean)) {
      setFeedback({
        type: 'error',
        message: 'Revisa los errores marcados en el formulario.',
      });
      return;
    }

    setFeedback({
      type: 'success',
      message: `¡Gracias, ${formData.name}! El formulario es válido. Esta demostración no envía ni almacena tus datos.`,
    });
  };

  return (
    <section id="registro" aria-labelledby="hero-title" className="hero row g-4">
      <div className="hero-content col-12 col-lg-7">
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

      <form onSubmit={handleSubmit} className="form-card col-12 col-lg-5" noValidate>
        <h2>Reserva tu cupo gratuito</h2>
        <p className="form-subtext">Únete a la siguiente cohorte de especialización web.</p>

        <div>
          <label htmlFor="user-name">Nombre completo *</label>
          <input
            className="form-control"
            type="text"
            id="user-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            minLength={3}
            maxLength={60}
            pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
            title="Solo se permiten letras y espacios."
            autoComplete="name"
            placeholder="Ej. Ana Martínez"
            aria-invalid={Boolean(errors.name)}
            aria-describedby="error-name"
          />
          {errors.name && <small id="error-name" className="field-error">{errors.name}</small>}
        </div>

        <div>
          <label htmlFor="user-email">Correo profesional o académico *</label>
          <input
            className="form-control"
            type="email"
            id="user-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            autoComplete="email"
            placeholder="ana@empresa.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby="error-email"
          />
          {errors.email && <small id="error-email" className="field-error">{errors.email}</small>}
        </div>

        <div>
          <label htmlFor="user-age">Edad (18 a 99 años) *</label>
          <input
            className="form-control"
            type="number"
            id="user-age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            onBlur={handleBlur}
            min={18}
            max={99}
            step={1}
            required
            placeholder="Ej. 20"
            aria-invalid={Boolean(errors.age)}
            aria-describedby="error-age"
          />
          {errors.age && <small id="error-age" className="field-error">{errors.age}</small>}
        </div>

        <div>
          <label htmlFor="user-phone">Teléfono celular (10 dígitos) *</label>
          <input
            className="form-control"
            type="tel"
            id="user-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            inputMode="numeric"
            title="Ingresa exactamente 10 dígitos numéricos."
            autoComplete="tel"
            placeholder="0991234567"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby="error-phone"
          />
          {errors.phone && <small id="error-phone" className="field-error">{errors.phone}</small>}
        </div>

        <div>
          <label htmlFor="user-country">País *</label>
          <select
            className="form-select"
            id="user-country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-invalid={Boolean(errors.country)}
            aria-describedby="error-country"
          >
            <option value="" disabled>Selecciona tu país</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Colombia">Colombia</option>
            <option value="Perú">Perú</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.country && <small id="error-country" className="field-error">{errors.country}</small>}
        </div>

        <div>
          <label htmlFor="user-password">Contraseña *</label>
          <input
            className="form-control"
            type="password"
            id="user-password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            minLength={8}
            autoComplete="new-password"
            required
            placeholder="Mínimo 8 caracteres, una letra y un número"
            aria-invalid={Boolean(errors.password)}
            aria-describedby="error-password"
          />
          {errors.password && <small id="error-password" className="field-error">{errors.password}</small>}
        </div>

        <div>
          <label htmlFor="user-confirm-password">Confirmar contraseña *</label>
          <input
            className="form-control"
            type="password"
            id="user-confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            minLength={8}
            autoComplete="new-password"
            required
            placeholder="Repite tu contraseña"
            aria-invalid={Boolean(errors.confirmPassword)}
            aria-describedby="error-confirm-password"
          />
          {errors.confirmPassword && <small id="error-confirm-password" className="field-error">{errors.confirmPassword}</small>}
        </div>

        <div>
          <label htmlFor="user-role">Nivel de experiencia actual *</label>
          <select
            className="form-select"
            id="user-role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-invalid={Boolean(errors.role)}
            aria-describedby="error-role"
          >
            <option value="" disabled>Selecciona tu nivel</option>
            <option value="estudiante">Estudiante Universitario</option>
            <option value="junior">Desarrollador Junior</option>
            <option value="mid">Desarrollador Mid / Senior</option>
          </select>
          {errors.role && <small id="error-role" className="field-error">{errors.role}</small>}
        </div>

        <fieldset>
          <legend>Términos y condiciones *</legend>
          <p className="checkbox-group form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms-accept"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={Boolean(errors.terms)}
              aria-describedby="error-terms"
            />
            <label htmlFor="terms-accept" className="form-check-label">
              Acepto las <a href="/politicas" target="_blank" rel="noopener">políticas de privacidad</a> y el tratamiento de mis datos personales.
            </label>
          </p>
          {errors.terms && <small id="error-terms" className="field-error">{errors.terms}</small>}
        </fieldset>

        {feedback && (
          <p
            className={`alert ${feedback.type === 'success' ? 'alert-success' : 'alert-danger'} mb-0`}
            role={feedback.type === 'error' ? 'alert' : 'status'}
            aria-live="polite"
          >
            {feedback.message}
          </p>
        )}

        <button type="submit" className="btn btn-primary">Iniciar Inscripción Directa</button>
        <small>Garantía de privacidad. Sin cargos ocultos.</small>
      </form>
    </section>
  );
}