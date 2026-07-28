import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './index.css'

import { WebsiteNavbar } from './components/Navbar';

import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { PhotoPortfolio } from './projects/photo-portfolio/PhotoPortfolio';

const HideNavbarPages = [ // pages to hide navbar
  "/projects/photo-portfolio"
]

function AppWrapper() { // wrapper for app component to use useLocation
  return <>
    {!HideNavbarPages.includes(useLocation().pathname) && <WebsiteNavbar />} {/*Hides the navbar if the current path is part of HideNavbarPages*/}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games' element={<Games />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/photo-portfolio' element={<PhotoPortfolio />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </>
}
var viewBorders = true;

function App() { 
  return ( 
    <div className={`bg-dark-primary text-dark-text-highlight min-h-screen min-w-screen flex justify-center flex-col lg:flex-row pt-10 px-10 ${viewBorders ? "border-amber-100 border-1" : ""}`}> 
      <div className={`w-full lg:w-1/2 lg:max-w-2xl flex-col ${viewBorders ? "border-amber-100 border-1" : ""}`}> 
        <h1 className={`font-bold text-5xl p-2 ${viewBorders ? "border-amber-500 border-1" : ""}`}> 
          Franklin Chen 
        </h1> 
        <h2 className={`font-semibold text-xl p-2 ${viewBorders ? "border-amber-500 border-1" : ""}`}> 
          Student Programmer and Future Engineer 
        </h2> 
        <p className={`p-2 ${viewBorders ? "border-amber-100 border-1" : ""}`}> 
          I want to do cool things. 
        </p> 
      </div> 
      <div className={`w-full lg:w-1/2 lg:max-w-2xl ${viewBorders ? "border-amber-100 border-1" : ""} space-y-4`}> 
        <p className={`${viewBorders ? "border-b-cyan-600 border-1" : ""}`}>
          Hi there! I'm Franklin, and I like trying new things, whether that's new software, cutting-edge AI models, or a new cooking recipe.
          I'm a high schooler with a growing focus on software and hardware, and I care about understanding things from first principles, often leading myself through new subjects.
        </p>
        
        <p className={`${viewBorders ? "border-b-cyan-600 border-1" : ""}`}>
          Currently, I'm a STEAM Facilitator at Steamoji, where I help kids get their first real hands-on experience with tools like Python, TinkerCAD, and Onshape.
          
          I like guiding students through projects where they build something themselves and walk away a little more confident that they can figure things out.
        </p>
        
        <p className={`${viewBorders ? "border-b-cyan-600 border-1" : ""}`}>
          Outside of that, I spend a lot of time on competitive programming: I've hit USACO Silver, kept a 300+ day LeetCode streak, and peaked at 1777 ELO.
          
          I also enjoy  and this past summer I dug into chip design through MIT's Beaver Works Summer Institute, learning the PCB-to-ASIC flow and building Verilog modules for a capstone project.
          
          I also build things for fun: a personal site with React and TailwindCSS, a full month of Advent of Code solutions in Python, and a Godot game called Tetris Tower that a classmate and I built for Washington TSA, where we placed second in semifinals.
        </p>
        
        <p className={`${viewBorders ? "border-b-cyan-600 border-1" : ""}`}>
          In my spare time, you can usually find me grinding LeetCode problems, tinkering with a new project idea, or seeing how far I can push a self-study rabbit hole in linear algebra or ASIC design.
        </p>
      </div> 
    </div> 
  ) 
}


export default App
