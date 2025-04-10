import React from 'react'
import { motion } from 'framer-motion'

const NavAni = () => {
    const navVariants ={
        open: {x:0},
        close:{x:'-200%'}
    }
  return (
    <motion.div 
    variants={navVariants}
    initial='close'
    animate='open'
    transition={{duration:6,type:'spring',delay:1}}
    className='w-[70%] m-auto h-20 bg-gray-300 flex justify-between p-2'>
        {[...Array(5)].map((_,index) =>(
            <div key={index} className="w-20 h-full bg-amber-900"
     
            >{`Elements ${index} `}</div>
))}
        
    </motion.div>
  )
}

export default NavAni