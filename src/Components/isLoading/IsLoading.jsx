import React from 'react'
import IsLoadingAnimation from './IsLoadingAnimation.json'
import Lottie from 'lottie-react'

export default function IsLoading() {
  return (
    <div className='bg-white w-full h-screen flex justify-center items-center fixed top-0 left-0 z-30'>
        <Lottie animationData={IsLoadingAnimation} loop={true} />
    </div>
  )
}
