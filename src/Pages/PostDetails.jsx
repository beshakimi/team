import React, { useEffect, useState } from 'react'

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
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function PostDetails() {
    const [PostDetails, setPostDetails] = useState([]);
    const { id } = useParams();
    const imageUrl = 'http://127.0.0.1:8000/';
    const shareUrl = window.location.href;
    const Url = `http://127.0.0.1:8000/posts/${id}`

    useEffect(() => {
        axios.get(Url)
            .then((res) => {
                setPostDetails(res.data);
            })
    }, [id])
    return (
        <div className='bg-orange-100 py-10 mt-36'>
            <div className='w-[80%] mx-auto bg-white'>
                <div className='flex flex-col gap-4 lg:w-[90%] mx-auto mt-6 p-6 xl:mb-32'>
                    <h1 className='text-4xl font-semibold text-orange-600'>{PostDetails.title}</h1>

                    {/* date, views, share  */}
                    <div className='flex gap-6'>
                        {/* date  */}
                        <div className='flex gap-1 items-center text-gray-500 text-sm'>
                            <FaRegCalendarAlt />
                            <p>{PostDetails.created}</p>
                        </div>

                        {/* views  */}
                        <div className='flex gap-1 items-center text-gray-500 text-sm'>
                            <MdPreview />
                            <p>12k Views</p>
                        </div>

                        {/* share  */}
                        <div className='flex gap-1 items-center text-gray-500 text-sm'>
                            <FaShareNodes />
                            <p>125 Share</p>
                        </div>

                    </div>

                    {/* image and text  */}
                    <div className='w-full flex flex-col gap-4 bg-white '>
                        <div className='flex flex-col gap-2'>
                            <img src={`${imageUrl}${PostDetails.image}`} className='w-full h-[400px] object-cover' />
                            <p className=''> Posted by {PostDetails.developer_firstname} {PostDetails.developer_lastname}</p>

                        </div>
                        <div className='pb-6 flex flex-col gap-2'>
                            <p className='text-sm text-gray-600'>{PostDetails.body}</p>
                        </div>

                    </div>

                    {/* share  */}
                    <div className='flex gap-4'>

                        {/* facebook */}
                        <FacebookShareButton url={shareUrl}>
                            <div className='flex gap-1 items-center px-4 py-2 text-white bg-[#2d7cfa] rounded-full hover:underline hover:cursor-pointer hover:text-orange-200 ease-in duration-150'>
                                <TiSocialFacebook />
                                <p>Share on Facebook</p>
                            </div>
                        </FacebookShareButton>

                        {/* linkden */}
                        <LinkedinShareButton url={shareUrl}>
                            <div className='flex gap-1 items-center px-4 py-2 text-white bg-[#03a5fc] rounded-full hover:underline hover:cursor-pointer hover:text-orange-200 ease-in duration-150'>
                                <FaLinkedin />
                                <p>Share on Linkedln</p>
                            </div>
                        </LinkedinShareButton>

                        {/* instagram */}
                        <InstapaperShareButton url={shareUrl}>
                            <div className='flex gap-1 items-center px-4 py-2 text-white bg-[#b5417d] rounded-full hover:underline hover:cursor-pointer hover:text-orange-200 ease-in duration-150'>
                                <LuInstagram />
                                <p>Share on Instagram</p>
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
