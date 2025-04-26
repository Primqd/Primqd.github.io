import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css'

import { Navbar } from './components/Navbar';

import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { PhotoPortfolio } from './projects/photo-portfolio/portfolio';

const HideNavbarPages = [ // pages to hide navbar
  "/projects/photo-portfolio"
]

function AppWrapper() { // wrapper for app component to use useLocation
  return <>
    {!HideNavbarPages.includes(useLocation().pathname) && <Navbar />} {/*Hides the navbar if the current path is part of HideNavbarPages */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games' element={<Games />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/photo-portfolio' element={<PhotoPortfolio />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </>
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  )
}

export default App
