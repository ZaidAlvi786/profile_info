import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home/home';
import Intro from './Components/intro';
import About from './Components/about';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
