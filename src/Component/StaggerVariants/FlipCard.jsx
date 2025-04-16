import React from 'react'
import { motion } from 'framer-motion'

const FlipCard = () => {
  return (
    <div className="h-[300vh] w-full flex items-center justify-center bg-gray-800">
      <div className="w-64 h-64" style={{ perspective: '1000px' }}>
        <motion.div
          className="relative h-full w-full"
          initial={{ rotateY: 0 }}
          whileInView={{ rotateY: 180 }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute w-full h-full bg-slate-900 rounded-lg shadow-lg flex items-center justify-center backface-hidden">
            Front
          </div>

          <div
            className="absolute w-full h-full bg-slate-600 rounded-lg shadow-lg flex items-center justify-center backface-hidden"
            style={{ transform: 'rotateY(180deg)' }}
          >
            Back
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FlipCard
