import React from 'react'
import { motion } from 'framer-motion'

const BouncingCircle = () => {
  return (
    <motion.div className='h-32 w-32 bg-amber-600 rounded-full m-auto'
    initial={{ y: 0 }}
    animate={{y:100}}
    transition={{duration:1,repeat:Infinity,repeatType:'reverse'}}

    />
        
   
  )
}

export default BouncingCircle