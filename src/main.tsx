import { StrictMode, Component, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Random accent color at S=75%, L=50%, excluding deep blue and purple hues (200–300)
const roll = Math.floor(Math.random() * 260)
const hue = roll < 200 ? roll : roll + 100
document.documentElement.style.setProperty('--color-accent', `hsl(${hue}, 75%, 50%)`)

// Last-resort boundary: if rendering fails outside the router's own errorElement
// (or ErrorPage itself throws), bail out to the fully static 404 page.
class StaticFallbackBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: unknown) {
    console.error(error)
    window.location.replace('/404.html')
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StaticFallbackBoundary>
      <App />
    </StaticFallbackBoundary>
  </StrictMode>,
)
