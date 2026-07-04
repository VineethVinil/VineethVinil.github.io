import { motion } from 'framer-motion';
import { Headphones, SlidersHorizontal, Mic } from 'lucide-react';

const services = [
  {
    title: 'Music Production',
    icon: <Headphones size={32} className="text-brand-accent-blue" />,
    description: 'Complete track production from initial concept to final arrangement across various genres.'
  },
  {
    title: 'Mixing',
    icon: <SlidersHorizontal size={32} className="text-brand-accent-blue" />,
    description: 'Professional balancing of individual tracks to create a clear, punchy, and cohesive mix.'
  },
  {
    title: 'Mastering',
    icon: <Mic size={32} className="text-brand-accent-blue" />,
    description: 'Final polishing of the mixed track to ensure it sounds perfect across all streaming platforms and sound systems.'
  }
];

export function Freelance() {
  return (
    <section id="freelance" className="py-32 bg-brand-card/20 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Freelance Services</h2>
          <div className="w-24 h-1 bg-brand-accent-blue mx-auto rounded-full mb-6" />
          <p className="text-brand-secondary max-w-2xl mx-auto text-lg">
            Available for remote and local freelance projects. Bringing professional studio quality to your music.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-10 text-center group hover:bg-brand-accent-blue/5 hover:border-brand-accent-blue/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-brand-accent-blue transition-colors">{service.title}</h3>
              <p className="text-brand-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
