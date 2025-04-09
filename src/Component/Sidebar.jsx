import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const [hideSidebar,setHideSibar] = useState(false)
  return (
    <div className='flex items-center justify-center h-full'>
        <motion.div className="w-40 h-full fixed left-0 bottom-0 bg-red-500"
        initial={{x:0}}
        animate={{x: hideSidebar ? -200 : 0}}
        transition={{duration: 1,type:'spring',delay:2}}
        
        >xxxx</motion.div>
        <button className='bg-teal-800 text-white p-2 cursor-pointer`;npmrun`' onClick={() =>setHideSibar(!hideSidebar)}>{hideSidebar ? 'show Sidebbar' : 'Hide sidebar'}</button>
    </div>
  )
}

export default Sidebar