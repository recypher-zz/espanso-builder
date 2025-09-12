import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Modal from "react-modal";
import './index.css' // Make sure this imports the Tailwind CSS
import App from './App.jsx'

Modal.setAppElement("#root");

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
        <App />
    </StrictMode>
  </BrowserRouter>
)
