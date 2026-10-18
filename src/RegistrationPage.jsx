import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';

export default function RegistrationPage() {
  return (
    <>
      <Header />
      <main className="registration-main">
        <section className="registration-intro" aria-labelledby="registration-title">
          <span className="badge">Arquitectura Web Avanzada</span>
          <h1 id="registration-title">Inscripción al programa</h1>
          <p>Completa tus datos para unirte a la siguiente cohorte.</p>
        </section>
        <RegistrationForm className="form-card registration-form" />
      </main>
      <footer className="registration-footer">
        <p>&copy; 2026 Tech Academy. Formación práctica en desarrollo web.</p>
        <a href="./index.html">Volver a la página principal</a>
      </footer>
    </>
  );
}
