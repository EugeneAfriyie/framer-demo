import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (


<div className="flex items-center justify-center h-screen">
    <motion.div className="relative h-40 w-40 border-4 border-t-4 border-blue-400 border-solid rounded-full "
    
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
    >
        <motion.div className="absolute inset-0 border-4 border-blue-300 border-solid rounded-full
         "
         
         animate={{opacity:[1,0.5,1]}}
         transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
         style={{borderTopColor:'transparent'}}
         
         >

        </motion.div>
    </motion.div>
</div>



















    // <div className='flex items-center justify-center h-screen bg-slate-900'>
    //     <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         transition={{ duration: 1, ease: 'easeInOut' }}
    //         className='flex items-center justify-center h-screen bg-slate-900'
    //     >
    //         <motion.div
    //             className='w-16 h-16 bg-teal-500 rounded'
    //             animate={{ rotate: 360 }}
    //             transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
    //         />
    //     </motion.div>
        
    // </div>
  )
}

export default Loader