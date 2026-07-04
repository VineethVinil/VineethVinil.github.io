import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Freelance } from './components/sections/Freelance';
import { Gallery } from './components/sections/Gallery';
import { MusicIdentity } from './components/sections/MusicIdentity';
import { Testimonials } from './components/sections/Testimonials';
import { Socials } from './components/sections/Socials';
import { Contact } from './components/sections/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="film-grain" />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Skills />
        <Education />
        <Freelance />
        <Gallery />
        <MusicIdentity />
        <Testimonials />
        <Socials />
      </main>

      <Contact />
    </>
  );
}

export default App;
