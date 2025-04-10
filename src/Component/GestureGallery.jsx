import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const GestureGallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526178615236-1d3b8e60bc04?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519183071298-a2962be96b47?q=80&w=1470&auto=format&fit=crop',
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const handleSwipe = (e, info) => {
    const { offset } = info;

    // Vertical Swipe
    if (offset.y > 100) {
      setImageIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (offset.y < -100) {
      setImageIndex((prev) => (prev + 1) % images.length);
    }

    // Horizontal Swipe
    if (offset.x > 100) {
      setImageIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (offset.x < -100) {
      setImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="relative w-72 h-72 overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={imageIndex}
            src={images[imageIndex]}
            className="absolute w-full h-full object-cover rounded-xl"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={handleSwipe}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImageIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === imageIndex ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GestureGallery;
