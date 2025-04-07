import { motion } from 'framer-motion';
import React, { useState } from 'react';

const AnimaterdGallery = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop',
      caption: 'Caption for image 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1470&auto=format&fit=crop',
      caption: 'Caption for image 2',
    },
    {
      src: 'https://images.unsplash.com/photo-1526178615236-1d3b8e60bc04?q=80&w=1470&auto=format&fit=crop',
      caption: 'Caption for image 3',
    },
    {
      src: 'https://images.unsplash.com/photo-1519183071298-a2962be96b47?q=80&w=1470&auto=format&fit=crop',
      caption: 'Caption for image 4',
    },
  ];

  const [showImages, setShowImages] = useState(false);

  const handleClick = () => setShowImages(!showImages);

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Animated Gallery</h1>
      <button
        onClick={handleClick}
        className='bg-blue-500 text-white px-4 py-2 rounded-md m-4 cursor-pointer'
      >
        {!showImages ? 'Show Images' : 'Hide Images'}
      </button>

      <motion.div
        className='flex flex-wrap justify-center'
        variants={parentVariants}
        initial='hidden'
        animate={showImages ? 'visible' : 'hidden'}
      >
        {images.map((image, index) => (
          <motion.div
            className='relative m-4 overflow-hidden rounded-lg shadow-lg w-[300px] h-[200px] group'
            variants={childVariants}
            key={index}
          >
            <img
              src={image.src}
              alt={image.caption}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <p className='text-lg'>{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimaterdGallery;
