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
                <div className='p-2 rounded-full border-2 text-gray-400 border-100'>
                    <FaNetworkWired />
                </div>
                <p className='w-full border-b-2 pb-1 text-orange-400 font-semibold border-gray-200'>Experience</p>
            </div>

            <div className='grid grid-cols-2 gap-x-4 mt-8'>

                {/* Experiences */}
                {experiences.map((experience, index) => (
                    <div key={experience.id} className='relative border-l-2 border-orange-400 ml-6'>

                        <div className='absolute top-[-10px] left-[-24px] flex items-center justify-center w-12 h-12 p-2 bg-gray-50 object-cover rounded-full border-2 border-orange-400'>
                            <p className='text-xl font-bold '>{index + 1}</p>
                        </div>

                        <div className='flex flex-col gap-2 ml-8 pb-6'>
                            <div className='flex gap-1 text-sm font-semibold'>
                            <h1>{experience.role} in </h1>
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
