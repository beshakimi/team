import React from 'react'
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";

export default function About() {
    return (
        <div className='flex flex-col gap-4'>
            {/* icon and name  */}
            <div className='flex gap-2 items-center'>

                {/* icon  */}
                <div className='p-2 rounded-full border-2 text-gray-400 border-100'>
                    <MdOutlineCastForEducation />
                </div>
                <p className='w-full border-b-2 pb-1 text-orange-400 font-semibold border-gray-200'>About Besmillah Hakimi</p>
            </div>

            {/* image and information */}
            <div className='grid grid-cols-3 gap-4'>
                <img src="media/team/8.jpg" alt="image" className='col-span-1 w-full h-80 object-cover' />

                <div className='col-span-2 flex flex-col gap-2'>
                    <h1 className='font-semibold text-gray-700'>Hello I'm front-end Developer | UI Designer</h1>
                    <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor tempore veniam distinctio aliquid aliquam ratione, beatae, unde soluta maiores tenetur obcaecati consequatur minus a quas cupiditate odio cum impedit voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo similique qui impedit ullam assumenda mollitia corrupti voluptates iste, eos libero dolorem omnis deserunt veniam numquam veritatis exercitationem ex est.</p>

                    {/* phone,address,email  */}
                    <div className='flex flex-col gap-2 mt-6'>

                        {/* address  */}
                        <div className='flex gap-2 items-center mt-2'>
                            <FaLocationDot className='text-orange-500' />
                            <p className='text-sm text-gray-600'>Kabul Afghanistan</p>
                        </div>

                        {/* phone number  */}
                        <div className='flex gap-2 items-center'>
                            <PiPhoneThin className='text-orange-500' />
                            <p className='text-sm text-gray-600'>+93 798762319</p>
                        </div>

                        {/* email address  */}
                        <div className='flex gap-2 items-center'>
                            <HiOutlineMail className='text-orange-500' />
                            <p className='text-sm text-gray-600'>b.hakimi@gmail.com</p>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
