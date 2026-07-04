import { motion } from 'framer-motion';
import { Music2, Mic2, Disc, Play } from 'lucide-react';

const experiences = [
  {
    title: '7+ Years of Keyboard Experience',
    role: 'Professional Keyboard Artist',
    description: 'Professional keyboard artist with over seven years of experience in live performance, accompaniment, music arrangement, and production.',
    icon: <Play size={24} className="text-brand-accent-blue" />,
    current: false,
  },
  {
    title: 'Ragalaya',
    role: 'Keyboard Artist',
    description: 'Performed as a keyboard artist, gaining experience in ensemble performance, musical coordination, and live accompaniment.',
    icon: <Mic2 size={24} className="text-brand-accent-blue" />,
    current: false,
  },
  {
    title: 'Arjuna Bhajans',
    role: 'Keyboard Artist',
    description: 'Currently performing as a keyboard artist, contributing to live devotional music performances and musical arrangements.',
    icon: <Music2 size={24} className="text-brand-accent-blue" />,
    current: true,
  },
  {
    title: 'Fifth Harmony',
    role: 'College Band • Keyboard Artist',
    description: 'Participated in college events and stage performances with the band.',
    icon: <Disc size={24} className="text-brand-accent-blue" />,
    current: true,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-brand-card/20 border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent-purple/5 via-brand-bg to-brand-bg pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-brand-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-xl glass-card p-8 relative group hover:-translate-y-2 hover:border-brand-accent-blue/30 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent-blue/10 transition-colors">
                    {exp.icon}
                  </div>
                  {exp.current && (
                    <span className="inline-block px-3 py-1 bg-brand-accent-blue/10 text-brand-accent-blue text-xs rounded-full border border-brand-accent-blue/20">
                      CURRENT
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-brand-accent-blue transition-colors mb-2">{exp.title}</h3>
                <p className="text-brand-accent-blue text-sm font-medium tracking-wider uppercase mb-4">{exp.role}</p>
                
                <p className="text-brand-secondary leading-relaxed flex-grow">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
