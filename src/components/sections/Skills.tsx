import { motion } from 'framer-motion';
import { Music, Video, Monitor, HeartHandshake, Headset } from 'lucide-react';

const categories = [
  {
    title: 'Music',
    icon: <Music className="text-brand-accent-blue" size={24} />,
    skills: ['Carnatic Music', 'Live Performance', 'Music Arrangement', 'Music Production'],
  },
  {
    title: 'Creative',
    icon: <Video className="text-brand-accent-blue" size={24} />,
    skills: ['Video Editing', 'Photo Editing'],
  },
  {
    title: 'Software',
    icon: <Monitor className="text-brand-accent-blue" size={24} />,
    skills: ['FL Studio', 'Logic Pro', 'CapCut', 'Premiere Pro'],
  },
  {
    title: 'Soft Skills',
    icon: <HeartHandshake className="text-brand-accent-blue" size={24} />,
    skills: ['Communication (Malayalam & English)', 'Networking', 'Problem Solving'],
  },
  {
    title: 'Hobbies',
    icon: <Headset className="text-brand-accent-blue" size={24} />,
    skills: ['Gaming', 'Traveling', 'Cooking']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Expertise</h2>
          <div className="w-24 h-1 bg-brand-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] glass-card p-8 group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.1)] hover:border-brand-accent-blue/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent-blue/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent-blue mt-2.5 opacity-60 group-hover:opacity-100" />
                    <span className="text-brand-secondary group-hover:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
