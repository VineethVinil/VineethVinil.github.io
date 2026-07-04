import { motion } from 'framer-motion';
import { ArrowRight, Music } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with abstract piano keys/cinematic lighting effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-bg opacity-90 z-10" />
        <div 
          className="absolute inset-0 bg-[url('Photos/Bg.png')] 
          bg-cover bg-center bg-no-repeat opacity-100" 
        />
        {/* Soft lighting effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent-blue/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent-purple/20 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent-blue/30 bg-brand-accent-blue/5 backdrop-blur-md mb-8"
        >
          <Music size={14} className="text-brand-accent-blue" />
          <span className="text-xs font-medium tracking-widest text-brand-accent-blue uppercase">
            7+ Years of Professional Keyboard Experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-9xl font-['quivert'] font-bold text-white mb-6 text-glow"
        >
          Vineeth Vinil T 
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-md md:text-2xl font-light text-brand-secondary tracking-wide mb-8 max-w-2xl"
        >
          Keyboard Artist • Music Producer • Live Performer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-brand-secondary max-w-xl text-lg mb-12"
        >
          Crafting unforgettable musical experiences through live performance, music arrangement, and production.
        </motion.p>

        {/* Animated Equalizer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-end justify-center gap-1.5 h-16 mb-8"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-1.5 bg-brand-accent-blue rounded-t-sm equalizer-bar opacity-60" />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a
            href="#gallery"
            onClick={(e) => { e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-4 bg-white text-brand-bg font-semibold rounded-full hover:bg-brand-accent-blue transition-colors duration-300 flex items-center gap-2 group"
          >
            View Portfolio
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 backdrop-blur-md"
          >
            Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
