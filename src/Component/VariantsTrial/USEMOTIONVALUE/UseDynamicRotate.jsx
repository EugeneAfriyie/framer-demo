import React from 'react'
import { motion, useMotionValue } from 'framer-motion'

const UseDynamicRotate = () => {
    const rotation = useMotionValue(0);
    const rotateBox = () => rotation.set(rotation.get() + 90);
  return (
        <motion.div className="  "
         >
            Click Me<motion.div className=" w-40 h-40 bg-slate-900 "
        style={{ rotate: rotation }} onClick={rotateBox } >
            Click Me
        </motion.div>
        </motion.div>
  )
}

export default UseDynamicRotate