import React, { useState, useEffect } from 'react';
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import ImageLoader from '../ImageLoader';

export default function About({ developer }) {


    if (!developer) {
        return <p className="text-center text-orange-500">Loading...</p>;
    }

    return (
        <div className='flex flex-col gap-2 md:gap-4'>
            {/* icon and name */}
            <div className='flex gap-2 items-center hover:cursor-pointer'>
                <div className='p-1 md:p-2 rounded-full border-2 text-gray-400 border-100'>
                    <MdOutlineCastForEducation className='text-xs md:text-base' />
                </div>
                <p className='w-full border-b md:border-b-2 pb-1 text-orange-400 text-xs md:text-base font-semibold border-gray-200'>
                    About {developer.firstname} {developer.lastname}
                </p>
            </div>

            {/* image and information */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
                <ImageLoader src={developer.detail_image} alt="image" className='hidden sm:block md:col-span-1 w-full h-60 md:h-80 object-cover' />

                <div className='md:col-span-2 flex flex-col gap-2 py-2 md:py-0'>
                    <h1 className='text-xs md:text-base font-semibold text-gray-700'>Hello I'm {developer.role}</h1>
                    <p className='text-xs md:text-sm text-gray-600'>{developer.bio}</p>

                    {/* phone,address,email */}
                    <div className='flex flex-col gap-1 md:gap-2 mt-2 md:mt-6'>
                        <div className='flex gap-2 items-center mt-2'>
                            <FaLocationDot className='text-sm md:text-base text-orange-500' />
                            <p className='text-xs md:text-sm text-gray-600'>{developer.address.location}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <PiPhoneThin className='text-sm md:text-base text-orange-500' />
                            <p className='text-xs md:text-sm text-gray-600'>{developer.address.phone}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <HiOutlineMail className='text-sm md:text-base text-orange-500' />
                            <p className='text-xs md:text-sm text-gray-600'>{developer.address.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
