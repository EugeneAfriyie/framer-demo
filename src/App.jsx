import React from 'react'
import AnimatedCard from './Component/AnimatedCard'
import ImageGallery from './Component/ImageGallery'
import AnimaterdGallery from './Component/AnimaterdGallery'
import Horizontal_movement from './Component/Horizontal_movement'
import BouncingCircle from './Component/BouncingCircle'
import SkewRectangle from './Component/SkewRectangle'
import Sidebar from './Component/Sidebar'

const App = () => {
  return (
    <div className='fle items-center justify-center h-screen bg-slae-900'>
      {/* <AnimatedCard /> */}
      {/* <ImageGallery /> */}
      {/* <AnimaterdGallery /> */}
      {/* <Horizontal_movement /> */}
      {/* <BouncingCircle /> */}
      {/* <SkewRectangle /> */}
      <Sidebar />
    </div>
  )
}

export default App