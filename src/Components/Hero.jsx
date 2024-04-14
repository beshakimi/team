import React from 'react'
import { Link } from 'react-scroll'


export default function Hero() {
  return (
    <div className='w-full h-[500px] relative'>
      <img src="media/images/welcome.jpg" alt="welcome image" className='w-full h-full object-cover' />
      
      {/* navbar  */}
      <div className='fixed top-0 left-0 z-20 w-full px-10 py-2 bg-[#e87a35] bg-opacity-70 flex justify-between items-center'>

        <div className='flex gap-6 items-center'>
          <img src="media/logo/logo.png" alt="site logo" className='w-16' />
          <div className='flex gap-4 items-center'>
            <Link to="blog" smooth={true} spy={true} offset={50} className=" text-white hover:cursor-pointer hover:border-b-2 hover:border-white ease-in duration-150">Home</Link>
            <Link to="blog" smooth={true} spy={true} offset={50} className=" text-white hover:cursor-pointer hover:border-b-2 hover:border-white ease-in duration-150">About Us</Link>
            <Link to="blog" smooth={true} spy={true} offset={50} className=" text-white hover:cursor-pointer hover:border-b-2 hover:border-white ease-in duration-150">Portfolio</Link>
            <Link to="blog" smooth={true} spy={true} offset={50} className=" text-white hover:cursor-pointer hover:border-b-2 hover:border-white ease-in duration-150">Services</Link>
            <Link to="blog" smooth={true} spy={true} offset={50} className=" text-white hover:cursor-pointer hover:border-b-2 hover:border-white ease-in duration-150">Contact Us</Link>

          </div>

        </div>

        <div className='flex gap-4'>
          <img src="media/users/1.jpg" alt="your profile" className='w-10 h-10 rounded-full object-cover border-2 border-[#e87a35] ' />

        </div>

      </div>

      <div className='absolute top-16 left-0 w-1/2 h-full flex flex-col gap-8 pt-10 pl-32'>
        <h1 className='text-5xl text-[#e87a35] leading-tight font-bold'>Welcome to our Website</h1>
        <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime sed ipsa eveniet doloremque, eligendi, placeat, magni quis rem soluta voluptates minus illum natus officia neque maiores sequi rerum at autem!</p>

      </div>
    </div>

  )
}
