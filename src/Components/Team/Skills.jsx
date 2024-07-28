import React, { useEffect, useState } from 'react'

import { PiFileHtmlFill } from "react-icons/pi";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Skills() {
    const {id} = useParams();
    const [skills, setSkills] = useState([]);
    const imageUrl = 'http://127.0.0.1:8000/';
    const url = `http://127.0.0.1:8000/developers/skills/${id}`;
    
    useEffect(()=> {
        axios.get(url)
        .then((res) =>{
            setSkills(res.data);
        })
    }, [])
    return (
        <div className=''>
            {/* icon and skills  */}
            <div className='flex gap-2 items-center'>

                {/* icon  */}
                <div className='p-1 md:p-2 rounded-full border-2 text-gray-400 border-100'>
                    <GiSkills className='text-xs md:text-base' />
                </div>
                <p className='w-full border-b md:border-b-2 pb-1 text-orange-400 text-xs md:text-base font-semibold border-gray-200'>Skills</p>
            </div>
            
            <div className='mt-4 grid grid-cols-2 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-6'>

                {/* skill 1 */}
                {skills.map(skill =>(
                    <div key={skill.id} className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <img src={`${imageUrl}${skill.icon}`} className='p-1 w-6 h-6 md:p-2 md:w-10 md:h-10 rounded-sm bg-orange-500 text-white' />
                        <div className='flex flex-col'>
                            <h1 className='text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold uppercase text-orange-500'>{skill.title}</h1>
                            <p className='text-orange-500 text-[8px] md:text-xs md:font-semibold'>{skill.description}</p>
                        </div>
                    </div>

                    <div className='h-2 md:h-3 w-full rounded-sm border md:border-2 bg-white border-orange-500 overflow-hidden relative'>
                        <div className={`absolute top-0 left-0 h-full bg-orange-500 w-[${skill.pro_level}%]`}>

                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}
