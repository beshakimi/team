import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { MdPreview } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import axios from 'axios';

export default function Blog() {
  const [LastPost, setLastPost] = useState([]);
  const [AllPosts, setAllPosts] = useState([]);
  const LastPostUrl = 'http://127.0.0.1:8000/posts/latest';
  const AllPostUrl = 'http://127.0.0.1:8000/posts/';
  const imageUrl = 'http://127.0.0.1:8000/';

  useEffect(() => {
    axios.get(LastPostUrl)
      .then((res) => {
        setLastPost(res.data);
      })
  }, []);

  useEffect(() => {
    axios.get(AllPostUrl)
      .then((res) => {
        setAllPosts(res.data);
      })
  }, []);

  return (
    <div className='bg-white p-6 rounded-sm flex flex-col gap-4'>
      <h1 className='text-3xl text-[#e87a35] font-bold w-full text-center '>Blog</h1>
      <p className='w-[50%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi distinctio.</p>

      <div className='grid grid-cols-2 gap-6 my-8'>

        {/* LastPost */}
        <Link to={`post/${LastPost.id}`}>
          <div className='flex flex-col gap-4 w-full hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>
            <div className='w-full relative'>
              <img src={`${imageUrl}${LastPost.image}`} alt="" className='w-full hover:scale-105 ease-in duration-200' />

              <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>

              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <div className='flex gap-1 items-center text-gray-500 text-sm'>
                <p className='uppercase'>{LastPost.created}</p>
              </div>

              <h1 className='text-3xl font-semibold'>{LastPost.title}</h1>
              <p className='text-gray-500'>{LastPost.body?.slice(1, 150)} ...</p>
            </div>

            <div className='flex gap-8'>

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
          </div>
        </Link>


        <div className='grid grid-cols-2 gap-4'>

          {/* All Posts*/}
          {AllPosts.map(post => (
            <Link key={post.id} to={`post/${post.id}`}>
              <div className='flex flex-col gap-1 w-full hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>

                {/* image */}
                <div className='w-full h-36 relative'>
                  <img src={`${imageUrl}${post.image}`} alt="" className='w-full h-full object-cover hover:scale-105 ease-in duration-200' />
                  <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>
                  </div>
                </div>

                <p className='text-xs text-gray-500 uppercase'>{new Intl.DateTimeFormat('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                }).format(new Date(post.created))}</p>

                <div className='flex flex-col gap-1'>
                  <h1 className='text-lg font-semibold'>{post.title}</h1>
                  <p className='text-gray-500 text-sm'>{post.body?.slice(1, 50)} ...</p>
                </div>

                <div className='flex gap-8'>
                  {/* views  */}
                  <div className='flex gap-1 items-center text-gray-500 text-xs'>
                    <MdPreview />
                    <p>12k Views</p>
                  </div>

                  {/* share  */}
                  <div className='flex gap-1 items-center text-gray-500 text-xs'>
                    <FaShareNodes />
                    <p>125 Share</p>
                  </div>

                </div>
              </div>
            </Link>
              ))
            
          }


        </div>

        {/* pagination */}
        <div className='flex gap-2'>
          <MdOutlineKeyboardArrowLeft className='w-7 h-7 p-1 border border-orange-300 hover:cursor-pointer hover:bg-orange-300 ease-in duration-150' />
          <MdKeyboardArrowRight className='w-7 h-7 p-1 border border-orange-300 hover:cursor-pointer hover:bg-orange-300 ease-in duration-150' />
        </div>

      </div>

    </div>
  )
}
