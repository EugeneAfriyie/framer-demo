import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['developer', 'designer', 'creator', 'thinker'];

const TextStaggerLoop = () => {
  const [index, setIndex] = useState(0);
  const staticText = 'I am a';

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000); // change word every 4s
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white text-4xl font-bold">
      <div className="flex gap-2">
        {/* Static part */}
        {staticText.split('').map((char, i) => (
          <motion.span key={i}>{char}</motion.span>
        ))}

        {/* Animated part */}
        <AnimatePresence mode="wait">
          <motion.div
            key={words[index]}
            className="flex gap-1 ml-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {words[index].split('').map((char, i) => (
              <motion.span
                key={char + i}
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextStaggerLoop;
