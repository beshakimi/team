// src/pages/PostDetails.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import {
    FacebookShareButton,
    InstapaperShareButton,
    LinkedinShareButton,
} from "react-share";

import { FaRegCalendarAlt } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

import ShowComments from '../Components/Comment/ShowComments';
import WriteComent from '../Components/Comment/WriteComent';
import RelatedPost from '../Components/Blog/RelatedPost';
import blogPosts from '../data/blogPosts'; 
import ImageLoader from '../Components/ImageLoader';

export default function PostDetails() {
    const [PostDetails, setPostDetails] = useState(null);
    const { id } = useParams();
    const shareUrl = window.location.href;

    useEffect(() => {
        const post = blogPosts.find(p => p.id === parseInt(id));
        setPostDetails(post);
    }, [id]);

    if (!PostDetails) {
        return (
            <div className="text-center py-20 text-gray-500">
                Post not found.
            </div>
        );
    }

    return (
        <div className='bg-orange-100 bg-opacity-50 py-10 mt-0 md:mt-36'>
            <div className='w-full md:w-[80%] mx-auto bg-white'>
                <div className='flex flex-col gap-2 md:gap-4 lg:w-[90%] mx-auto mt-6 p-6 xl:mb-32'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-600'>{PostDetails.title}</h1>

                    {/* date, views, share */}
                    <div className='flex gap-6'>
                        <div className='flex gap-1 items-center text-gray-500 text-sm'>
                            <FaRegCalendarAlt />
                            <p>{PostDetails.created}</p>
                        </div>

                        <div className='flex gap-1 items-center text-gray-500 text-sm'>
                            <MdPreview />
                            <p>12k Views</p>
                        </div>

                        <div className='flex gap-1 items-center text-gray-500 text-sm'>
                            <FaShareNodes />
                            <p>125 Share</p>
                        </div>
                    </div>

                    {/* image and text */}
                    <div className='w-full flex flex-col gap-1 md:gap-4 bg-white'>
                        <div className='flex flex-col gap-2'>
                            <ImageLoader src={PostDetails.image} className='w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover' alt={PostDetails.title}/>
                            <p>Posted by {PostDetails.developer_firstname} {PostDetails.developer_lastname}</p>
                        </div>
                        <div className='pb-6 flex flex-col gap-2'>
                            <p className='text-sm text-gray-600'>{PostDetails.body}</p>
                        </div>
                    </div>

                    {/* share buttons */}
                    <div className='grid grid-cols-2 md:flex gap-2 md:gap-4'>
                        <FacebookShareButton url={shareUrl}>
                            <div className='flex gap-1 items-center text-sm md:text-base px-2 md:px-4 py-1 md:py-2 text-white bg-[#2d7cfa] rounded-full hover:underline hover:cursor-pointer hover:text-orange-200 ease-in duration-150'>
                                <TiSocialFacebook />
                                <p className='whitespace-nowrap'>Share on Facebook</p>
                            </div>
                        </FacebookShareButton>

                        <LinkedinShareButton url={shareUrl}>
                            <div className='flex gap-1 items-center text-sm md:text-base px-2 md:px-4 py-1 md:py-2 text-white bg-[#03a5fc] rounded-full hover:underline hover:cursor-pointer hover:text-orange-200 ease-in duration-150'>
                                <FaLinkedin />
                                <p className='whitespace-nowrap'>Share on Linkedln</p>
                            </div>
                        </LinkedinShareButton>

                        <InstapaperShareButton url={shareUrl}>
                            <div className='flex gap-1 items-center text-sm md:text-base px-2 md:px-4 py-1 md:py-2 text-white bg-[#b5417d] rounded-full hover:underline hover:cursor-pointer hover:text-orange-200 ease-in duration-150'>
                                <LuInstagram />
                                <p className='whitespace-nowrap'>Share on Instagram</p>
                            </div>
                        </InstapaperShareButton>
                    </div>

                    <div className='w-full'>
                        <RelatedPost />
                        <ShowComments />
                        <WriteComent />
                    </div>
                </div>
            </div>
        </div>
    )
}
