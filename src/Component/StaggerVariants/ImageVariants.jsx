import React from 'react'
import { motion } from 'framer-motion';

const ImageVariants = () => {
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526178615236-1d3b8e60bc04?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519183071298-a2962be96b47?q=80&w=1470&auto=format&fit=crop',
  ];

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className='flex items-center justify-center flex-col gap-10'
      variants={imageVariants}
      initial="hidden"
      animate="visible"
    >
      {images.map((image, id) => (
        <motion.div
          key={id}
          className='w-40 h-40 border overflow-hidden rounded-lg'
          variants={childVariants}
        >
          <img src={image} alt={`image ${id}`} className='w-full h-full object-cover' />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ImageVariants;
