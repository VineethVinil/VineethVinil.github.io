import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src="/Photos/pfp.png" 
                alt="Vineeth Vinil T - Portrait placeholder" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>
            {/* Elegant Frame Accents */}
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 border-t-2 border-l-2 border-brand-accent-blue/50 rounded-tl-xl" />
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-b-2 border-r-2 border-brand-accent-blue/50 rounded-br-xl" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">The Story</h2>
            
            <div className="space-y-6 text-brand-secondary text-base md:text-lg leading-relaxed">
              <p>
                Vineeth Vinil T is a passionate keyboard artist and music producer from Trivandrum with over seven years of experience in music.
              </p>
              <p>
                Alongside his musical journey, he is a dedicated B.Sc Cardiac Care Technology student at SDUMC, Tamaka. With a strong passion for cardiac care, innovation, and medical technology, he is keenly interested in pursuing an MSc in Cardiac Catheterization in the future.
              </p>
              <p>
                From performing with renowned musical groups such as <span className="text-white font-medium">Arjuna Bhajans</span>, <span className="text-white font-medium">Ragalaya</span>, and the college band <span className="text-white font-medium">Fifth Harmony</span> to creating music in the studio using FL Studio and Logic Pro, he combines technical precision with artistic creativity to deliver memorable musical experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 mt-12 pt-12 border-t border-white/10">
              <div className="text-center sm:text-left">
                <h4 className="text-3xl md:text-4xl font-heading font-bold text-brand-accent-blue mb-2">7+</h4>
                <p className="text-xs md:text-sm text-brand-secondary uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-3xl md:text-4xl font-heading font-bold text-brand-accent-blue mb-2">3</h4>
                <p className="text-xs md:text-sm text-brand-secondary uppercase tracking-wider">Professional Roles</p>
              </div>
              <div className="col-span-2 sm:col-span-1 text-center sm:text-left">
                <h4 className="text-3xl md:text-4xl font-heading font-bold text-brand-accent-blue mb-2">100%</h4>
                <p className="text-xs md:text-sm text-brand-secondary uppercase tracking-wider">Passion for Music</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
