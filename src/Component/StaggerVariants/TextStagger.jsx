import React from 'react'
import { motion } from 'framer-motion';

const TextStagger = () => {
  const text = ['E', 'U', 'G', 'E', 'N', 'E'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        // repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <motion.div
      className='flex items-center justify-center h-screen gap-2 bg-slate-900 text-white'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className='text-5xl font-bold'
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextStagger;
