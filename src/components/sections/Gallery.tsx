import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, PlayCircle } from 'lucide-react';

const galleryItems = [
  {
    title: 'Live Performances',
    img: 'Photos/gallery-1.png',
    span: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
    type: 'image'
  },
  {
    title: 'Band',
    img: 'Photos/gallery-6.png',
    span: 'col-span-1 row-span-1',
    type: 'image'
  },
  {
    title: 'Studio Sessions',
    img: 'Photos/gallery-2.png',
    span: 'col-span-1 row-span-1 md:row-span-2',
    type: 'video',
    videoUrl: '/Videos/vid2.mp4'
  },
  {
    title: 'Events & Stages',
    img: 'Photos/gallery-5.png',
    span: 'col-span-1 md:col-span-2 row-span-1',
    type: 'video',
    videoUrl: '/Videos/vid1.mp4'
  },
];

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<{ img: string; type?: string; videoUrl?: string } | null>(null);

  return (
    <section id="gallery" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-brand-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10 ${item.span}`}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                  <PlayCircle size={64} className="text-white/80" />
                </div>
              )}
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 h-1 bg-brand-accent-blue mb-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 text-sm">
                  View full image
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-12 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors z-[110]"
            >
              <X size={28} />
            </button>
            {selectedItem.type === 'video' && selectedItem.videoUrl ? (
              <motion.video 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedItem.videoUrl} 
                autoPlay 
                controls 
                className="w-full h-full object-contain max-h-[90vh] rounded-xl shadow-2xl cursor-default"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              />
            ) : (
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedItem.img} 
                alt="Gallery Full Size" 
                className="w-full h-full object-contain max-h-[90vh] rounded-xl shadow-2xl cursor-default"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
