import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render( // '!' guarantees to Typrescript that the element wont be null.
  <StrictMode>
    <App />
  </StrictMode>,
)
