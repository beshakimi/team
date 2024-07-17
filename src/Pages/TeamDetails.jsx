import React from 'react'
import { useParams } from 'react-router-dom';

import Experience from '../Components/Team/Experience';
import Profile from '../Components/Team/Profile'
import About from '../Components/Team/About';
import Skills from '../Components/Team/Skills';
import Portfolio from '../Components/Team/Portfolio';
import GetInTouch from '../Components/Team/GetInTouch';
import SotialMedia from '../Components/Team/SotialMedia';



export default function TeamDetails() {
    const { id } = useParams();
    const aboutUrl = `http://127.0.0.1:8000/developers/${id}`;
    const imageUrl = 'http://127.0.0.1:8000';


    function scrollToMessage() {
        const messageElement = document.getElementById('messages');
        if (messageElement) {
          messageElement.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return (
        <div className='bg-orange-100 bg-opacity-50 h-full w-full mt-36 '>
            <div className='flex gap-4 w-[80%] mx-auto py-10 '>

                {/* profile  */}
                <div className='flex flex-col gap-4'>
                    <Profile scrollToMessage ={scrollToMessage}  Url={aboutUrl} imageUrl={imageUrl} />
                    <SotialMedia Url={aboutUrl} />

                </div>

                {/* about  */}
                <div className='pb-10 w-full flex flex-col gap-6 bg-white rounded-md p-6'>

                    <About url={aboutUrl} imageUrl={imageUrl} />
                    <Skills />
                    <Experience />
                    <Portfolio />
                    <GetInTouch id="messages" />

                </div>



            </div>
        </div>

    )
}
