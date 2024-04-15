import React from 'react'
import { Link } from 'react-scroll'
import { FaSearch } from "react-icons/fa";


export default function Header() {
    return (

        <div className='flex w-full h-36 bg-white relative'>

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
                    <Link to="blog" smooth={true} spy={true} offset={50} className=" text-white hover:cursor-pointer border-b-2 border-orange-400 hover:border-b-2 hover:border-white ease-in duration-150">Home</Link>
                    <Link to="blog" smooth={true} spy={true} offset={50} className=" text-white hover:cursor-pointer border-b-2 border-orange-400 hover:border-b-2 hover:border-white ease-in duration-150">About Us</Link>
                    <Link to="blog" smooth={true} spy={true} offset={50} className=" text-white hover:cursor-pointer border-b-2 border-orange-400 hover:border-b-2 hover:border-white ease-in duration-150">Portfolio</Link>
                    <Link to="blog" smooth={true} spy={true} offset={50} className=" text-white hover:cursor-pointer border-b-2 border-orange-400 hover:border-b-2 hover:border-white ease-in duration-150">Services</Link>
                    <Link to="blog" smooth={true} spy={true} offset={50} className=" text-white hover:cursor-pointer border-b-2 border-orange-400 hover:border-b-2 hover:border-white ease-in duration-150">Contact Us</Link>
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

                <div className='flex gap-4'>
                    <img src="media/users/1.jpg" alt="your profile" className='w-10 h-10 rounded-full object-cover border-2 border-[#e87a35] ' />
                </div>
            </div>
        </div>


    )
}
