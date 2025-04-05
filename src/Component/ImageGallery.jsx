import React from 'react'
import {motion} from 'framer-motion'

const ImageGallery = () => {

    const images = [
        {
            src:'https://images.unsplash.com/photo-1542641734-3b824eaabad0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: ' Caption for image 1 '
        },     
        {
            src:'https://images.unsplash.com/photo-1542641734-3b824eaabad0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: ' Caption for image 1 '
        },
        {
            src:'https://images.unsplash.com/photo-1542641734-3b824eaabad0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: ' Caption for image 1 '
        },
        {
            src:'https://images.unsplash.com/photo-1542641734-3b824eaabad0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: ' Caption for image 1 '
        },
 
    ]
  return (
    <div className='w-[80%] flex' >
        {images.map((image,index) =>(
            <motion.div 
                        key={index}
                        className='relative m-[1rem] overflow-hidden rounded-lg shadow-lg '
                        whileHover={{scale:1.05}}
                        
                        >
                <img src={image.src} alt={image.caption} className='w-full h-auto' />
                <motion.div 
                        whileHover={{opacity: 1}}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-50 transition-opacity duration-300 cursor-pointer ">
                    <p className="text-lg">
                        {image.caption}
                    </p>
                </motion.div>
            </motion.div>
        ))}
    </div>
  )
}

export default ImageGallery