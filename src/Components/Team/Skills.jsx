import React, { useEffect, useState } from 'react'
import { GiSkills } from "react-icons/gi";

export default function Skills({ developer }) {

    return (
        <div>
            {/* icon and skills */}
            <div className='flex gap-2 items-center'>
                <div className='p-1 md:p-2 rounded-full border-2 text-gray-400 border-100'>
                    <GiSkills className='text-xs md:text-base' />
                </div>
                <p className='w-full border-b md:border-b-2 pb-1 text-orange-400 text-xs md:text-base font-semibold border-gray-200'>Skills</p>
            </div>

            <div className='mt-4 grid grid-cols-2 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-6'>
                {developer.skills.map(skill => (
                    <div key={skill.id} className='flex flex-col gap-1'>
                        <div className='flex gap-2 items-center'>
                            <img src={skill.icon} className='p-1 w-6 h-6 md:p-2 md:w-10 md:h-10 rounded-sm bg-orange-500 text-white' />
                            <div className='flex flex-col'>
                                <h1 className='text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold uppercase text-orange-500'>{skill.title}</h1>
                                <p className='text-orange-500 text-[8px] md:text-xs md:font-semibold'>{skill.description}</p>
                            </div>
                        </div>

                        <div className='h-2 md:h-3 w-full rounded-sm border md:border-2 bg-white border-orange-500 overflow-hidden relative'>
                            <div className='absolute top-0 left-0 h-full bg-orange-500' style={{ width: `${skill.pro_level}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
