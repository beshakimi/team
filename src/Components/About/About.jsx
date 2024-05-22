import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Developers from './Developers';
import { useParams } from 'react-router-dom';

export default function About() {
    
    return (
        <div className='bg-white p-6 rounded-sm'>

            {/* about our team  */}
            <div className='grid grid-cols-2 gap-4'>
                <img src="media/images/about.jpg" alt='About our team' className='w-full rounded-sm' />

                <div className='p-4 flex flex-col gap-4'>
                    <h1 className='text-3xl text-[#e87a35] font-bold'>About Our Team</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magni. Veniam non nihil animi esse, maiores sit aut harum modi aliquid nesciunt molestiae quos, deserunt, ipsa cumque numquam accusantium at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facere, voluptates laudantium odit inventore debitis soluta distinctio exercitationem architecto dolore, nobis iste ipsum enim facilis ipsam. Earum est eos molestiae.
                    </p>

                    {/* sotial icons  */}
                    <div className='flex w-full justify-center mt-3'>
                        <div className='flex gap-4 w-fit px-6 py-[6px] rounded-md border-2 border-[#e87a35]'>
                            <a href="">
                                <FaFacebookF className='p-2 rounded-full w-8 h-8 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaLinkedinIn className='p-2 rounded-full w-8 h-8 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaInstagram className='p-2 rounded-full w-8 h-8 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
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
