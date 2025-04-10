import React from 'react'
import { motion } from 'framer-motion'

const FadeIn = () => {
    const fadeVariants = {
       hidden:{opacity:0},
       show:{opacity:1},
       exit:{opacity:0}
    }
  return (
   <div className="flex justify-center items-center h-screen">
     <motion.div
     variants={fadeVariants}
     initial='hidden'
     animate= 'show'
     exit= 'exit'
          transition={{duration:3,ease:'anticipate'}}
     className='p-4 bg-teal-500'>FadeIn Components</motion.div>
    
   </div>
  )
}

export default FadeIn