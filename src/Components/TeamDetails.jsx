import React from 'react'


import { IoClose } from "react-icons/io5";
import Experience from './Team/Experience';
import About from './Team/About';
import Skills from './Team/Skills';
import Portfolio from './Team/Portfolio';
import GetInTouch from './Team/GetInTouch';
import Profile from './Team/Profile';
import SotialMedia from './Team/SotialMedia';

export default function TeamDetails({ showModal }) {
    return (
        <div className='flex flex-col gap-10 w-[80%] h-screen mx-auto mt-6 mb-10 '>
            <IoClose onClick={() => showModal(false)} className='fixed top-6 right-6 w-6 h-6 text-white border hover:cursor-pointer hover:border-orange-400 hover:bg-orange-400 ease-in duration-150' />
            <div className='w-full flex gap-4'>

                {/* profile  */}
                <div className='flex flex-col gap-4'>

                    <Profile />
                    <SotialMedia />

                </div>

                {/* about  */}
                <div className='pb-10 w-full h-screen flex flex-col gap-6 bg-white rounded-md p-6 overflow-scroll no-scroll'>

                    <About />
                    <Skills />
                    <Experience />
                    <Portfolio />
                    <GetInTouch />

                </div>

            </div>
        </div>
    )
}
