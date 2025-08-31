import React, { useState, useEffect } from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function SotialMedia({ developer }) {
    const [media, setMedia] = useState({});

    return (
        <div className='py-2 bg-white rounded-md flex flex-col justify-center items-center'>

            {/* Facebook */}
            <a href={developer.social.facebook} target='_blank' rel="noopener noreferrer"
                className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>
                <div className='flex gap-1 items-center '>
                    <TiSocialFacebook />
                    <p>Facebook</p>
                </div>
                <p className='text-gray-400'>Facebook id</p>
            </a>

            {/* LinkedIn */}
            <a href={developer.social.linkedin} target='_blank' rel="noopener noreferrer"
                className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>
                <div className='flex gap-1 items-center '>
                    <FaLinkedin />
                    <p>LinkedIn</p>
                </div>
                <p className='text-gray-400'>LinkedIn id</p>
            </a>

            {/* GitHub */}
            <a href={developer.social.github} target='_blank' rel="noopener noreferrer"
                className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>
                <div className='flex gap-1 items-center '>
                    <FaGithub />
                    <p>GitHub</p>
                </div>
                <p className='text-gray-400'>GitHub id</p>
            </a>

        </div>
    );
}
