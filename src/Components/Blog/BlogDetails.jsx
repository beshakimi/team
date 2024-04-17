import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import ShowComments from '../Comment/ShowComments';
import WriteComent from '../Comment/WriteComent';
import RelatedPost from './RelatedPost';

export default function BlogDetails({ modal }) {
    return (
        <div className='w-[80%] mx-auto bg-white'>
            <div className='flex flex-col gap-4 lg:w-[90%] mx-auto mt-6 p-6 xl:mb-32'>
                <IoClose onClick={() => modal(false)} className='fixed top-6 right-6 w-6 h-6 text-white border hover:cursor-pointer hover:border-orange-400 hover:bg-orange-400 ease-in duration-150' />

                <h1 className='text-4xl font-semibold text-rose-400'>Creative Heading Design</h1>

                {/* date, views, share  */}
                <div className='flex gap-6'>

                    {/* date  */}
                    <div className='flex gap-1 items-center text-gray-500 text-sm'>
                        <FaRegCalendarAlt />
                        <p>April 12, 2024</p>
                    </div>

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

                {/* image and text  */}
                <div className='w-full flex flex-col gap-4 bg-white '>
                    <img src="media/blog/2.jpg" className='w-full h-[400px] object-cover' />

                    <div className='pb-6 flex flex-col gap-2'>
                        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, minus numquam iste exercitationem impedit nobis deserunt incidunt unde dolor, eaque eum odit fugiat perspiciatis eius earum porro nam? Obcaecati, labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quibusdam mollitia tempora iusto reiciendis, nemo, suscipit delectus, natus qui iure autem facilis magnam aperiam enim. Placeat ipsa ducimus voluptatem pariatur.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, minus numquam iste exercitationem impedit nobis deserunt incidunt unde dolor, eaque eum odit fugiat perspiciatis eius earum porro nam? Obcaecati, labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quibusdam mollitia tempora iusto reiciendis, nemo, suscipit delectus, natus qui iure autem facilis magnam aperiam enim. Placeat ipsa ducimus voluptatem pariatur.
                        </p>
                    </div>

                </div>

                {/* share  */}
                <div className='flex gap-4'>

                    {/* facebook */}
                    <div className='flex gap-1 items-center px-4 py-2 text-white bg-[#2d7cfa] rounded-full hover:underline hover:cursor-pointer hover:text-orange-200 ease-in duration-150'>
                        <TiSocialFacebook />
                        <p>Share on Facebook</p>
                    </div>

                    {/* linkden */}
                    <div className='flex gap-1 items-center px-4 py-2 text-white bg-[#03a5fc] rounded-full hover:underline hover:cursor-pointer hover:text-orange-200 ease-in duration-150'>
                        <FaLinkedin />
                        <p>Share on Linkedln</p>
                    </div>

                    {/* linkden */}
                    <div className='flex gap-1 items-center px-4 py-2 text-white bg-[#b5417d] rounded-full hover:underline hover:cursor-pointer hover:text-orange-200 ease-in duration-150'>
                        <LuInstagram />
                        <p>Share on Instagram</p>
                    </div>



                </div>

                <div className='w-full'>
                    <RelatedPost/>
                    <ShowComments />
                    <WriteComent />
                </div>

            </div>

        </div>
    )
}
