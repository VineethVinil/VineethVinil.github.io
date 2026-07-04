import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const achievementsList = [
  {
    title: 'Kalaprathibha Award',
    event: 'High School Arts Fest 2022',
    description: 'Awarded for the best performance in arts in High school'
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-brand-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {achievementsList.map((achieve, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-xl glass-card p-8 relative group hover:-translate-y-2 transition-all duration-300 hover:border-brand-accent-blue/30"
            >
              <div className="w-12 h-12 rounded-full bg-brand-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award size={24} className="text-brand-accent-blue" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">{achieve.title}</h3>
              <p className="text-brand-accent-blue text-sm uppercase tracking-wider mb-4 font-medium">{achieve.event}</p>
              <p className="text-brand-secondary text-sm leading-relaxed">
                {achieve.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
