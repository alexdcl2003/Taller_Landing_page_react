import { useId, useState } from 'react';

const validationMessages = {
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

function validateField(name, value, data) {
  const validators = {
    name: (input) =>
      input.trim().length >= 3 && /^[\p{L}\s]+$/u.test(input.trim()),
    email: (input) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input),
    age: (input) =>
      /^\d+$/.test(input) && Number(input) >= 18 && Number(input) <= 99,
    phone: (input) => /^\d{10}$/.test(input),
    country: (input) => input.length > 0,
    password: (input) =>
      input.length >= 8 && /\p{L}/u.test(input) && /\d/.test(input),
    confirmPassword: (input, formData) =>
      input.length > 0 && input === formData.password,
    role: (input) => input.length > 0,
    terms: (input) => input,
  };

  return validators[name](value, data) ? '' : validationMessages[name];
}

export default function RegistrationForm({ className = 'form-card' }) {
  const id = useId();
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
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

  const fieldId = (name) => `${id}-${name}`;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    const updatedData = { ...formData, [name]: fieldValue };

    setFormData(updatedData);
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: validateField(name, fieldValue, updatedData),
      ...(name === 'password' &&
      Object.prototype.hasOwnProperty.call(previousErrors, 'confirmPassword')
        ? {
            confirmPassword: validateField(
              'confirmPassword',
              formData.confirmPassword,
              updatedData,
            ),
          }
        : {}),
    }));
    setFeedback(null);
  };

  const handleBlur = (event) => {
    const { name, value, type, checked } = event.target;
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: validateField(
        name,
        type === 'checkbox' ? checked : value,
        formData,
      ),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = Object.fromEntries(
      Object.entries(formData).map(([name, value]) => [
        name,
        validateField(name, value, formData),
      ]),
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
    <form onSubmit={handleSubmit} className={className} noValidate>
      <h2>Reserva tu cupo gratuito</h2>
      <p className="form-subtext">
        Únete a la siguiente cohorte de especialización web.
      </p>

      <div className="mb-3">
        <label htmlFor={fieldId('name')} className="form-label">
          Nombre completo *
        </label>
        <input
          className="form-control"
          type="text"
          id={fieldId('name')}
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          minLength={3}
          maxLength={60}
          autoComplete="name"
          placeholder="Ej. Ana Martínez"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? fieldId('name-error') : undefined}
        />
        {errors.name && (
          <small id={fieldId('name-error')} className="field-error text-danger" role="alert">
            {errors.name}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor={fieldId('email')} className="form-label">
          Correo profesional o académico *
        </label>
        <input
          className="form-control"
          type="email"
          id={fieldId('email')}
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          autoComplete="email"
          placeholder="ana@empresa.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? fieldId('email-error') : undefined}
        />
        {errors.email && (
          <small id={fieldId('email-error')} className="field-error text-danger" role="alert">
            {errors.email}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor={fieldId('age')} className="form-label">
          Edad (18 a 99 años) *
        </label>
        <input
          className="form-control"
          type="number"
          id={fieldId('age')}
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
          aria-describedby={errors.age ? fieldId('age-error') : undefined}
        />
        {errors.age && (
          <small id={fieldId('age-error')} className="field-error text-danger" role="alert">
            {errors.age}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor={fieldId('phone')} className="form-label">
          Teléfono celular (10 dígitos) *
        </label>
        <input
          className="form-control"
          type="tel"
          id={fieldId('phone')}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          maxLength={10}
          inputMode="numeric"
          autoComplete="tel"
          placeholder="0991234567"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? fieldId('phone-error') : undefined}
        />
        {errors.phone && (
          <small id={fieldId('phone-error')} className="field-error text-danger" role="alert">
            {errors.phone}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor={fieldId('country')} className="form-label">
          País *
        </label>
        <select
          className="form-select"
          id={fieldId('country')}
          name="country"
          value={formData.country}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-invalid={Boolean(errors.country)}
          aria-describedby={errors.country ? fieldId('country-error') : undefined}
        >
          <option value="" disabled>
            Selecciona tu país
          </option>
          <option value="Ecuador">Ecuador</option>
          <option value="Colombia">Colombia</option>
          <option value="Perú">Perú</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.country && (
          <small id={fieldId('country-error')} className="field-error text-danger" role="alert">
            {errors.country}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor={fieldId('password')} className="form-label">
          Contraseña *
        </label>
        <input
          className="form-control"
          type="password"
          id={fieldId('password')}
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          minLength={8}
          autoComplete="new-password"
          required
          placeholder="Mínimo 8 caracteres, una letra y un número"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={
            errors.password ? fieldId('password-error') : undefined
          }
        />
        {errors.password && (
          <small id={fieldId('password-error')} className="field-error text-danger" role="alert">
            {errors.password}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor={fieldId('confirmPassword')} className="form-label">
          Confirmar contraseña *
        </label>
        <input
          className="form-control"
          type="password"
          id={fieldId('confirmPassword')}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="new-password"
          required
          placeholder="Repite tu contraseña"
          aria-invalid={Boolean(errors.confirmPassword)}
          aria-describedby={
            errors.confirmPassword
              ? fieldId('confirmPassword-error')
              : undefined
          }
        />
        {errors.confirmPassword && (
          <small id={fieldId('confirmPassword-error')} className="field-error text-danger" role="alert">
            {errors.confirmPassword}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor={fieldId('role')} className="form-label">
          Nivel de experiencia actual *
        </label>
        <select
          className="form-select"
          id={fieldId('role')}
          name="role"
          value={formData.role}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-invalid={Boolean(errors.role)}
          aria-describedby={errors.role ? fieldId('role-error') : undefined}
        >
          <option value="" disabled>
            Selecciona tu nivel
          </option>
          <option value="estudiante">Estudiante Universitario</option>
          <option value="junior">Desarrollador Junior</option>
          <option value="mid">Desarrollador Mid / Senior</option>
        </select>
        {errors.role && (
          <small id={fieldId('role-error')} className="field-error text-danger" role="alert">
            {errors.role}
          </small>
        )}
      </div>

      <fieldset className="mb-3">
        <legend className="fs-6">Términos y condiciones *</legend>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={fieldId('terms')}
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-invalid={Boolean(errors.terms)}
            aria-describedby={errors.terms ? fieldId('terms-error') : undefined}
          />
          <label htmlFor={fieldId('terms')} className="form-check-label">
            Acepto las políticas de privacidad y el tratamiento de mis datos
            personales.
          </label>
        </div>
        {errors.terms && (
          <small id={fieldId('terms-error')} className="field-error text-danger" role="alert">
            {errors.terms}
          </small>
        )}
      </fieldset>

      {feedback && (
        <p
          className={`alert ${
            feedback.type === 'success' ? 'alert-success' : 'alert-danger'
          }`}
          role={feedback.type === 'error' ? 'alert' : 'status'}
          aria-live="polite"
        >
          {feedback.message}
        </p>
      )}

      <button type="submit" className="btn btn-primary">
        Iniciar inscripción
      </button>
      <small className="d-block mt-2">
        Garantía de privacidad. Sin cargos ocultos.
      </small>
    </form>
  );
}
