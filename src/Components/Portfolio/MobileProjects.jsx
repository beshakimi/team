import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import axios from 'axios';

export default function MobileProjects() {
    const [Portfolioes, setPortfolio] = useState([]);
    const Url = 'http://127.0.0.1:8000/developers/projects'
    const imageUrl = 'http://127.0.0.1:8000/';

    useEffect(() => {
        axios.get(Url)
            .then((res) => {
                const mobileProjects = res.data.filter(project => project.categories.includes('mobile'));
                setPortfolio(mobileProjects);
            })

    }, []);

    return (
      
            <div className='grid grid-cols-3 gap-6 mt-6'>

                {/* projectts */}
                {Portfolioes.map(project => (
                    <div key={project.id} className='border border-gray-400 flex flex-col gap-2'>
                        <img src={`${imageUrl}${project.image}`} alt="Besmillah Hakimi" className='w-full h-60 object-cover' />

                        <div className='flex flex-col gap-2 px-4 pb-4 justify-center'>

                            <h1 className=' text-gray-800 font-semibold w-full text-center'>{project.title}</h1>
                            <p className='text-sm text-gray-500 w-full text-center'>{project.description?.slice(0, 70)} ...</p>
                            <div className='flex gap-4 items-center justify-center'>
                                <a href={project.live_link}>
                                    <TbWorld className='w-7 h-7 text-gray-500 hover:text-gray-700 transition-all duration-150' />
                                </a>

                                <a href={project.github_link}>
                                    <FaGithub className='w-6 h-6 text-gray-500 hover:text-gray-700 transition-all duration-150' />
                                </a>

                                <Link onClick={() => window.scrollTo(0,0)} to={`/project/${project.id}`}>
                                    <CgMoreO className='w-6 h-6 text-gray-500 hover:cursor-pointer hover:text-gray-700 transition-all duration-150' />
                                </Link>
                            </div>
                        </div>

                    </div>
                ))
                }

            </div>
   
    )
}
