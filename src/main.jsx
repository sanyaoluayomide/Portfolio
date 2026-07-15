import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css";
import App from './App.jsx'
import "@fontsource/space-grotesk";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
