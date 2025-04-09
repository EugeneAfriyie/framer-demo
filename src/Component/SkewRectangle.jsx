import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SkewRectangle = () => {
    const [isSkew,setIsSkew] = useState(false)
  return (
    <motion.div className='w-40 h-20 bg-red-600 cursor-pointer' 
    animate={{ skew:isSkew ? 20 : -20}}
    transition={{duration:0.5}}
    onClick={()=> setIsSkew(!isSkew)}/>
  )
}

export default SkewRectangle