import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Developers from './Developers';
import { useParams } from 'react-router-dom';

export default function About(props) {

    
    return (
        <div className='bg-white p-6 rounded-sm'>

            {/* about our team  */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4'>
                <img src="media/images/about.jpg" alt='About our team' className='w-full rounded-sm' />

                <div className='p-4 flex flex-col gap-1 md:gap-4'>
                    <h1 id={props.id} className='text-lg md:text-3xl text-[#e87a35] font-bold'>About Our Team</h1>
                    <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magni. Veniam non nihil animi esse, maiores sit aut harum modi aliquid nesciunt molestiae quos, deserunt, ipsa cumque numquam accusantium at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facere, voluptates laudantium odit inventore debitis soluta distinctio exercitationem architecto dolore, nobis iste ipsum enim facilis ipsam. Earum est eos molestiae.
                    </p>

                    {/* sotial icons  */}
                    <div className='flex w-full md:justify-center mt-3'>
                        <div className='flex gap-2 md:gap-4 w-fit px-3 md:px-6 py-1 md:py-[6px] rounded-md border md:border-2 border-[#e87a35]'>
                            <a href="">
                                <FaFacebookF className='p-1 md:p-2 rounded-full w-6 h-6 md:w-8 md:h-8 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaLinkedinIn className='p-1 md:p-2 rounded-full w-6 h-6 md:w-8 md:h-8 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaInstagram className='p-1 md:p-2 rounded-full w-6 h-6 md:w-8 md:h-8 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>
                        </div>

                    </div>

                </div>

            </div>

            {/* our team  */}
            <Developers/>
  
        </div>
    )
}
