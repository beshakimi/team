import React from 'react'
import { Link } from 'react-router-dom';

import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";

import websiteProjects from '../../data/websiteProjects'; 

export default function WebsiteProjects() {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6'>
            {websiteProjects.map(project => (
                <div key={project.id} className='border border-gray-400 flex flex-col gap-2'>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className='w-full h-32 md:h-44 lg:h-60 object-cover' 
                    />

                    <div className='flex flex-col gap-2 px-4 pb-4 justify-center'>
                        <h1 className=' text-gray-800 text-sm sm:text-base font-semibold w-full text-center'>
                            {project.title}
                        </h1>
                        <p className='text-sm sm:text-sm text-gray-500 w-full text-center'>
                            {project.description?.slice(0, 70)} ...
                        </p>
                        
                        <div className='flex gap-2 md:gap-4 items-center justify-center mt-2 md:mt-0'>
                            <a href={project.live_link} target='_blank' rel='noopener noreferrer'>
                                <TbWorld className='w-5 h-5 md:w-7 md:h-7 text-gray-500 hover:text-gray-700 transition-all duration-150' />
                            </a>

                            <a href={project.github_link} target='_blank' rel='noopener noreferrer'>
                                <FaGithub className='w-[18px] h-[18px] md:w-6 md:h-6 text-gray-500 hover:text-gray-700 transition-all duration-150' />
                            </a>

                            <Link onClick={() => window.scrollTo(0,0)} to={`/project/${project.id}`}>
                                <CgMoreO className='w-[18px] h-[18px] md:w-6 md:h-6 text-gray-500 hover:cursor-pointer hover:text-gray-700 transition-all duration-150' />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
