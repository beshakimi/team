import React from 'react'

import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <div className='bg-white py-6 rounded-sm flex flex-col gap-4'>
            <h1 className='text-3xl text-[#e87a35] font-bold w-full text-center '>Contact</h1>
            <p className='w-[50%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi distinctio.</p>

            <div className='relative bg-orange-200 mt-28 px-10 py-20 grid grid-cols-2 gap-6'>
                
                {/* icons  */}
                <div className='absolute top-[-100px] left-0 w-full h-fit'>

                    <div className='w-full flex gap-6 justify-center'>

                        {/* address  */}
                        <div className='flex flex-col gap-2 p-4 justify-center items-center bg-[#e87a35] w-40 h-40 '>
                            <FaLocationDot className='w-16 h-16 text-white'/>
                            <h1 className='text-xs font-bold uppercase'>Our Main Address</h1>
                            <p className='text-sm'>Kabul Afghanistan</p>
                        </div>

                         {/* phone  */}
                         <div className='flex flex-col gap-2 p-4 justify-center items-center bg-[#e87a35] w-40 h-40 '>
                            <PiPhoneThin className='w-16 h-16 text-white'/>
                            <h1 className='text-xs font-bold uppercase'>phone number</h1>
                            <p className='text-sm'>+93 799877326</p>
                        </div>

                         {/* email  */}
                         <div className='flex flex-col gap-2 p-6 justify-center items-center bg-[#e87a35] w-40 h-40 '>
                            <HiOutlineMail className='w-16 h-16 text-white'/>
                            <h1 className='font-semibold uppercase'>email</h1>
                            <p className='text-sm'>our@gmail.com</p>
                        </div>

                    </div>
                </div>
                
                <div className='rounded-md bg-white p-6'>
                    <form action="" className='flex flex-col gap-4'>
                        
                        {/* name  */}
                        <div className='w-full px-2 py-[6px] bg-orange-100 rounded-md flex gap-2 items-center'>
                            <FaUser className='text-gray-500'/>
                            <input type="text" placeholder='Name' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none'/>
                        </div>

                        {/* email  */}
                        <div className='w-full px-2 py-[6px] bg-orange-100 rounded-md flex gap-2 items-center'>
                            <MdEmail className='text-gray-500'/>
                            <input type="text" placeholder='Email' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none'/>
                        </div>

                         {/* email  */}
                         <div className='w-full px-2 py-[6px] bg-orange-100 rounded-md'>
                            <textarea type="text" placeholder='Message' className='w-full h-28 text-gray-600 text-sm bg-transparent focus:outline-none'/>
                        </div>
                       
                    </form>
                </div>
                <img src="media/images/contact.png" alt="contact image" className='w-full h-full object-cover' />

            </div>
        </div>
    )
}
