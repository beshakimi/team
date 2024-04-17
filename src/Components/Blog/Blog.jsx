import React, { useState } from 'react'

import { MdPreview } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import BlogDetails from './BlogDetails';

export default function Blog() {
  const [details, showDetails] = useState(false);
  return (
    <div className='bg-white p-6 rounded-sm flex flex-col gap-4'>
      <h1 className='text-3xl text-[#e87a35] font-bold w-full text-center '>Blog</h1>
      <p className='w-[50%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi distinctio.</p>

      <div className='grid grid-cols-2 gap-6 my-8'>

        {/* post 1 */}
        <div onClick={() => showDetails(true)} className='flex flex-col gap-4 w-full hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>
          <div className='w-full relative'>
            <img src="media/blog/1.jpg" alt="" className='w-full hover:scale-105 ease-in duration-200' />

            <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>

            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex gap-1 items-center text-gray-500 text-sm'>

              <p className='uppercase'>April-12-2024</p>
            </div>
            <h1 className='text-3xl font-semibold'>Creative Heading Design</h1>
            <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, dolore. Dicta, laboriosam excepturi ducimus placeat pariatur facilis sapiente asperiores exercitationem...</p>
          </div>

          <div className='flex gap-8'>

            {/* views  */}
            <div className='flex gap-1 items-center text-gray-500 text-sm'>
              <MdPreview />
              <p>12k Views</p>
            </div>

            {/* share  */}
            <div className='flex gap-1 items-center text-gray-500 text-sm'>
              <FaShareNodes />
              <p>125 Share</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4'>

          {/* post 2 */}
          <div className='flex flex-col gap-1 w-full hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>

            {/* image */}
            <div className='w-full h-36 relative'>
              <img src="media/blog/2.jpg" alt="" className='w-full h-full object-cover hover:scale-105 ease-in duration-200' />
              <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>
              </div>
            </div>

            <p className='text-xs text-gray-500 uppercase'>march 12, 2024</p>

            <div className='flex flex-col gap-1'>

              <h1 className='text-lg font-semibold'>Creative Heading Design</h1>
              <p className='text-gray-500 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
            </div>

            <div className='flex gap-8'>

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
          <div className='flex flex-col gap-1 w-full hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>

            {/* image */}
            <div className='w-full h-36 relative'>
              <img src="media/blog/3.jpg" alt="" className='w-full h-full object-cover hover:scale-105 ease-in duration-200' />
              <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>
              </div>
            </div>

            <p className='text-xs text-gray-500 uppercase'>march 12, 2024</p>

            <div className='flex flex-col gap-1'>

              <h1 className='text-lg font-semibold'>Creative Heading Design</h1>
              <p className='text-gray-500 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
            </div>

            <div className='flex gap-8'>

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

          {/* post 4 */}
          <div className='flex flex-col gap-1 w-full hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>

            {/* image */}
            <div className='w-full h-36 relative'>
              <img src="media/blog/4.jpg" alt="" className='w-full h-full object-cover hover:scale-105 ease-in duration-200' />
              <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>
              </div>
            </div>

            <p className='text-xs text-gray-500 uppercase'>march 12, 2024</p>

            <div className='flex flex-col gap-1'>

              <h1 className='text-lg font-semibold'>Creative Heading Design</h1>
              <p className='text-gray-500 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
            </div>

            <div className='flex gap-8'>

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

          {/* post 5 */}
          <div className='flex flex-col gap-1 w-full hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>

            {/* image */}
            <div className='w-full h-36 relative'>
              <img src="media/blog/5.jpg" alt="" className='w-full h-full object-cover hover:scale-105 ease-in duration-200' />
              <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>
              </div>
            </div>

            <p className='text-xs text-gray-500 uppercase'>march 12, 2024</p>

            <div className='flex flex-col gap-1'>

              <h1 className='text-lg font-semibold'>Creative Heading Design</h1>
              <p className='text-gray-500 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
            </div>

            <div className='flex gap-8'>

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

        <div className='flex gap-2'>
          <MdOutlineKeyboardArrowLeft className='w-7 h-7 p-1 border border-orange-300 hover:cursor-pointer hover:bg-orange-300 ease-in duration-150' />
          <MdKeyboardArrowRight className='w-7 h-7 p-1 border border-orange-300 hover:cursor-pointer hover:bg-orange-300 ease-in duration-150' />
        </div>

      </div>

      {/* details */}
      {details &&
        <div className='z-30 fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 overflow-scroll no-scroll'>
          <BlogDetails modal={showDetails} />
        </div>
      }


    </div>
  )
}
