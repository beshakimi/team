import React from 'react'

export default function Error(props) {
  return (
    <div className='bg-white w-full h-screen flex justify-center items-center fixed top-0 left-0 z-30'>
        <p className='text-xl text-red-600'>error : {props.error}</p>
    </div>
  )
}
