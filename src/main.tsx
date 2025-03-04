import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

createRoot(document.getElementById('root')!).render( // '!' guarantees to Typrescript that the element wont be null.
  <StrictMode>
    <App />
  </StrictMode>,
)
