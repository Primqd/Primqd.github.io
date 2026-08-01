import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './index.css'

import Home from './pages/Home';
import { Games } from './pages/Games';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { PhotoPortfolio } from './projects/photo-portfolio/PhotoPortfolio';

function App() { // wrapper for app component to use useLocation
  return <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games' element={<Games />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/photo-portfolio' element={<PhotoPortfolio />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </Router>
}


export default App
