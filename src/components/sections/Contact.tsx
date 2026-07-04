import { motion } from 'framer-motion';
import { MapPin, Languages, Mail } from 'lucide-react';

export function Contact() {
  return (
    <footer id="contact" className="relative bg-brand-card/30 border-t border-white/5 pt-32 pb-12 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-accent-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Let's Create <br />
              <span className="text-glow text-brand-accent-blue">Something Extraordinary.</span>
            </h2>
            <p className="text-brand-secondary text-lg max-w-md mb-8">
              Open for live performances, studio sessions, and music arrangements.
            </p>
            
            <a 
              href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=vineethvinil200@gmail.com" target="_blank" title="Mail"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-accent-blue text-brand-bg font-bold rounded-full hover:bg-white transition-colors duration-300 group"
            >
              <Mail size={20} />
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center gap-10"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-accent-blue">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-heading font-bold text-xl mb-1">Location</h4>
                <p className="text-brand-secondary">Trivandrum, Kerala</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-accent-blue">
                <Languages size={24} />
              </div>
              <div>
                <h4 className="text-white font-heading font-bold text-xl mb-1">Languages</h4>
                <p className="text-brand-secondary">Malayalam • English</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center border-t border-white/10 pt-12"
        >
          <p className="text-brand-accent-blue text-lg font-heading tracking-widest uppercase mb-6 opacity-80">
            "Keys | Chords | Feelings"
          </p>
          <p className="text-brand-secondary/60 text-sm">
            Copyright &copy; {new Date().getFullYear()} Vineeth Vinil T. All rights reserved.
          </p>
        </motion.div>
        
      </div>
    </footer>
  );
}
