import { motion, stagger } from 'framer-motion'
import { s } from 'framer-motion/client'
import React from 'react'


const inViewVariants ={
    hidden: { opacity: 0, x: 100,scale: 0.5,rotate:360 },
    visible: { opacity: 1, x: 0,scale: 1,rotate:0 },
    exit: { opacity: 0, y: 50,scale: 0.8 },
    when: 'beforeChildren',
}

const Inview_timeline = () => {
  return (
    <motion.div
        whileInView={"visible"}
        initial={"hidden"}
        transition={{ staggerChildren:.2,duration: 0.5, ease: 'easeInOut' }}

        
    className='flex items-center justify-center h-screen bg-slate-900 border border-amber-700'>
       { [1,2,3,4,5].map((item) => (
            <motion.div
                variants={inViewVariants}
                key={item} 
                // animate={{x:100}}
                className=" p-4 m-2 bg-teal-900 rounded-lg shadow-lg border border-amber-700">
                    item {item}
            </motion.div>
        ))}
    </motion.div>
  )
}

export default Inview_timeline