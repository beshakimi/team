import React, { useEffect, useState } from 'react'

import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import axios from 'axios';

export default function SotialMedia({ Url }) {
    const [media, setMedia] = useState('');

    useEffect(() => {
        axios.get(Url)
            .then((res) => {
                setMedia(res.data);
            })
    }, [])
    return (
        <div className='py-2  bg-white rounded-md flex flex-col justify-center items-center'>

            {/* facebook */}
            <a href={media.facebook_link} target='_blank' className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>

                <div className='flex gap-1 items-center '>
                    <TiSocialFacebook />
                    <p>Facebook</p>
                </div>
                <p className='text-gray-400'>Facebook id</p>
            </a>

            {/* linkden */}
            <a href={media.linked_in_link} target='_blank' className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>

                <div className='flex gap-1 items-center '>
                    <FaLinkedin />
                    <p>Linkedln</p>
                </div>
                <p className='text-gray-400'>Linkedln id</p>
            </a>

            {/* GitHup */}
            <a href={media.github_link} target='_blank' className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>

                <div className='flex gap-1 items-center '>
                    <FaGithub />
                    <p>GitHup</p>
                </div>
                <p className='text-gray-400'>GitHup id</p>
            </a>

        </div>
    )
}
