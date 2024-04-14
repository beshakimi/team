import React from 'react'

import { FaLaptopCode } from "react-icons/fa";
import { BsPhoneFlip } from "react-icons/bs";
import { IoServer } from "react-icons/io5";
import { GiGlowingArtifact } from "react-icons/gi";

export default function Services() {
    return (
        <div className='bg-white p-6 rounded-sm flex flex-col gap-4'>
            <h1 className='text-3xl text-[#e87a35] font-bold w-full text-center '>Services</h1>
            <p className='w-[50%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi distinctio.</p>



            {/* services  */}
            <div className='grid grid-cols-2 gap-6 mt-6'>
              
                {/* service 1 */}
                <div className='flex'>
                    <div className='w-full h-40 flex items-center relative'>
                        <div  style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }} className='mr-10 bg-yellow-400 bg-opacity-80 h-28 w-full ml-20 flex items-center justify-center'>
                            <div className='flex flex-col gap-1 ml-24'>
                                <h1 className='font-bold text-white '>Make Websit</h1>
                                <p className='text-xs text-gray-100 pr-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='absolute left-0 top-0 w-fit bg-yellow-400 p-6 shadow-lg shadow-black'>
                            <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='w-28 h-28 bg-white flex justify-center items-center'>
                                <FaLaptopCode className='w-full h-full text-yellow-400 p-6 '/>
                            </div>
                        </div>

                        {/* 01 */}
                        <div className='absolute right-10 transform translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-yellow-400 p-1 shadow-lg'>
                            <div className='w-full h-full rounded-full bg-yellow-400 flex items-center justify-center font-bold text-white text-lg'>01</div>
                            <div className='absolute right-4 transform translate-y-6 w-5 h-5 rounded-full bg-yellow-400'></div>
                        </div>
                    </div>

                </div>

                 {/* service 2 */}
                 <div className='flex'>
                    <div className='w-full h-40 flex items-center relative'>
                        <div  style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }} className='mr-10 bg-orange-400 bg-opacity-80 h-28 w-full ml-20 flex items-center justify-center'>
                            <div className='flex flex-col gap-1 ml-24'>
                                <h1 className='font-bold text-white '>Make Websit</h1>
                                <p className='text-xs text-gray-100 pr-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='absolute left-0 top-0 w-fit bg-orange-400 p-6 shadow-lg shadow-black'>
                            <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='w-28 h-28 bg-white flex justify-center items-center'>
                                <BsPhoneFlip className='w-full h-full text-orange-400 p-6 '/>
                            </div>
                        </div>

                        {/* 02 */}
                        <div className='absolute right-10 transform translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-orange-400 p-1 shadow-lg'>
                            <div className='w-full h-full rounded-full bg-orange-400 flex items-center justify-center font-bold text-white text-lg'>02</div>
                            <div className='absolute right-4 transform translate-y-6 w-5 h-5 rounded-full bg-orange-400'></div>
                        </div>
                    </div>

                </div>

                {/* service 3 */}
                <div className='flex'>
                    <div className='w-full h-40 flex items-center relative'>
                        <div  style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }} className='mr-10 bg-pink-400 bg-opacity-80 h-28 w-full ml-20 flex items-center justify-center'>
                            <div className='flex flex-col gap-1 ml-24'>
                                <h1 className='font-bold text-white '>Make Websit</h1>
                                <p className='text-xs text-gray-100 pr-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='absolute left-0 top-0 w-fit bg-pink-400 p-6 shadow-lg shadow-black'>
                            <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='w-28 h-28 bg-white flex justify-center items-center'>
                                <IoServer className='w-full h-full text-pink-400 p-6 '/>
                            </div>
                        </div>

                        {/* 03 */}
                        <div className='absolute right-10 transform translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-pink-400 p-1 shadow-lg'>
                            <div className='w-full h-full rounded-full bg-pink-400 flex items-center justify-center font-bold text-white text-lg'>03</div>
                            <div className='absolute right-4 transform translate-y-6 w-5 h-5 rounded-full bg-pink-400'></div>
                        </div>
                    </div>

                </div>

                {/* service 4 */}
                <div className='flex'>
                    <div className='w-full h-40 flex items-center relative'>
                        <div  style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }} className='mr-10 bg-blue-400 bg-opacity-80 h-28 w-full ml-20 flex items-center justify-center'>
                            <div className='flex flex-col gap-1 ml-24'>
                                <h1 className='font-bold text-white '>Make Websit</h1>
                                <p className='text-xs text-gray-100 pr-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='absolute left-0 top-0 w-fit bg-blue-400 p-6 shadow-lg shadow-black'>
                            <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='w-28 h-28 bg-white flex justify-center items-center'>
                                <GiGlowingArtifact className='w-full h-full text-blue-400 p-6 '/>
                            </div>
                        </div>

                        {/* 04 */}
                        <div className='absolute right-10 transform translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-blue-400 p-1 shadow-lg'>
                            <div className='w-full h-full rounded-full bg-blue-400 flex items-center justify-center font-bold text-white text-lg'>04</div>
                            <div className='absolute right-4 transform translate-y-6 w-5 h-5 rounded-full bg-blue-400'></div>
                        </div>
                    </div>

                </div>

               


            </div>

        </div>
    )
}
