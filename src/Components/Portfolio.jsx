
import { useState } from 'react';
import AllProjects from './Portfolio/AllProjects';
import WebsiteProjects from './Portfolio/WebsitProjects';
import MobileProjects from './Portfolio/MobileProjects';
import MachinLearningProjects from './Portfolio/MachinLearningProjects';


export default function Portfolio(props) {
    const [allProjects, setAllProjects] = useState(true);
    const [websitProjects, setWebstiProjects] = useState(false);
    const [mobileProjects, setMobileProjects] = useState(false);
    const [machinLearningProjects, setMachinLearningProjects] = useState(false);

    const handleAllProject = () => {
        setAllProjects(true);
        setWebstiProjects(false);
        setMobileProjects(false);
        setMachinLearningProjects(false);
    }

    const handleWebsitProject = () => {
        setWebstiProjects(true);
        setAllProjects(false);
        setMobileProjects(false);
        setMachinLearningProjects(false);
    }


    const handleMobileProject = () => {
        setMobileProjects(true);
        setAllProjects(false);
        setWebstiProjects(false);
        setMachinLearningProjects(false);
    }

    const handleMachinLearningProject = () => {
        setMachinLearningProjects(true);
        setAllProjects(false);
        setWebstiProjects(false);
        setMobileProjects(false);
    }
  

    return (
        <div  className='bg-white p-6 rounded-sm flex flex-col gap-4'>
            <h1 id ={props.id} className='text-3xl text-[#e87a35] font-bold w-full text-center '>Portfolio</h1>
            <p className='w-[50%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi distinctio.</p>

            {/* menu  */}
            <div className='flex justify-center'>
                <div className='flex gap-4'>
                    <h1 onClick={handleAllProject} className={`px-4 py-1 text-white font-semibold rounded-sm hover:cursor-pointer hover:shadow-lg transition-all duration-150 ${allProjects ? 'bg-slate-800' : 'bg-orange-500'}`}>All</h1>
                    <h1 onClick={handleWebsitProject} className={`px-4 py-1 text-white font-semibold rounded-sm hover:cursor-pointer hover:shadow-lg transition-all duration-150 ${websitProjects ? 'bg-slate-800' : 'bg-orange-500'}`}>Website</h1>
                    <h1 onClick={handleMobileProject} className={`px-4 py-1 text-white font-semibold rounded-sm hover:cursor-pointer hover:shadow-lg transition-all duration-150 ${mobileProjects ? 'bg-slate-800' : 'bg-orange-500'}`}>Mobile</h1>
                    <h1 onClick={handleMachinLearningProject} className={`px-4 py-1 text-white font-semibold rounded-sm hover:cursor-pointer hover:shadow-lg transition-all duration-150 ${machinLearningProjects ? 'bg-slate-800' : 'bg-orange-500'}`}>Machin Learning</h1>
                </div>

            </div>

            <>
            {allProjects && <AllProjects />}
            {websitProjects && <WebsiteProjects />}
            {mobileProjects && <MobileProjects />}
            {machinLearningProjects && <MachinLearningProjects />}
            </>



        </div>
    )
}
