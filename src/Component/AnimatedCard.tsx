import React from 'react'
import { motion } from 'framer-motion'
const AnimatedCard = () => {
  return (
    <motion.div 
          initial={{scale:1, rotate:0}}
          whileHover={{scale:1.05, rotate:3}}
          whileTap={{scale:.95}}
          drag
          dragConstraints={{
            left: -50,
            right:50,
            top:-50,
            bottom:50
          }}

          dragElastic={.2}

          transition={{type: 'spring' , stiffness: '300'}}
          className='max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer '>
        <img src="https://unsplash.com/photos/woman-standing-on-hill-in-islet-uZVtAixV8c8" className='w-full h-48  object-cover  ' alt="card image" />

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3">
            <p className="text-grat-700 mb-4">
              This is simple card with framer motion and tailwindcss for styling 
            </p>
            <button className='px-4 py-2 bg-teal-500 text-white hover:bg-teal-300 transition'>learn more</button>
          </h2>
        </div>
    </motion.div>
  )
}

export default AnimatedCard