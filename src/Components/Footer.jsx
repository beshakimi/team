import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll'

import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";

import { FaLaptopCode } from "react-icons/fa";
import { BsPhoneFlip } from "react-icons/bs";
import { IoServer } from "react-icons/io5";
import { GiGlowingArtifact } from "react-icons/gi";
import teamData from '../data/teamData';
import ImageLoader from './ImageLoader';

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


    return (
        <div className='bg-white pt-4 lg:pt-10 mt-4 lg:mt-10 flex flex-col gap-6'>
            <div className='grid grid-cols-2 gap-y-6 lg:grid-cols-4 w-[90%] md:w-[80%] mx-auto'>

                {/* Get in Touch */}
                <div className='flex flex-col gap-2 text-gray-600'>
                    <h1 className='text-orange-500 font-bold text-lg md:text-xl'>Get in Touch</h1>

                    <div className='flex gap-2 items-center md:mt-2'>
                        <FaLocationDot className='text-orange-500' />
                        <p className='text-sm'>Kabul Afghanistan</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <PiPhoneThin className='text-orange-500' />
                        <p className='text-sm'>+93 798762319</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <HiOutlineMail className='text-orange-500' />
                        <p className='text-sm'>team@gmail.com</p>
                    </div>

                    <div className='flex gap-2 mt-2'>
                        <ImageLoader src="media/icons/social.png" alt="instagram" className='w-5 h-5 md:w-8 md:h-8' loadingText={false} />
                        <ImageLoader src="media/icons/linkden.png" alt="linkedin" className='w-5 h-5 md:w-8 md:h-8' loadingText={false} />
                        <ImageLoader src="media/icons/whatsapp.png" alt="whatsapp" className='w-5 h-5 md:w-8 md:h-8' loadingText={false} />
                        <ImageLoader src="media/icons/facebook.png" alt="facebook" className='w-5 h-5 md:w-8 md:h-8' loadingText={false} />
                        <ImageLoader src="media/icons/github.png" alt="github" className='w-5 h-5 md:w-8 md:h-8' loadingText={false} />
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
                        <p className='text-sm'>Machine Learning</p>
                    </div>
                </div>

                {/* Quick Link */}
                <div className='flex flex-col gap-2 text-gray-600'>
                    <h1 className='text-orange-500 font-bold text-lg md:text-xl'>Quick Link</h1>
                    <div className='flex gap-6 md:gap-10 md:mt-2 text-sm'>
                        <div className='flex flex-col gap-2'>
                            <Link to="/" onClick={() => animateScroll.scrollToTop()}>Home</Link>
                            <Link to="/" onClick={() => setTimeout(scrollToAbout, 100)}>About Us</Link>
                            <Link to="/" onClick={() => setTimeout(scrollToPortfolio, 200)}>Portfolio</Link>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Link to="/" onClick={() => setTimeout(scrollToServices, 300)}>Services</Link>
                            <Link to="/" onClick={() => setTimeout(scrollToBlog, 200)}>Blog</Link>
                            <Link to="/" onClick={() => setTimeout(scrollToContact, 200)}>Contact Us</Link>
                        </div>
                    </div>
                </div>

                {/* Our Team */}
                <div className='flex flex-col gap-2 text-gray-600'>
                    <h1 className='text-orange-500 font-bold text-lg md:text-xl'>Our Team</h1>
                    <div className='grid grid-cols-4 gap-2 md:mt-2'>
                        {teamData.map(dev => (
                            <ImageLoader
                                key={dev.id}
                                src={dev.profile_image}
                                alt={`${dev.firstname} ${dev.lastname}`}
                                className='min-w-10 h-10 md:w-12 md:h-12 object-cover rounded-full'
                                loadingText={false}
                            />
                        ))}
                    </div>
                </div>


            </div>

            <div className='w-[90%] md:w-[80%] mx-auto py-2 md:py-4 border-t-2 border-gray-400 grid grid-cols-3'>
                <ImageLoader src="media/logo/logo2.png" alt="logo" className='w-10 sm:w-14 md:w-20' loadingText={false} />
                <div className='flex flex-col md:gap-1 items-center whitespace-nowrap'>
                    <p className='text-xs md:text-sm lg:text-base'>
                        © {new Date().getFullYear()}. All Rights Reserved.
                    </p>

                    <p className='text-xs md:text-sm lg:text-base flex gap-1 items-center'>
                        Built by Jawid Hakimi with <span className='text-red-500 text-xl'>♥</span>
                    </p>
                </div>
                <Link to="#" onClick={scrollToTop} className='flex justify-end items-center'>
                    <ImageLoader loadingText={false} src="media/icons/up-arrow.png" alt="" className='w-5 h-5 md:w-7 md:h-7 hover:cursor-pointer hover:animate-bounce transition-all duration-300' />
                </Link>
            </div>
        </div>
    )
}
