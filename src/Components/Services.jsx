import React from 'react'

import { FaLaptopCode } from "react-icons/fa";
import { BsPhoneFlip } from "react-icons/bs";
import { IoServer } from "react-icons/io5";
import { GiGlowingArtifact } from "react-icons/gi";

export default function Services(props) {
    return (
        <div className='bg-white p-6 rounded-sm flex flex-col gap-2 md:gap-4'>
            <h1 id={props.id} className='text-lg md:text-3xl text-[#e87a35] font-bold w-full text-center '>Services</h1>
            <p className='w-[90%] md:w-[50%] mx-auto text-center text-sm md:text-base text-gray-600'>
                We provide professional web development, mobile app solutions, cloud services, and innovative technology consulting to help your business thrive.
            </p>


            {/* services  */}
            <div className='grid grid-cols-1 lg:grid-cols-2 ms:gap-2 lg:gap-6 mt-2 md:mt-6'>



                {/* service 1 */}
                <div className='flex'>
                    <div className='w-full h-20 sm:h-32 md:h-40 flex items-center relative'>
                        <div style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }} className='lg:mr-10 bg-orange-400 bg-opacity-80 h-14 sm:h-20 md:h-28 w-full ml-10 lg:ml-20 flex items-center justify-center'>
                            <div className='flex flex-col gap-1 ml-10 md:ml-32 lg:ml-24'>
                                <h1 className='text-xs md:text-base font-bold text-white '>Web Development</h1>
                                <p className='text-[8px] md:text-xs text-gray-100 mr-6 md:pr-10'>Build responsive and modern websites with clean code and great UX.</p>
                            </div>
                        </div>
                        <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='absolute left-0 top-0 w-fit bg-orange-400 p-4 md:p-6 shadow-lg shadow-black'>
                            <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='h-12 w-12 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white flex justify-center items-center'>
                                <FaLaptopCode className='w-full h-full text-orange-400 p-3 md:4 lg:p-6 ' />
                            </div>
                        </div>

                        {/* 02 */}
                        <div className='absolute right-0 lg:right-10 transform translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full border-4 border-orange-400 p-1 shadow-lg'>
                            <div className='w-full h-full rounded-full bg-orange-400 flex items-center justify-center font-bold text-white text-[9px] md:text-sm lg:text-lg'>01</div>
                            <div className='absolute right-2 md:right-4 transform translate-y-4 md:translate-y-6 w-2 h-2 lg:w-5 lg:h-5 rounded-full bg-orange-400'></div>
                        </div>
                    </div>

                </div>

                {/* service 2 */}
                <div className='flex'>
                    <div className='w-full h-20 sm:h-32 md:h-40 flex items-center relative'>
                        <div style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }} className='lg:mr-10 bg-pink-400 bg-opacity-80 h-14 sm:h-20 md:h-28 w-full ml-10 lg:ml-20 flex items-center justify-center'>
                            <div className='flex flex-col gap-1 ml-10 md:ml-32 lg:ml-24'>
                                <h1 className='text-xs md:text-base font-bold text-white '>Mobile Apps</h1>
                                <p className='text-[8px] md:text-xs text-gray-100 mr-6 md:pr-10'>  Create high-performance mobile applications for iOS and Android.</p>
                            </div>
                        </div>
                        <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='absolute left-0 top-0 w-fit bg-pink-400 p-4 md:p-6 shadow-lg shadow-black'>
                            <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='h-12 w-12 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white flex justify-center items-center'>
                                <BsPhoneFlip className='w-full h-full text-pink-400 p-3 md:4 lg:p-6 ' />
                            </div>
                        </div>

                        {/* 03 */}
                        <div className='absolute right-0 lg:right-10 transform translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full border-4 border-pink-400 p-1 shadow-lg'>
                            <div className='w-full h-full rounded-full bg-pink-400 flex items-center justify-center font-bold text-white text-[9px] md:text-sm lg:text-lg'>02</div>
                            <div className='absolute right-2 md:right-4 transform translate-y-4 md:translate-y-6 w-2 h-2 lg:w-5 lg:h-5 rounded-full bg-pink-400'></div>
                        </div>
                    </div>

                </div>


                {/* service 3 */}
                <div className='flex'>
                    <div className='w-full h-20 sm:h-32 md:h-40 flex items-center relative'>
                        <div style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }} className='lg:mr-10 bg-yellow-400 bg-opacity-80 h-14 sm:h-20 md:h-28 w-full ml-10 lg:ml-20 flex items-center justify-center'>
                            <div className='flex flex-col gap-1 ml-10 md:ml-32 lg:ml-24'>
                                <h1 className='text-xs md:text-base font-bold text-white '>Cloud Services</h1>
                                <p className='text-[8px] md:text-xs text-gray-100 mr-6 md:pr-10'> Secure and scalable cloud solutions for hosting and data management.</p>
                            </div>
                        </div>
                        <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='absolute left-0 top-0 w-fit bg-yellow-400 p-4 md:p-6 shadow-lg shadow-black'>
                            <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='h-12 w-12 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white flex justify-center items-center'>
                                <IoServer className='w-full h-full text-yellow-400 p-3 md:4 lg:p-6 ' />
                            </div>
                        </div>

                        {/* 01 */}
                        <div className='absolute right-0 lg:right-10 transform translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full border-4 border-yellow-400 p-1 shadow-lg'>
                            <div className='w-full h-full rounded-full bg-yellow-400 flex items-center justify-center font-bold text-white text-[9px] md:text-sm lg:text-lg'>03</div>
                            <div className='absolute right-2 md:right-4 transform translate-y-4 md:translate-y-6 w-2 h-2 lg:w-5 lg:h-5 rounded-full bg-yellow-400'></div>
                        </div>
                    </div>

                </div>

                {/* service 4 */}
                <div className='flex'>
                    <div className='w-full h-20 sm:h-32 md:h-40 flex items-center relative'>
                        <div style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }} className='lg:mr-10 bg-blue-400 bg-opacity-80 h-14 sm:h-20 md:h-28 w-full ml-10 lg:ml-20 flex items-center justify-center'>
                            <div className='flex flex-col gap-1 ml-10 md:ml-32 lg:ml-24'>
                                <h1 className='text-xs md:text-base font-bold text-white '>Machine Learning</h1>
                                <p className='text-[8px] md:text-xs text-gray-100 mr-6 md:pr-10'>Develop intelligent models for predictive analytics, recommendation systems, and automation.</p>
                            </div>
                        </div>
                        <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='absolute left-0 top-0 w-fit bg-blue-400 p-4 md:p-6 shadow-lg shadow-black'>
                            <div style={{ clipPath: 'polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%)' }} className='h-12 w-12 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white flex justify-center items-center'>
                                <GiGlowingArtifact className='w-full h-full text-blue-400 p-3 md:4 lg:p-6 ' />
                            </div>
                        </div>

                        {/* 04 */}
                        <div className='absolute right-0 lg:right-10 transform translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full border-4 border-blue-400 p-1 shadow-lg'>
                            <div className='w-full h-full rounded-full bg-blue-400 flex items-center justify-center font-bold text-white text-[9px] md:text-sm lg:text-lg'>04</div>
                            <div className='absolute right-2 md:right-4 transform translate-y-4 md:translate-y-6 w-2 h-2 lg:w-5 lg:h-5 rounded-full bg-blue-400'></div>
                        </div>
                    </div>

                </div>




            </div>

        </div>
    )
}
