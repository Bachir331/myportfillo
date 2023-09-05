import React from "react";
import './App.css';

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import Project from "./Pages/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {



  return (
    <div>

<BrowserRouter>
<Navbar />

      <Routes>
        <Route >
      
        <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
       
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
        </Route>
        
        </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App; 

