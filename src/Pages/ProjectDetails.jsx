import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { IoClose } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import IsLoading from '../Components/isLoading/IsLoading';
import Error from '../Components/Error/Error';

export default function ProjectDetails() {

    const [projectDetails, setProjectDetails] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();
    const imageUrl = 'http://127.0.0.1:8000/'
    const url = `http://127.0.0.1:8000/developers/projects/${id}`

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setProjectDetails(res.data);
            })
            .catch((error)=> {
                setError(error.message);
            })
            .finally(() =>{
                setIsloading(false)
            })
    }, [])

    if (isLoading) {
        return <IsLoading/>
    }

    if (error) {
        return <Error error = {error}/>
    }
    return (
        <div className='bg-orange-100 bg-opacity-50 w-full h-full flex flex-col gap-10 mt-36'>

            <div className='w-full lg:w-[60%] mx-auto flex flex-col gap-4 bg-white p-10 my-10 '>
                <img src={`${imageUrl}${projectDetails.image}`} className='w-full max-h-96 object-cover' />
                <div className='pb-6 flex flex-col gap-2'>
                    <h1 className='font-semibold text-rose-400'> <span className='text-black'>Project Name:</span> {projectDetails.title}</h1>
                    <p className='text-sm text-gray-600'>{projectDetails.description}</p>
                    <div className='flex gap-4 mt-4'>
                    <h3 className='text-sm font-semibold'>Technologies:</h3>
                        {projectDetails?.technologies?.map((technology, index) => (
                            <p key={index} className='text-sm px-1 bg-orange-500 text-white '>{technology}</p>
                        ))}
                    </div>
                    <video src={`${imageUrl}${projectDetails.video}`} controls
                        className=' mt-4'></video>
                    <div className='flex gap-4'>
                        <a href={projectDetails.live_link} target='_blank' className='mt-4 w-fit px-4 py-[6px] border border-orange-400 text-gray-700 hover:text-white hover:underline hover:bg-orange-400 hover:cursor-pointer ease-in transition-all duration-150'>View Project</a>
                        <a href={projectDetails.github_link} target='_blank' className='mt-4 w-fit px-4 py-[6px] border border-orange-400 text-gray-700 hover:text-white hover:underline hover:bg-orange-400 hover:cursor-pointer ease-in transition-all duration-150'>GitHub Link</a>

                    </div>
                </div>


            </div>

        </div>
    )
}
