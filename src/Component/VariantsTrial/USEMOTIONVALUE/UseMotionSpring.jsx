import React from 'react'
import { motion, useMotionValue } from 'framer-motion'

const UseMotionSpring = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)


    const moveBox = () =>{
        y.set(Math.random() * 300)
        x.set(Math.random() * 300)
    }
  return (
    <motion.div className='flex justify-center items-center h-screen'>
        <motion.div className=" w-40 h-40 bg-teal-800" style={{x,y}} drag onClick={moveBox}>

        </motion.div>
    </motion.div>
  )
}

export default UseMotionSpring