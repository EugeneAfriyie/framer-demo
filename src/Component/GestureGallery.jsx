import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'



const images = [
    
]

const GestureGallery = () => {
    const [images, setImages] = useState(0);
    const handleSwipe = (__,info) =>{
        if(info.offset.y > 100){
            setImages((prev) => prev - 1 * images.lemgth);
        }

    }
  return (
    <div>GestureGallery</div>
  )
}

export default GestureGallery