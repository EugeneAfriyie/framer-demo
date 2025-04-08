import React from 'react'
import { motion } from 'framer-motion'

const Horizontal_movement = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <motion.div 
        initial={{ x: 0,y:0, borderRadius: '0%' }}
        animate={{ x: [-300,0,100],y:[-100,100], borderRadius: ['0%','25%','50%'] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
        className="h-20 w-20 bg-amber-400"
      />
    </div>
  )
}

export default Horizontal_movement
