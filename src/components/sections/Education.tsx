import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: 'Nazareth Home School, Balaramapuram',
    degree: 'High School',
    year: '2020-2021',
    current: false,
    content: '',
  },
  {
    school: 'DR GR Public School, Neyyattinkara',
    degree: 'Higher Secondary',
    year: '2021-2023',
    current: false,
    content: '',
  },
  {
    school: 'SDUMC, Tamaka',
    degree: 'B.Sc Cardiac Care Technology',
    year: '2023-Present',
    current: true,
    content: 'Developing expertise in cardiac diagnostics, patient monitoring, ECG, echocardiography, cath lab procedures, and critical cardiac care through academic training and hands-on clinical exposure.',
  },
];

export function Education() {
  return (
    <section id="education" className="py-32 bg-brand-card/20 border-y border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-brand-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />
          
          <div className="space-y-16">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center justify-between md:justify-normal ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-brand-card border border-brand-accent-blue/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,191,255,0.2)] md:-translate-x-1/2 -translate-x-1/2 z-10">
                  <GraduationCap size={20} className="text-brand-accent-blue" />
                </div>

                {/* Content */}
                <div className={`w-full ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right text-left'
                }`}>
                  <div className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300 hover:border-brand-accent-blue/30">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-brand-accent-blue transition-colors">{item.school}</h3>
                      {item.current && (
                        <span className="px-3 py-1 bg-brand-accent-blue/20 text-brand-accent-blue text-xs font-bold rounded-full uppercase tracking-wider shrink-0 mt-1">Current</span>
                      )}
                    </div>
                    <p className="text-brand-secondary">{item.degree}</p>
                    {item.year && <p className="text-sm text-brand-accent-blue/70 mt-2">{item.year}</p>}
                    {item.content && <p className="text-sm text-gray-400 mt-4 leading-relaxed">{item.content}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
