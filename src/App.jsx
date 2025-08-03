import React, { useState, useEffect, useCallback } from 'react';
import Loading from './components/Loading';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from './particles-config';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './components/Header.css';
import './components/Home.css';
import './components/About.css';
import './components/Projects.css';
import './components/Contact.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // Corresponds to the loading animation duration
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Particles
        id="tsparticles"
        options={particlesConfig}
        init={particlesInit}
        style={{
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
