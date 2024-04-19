import React from 'react'
import { ReactTyped } from "react-typed";

import { FaShareNodes } from "react-icons/fa6";
import { IoIosCloudDownload } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";

export default function Profile() {
    return (
        <div className='pt-6 bg-white rounded-md flex flex-col gap-2 justify-center items-center'>
            <img src="media/team/user.jpg" alt="avatar" className='p-[2px] w-28 h-28 object-cover rounded-full border-4 border-gray-100' />
            <h1 className='font-bold'>Besmillah Hakimi</h1>
            <ReactTyped strings={["Front-end Developer", "UI Designer"]} typeSpeed={100} backSpeed={30} loop className='bg-orange-200 py-1 px-2 rounded-full text-orange-500 font-semibold text-sm' />

            {/* years,per-hour,projects  */}
            <div className='mt-6 w-full grid grid-cols-3'>

                {/* Years */}
                <div className='flex flex-col gap-1 items-center'>
                    <p className='font-bold text-xl text-gray-600'>3</p>
                    <p className='font-semibold text-sm text-gray-400'>Years</p>
                </div>

                {/* per-hour  */}
                <div className='flex flex-col gap-1 items-center'>
                    <p className='font-bold text-xl text-gray-600'>25</p>
                    <p className='font-semibold text-sm text-gray-400'>Per - Hour</p>
                </div>

                {/* projects */}
                <div className='flex flex-col gap-1 items-center'>
                    <p className='font-bold text-xl text-gray-600'>6</p>
                    <p className='font-semibold text-sm text-gray-400'>Projects</p>
                </div>

            </div>

            {/* shard, download cd, message  */}
            <div className='mt-4 w-full flex gap-2  p-2'>

                {/* share */}
                <div className='flex gap-1 items-center rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                    <FaShareNodes className='' />
                    <p>Share</p>
                </div>

                {/* download cv */}
                <div className='flex gap-1 items-center whitespace-nowrap rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                    <IoIosCloudDownload className='' />
                    <p>Download CV</p>
                </div>

                <div className='flex gap-1 items-center rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                    <MdAttachEmail className='' />
                    <p>Message</p>
                </div>

            </div>

        </div>
    )
}
