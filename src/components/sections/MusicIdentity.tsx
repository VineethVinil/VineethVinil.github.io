import { motion } from 'framer-motion';

const roles = [
  'Live Performer',
  'Music Producer',
  'Music Arranger',
  'Keyboard Artist'
];

export function MusicIdentity() {
  return (
    <section id="music" className="py-32 bg-brand-card/20 border-y border-white/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Musical Identity</h2>
          <div className="w-24 h-1 bg-brand-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Background Animated Waveform */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none -mx-6 md:-mx-12">
            <div className="flex items-center gap-1 md:gap-2 h-[120%] md:h-64 w-full px-6 md:px-12">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ['20%', '100%', '20%'] }}
                  transition={{
                    duration: 1.5 + Math.random(),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                  className="w-full bg-brand-accent-blue rounded-full shadow-[0_0_15px_rgba(0,191,255,0.6)]"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 relative z-10">
            {roles.map((role, idx) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] glass-card p-6 md:p-10 text-center group hover:bg-brand-accent-blue/10 hover:border-brand-accent-blue/40 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-accent-blue transition-colors flex items-center justify-center h-full">
                  {role}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass-card px-8 py-12 rounded-3xl max-w-2xl w-full border border-brand-accent-blue/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-accent-blue/5 pointer-events-none" />
            <h4 className="text-2xl font-heading font-bold text-white mb-4">Original Compositions</h4>
            <p className="text-brand-secondary mb-8">
              Coming soon. A collection of original tracks and selected live performances will be available here.
            </p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-2 h-2 rounded-full bg-brand-accent-blue animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
