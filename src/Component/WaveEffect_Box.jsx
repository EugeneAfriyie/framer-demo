import React from 'react'
import { motion } from 'framer-motion'

const WaveEffect_Box = () => {
  return (
    <div className='flex items-center justify-center gap-1 h-full'>
    {[...Array(6)].map((_, index) => (
      <motion.div key={index} className='w-20 h-20 bg-amber-500 flex items-center justify-center'
      animate={{y: [0, -20  ,0 ], borderRadius: [0,'25%',"50%"]}}

      
      transition={{duration: .6, repeat : Infinity , repeatType: 'reverse', ease:'easeInOut',delay: index * .1}}
      >
        Item {index + 1}
      </motion.div>
    ))}
  </div>
  
  )
}

export default WaveEffect_Box