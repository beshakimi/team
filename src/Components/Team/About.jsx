import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import axios from 'axios';
import Developers from '../About/Developers';

export default function About({url, imageUrl}) {
    const [developer, setDeveloper] = useState("");
    const {id} = useParams();
    useEffect(() => {
        axios.get(url).then((res) =>{
            setDeveloper(res.data)
        })
    }, [])

    return (
        <div className='flex flex-col gap-4'>
            {/* icon and name  */}
            <div className='flex gap-2 items-center hover:cu'>

                {/* icon  */}
                <div className='p-2 rounded-full border-2 text-gray-400 border-100'>
                    <MdOutlineCastForEducation />
                </div>
                <p className='w-full border-b-2 pb-1 text-orange-400 font-semibold border-gray-200'>About {developer.firstname} {developer.lastname}</p>
            </div>

            {/* image and information */}
            <div className='grid grid-cols-3 gap-6'>
                <img src={`${imageUrl}${developer.detail_image}`} alt="image" className='col-span-1 w-full h-80 object-cover' />

                <div className='col-span-2 flex flex-col gap-2'>
                    <h1 className='font-semibold text-gray-700'>Hello I'm {developer.role}</h1>
                    <p className='text-sm text-gray-600'>{developer.short_bio}</p>

                    {/* phone,address,email  */}
                    <div className='flex flex-col gap-2 mt-6'>

                        {/* address  */}
                        <div className='flex gap-2 items-center mt-2'>
                            <FaLocationDot className='text-orange-500' />
                            <p className='text-sm text-gray-600'>{developer.location}</p>
                        </div>

                        {/* phone number  */}
                        <div className='flex gap-2 items-center'>
                            <PiPhoneThin className='text-orange-500' />
                            <p className='text-sm text-gray-600'>{developer.phone}</p>
                        </div>

                        {/* email address  */}
                        <div className='flex gap-2 items-center'>
                            <HiOutlineMail className='text-orange-500' />
                            <p className='text-sm text-gray-600'>{developer.email}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
