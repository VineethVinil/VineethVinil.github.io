import { motion } from 'framer-motion';
import { Camera, PlayCircle, GitBranch, Briefcase, MessageCircle } from 'lucide-react';

const socials = [
  {
    name: 'Instagram',
    icon: <Camera size={32} />,
    href: 'https://www.instagram.com/vneethh/',
    color: 'hover:text-pink-500 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]'
  },
  {
    name: 'YouTube',
    icon: <PlayCircle size={32} />,
    href: 'https://youtube.com/@v1neethhh',
    color: 'hover:text-red-500 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]'
  },
  {
    name: 'GitHub',
    icon: <GitBranch size={32} />,
    href: 'https://github.com/VineethVinil',
    color: 'hover:text-white hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
  },
  {
    name: 'LinkedIn',
    icon: <Briefcase size={32} />,
    href: 'https://www.linkedin.com/in/Vineeethvinil',
    color: 'hover:text-blue-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]'
  },
  {
    name: 'WhatsApp',
    icon: <MessageCircle size={32} />,
    href: 'https://wa.me/919539123223',
    color: 'hover:text-green-500 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]'
  }
];

export function Socials() {
  return (
    <section id="socials" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Connect With Me</h2>
          <div className="w-24 h-1 bg-brand-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {socials.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.33rem)] lg:w-[calc(20%-1.6rem)] p-8 flex flex-col items-center justify-center gap-6 text-brand-secondary transition-all duration-300 group ${social.color}`}
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
              <span className="text-xl font-heading font-bold tracking-wider">{social.name}</span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
