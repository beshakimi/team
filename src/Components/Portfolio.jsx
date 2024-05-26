import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import axios from 'axios';

export default function Portfolio() {
    const [Portfolioes, setPortfolio] = useState([]);
    const Url = 'http://127.0.0.1:8000/developers/projects'
    const imageUrl = 'http://127.0.0.1:8000/';

    useEffect(() => {
        axios.get(Url)
            .then((res) => {
                setPortfolio(res.data);
            })

    }, []);

    return (
        <div className='bg-white p-6 rounded-sm flex flex-col gap-4'>
            <h1 className='text-3xl text-[#e87a35] font-bold w-full text-center '>projectts</h1>
            <p className='w-[50%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi distinctio.</p>

            {/* menu  */}
            <div className='flex justify-center'>
                <div className='flex gap-4'>
                    <h1 className='px-4 py-1 bg-slate-800 text-white font-semibold rounded-sm hover:cursor-pointer hover:shadow-lg transition-all duration-150'>All</h1>

                    <h1 className='px-4 py-1 bg-[#e87a35] text-white font-semibold rounded-sm hover:cursor-pointer hover:shadow-lg transition-all duration-150'>Website</h1>

                    <h1 className='px-4 py-1 bg-[#e87a35] text-white font-semibold rounded-sm hover:cursor-pointer hover:shadow-lg transition-all duration-150'>Mobile</h1>
                    <h1 className='px-4 py-1 bg-[#e87a35] text-white font-semibold rounded-sm hover:cursor-pointer hover:shadow-lg transition-all duration-150'>Machin Learning</h1>


                </div>

            </div>

            {/* portfolio list  */}
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

                                <Link to={`/projectt/${project.id}`}>
                                    <CgMoreO className='w-6 h-6 text-gray-500 hover:cursor-pointer hover:text-gray-700 transition-all duration-150' />
                                </Link>
                            </div>
                        </div>

                    </div>
                ))
                }

            </div>



        </div>
    )
}
