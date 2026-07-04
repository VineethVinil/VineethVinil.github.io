import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Vineeth is a phenomenal young talent who possesses a deep, intuitive understanding of music. His exceptional ability to transcribe and play back musical content from day one marks him as a truly standout keyboardist.",
    author: "Arjun Gopan",
    role: "Mentor",
    image: "/Photos/mentor.png"
  },
  {
    quote: "Meet Vineeth, an exceptionally talented keyboardist whose innate musicality sets him apart. From the very beginning of his studies, he has demonstrated the rare ability to effortlessly transcribe complex musical content directly onto the keys.",
    author: "Abhirag",
    role: "Violinist",
    image: "/Photos/abhirag.png"
  },
  {
    quote: "His musical instincts, solid timing, and ability to pick up and play just about anything make performing with him an absolute pleasure.",
    author: "Amal krishna",
    role: "Percussionist",
    image: "/Photos/amal.png"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-brand-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`w-full ${
                test.image
                  ? "max-w-4xl flex flex-col md:flex-row overflow-hidden p-0"
                  : "md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] p-10"
              } glass-card relative group hover:border-brand-accent-blue/30 transition-all duration-300`}
            >
              {test.image ? (
                <>
                  {/* Left: Image Section */}
                  <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-[400px] bg-white/5 border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center">
                    <img 
                      src={test.image} 
                      alt={test.author} 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                    
                    {test.image === "/Photos/placeholder.png" && (
                      <div className="absolute inset-0 flex items-center justify-center text-white/50 text-lg"></div>
                    )}
                    
                    {/* Author Info Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 pt-12 md:p-8 md:pt-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                      <h4 className="font-heading font-bold text-brand-accent-blue text-xl md:text-2xl drop-shadow-md">{test.author}</h4>
                      <p className="text-gray-200 text-sm md:text-base mt-1 drop-shadow-md">{test.role}</p>
                    </div>
                  </div>

                  {/* Right: Quote Section */}
                  <div className="w-full md:w-3/5 p-10 flex flex-col justify-center relative bg-black/20">
                    <Quote size={40} className="text-brand-accent-blue/20 absolute top-6 left-6" />
                    
                    <div className="relative z-10 pt-4">
                      <p className="text-white text-lg italic leading-relaxed text-left">
                        "{test.quote}"
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Quote size={40} className="text-brand-accent-blue/20 absolute top-6 left-6" />
                  
                  <div className="relative z-10 pt-4">
                    <p className="text-white text-lg italic leading-relaxed text-left mb-8">
                      "{test.quote}"
                    </p>
                    
                    <div>
                      <h4 className="font-heading font-bold text-brand-accent-blue text-lg">{test.author}</h4>
                      <p className="text-brand-secondary text-sm">{test.role}</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
