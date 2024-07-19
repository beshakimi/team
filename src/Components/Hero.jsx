import React from 'react'
import { Link } from 'react-scroll'
import { ReactTyped } from 'react-typed'



export default function Hero() {
  return (
    <div className='mt-16 md:mt-36 w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative'>
      <img src="media/images/welcome.jpg" alt="welcome image" className='w-full h-full object-cover' />
      
      {/* navbar  */}
      {/* <div className='fixed top-0 left-0 z-20 w-full bg-[#f6f0ec] flex justify-between items-center'>

        <Header/>
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

      </div> */}

      <div className='absolute top-8 md:top-16 left-0 text-center md:text-left w-full mx-auto md:w-1/2 h-full flex flex-col gap-2 md:gap-8 lg:pt-10 sm:pl-12 lg:pl-32'>
        <ReactTyped strings={["Welcome to our Website"]} typeSpeed={100} backSpeed={40}  loop className='text-xl md:text-3xl lg:text-5xl md:h-28 text-[#e87a35] leading-tight font-bold'/>
       
        <p className='text-xs md:text-base w-[70%] mx-auto md:w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime sed ipsa eveniet doloremque, eligendi, placeat, magni quis rem soluta voluptates minus illum natus officia neque maiores sequi rerum at autem!</p>

      </div>
    </div>

  )
}
