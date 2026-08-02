import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'

import Home from './pages/Home';
import { PhotoPortfolio } from './projects/photo-portfolio/PhotoPortfolio';

function App() { // wrapper for app component to use useLocation
  return <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects/photo-portfolio' element={<PhotoPortfolio />} />
    </Routes>
  </Router>
}


export default App
