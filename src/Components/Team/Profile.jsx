import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { saveAs } from 'file-saver';
import clipboardCopy from 'clipboard-copy';
import { FaShareNodes } from "react-icons/fa6";
import { IoIosCloudDownload } from "react-icons/io";
import { MdAttachEmail, MdOutlineContentCopy } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import ImageLoader from '../ImageLoader';

export default function Profile({ scrollToMessage,developer }) {
    const [developers, setdeveloper] = useState({});
    const [share, setShare] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const shareUrl = window.location.href;

    const handleCopy = () => {
        clipboardCopy(shareUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
    };

    const handleDownloadCV = () => {
        saveAs(developer.cv, 'cv.pdf');
    };

    return (
        <div className='pt-6 bg-white rounded-md flex flex-col gap-2 justify-center items-center'>
            <ImageLoader src={developer.profile_image} alt="avatar" className='p-[2px] w-28 h-28 object-cover rounded-full border-4 border-gray-100' />
            <h1 className='font-bold'>{developer.firstname} {developer.lastname}</h1>
            <ReactTyped
                strings={[developer.role || ""]}
                typeSpeed={100}
                backSpeed={30}
                loop
                className='bg-orange-200 py-1 px-2 rounded-full text-orange-500 font-semibold text-sm'
            />

            <div className='mt-6 w-full grid grid-cols-2'>
                <div className='flex flex-col gap-1 items-center'>
                    <p className='font-bold text-xl text-gray-600'>{developer.years_of_experience}</p>
                    <p className='font-semibold text-sm text-gray-400'>Years of Experience</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <p className='font-bold text-xl text-gray-600'>{developer.total_projects}</p>
                    <p className='font-semibold text-sm text-gray-400'>Total Projects</p>
                </div>
            </div>

            <div className='mt-4 w-full justify-center flex gap-2 p-2'>
                <div onClick={() => setShare(true)} className='flex gap-1 items-center rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                    <FaShareNodes />
                    <p>Share</p>
                </div>
                <div onClick={handleDownloadCV} className='flex gap-1 items-center whitespace-nowrap rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                    <IoIosCloudDownload />
                    <p>Download CV</p>
                </div>
                <div onClick={scrollToMessage} className='flex gap-1 items-center rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                    <MdAttachEmail />
                    <p>Message</p>
                </div>
            </div>

            {share && (
                <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 z-30 flex justify-center items-center'>
                    <div className='bg-white rounded-md p-4 flex flex-col gap-8 w-xl'>
                        <div className='flex justify-between'>
                            <p className='font-bold text-xl'>Share</p>
                            <div onClick={() => setShare(false)} className='flex items-center justify-center w-fit h-fit p-1 rounded-full border border-gray-300 hover:border-orange-600 hover:text-orange-600 hover:cursor-pointer ease-in-out duration-150 '>
                                <IoClose />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold'>Page Link</p>
                            <div className='relative border rounded-md px-2 py-1 flex items-center justify-between '>
                                <p className='text-gray-400'>{shareUrl}</p>
                                <MdOutlineContentCopy onClick={handleCopy} className='text-gray-500 hover:text-orange-600 hover:cursor-pointer ease-in duration-150' />
                                {isCopied && (
                                    <div className='absolute z-40 top-[-20px] right-0 bg-orange-300 rounded-md text-sm px-2 py-[2px]'>
                                        <p className='text-gray-700'>Copied</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
