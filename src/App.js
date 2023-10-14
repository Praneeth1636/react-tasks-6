import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Clubs from './components/Clubs';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      
      <Projects />
      <Clubs />
      <Contact />
    </div>
  );
}

export default App;
