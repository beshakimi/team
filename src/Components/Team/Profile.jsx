import React from 'react'
import { ReactTyped } from "react-typed";
import { saveAs } from 'file-saver';
import { useState, useEffect } from 'react';
import axios from 'axios';
import clipboardCopy from 'clipboard-copy';
import { FaShareNodes } from "react-icons/fa6";
import { IoIosCloudDownload } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";


import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    WhatsappIcon,
} from "react-share";

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    WhatsappShareButton,
} from "react-share";
import IsLoading from '../isLoading/IsLoading';
import Error from '../Error/Error';

export default function Profile({ Url, imageUrl, scrollToMessage }) {
    const [profile, setProfile] = useState("");
    const [role, setRole] = useState("");
    const [share, setShare] = useState(false);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(false);
    const shareUrl = window.location.href;
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        clipboardCopy(shareUrl);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    }


    useEffect(() => {
        axios.get(Url)
            .then((res) => {
                setProfile(res.data);
                setRole(res.data.role);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsloading(false);
            })

    }, []);

    const handleDownloadCV = () => {
        const cvUrl = `${imageUrl}${profile.cv}`;
        saveAs(cvUrl, 'cv.pdf');
      };

    
      if (isLoading) {
        return <IsLoading/>
      }

      if (error) {
        return <Error error = {error}/>
      }
    
    return (
        <div className='pt-6 bg-white rounded-md flex flex-col gap-2 justify-center items-center'>
            <img src={`${imageUrl}${profile.avatar}`} alt="avatar" className='p-[2px] w-28 h-28 object-cover rounded-full border-4 border-gray-100' />
            <h1 className='font-bold'>{profile.firstname} {profile.lastname}</h1>
            <ReactTyped strings={[role]} typeSpeed={100} backSpeed={30} loop className='bg-orange-200 py-1 px-2 rounded-full text-orange-500 font-semibold text-sm' />

            {/* years,projects  */}
            <div className='mt-6 w-full grid grid-cols-2'>

                {/* Years */}
                <div className='flex flex-col gap-1 items-center'>
                    <p className='font-bold text-xl text-gray-600'>{profile.years_of_experience}</p>
                    <p className='font-semibold text-sm text-gray-400'>Years of Experience</p>
                </div>


                {/* projects */}
                <div className='flex flex-col gap-1 items-center'>
                    <p className='font-bold text-xl text-gray-600'>{profile.projects}</p>
                    <p className='font-semibold text-sm text-gray-400'>Total Projects</p>
                </div>

            </div>

            {/* shard, download cd, message  */}
            <div className='mt-4 w-full justify-center flex gap-2 p-2'>

                {/* share */}
                <div onClick={() => setShare(true)} className='flex gap-1 items-center rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                    <FaShareNodes className='' />
                    <p>Share</p>
                </div>

                {/* download cv */}
                <div  onClick={handleDownloadCV} className='flex gap-1 items-center whitespace-nowrap rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                    <IoIosCloudDownload className='' />
                    <p>Download CV</p>
                </div>

                {/* message  */}
                <div onClick={scrollToMessage} className='flex gap-1 items-center rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                    <MdAttachEmail className='' />
                    <p>Message</p>
                </div>
            </div>

            {share && <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 z-30 flex justify-center items-center'>
                <div className='bg-white rounded-md p-6 flex flex-col gap-8'>

                    {/* share text and close button  */}
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl'>Share</p>
                        <div onClick={() => setShare(false)} className='flex items-center justify-center w-fit h-fit p-1 rounded-full border border-gray-300 hover:border-orange-600 hover:text-orange-600 hover:cursor-pointer ease-in-out duration-150 '>
                            <IoClose />

                        </div>
                    </div>

                    {/* icons  */}
                    <div className='flex gap-4'>

                        {/* email share  */}
                        <EmailShareButton url={shareUrl} className='flex flex-col gap-1 items-center justify-center'>
                            <EmailIcon className='rounded-full hover:cursor-pointer hover:scale-105 hover:shadow-lg ease-in-out duration-150' />
                            <p className='text-gray-600 text-sm'>Email</p>
                        </EmailShareButton>

                        {/* facebook share  */}
                        <FacebookShareButton url={shareUrl} className='flex flex-col gap-1 items-center justify-center'>
                            <FacebookIcon className='rounded-full hover:cursor-pointer hover:scale-105 hover:shadow-lg ease-in-out duration-150' />
                            <p className='text-gray-600 text-sm'>Facebook</p>
                        </FacebookShareButton>

                        {/* linkedin share  */}
                        <LinkedinShareButton url={shareUrl} className='flex flex-col gap-1 items-center justify-center'>
                            <LinkedinIcon className='rounded-full hover:cursor-pointer hover:scale-105 hover:shadow-lg ease-in-out duration-150' />
                            <p className='text-gray-600 text-sm'>Linkedln</p>
                        </LinkedinShareButton>

                        {/* telegram share  */}
                        <TelegramShareButton url={shareUrl} className='flex flex-col gap-1 items-center justify-center' >
                            <TelegramIcon className='rounded-full hover:cursor-pointer hover:scale-105 hover:shadow-lg ease-in-out duration-150' />
                            <p className='text-gray-600 text-sm'>Telegram</p>
                        </TelegramShareButton>

                        {/* whatsapp share  */}
                        <WhatsappShareButton url={shareUrl} className='flex flex-col gap-1 items-center justify-center' >
                            <WhatsappIcon className='rounded-full hover:cursor-pointer hover:scale-105 hover:shadow-lg ease-in-out duration-150' />
                            <p className='text-gray-600 text-sm'>WhatsApp</p>
                        </WhatsappShareButton>


                    </div>

                    {/* page ling and copy icon  */}
                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold'>Page Link</p>
                        <div className='relative border rounded-md px-2 py-1  flex items-center justify-between'>
                            <p className='text-gray-400'>{shareUrl}</p>
                            <MdOutlineContentCopy onClick={handleCopy} className='text-gray-500 hover:text-orange-600 hover:cursor-pointer ease-in duration-150' />
                            {isCopied && 
                            <div className='absolute z-40 top-[-20px] right-0 bg-orange-300 rounded-md text-sm px-2 py-[2px]'>
                                    <p className='text-gray-700'>Copied</p>
                            </div>
                            }
                        </div>

                    </div>







                </div>
            </div>}

        </div>
    )
}
