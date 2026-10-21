import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RegistrationPage from './RegistrationPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationPage />
  </StrictMode>,
)
