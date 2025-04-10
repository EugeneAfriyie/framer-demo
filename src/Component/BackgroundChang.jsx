// Eugene Afriyie UEB3502023
import React from 'react'
import { motion } from 'framer-motion'

const BackgroundChang = () => {
  return (
    <motion.div
      className='w-screen h-screen flex items-center justify-center text-white text-2xl'
      animate={{
        background: [
          '#ff0000',
          '#00ff00',
          '#0000ff',
          '#ffff00',
          '#ff00ff',
          '#00ffff',
        ],
      }}
      transition={{
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        delay:.1
      }}
    >
      BackgroundChang
    </motion.div>
  )
}

export default BackgroundChang
