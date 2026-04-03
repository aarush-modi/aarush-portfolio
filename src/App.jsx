import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Connect from './components/Connect';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Resume />
      <Connect />
    </>
  );
}

export default App;
