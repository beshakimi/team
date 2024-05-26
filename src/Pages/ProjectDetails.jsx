import React from 'react'

import { IoClose } from "react-icons/io5";

export default function ProjectDetails({ modal }) {
    return (
        <div className='flex flex-col gap-10 lg:w-[60%] h-screen mx-auto mt-6 mb-20 xl:mb-32'>
            <IoClose onClick={() => modal(false)} className='fixed top-6 right-6 w-6 h-6 text-white border hover:cursor-pointer hover:border-orange-400 hover:bg-orange-400 ease-in duration-150' />

            <div className='w-full flex flex-col gap-4 bg-white '>
                <img src="media/projects/1.jpg" className='w-full' />
                <div className='px-6 pb-6 flex flex-col gap-2'>
                    <h1 className='font-semibold text-rose-400'>Learning Website</h1>
                    <p className='text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, minus numquam iste exercitationem impedit nobis deserunt incidunt unde dolor, eaque eum odit fugiat perspiciatis eius earum porro nam? Obcaecati, labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quibusdam mollitia tempora iusto reiciendis, nemo, suscipit delectus, natus qui iure autem facilis magnam aperiam enim. Placeat ipsa ducimus voluptatem pariatur.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, minus numquam iste exercitationem impedit nobis deserunt incidunt unde dolor, eaque eum odit fugiat perspiciatis eius earum porro nam? Obcaecati, labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quibusdam mollitia tempora iusto reiciendis, nemo, suscipit delectus, natus qui iure autem facilis magnam aperiam enim. Placeat ipsa ducimus voluptatem pariatur.
                    </p>
                    <video src="media/video/1.mp4" controls playIcon='media/icon/1.png'
                        className=' mt-4'></video>
                    <a href="" className='mt-4 w-fit px-4 py-2 border border-orange-400 text-gray-700 hover:text-white hover:underline hover:bg-orange-400 ease-in transition-all duration-150'>View Project</a>
                </div>


            </div>

        </div>
    )
}
