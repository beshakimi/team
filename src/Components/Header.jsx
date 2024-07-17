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

        <div className='flex w-full h-36 bg-white fixed top-0 left-0 z-30'>

            <div style={{ clipPath: 'polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0% 0%)' }} className='min-w-[320px] h-full bg-slate-700 flex justify-between relative z-10'>

                {/* logo  */}
                <div className='ml-10 flex items-center justify-center'>
                    <img src="media/logo/logo1.png" alt="logo" className='w-32 object-cover' />
                </div>

                <div style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 100%, 50% 50%, 0% 0%)' }} className='w-16 h-full bg-red-500'></div>
                <div style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 100%, 50% 50%, 0% 0%)' }} className='absolute right-8 top-0 w-16 h-full bg-orange-500'></div>
            </div>

            {/* nav items  */}
            <div className='absolute bottom-0 w-full h-fit py-3 bg-orange-400 flex justify-center'>
                <div className='flex gap-4 items-center'>

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

            <div className='w-full p-8 flex justify-between'>

                {/* search */}
                <form action="" className='h-9 overflow-hidden rounded-md flex items-center bg-orange-100'>
                    <input type="text" placeholder='What are you looking for?' className='text-sm border-2 border-orange-100 text-orange-500 placeholder:text-orange-400 rounded-l-md bg-transparent h-full px-2 w-96 focus:border-orange-400 focus:outline-none' />
                    <button className='w-16 h-full bg-orange-400 flex justify-center items-center hover:bg-orange-500 transition-all duration-200'>
                        <FaSearch className='text-white' />
                    </button>
                </form>

                <div className='flex gap-4 h-fit items-center'>
                    <div className='relative'>
                        <img src="media/users/1.jpg" alt="your profile" className='w-10 h-10 rounded-full object-cover border-2 border-[#e87a35] ' />
                    </div>
                    <Link onClick={() => {window.scrollTo(0,0)}} to='/login'>
                        <p className='border px-2 py-1 rounded-md h-fit flex items-center text-orange-400 border-orange-400 hover:cursor-pointer hover:text-white hover:bg-orange-400 ease-in duration-150'>Log in</p>

                    </Link>
                </div>
            </div>

        </div>



    )
}
