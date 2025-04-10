// Eugene Afriyie UEB3502023
import React from 'react'
import { motion } from 'framer-motion'

const ToggleSwitch = () => {
  const toggleVariants = {
    on: {
      x:0, // Move to the far right (container width - knob width)
      backgroundColor: '#00ff00',
      transition: { duration: 0.3 },
    },
    off: {
      x: 50,
      backgroundColor: '#ff0000',
      transition: { duration: 0.3 },
    },
  }

  const [isToggled, setIsToggled] = React.useState(true)

  return (
    <div className="flex items-cente  justify-center h-screen">
      <div
        className="w-28 h-12 bg-black relative flex items-center px-4 rounded-full cursor-pointer"
        onClick={() => setIsToggled(!isToggled)}
      >
        <motion.div
          className="w-8 h-8 rounded-full absolute"
          variants={toggleVariants}
          animate={isToggled ? 'on' : 'off'}
        />
      </div>
    </div>
  )
}

export default ToggleSwitch
