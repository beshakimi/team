import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, } from 'react-router-dom';




export default function Developers() {
    const [developers, fetchDeveloper] = useState([])

    const mediaServerHostname = 'http://127.0.0.1:8000/';

    const url = "http://127.0.0.1:8000/developers/"

    useEffect(() => {
        axios.get(url).then((res) => {
            fetchDeveloper(res.data);
        })

    }, []);

    if (!developers) {
        return <div>Loading...</div>;
    }


    return (
        <div className='w-full lg:w-[95%] mx-auto flex flex-col gap-1 md:gap-4 mt-10'>
            <h1 className='text-lg md:text-3xl text-[#e87a35] font-bold w-full text-center '>Our Team</h1>
            <p className='w-[90%] md:w-[50%] mx-auto text-center text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi distinctio.</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-4 lg:mt-10'>

                {/* person 1 */}
                {developers.map(developer => (
                    <Link onClick={() => window.scrollTo(0, 0)} key={developer.id} to={`/developer/${developer.id}`}>
                        <div className='rounded-md bg-[#ffe0cc] p-2 lg:p-5 flex flex-col gap-1 md:gap-2 hover:cursor-pointer hover:shadow-lg hover:shadow-orange-300 ease-in duration-150'>
                            <img src={`${mediaServerHostname}${developer.avatar}`} alt="Besmillah Hakimi" className='w-full h-32 md:h-44 lg:h-60 object-cover rounded-md' />
                            <h1 className='text-[9px] mt-1 md:mt-0 md:text-sm text-gray-600 uppercase'>{developer.role}</h1>
                            <h2 className='text-sm md:text-base lg:text-lg font-bold text-[#e87a35]'>{developer.firstname} {developer.lastname}</h2>
                            <p className='text-xs md:text-sm text-gray-500 lg:text-justify'>{developer.short_bio?.slice(0, 100)} ...</p>
                            <div className='flex gap-2 md:gap-4 mt-2 md:mt-4'>
                                <a href={developer.facebook_link} target='_blank' >
                                    <FaFacebookF className='p-1 lg:p-2 rounded-full w-4 h-4 lg:w-7 lg:h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                                </a>

                                <a href={developer.linked_in_link} target='_blank'>
                                    <FaLinkedinIn className='p-1 lg:p-2 rounded-full w-4 h-4 lg:w-7 lg:h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                                </a>

                                <a href={developer.github_link} target='_blank'>
                                    <FaGithub className='p-1 lg:p-2 rounded-full w-4 h-4 lg:w-7 lg:h-7 bg-[#e87a35] text-white hover:scale-110 transition-all duration-150' />
                                </a>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}
