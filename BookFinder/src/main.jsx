import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GetApi from './Api.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GetApi></GetApi>
  </StrictMode>,
)
