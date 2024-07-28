import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdPreview } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function RelatedPost() {
    const [RelatedPost, setRelatedPost] = useState([]);
    const { id } = useParams();
    const Url = `http://127.0.0.1:8000/posts/related/${id}`
    const imageUrl = 'http://127.0.0.1:8000/';

    const navigate = useNavigate();

    const handleLinkClick = (postId) => {
        navigate(`/post/${postId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        axios.get(Url)
            .then((res) => {
                setRelatedPost(res.data);
            })
    }, [id])

    return (
        <div className='w-full flex flex-col gap-4 my-10'>
            <h1 className='font-semibold text-base md:text-lg'>Related Posts</h1>

            <div className='w-full grid grid-cols-3 gap-2 md:gap-6'>

                {/* post 1 */}
                {RelatedPost.map((post) => (
                    <div key={post.id} onClick={() => handleLinkClick(post.id)} className='flex flex-col gap-1 w-full bg-orange-100 p-2 md:p-4 rounded-sm hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>

                        {/* image */}
                        <div className='w-full h-16 sm:h-20 md:h-28 lg:h-40 relative'>
                            <img src={`${imageUrl}${post.image}`} alt="" className='w-full h-full  object-cover hover:scale-105 ease-in duration-200' />
                            <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>
                            </div>
                        </div>

                        <p className='text-[8px] md:text-xs text-gray-500 uppercase'>{post.created}</p>

                        <div className='flex flex-col md:gap-1'>

                            <h1 className='text-[9px] sm:text-xs md:text-lg font-semibold'>{post.title}</h1>
                            <p className='text-gray-500 text-[9px] sm:text-xs md:text-sm'>{post.body?.slice(1, 50)} ...</p>
                        </div>

                        
                    </div>
                ))
                }

            </div>
        </div >
    )
}
