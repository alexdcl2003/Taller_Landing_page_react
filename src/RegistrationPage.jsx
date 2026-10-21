import RegistrationForm from './components/RegistrationForm.jsx'

const pageStyles = `
  .registration-page {
    --academy-blue: #0b3d91;
    --academy-blue-dark: #082d6b;
    --academy-sky: #eaf3ff;
    min-height: 100svh;
    background: var(--academy-sky);
    color: #1f2937;
  }

  .registration-header {
    background: var(--academy-blue);
    color: #fff;
  }

  .registration-header .brand {
    color: #fff;
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-decoration: none;
  }

  .registration-header .brand-mark {
    display: inline-grid;
    width: 2rem;
    height: 2rem;
    margin-right: 0.6rem;
    place-items: center;
    border: 2px solid #fff;
    border-radius: 50%;
    font-size: 0.85rem;
  }

  .registration-header .back-link {
    color: #dceaff;
    text-decoration: none;
  }

  .registration-header .back-link:hover,
  .registration-header .back-link:focus-visible {
    color: #fff;
    text-decoration: underline;
  }

  .registration-intro {
    max-width: 42rem;
  }

  .registration-intro h1 {
    color: var(--academy-blue-dark);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .registration-card {
    max-width: 54rem;
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 1rem 2.5rem rgba(8, 45, 107, 0.14);
  }

  .registration-form {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 1.25rem;
  }

  .registration-form > h2,
  .registration-form > .form-subtext,
  .registration-form > fieldset,
  .registration-form > .alert,
  .registration-form > button,
  .registration-form > small {
    grid-column: 1 / -1;
  }

  .registration-form > h2 {
    color: var(--academy-blue-dark);
    font-size: 1.5rem;
  }

  .registration-form .btn-primary {
    background-color: var(--academy-blue);
    border-color: var(--academy-blue);
  }

  .registration-form .btn-primary:hover,
  .registration-form .btn-primary:focus-visible {
    background-color: var(--academy-blue-dark);
    border-color: var(--academy-blue-dark);
  }

  @media (max-width: 767.98px) {
    .registration-form {
      grid-template-columns: 1fr;
    }
  }
`

export default function RegistrationPage() {
  return (
    <div className="registration-page">
      <style>{pageStyles}</style>
      <header className="registration-header">
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
          <a className="brand" href="index.html">
            <span className="brand-mark" aria-hidden="true">
              TA
            </span>
            Tech Academy
          </a>
          <a className="back-link" href="index.html">
            Volver a la página principal
          </a>
        </div>
      </header>

      <main className="container py-5">
        <div className="registration-intro mx-auto mb-4 text-center">
          <h1>Da el siguiente paso en tu carrera digital</h1>
          <p className="lead mb-0">
            Completa tu inscripción para reservar un lugar en la próxima cohorte
            de Tech Academy.
          </p>
        </div>

        <div className="registration-card card mx-auto">
          <div className="card-body p-4 p-md-5">
            <RegistrationForm className="registration-form" />
          </div>
        </div>
      </main>
    </div>
  )
}
