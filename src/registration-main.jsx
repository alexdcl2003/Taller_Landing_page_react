import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './root.css';
import './index.css';
import RegistrationPage from './RegistrationPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationPage />
  </StrictMode>,
);
