import React from 'react'

import { GrContact } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function GetInTouch() {
    return (
        <div className=''>

            {/* icon and text  */}
            <div className='flex gap-2 items-center'>

                {/* icon  */}
                <div className='p-2 rounded-full border-2 text-gray-400 border-100'>
                    <GrContact />
                </div>
                <p className='w-full border-b-2 pb-1 text-orange-400 font-semibold border-gray-200'>Get in Touch</p>
            </div>

            <form action="" className='flex flex-col gap-4 mt-4'>

                <div className='grid grid-cols-2 gap-4'>
                    {/* name  */}
                    <div className='w-full px-2 py-[6px] bg-orange-100 rounded-md flex gap-1 items-center'>
                        <FaUser className='text-gray-500' />
                        <input type="text" placeholder='Name' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                    </div>

                    {/* email  */}
                    <div className='w-full px-2 py-[6px] bg-orange-100 rounded-md flex gap-1 items-center'>
                        <MdEmail className='text-gray-500' />
                        <input type="text" placeholder='Email' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                    </div>

                </div>

                {/* message  */}
                <div className='w-full px-2 py-[6px] bg-orange-100 rounded-md'>
                    <textarea type="text" placeholder='Message' className='w-full h-28 text-gray-600 text-sm bg-transparent focus:outline-none' />
                </div>
                <input type="submit" value='Send Message' className='text-white w-full text-center py-[6px] bg-[#e87a35] rounded-md hover:cursor-pointer hover:bg-orange-600 transition-all duration-150' />
            </form>
        </div>
    )
}
