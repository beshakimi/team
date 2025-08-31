import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData';

export default function ProjectDetails() {
    const [projectDetails, setProjectDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const project = projectsData.find(p => p.id === parseInt(id));
        setProjectDetails(project);
    }, [id]);

    if (!projectDetails) {
        return (
            <div className="text-center py-20 text-gray-500">
                Project not found.
            </div>
        );
    }

    return (
        <div className='bg-orange-100 bg-opacity-50 w-full h-full flex flex-col gap-10 mt-6 md:mt-36'>
            <div className='w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col gap-4 bg-white p-10 my-10'>
                <img src={projectDetails.image} className='w-full max-h-96 object-cover' alt={projectDetails.title}/>
                <div className='pb-6 flex flex-col gap-2'>
                    <h1 className='font-semibold text-rose-400'>
                        <span className='text-black'>Project Name:</span> {projectDetails.title}
                    </h1>
                    <p className='text-sm text-gray-600'>{projectDetails.description}</p>
                    <div className='flex gap-2 md:gap-4 items-center mt-2 md:mt-4'>
                        <h3 className='text-sm font-semibold'>Technologies:</h3>
                        {projectDetails.technologies.map((tech, index) => (
                            <p key={index} className='text-[9px] md:text-sm px-1 h-fit bg-orange-500 text-white'>{tech}</p>
                        ))}
                    </div>
                    <video src={projectDetails.video} controls className='mt-4'></video>
                    <div className='flex gap-2 md:gap-4'>
                        <a href={projectDetails.live_link} target='_blank' rel="noreferrer" className='text-xs md:text-base mt-4 w-fit px-2 md:px-4 py-1 md:py-[6px] border border-orange-400 text-gray-700 hover:text-white hover:underline hover:bg-orange-400 hover:cursor-pointer ease-in transition-all duration-150'>View Project</a>
                        <a href={projectDetails.github_link} target='_blank' rel="noreferrer" className='text-xs md:text-base mt-4 w-fit px-2 md:px-4 py-1 md:py-[6px] border border-orange-400 text-gray-700 hover:text-white hover:underline hover:bg-orange-400 hover:cursor-pointer ease-in transition-all duration-150'>GitHub Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
