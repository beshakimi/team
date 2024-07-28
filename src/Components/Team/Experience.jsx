import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaNetworkWired } from "react-icons/fa";
import { useParams } from 'react-router-dom';

export default function Experience() {
    const { id } = useParams();
    const [experiences, setExperiences] = useState([]);
    const imageUrl = 'http://127.0.0.1:8000/';
    const url = `http://127.0.0.1:8000/developers/experiences/${id}`;

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setExperiences(res.data);
            })
    }, [])
    return (
        <div className=''>

            {/* icon and skills  */}
            <div className='flex gap-2 items-center'>

                {/* icon  */}
                <div className='p-1 md:p-2 rounded-full border-2 text-gray-400 border-100'>
                    <FaNetworkWired className='text-xs md:text-base' />
                </div>
                <p className='w-full border-b md:border-b-2 pb-1 text-orange-400 text-xs md:text-base font-semibold border-gray-200'>Experience</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-4 md:mt-8'>

                {/* Experiences */}
                {experiences.map((experience, index) => (
                    <div key={experience.id} className='relative border-l-2 border-orange-400 ml-3 md:ml-6'>

                        <div className='absolute top-0 md:top-[-10px] left-[-16px] md:left-[-24px] flex items-center justify-center w-8 h-8 md:w-12 md:h-12 p-2 bg-gray-50 object-cover rounded-full border-2 border-orange-400'>
                            <p className='text-sm md:text-xl font-bold '>{index + 1}</p>
                        </div>

                        <div className='flex flex-col gap-1 md:gap-2 ml-6 md:ml-8 pb-6'>
                            <div className='flex md:gap-1 text-sm font-semibold'>
                            <h1 className='text-sm md:text-base'>{experience.role} in </h1>
                            <h1>{experience.company_title}</h1>

                            </div>
                            <h1 className='text-xs font-bold'>{new Date(experience.start_date).getFullYear()} - {new Date(experience.end_data).getFullYear()}</h1>
                            <p className='text-[13px] text-gray-500'>{experience.description}</p>
                        </div>

                    </div>
                ))}

            </div>

        </div>

    )
}
