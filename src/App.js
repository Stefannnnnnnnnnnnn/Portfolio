import React from 'react';

// Import global styles
import './styles/variables.css';
import './styles/animations.css';
import './styles/global.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main>
        <Hero />      
        <About />     
        <Projects />  
        <Contact />  
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Stefan Oliver Borja. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;