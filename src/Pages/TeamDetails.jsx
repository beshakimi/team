import React from 'react';
import { useParams } from 'react-router-dom';
import teamData from '../data/teamData';
import Experience from '../Components/Team/Experience';
import Profile from '../Components/Team/Profile';
import About from '../Components/Team/About';
import Skills from '../Components/Team/Skills';
import Portfolio from '../Components/Team/Portfolio';
import GetInTouch from '../Components/Team/GetInTouch';
import SotialMedia from '../Components/Team/SotialMedia';

export default function TeamDetails() {
  const { id } = useParams();
  const developer = teamData.find(member => member.id === parseInt(id));

  function scrollToMessage() {
    const messageElement = document.getElementById('messages');
    if (messageElement) {
      messageElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (!developer) {
    return <div className="text-center py-10">Developer not found</div>;
  }

  return (
    <div className='bg-orange-100 bg-opacity-50 h-full w-full mt-6 md:mt-36'>
      <div className='grid grid-cols-1 md:flex md:gap-4 w-full md:w-[80%] mx-auto py-10'>
        
        <div className='flex flex-col md:gap-4'>
          <Profile scrollToMessage={scrollToMessage} developer={developer} />
          <SotialMedia developer={developer} />
        </div>

        <div className='pb-10 w-full flex flex-col gap-3 md:gap-6 bg-white rounded-md p-6'>
          <About developer={developer} />
          <Skills developer={developer} />
          <Experience developer={developer} />
          <Portfolio developer={developer} />
          <GetInTouch id="messages" />
        </div>
      </div>
    </div>
  );
}
