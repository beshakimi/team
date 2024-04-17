import React from 'react'
import { MdPreview } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function RelatedPost() {
    return (
        <div className='w-full flex flex-col gap-4 my-10'>
            <h1 className='font-semibold text-lg'>Related Posts</h1>

            <div className='w-full grid grid-cols-3 gap-6'>

                {/* post 1 */}
                <div className='flex flex-col gap-1 w-full bg-orange-100 p-4 rounded-sm hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>

                    {/* image */}
                    <div className='w-full h-40 relative'>
                        <img src="media/blog/2.jpg" alt="" className='w-full h-full  object-cover hover:scale-105 ease-in duration-200' />
                        <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>
                        </div>
                    </div>

                    <p className='text-xs text-gray-500 uppercase'>march 12, 2024</p>

                    <div className='flex flex-col gap-1'>

                        <h1 className='text-lg font-semibold'>Creative Heading Design</h1>
                        <p className='text-gray-500 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
                    </div>

                    {/* views  */}
                    <div className='flex gap-8 mt-4'>

                        {/* views  */}
                        <div className='flex gap-1 items-center text-gray-500 text-xs'>
                            <MdPreview />
                            <p>12k Views</p>
                        </div>

                        {/* share  */}
                        <div className='flex gap-1 items-center text-gray-500 text-xs'>
                            <FaShareNodes />
                            <p>125 Share</p>
                        </div>

                    </div>
                </div>

                {/* post 2 */}
                <div className='flex flex-col gap-1 w-full bg-orange-100 p-4 hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>

                    {/* image */}
                    <div className='w-full h-40 relative'>
                        <img src="media/blog/3.jpg" alt="" className='w-full h-full object-cover hover:scale-105 ease-in duration-200' />
                        <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>
                        </div>
                    </div>

                    <p className='text-xs text-gray-500 uppercase'>march 12, 2024</p>

                    <div className='flex flex-col gap-1'>

                        <h1 className='text-lg font-semibold'>Creative Heading Design</h1>
                        <p className='text-gray-500 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
                    </div>

                    {/* views, share  */}
                    <div className='flex gap-8 mt-4'>

                        {/* views  */}
                        <div className='flex gap-1 items-center text-gray-500 text-xs'>
                            <MdPreview />
                            <p>12k Views</p>
                        </div>

                        {/* share  */}
                        <div className='flex gap-1 items-center text-gray-500 text-xs'>
                            <FaShareNodes />
                            <p>125 Share</p>
                        </div>

                    </div>
                </div>

                {/* post 3 */}
                <div className='flex flex-col gap-1 w-full bg-orange-100 p-4 hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>

                    {/* image */}
                    <div className='w-full h-40 relative'>
                        <img src="media/blog/4.jpg" alt="" className='w-full h-full object-cover hover:scale-105 ease-in duration-200' />
                        <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>
                        </div>
                    </div>

                    <p className='text-xs text-gray-500 uppercase'>march 12, 2024</p>

                    <div className='flex flex-col gap-1'>

                        <h1 className='text-lg font-semibold'>Creative Heading Design</h1>
                        <p className='text-gray-500 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
                    </div>

                    {/* views, share  */}
                    <div className='flex gap-8 mt-4'>

                        {/* views  */}
                        <div className='flex gap-1 items-center text-gray-500 text-xs'>
                            <MdPreview />
                            <p>12k Views</p>
                        </div>

                        {/* share  */}
                        <div className='flex gap-1 items-center text-gray-500 text-xs'>
                            <FaShareNodes />
                            <p>125 Share</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
