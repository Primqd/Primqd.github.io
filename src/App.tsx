import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Games from './pages/Games';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <div className='bg-blue-500'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/games' element={<Games/>} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
