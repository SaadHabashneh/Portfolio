import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'

const App = () => {

  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
};

export default App;
