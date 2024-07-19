import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll'


import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";

import { FaLaptopCode } from "react-icons/fa";
import { BsPhoneFlip } from "react-icons/bs";
import { IoServer } from "react-icons/io5";
import { GiGlowingArtifact } from "react-icons/gi";
import axios from 'axios';

export default function Footer({
    scrollToHero,
    scrollToAbout,
    scrollToPortfolio,
    scrollToServices,
    scrollToBlog,
    scrollToContact
}) {

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    const [developersImage, setDevelopersImage] = useState([])
    const url = 'http://127.0.0.1:8000/developers/';
    const imageUrl = 'http://127.0.0.1:8000/';

    useEffect (()=> {
        axios.get(url)
        .then ((res) => {
            setDevelopersImage(res.data);
        })
    },[])

    return (
        <div className='bg-white pt-4 lg:pt-10 mt-4 lg:mt-10 flex flex-col gap-6'>

            <div className='grid grid-cols-2 gap-y-6 lg:grid-cols-4 w-[90%] md:w-[80%] mx-auto'>

                {/* Get in Touch */}
                <div className='flex flex-col gap-2 text-gray-600'>
                    <h1 className='text-orange-500 font-bold text-lg md:text-xl'>Get in Touch</h1>

                    {/* address  */}
                    <div className='flex gap-2 items-center md:mt-2'>
                        <FaLocationDot className='text-orange-500' />
                        <p className='text-sm'>Kabul Afghanistan</p>
                    </div>

                    {/* phone number  */}
                    <div className='flex gap-2 items-center'>
                        <PiPhoneThin className='text-orange-500' />
                        <p className='text-sm'>+93 798762319</p>
                    </div>

                    {/* email address  */}
                    <div className='flex gap-2 items-center'>
                        <HiOutlineMail className='text-orange-500' />
                        <p className='text-sm'>team@gmail.com</p>
                    </div>

                    {/* sotial icons */}
                    <div className='flex gap-2'>
                        <a href="">
                            <img src="media/icons/social.png" alt="instagram" className='w-5 h-5 md:w-8 md:h-8' />
                        </a>

                        <a href="">
                            <img src="media/icons/linkden.png" alt="instagram" className='w-5 h-5 md:w-8 md:h-8' />
                        </a>

                        <a href="">
                            <img src="media/icons/whatsapp.png" alt="instagram" className='w-5 h-5 md:w-8 md:h-8' />
                        </a>

                        <a href="">
                            <img src="media/icons/facebook.png" alt="facebook" className='w-5 h-5 md:w-8 md:h-8' />
                        </a>

                        <a href="" className=''>
                            <img src="media/icons/github.png" alt="github" className='w-5 h-5 md:w-8 md:h-8' />
                        </a>

                    </div>

                </div>

                {/* Services */}
                <div className='flex flex-col gap-2 text-gray-600'>
                    <h1 className='text-orange-500 font-bold text-lg md:text-xl'>Services</h1>

                    <div className='flex gap-2 items-center md:mt-2'>
                        <FaLaptopCode className='text-orange-500' />
                        <p className='text-sm'>Web Design</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <IoServer className='text-orange-500' />
                        <p className='text-sm'>Web Development</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <BsPhoneFlip className='text-orange-500' />
                        <p className='text-sm'>Mobile Application</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <GiGlowingArtifact className='text-orange-500' />
                        <p className='text-sm'>Machin Learning</p>
                    </div>


                </div>

                {/* Quick Link */}
                <div className='flex flex-col gap-2 text-gray-600'>
                    <h1 className='text-orange-500 font-bold text-lg md:text-xl'>Quick Link</h1>

                    <div className='flex gap-6 md:gap-10 md:mt-2 text-sm'>

                        <div className='flex flex-col gap-2'>
                            <Link to="/" className="border-b-2 border-white hover:border-orange-400 hover:text-gray-900 hover:cursor-pointer transition-all duration-150"
                                onClick={() => {
                                    animateScroll.scrollToTop();
                                }}>Home</Link>

                            <Link to="/" className=" border-b-2 border-white hover:border-orange-400 hover:text-gray-900 hover:cursor-pointer transition-all duration-150"
                                onClick={() => {
                                    setTimeout(() => {
                                        scrollToAbout();
                                    }, 100);
                                }}>About Us</Link>

                            <Link to="/" className=" border-b-2 border-white hover:border-orange-400 hover:text-gray-900 hover:cursor-pointer transition-all duration-150"
                                onClick={() => {
                                    setTimeout(() => {
                                        scrollToPortfolio();
                                    }, 200);
                                }}>Portfolio</Link>

                        </div>

                        <div className='flex flex-col gap-2'>
                            <Link to="/" className=" border-b-2 border-white hover:border-orange-400 hover:text-gray-900 hover:cursor-pointer transition-all duration-150"
                                onClick={() => {
                                    setTimeout(() => {
                                        scrollToServices();
                                    }, 300);
                                }}>Services</Link>

                            <Link to="/" className=" border-b-2 border-white hover:border-orange-400 hover:text-gray-900 hover:cursor-pointer transition-all duration-150"
                                onClick={() => {
                                    setTimeout(() => {
                                        scrollToBlog();
                                    }, 200);
                                }}>Blog</Link>

                            <Link to="/" className=" border-b-2 border-white hover:border-orange-400 hover:text-gray-900 hover:cursor-pointer transition-all duration-150"
                                onClick={() => {
                                    setTimeout(() => {
                                        scrollToContact();
                                    }, 200);
                                }}>Contact Us</Link>
                        </div>
                    </div>


                </div>

                {/* Our Team */}
                <div className='flex flex-col gap-2 text-gray-600'>
                    <h1 className='text-orange-500 font-bold text-lg md:text-xl'>Our Team</h1>
                    <div className='grid grid-cols-4 gap-2 md:mt-2'>
                        {developersImage.map(developer => (
                            <img key={developer.id} src={`${imageUrl}${developer.avatar}`} alt="developer avatar" className=' w-12 h-12 object-cover' />

                        ))}
                    </div>

                </div>

            </div>

            <div className='w-[90%] md:w-[80%] mx-auto py-2 md:py-4 border-t-2 border-gray-400 grid grid-cols-3'>
                <img src="media/logo/logo2.png" alt="logo" className='w-10 sm:w-14 md:w-20' />
                <div className='flex flex-col md:gap-1 items-center whitespace-nowrap'>
                    <p className='text-xs md:text-sm lg:text-base'>© 2024. All Rights Reserved.</p>
                    <p className='text-xs md:text-sm lg:text-base flex gap-1 items-center'>Built by our team with <span className='text-red-500 text-xl'>♥</span></p>
                </div>

                <Link to="#" smooth={true} duration={500} onClick={scrollToTop} className='flex justify-end items-center'>
                    <img src="media/icons/up-arrow.png" alt="" className='w-5 h-5 md:w-7 md:h-7 hover:cursor-pointer hover:animate-bounce transition-all duration-300' />
                </Link>
            </div>
        </div>
    )
}
