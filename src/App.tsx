import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Games from './pages/Games';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/games' element={<Games/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
