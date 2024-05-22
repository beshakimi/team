import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { IoClose } from "react-icons/io5";
import Experience from '../Components/Team/Experience';
import Profile from '../Components/Team/Profile'
import About from '../Components/Team/About';
import Skills from '../Components/Team/Skills';
import Portfolio from '../Components/Team/Portfolio';
import GetInTouch from '../Components/Team/GetInTouch';
import SotialMedia from '../Components/Team/SotialMedia';

export default function TeamDetails() {
    const {id} = useParams();
    const aboutUrl = `http://127.0.0.1:8000/developers/${id}`;
    const imageUrl = 'http://127.0.0.1:8000'
    
    return (
        <div className='bg-orange-100 w-full '>
            <div className='flex flex-col gap-10 w-[80%] mx-auto '>
            <Link to='/'>
                <IoClose className='fixed top-6 right-6 w-6 h-6 text-white border hover:cursor-pointer hover:border-orange-400 hover:bg-orange-400 ease-in duration-150' />
            </Link>
            <div className='w-full flex gap-4'>

                {/* profile  */}
                <div className='flex flex-col gap-4'>
                    <Profile Url= {aboutUrl} imageUrl ={imageUrl} />
                    <SotialMedia Url ={aboutUrl} />

                </div>

                {/* about  */}
                <div className='pb-10 w-full h-screen flex flex-col gap-6 bg-white rounded-md p-6 overflow-scroll no-scroll'>

                    <About url={aboutUrl} imageUrl={imageUrl} />
                    <Skills />
                    <Experience />
                    <Portfolio />
                    <GetInTouch />

                </div>

            </div>
        </div>
        </div>
        
    )
}
