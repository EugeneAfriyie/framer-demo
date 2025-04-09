import React from 'react'
import AnimatedCard from './Component/AnimatedCard'
import ImageGallery from './Component/ImageGallery'
import AnimaterdGallery from './Component/AnimaterdGallery'
import Horizontal_movement from './Component/Horizontal_movement'
import BouncingCircle from './Component/BouncingCircle'
import SkewRectangle from './Component/SkewRectangle'

const App = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-slate-900'>
      {/* <AnimatedCard /> */}
      {/* <ImageGallery /> */}
      {/* <AnimaterdGallery /> */}
      {/* <Horizontal_movement /> */}
      {/* <BouncingCircle /> */}
      <SkewRectangle />
    </div>
  )
}

export default App