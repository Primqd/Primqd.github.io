import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Random accent color at S=75%, L=50%, excluding deep blue and purple hues (200–300)
const roll = Math.floor(Math.random() * 260)
const hue = roll < 200 ? roll : roll + 100
document.documentElement.style.setProperty('--color-accent', `hsl(${hue}, 75%, 50%)`)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
