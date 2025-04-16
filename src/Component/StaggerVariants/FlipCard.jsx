import React from 'react'
import { motion } from 'framer-motion'
const FlipCard = () => {
  return (
    <div className='perspective-dramatic w-64 h-64'>
        <motion.div className="relattive h-full w-full ">

        <div className="absolute w-full h-full bg-slate-900 rounded-lg shadow-lg flex items-center justify-center">
            Front
        </div>

        <motion.div className="absolute w-full h-full bg-slate-900 rounded-lg shadow-lg flex items-center justify-center">
            Back
        </motion.div>

        </motion.div>
 
    </div>
  )
}

export default FlipCard