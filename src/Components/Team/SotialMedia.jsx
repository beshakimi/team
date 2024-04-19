import React from 'react'

import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

export default function SotialMedia() {
    return (
        <div className='pb-2 bg-white rounded-md flex flex-col justify-center items-center'>

            {/* facebook */}
            <div className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>

                <div className='flex gap-1 items-center '>
                    <TiSocialFacebook />
                    <p>Facebook</p>
                </div>
                <p className='text-gray-400'>Facebook id</p>
            </div>

            {/* linkden */}
            <div className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>

                <div className='flex gap-1 items-center '>
                    <FaLinkedin />
                    <p>Linkedln</p>
                </div>
                <p className='text-gray-400'>Linkedln id</p>
            </div>

            {/* WhatsApp */}
            <div className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>

                <div className='flex gap-1 items-center '>
                    <TbBrandWhatsapp />
                    <p>WhatsApp</p>
                </div>
                <p className='text-gray-400'>WhatsApp</p>
            </div>

            {/* GitHup */}
            <div className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>

                <div className='flex gap-1 items-center '>
                    <FaGithub />
                    <p>GitHup</p>
                </div>
                <p className='text-gray-400'>GitHup id</p>
            </div>

        </div>
    )
}
