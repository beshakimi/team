import React, { useState } from 'react'

import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import TeamDetails from './TeamDetails';

export default function About() {
    const [modal, showModal] = useState(false);
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
            <div className='w-[95%] mx-auto flex flex-col gap-4 mt-10'>
                <h1 className='text-3xl text-[#e87a35] font-bold w-full text-center '>Our Team</h1>
                <p className='w-[50%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi distinctio.</p>
                <div className='grid grid-cols-3 gap-6 mt-10'>

                    {/* person 1 */}
                    <div onClick={()=> showModal(true)} className='rounded-md bg-[#ffe0cc] p-5 flex flex-col gap-2 hover:cursor-pointer hover:shadow-lg hover:shadow-orange-300 hover:scale-105 ease-in duration-150'>
                        <img src="media/team/user.jpg" alt="Besmillah Hakimi" className='w-full h-60 object-cover rounded-md' />
                        <h1 className='text-sm text-gray-600 uppercase'>Front-end Developer</h1>
                        <h2 className='text-lg font-bold text-[#e87a35]'>Besmillah Hakimi</h2>
                        <p className='text-sm text-gray-500 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing. Incidunt recusandae minima repellendus sapiente, soluta mollitia sit. Impedit quo perspiciatis enim.</p>
                        <div className='flex gap-4 mt-4'>
                            <a href="">
                                <FaFacebookF className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaLinkedinIn className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaInstagram className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>
                        </div>
                    </div>

                    {/* person 2 */}
                    <div className='rounded-md bg-[#ffe0cc] p-5 flex flex-col gap-2'>
                        <img src="media/team/1.jpg" alt="Besmillah Hakimi" className='w-full h-60 object-cover rounded-md' />
                        <h1 className='text-sm text-gray-600 uppercase'>Front-end Developer</h1>
                        <h2 className='text-lg font-bold text-[#e87a35]'>Besmillah Hakimi</h2>
                        <p className='text-sm text-gray-500 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing. Incidunt recusandae minima repellendus sapiente, soluta mollitia sit. Impedit quo perspiciatis enim.</p>
                        <div className='flex gap-4 mt-4'>
                            <a href="">
                                <FaFacebookF className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaLinkedinIn className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaInstagram className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>
                        </div>
                    </div>


                    {/* person 3 */}
                    <div className='rounded-md bg-[#ffe0cc] p-5 flex flex-col gap-2'>
                        <img src="media/team/3.jpg" alt="Besmillah Hakimi" className='w-full h-60 object-cover rounded-md' />
                        <h1 className='text-sm text-gray-600 uppercase'>Front-end Developer</h1>
                        <h2 className='text-lg font-bold text-[#e87a35]'>Besmillah Hakimi</h2>
                        <p className='text-sm text-gray-500 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing. Incidunt recusandae minima repellendus sapiente, soluta mollitia sit. Impedit quo perspiciatis enim.</p>
                        <div className='flex gap-4 mt-4'>
                            <a href="">
                                <FaFacebookF className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaLinkedinIn className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaInstagram className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>
                        </div>
                    </div>

                    {/* person 4 */}
                    <div className='rounded-md bg-[#ffe0cc] p-5 flex flex-col gap-2'>
                        <img src="media/team/2.jpg" alt="Besmillah Hakimi" className='w-full h-60 object-cover rounded-md' />
                        <h1 className='text-sm text-gray-600 uppercase'>Front-end Developer</h1>
                        <h2 className='text-lg font-bold text-[#e87a35]'>Besmillah Hakimi</h2>
                        <p className='text-sm text-gray-500 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing. Incidunt recusandae minima repellendus sapiente, soluta mollitia sit. Impedit quo perspiciatis enim.</p>
                        <div className='flex gap-4 mt-4'>
                            <a href="">
                                <FaFacebookF className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaLinkedinIn className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaInstagram className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>
                        </div>
                    </div>

                    {/* person 5 */}
                    <div className='rounded-md bg-[#ffe0cc] p-5 flex flex-col gap-2'>
                        <img src="media/team/5.jpg" alt="Besmillah Hakimi" className='w-full h-60 object-cover rounded-md' />
                        <h1 className='text-sm text-gray-600 uppercase'>Front-end Developer</h1>
                        <h2 className='text-lg font-bold text-[#e87a35]'>Besmillah Hakimi</h2>
                        <p className='text-sm text-gray-500 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing. Incidunt recusandae minima repellendus sapiente, soluta mollitia sit. Impedit quo perspiciatis enim.</p>
                        <div className='flex gap-4 mt-4'>
                            <a href="">
                                <FaFacebookF className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaLinkedinIn className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaInstagram className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>
                        </div>
                    </div>


                    {/* person 6 */}
                    <div className='rounded-md bg-[#ffe0cc] p-5 flex flex-col gap-2'>
                        <img src="media/team/4.jpg" alt="Besmillah Hakimi" className='w-full h-60 object-cover rounded-md' />
                        <h1 className='text-sm text-gray-600 uppercase'>Front-end Developer</h1>
                        <h2 className='text-lg font-bold text-[#e87a35]'>Besmillah Hakimi</h2>
                        <p className='text-sm text-gray-500 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing. Incidunt recusandae minima repellendus sapiente, soluta mollitia sit. Impedit quo perspiciatis enim.</p>
                        <div className='flex gap-4 mt-4'>
                            <a href="">
                                <FaFacebookF className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaLinkedinIn className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>

                            <a href="">
                                <FaInstagram className='p-2 rounded-full w-7 h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* modal */}
            {modal && 
            <div className='z-30 fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50'>
                <TeamDetails showModal={showModal}/>
            </div>
            }

        </div>
    )
}
