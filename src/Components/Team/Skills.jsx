import React from 'react'

import { PiFileHtmlFill } from "react-icons/pi";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GiSkills } from "react-icons/gi";

export default function Skills() {
    return (
        <div className=''>

            {/* icon and skills  */}
            <div className='flex gap-2 items-center'>

                {/* icon  */}
                <div className='p-2 rounded-full border-2 text-gray-400 border-100'>
                    <GiSkills />
                </div>
                <p className='w-full border-b-2 pb-1 text-orange-400 font-semibold border-gray-200'>Skills</p>
            </div>
            
            <div className='mt-4 grid grid-cols-2 gap-x-8 gap-y-6'>

                {/* skill 1 */}
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <PiFileHtmlFill className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                        <div className='flex flex-col'>
                            <h1 className='font-semibold uppercase text-orange-500'>Html</h1>
                            <p className='text-orange-500 text-xs font-semibold'>expert in html5</p>
                        </div>
                    </div>

                    <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                        <div className='absolute top-0 left-0 w-[98%] h-full bg-orange-500 '>

                        </div>
                    </div>
                </div>

                {/* skill 2 */}
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <FaCss3Alt className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                        <div className='flex flex-col'>
                            <h1 className='font-semibold uppercase text-orange-500'>css</h1>
                            <p className='text-orange-500 font-semibold text-xs'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                        <div className='absolute top-0 left-0 w-[95%] h-full bg-orange-500 '>

                        </div>
                    </div>
                </div>

                {/* skill 3 */}
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <DiJavascript1 className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                        <div className='flex flex-col'>
                            <h1 className='font-semibold text-orange-500'>JavaScript</h1>
                            <p className='text-orange-500 font-semibold text-xs'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                        <div className='absolute top-0 left-0 w-[85%] h-full bg-orange-500 '>

                        </div>
                    </div>
                </div>

                {/* skill 4 */}
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <RiReactjsLine className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                        <div className='flex flex-col'>
                            <h1 className='font-semibold text-orange-500'>React JS</h1>
                            <p className='text-orange-500 font-semibold text-xs'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                        <div className='absolute top-0 left-0 w-[85%] h-full bg-orange-500 '>

                        </div>
                    </div>
                </div>

                {/* skill 5 */}
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <SiTailwindcss className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                        <div className='flex flex-col'>
                            <h1 className='font-semibold text-orange-500'>Tailwind CSS</h1>
                            <p className='text-orange-500 font-semibold text-xs'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                        <div className='absolute top-0 left-0 w-[95%] h-full bg-orange-500 '>

                        </div>
                    </div>
                </div>

                {/* skill 6 */}
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <TbSeo className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                        <div className='flex flex-col'>
                            <h1 className='font-semibold text-orange-500'>SEO</h1>
                            <p className='text-orange-500 font-semibold text-xs'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                        <div className='absolute top-0 left-0 w-[90%] h-full bg-orange-500 '>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
