import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { animateScroll } from 'react-scroll'
import { FaSearch } from "react-icons/fa";
import Login from './User/Login';



export default function Header({
    scrollToHero,
    scrollToAbout,
    scrollToPortfolio,
    scrollToServices,
    scrollToBlog,
    scrollToContact
}) {

    return (

        <div className='flex w-full h-16 md:h-36 bg-white fixed top-0 left-0 z-30'>

            <div style={{ clipPath: 'polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0% 0%)' }} className='min-w-[160px] md:min-w-[320px] h-full bg-slate-700 flex justify-between relative z-10'>

                {/* logo  */}
                <div className='ml-7 md:ml-10 flex items-center justify-center'>
                    <img src="media/logo/logo1.png" alt="logo" className='w-14 md:w-32 object-cover' />
                </div>

                <div style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 100%, 50% 50%, 0% 0%)' }} className='w-8 md:w-16 h-full bg-red-500'></div>
                <div style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 100%, 50% 50%, 0% 0%)' }} className='absolute right-4 md:right-8 top-0 w-8 md:w-16 h-full bg-orange-500'></div>
            </div>

            {/* nav items  */}
            <div className='absolute bottom-0 w-full h-fit py-2 md:py-3 bg-orange-400 flex justify-end xl:justify-center'>
                <div className='flex gap-3 md:gap-4 items-center text-xs md:text-base mr-4'>

                    <Link to="/" className=" text-white hover:cursor-pointer border-b-2 border-orange-400 hover:border-b-2 hover:border-white ease-in duration-150"
                        onClick={() => {
                            animateScroll.scrollToTop();
                        }}
                    >Home</Link>

                    <Link to="/" className=" text-white hover:cursor-pointer border-b-2 border-orange-400 hover:border-b-2 hover:border-white ease-in duration-150"
                        onClick={() => {
                            setTimeout(() => {
                                scrollToAbout();
                            }, 100);
                        }}>About Us</Link>


                    <Link to="/" className=" text-white hover:cursor-pointer border-b-2 border-orange-400 hover:border-b-2 hover:border-white ease-in duration-150"
                        onClick={() => {
                            setTimeout(() => {
                                scrollToPortfolio();
                            }, 200);
                        }}>Portfolio</Link>

                    <Link to="/" className=" text-white hover:cursor-pointer border-b-2 border-orange-400 hover:border-b-2 hover:border-white ease-in duration-150"
                        onClick={() => {
                            setTimeout(() => {
                                scrollToServices();
                            }, 300);
                        }}>Services</Link>

                    <Link to="/" className=" text-white hover:cursor-pointer border-b-2 border-orange-400 hover:border-b-2 hover:border-white ease-in duration-150"
                        onClick={() => {
                            setTimeout(() => {
                                scrollToBlog();
                            }, 400);
                        }}>Blog</Link>

                    <Link to="/" className=" text-white hover:cursor-pointer border-b-2 border-orange-400 hover:border-b-2 hover:border-white ease-in duration-150"
                        onClick={() => {
                            setTimeout(() => {
                                scrollToContact();
                            }, 400);
                        }}>Contact Us</Link>
                </div>
            </div>

            <div className='w-full md:p-8 flex justify-between'>

                {/* search */}
                <form action="" className='mt-1 md:mt-0 h-5 w-44 md:w-auto md:h-9 overflow-hidden rounded-full md:rounded-md flex items-center bg-orange-100'>
                    <input type="text" placeholder='Search ...' className='text-xs md:text-sm border md:border-2 border-orange-100 text-orange-500 placeholder:text-orange-400 rounded-l-full md:rounded-l-md bg-transparent h-full px-2 w-60 lg:w-96 focus:border-orange-400 focus:outline-none' />
                    <button className='w-16 h-full bg-orange-400 flex justify-center items-center hover:bg-orange-500 transition-all duration-200'>
                        <FaSearch className='text-xs md:text-base text-white' />
                    </button>
                </form>

                <div className='flex gap-2 md:gap-4 h-fit mr-4 mt-1 md:mt-0 items-center'>
                    <div className='relative'>
                        <img src="media/users/1.jpg" alt="your profile" className='w-5 h-5 md:w-10 md:h-10 rounded-full object-cover border md:border-2 border-[#e87a35] ' />
                    </div>
                    <Link onClick={() => {window.scrollTo(0,0)}} to='/login'>
                        <p className='text-xs md:text-base border px-1 md:px-2 py-[2px] md:py-1 rounded-md h-fit flex items-center text-orange-400 border-orange-400 hover:cursor-pointer hover:text-white hover:bg-orange-400 ease-in duration-150 whitespace-nowrap'>Log in</p>

                    </Link>
                </div>
            </div>

        </div>



    )
}
