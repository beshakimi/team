import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import blogPosts from '../../data/blogPosts';
import IsLoading from '../isLoading/IsLoading.jsx';
import Error from '../Error/Error.jsx';
import ImageLoader from '../ImageLoader';

export default function Blog(props) {
  const [page, changePage] = useState(1);
  const postsPerPage = 4;

 
  const LastPost = blogPosts[0];
  const AllPosts = blogPosts.slice(1);

  const total = AllPosts.length;

  const handlePreviosPage = () => {
    if (page > 1) changePage(page - 1);
  }

  const handleNextPage = () => {
    if (page < Math.ceil(total / postsPerPage)) changePage(page + 1);
  }

  // Pagination slice
  const startIndex = (page - 1) * postsPerPage;
  const paginatedPosts = AllPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className='bg-white p-6 rounded-sm flex flex-col gap-2 md:gap-4'>
      <h1 id={props.id} className='text-lg md:text-3xl text-[#e87a35] font-bold w-full text-center '>Blog</h1>
      <p className='w-[90%] md:w-[50%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi distinctio.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-4 md:my-8'>
        {/* LastPost */}
        <Link onClick={() => window.scrollTo(0, 0)} to={`post/${LastPost.id}`}>
          <div className='flex flex-col gap-2 md:gap-4 w-full hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>
            <div className='w-full relative'>
              <ImageLoader src={LastPost.image} alt={LastPost.title} className='w-full h-40 md:h-full hover:scale-105 ease-in duration-200' />
              <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'></div>
            </div>
            <div className='flex flex-col gap-1 md:gap-2'>
              <div className='flex gap-1 items-center text-gray-500 text-sm'>
                <p className='text-xs md:text-sm lg:text-base uppercase'>{LastPost.created}</p>
              </div>
              <h1 className='text-base md:text-xl lg:text-3xl font-semibold'>{LastPost.title}</h1>
              <p className='text-xs md:text-base text-gray-500'>{LastPost.body?.slice(0, 150)} ...</p>
            </div>
          </div>
        </Link>

        <div className='grid grid-cols-2 gap-y-4 gap-x-2 md:gap-4'>
          {/* All Posts */}
          {paginatedPosts.map(post => (
            <Link onClick={() => window.scrollTo(0, 0)} key={post.id} to={`post/${post.id}`}>
              <div className='flex flex-col gap-1 w-full hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>
                <div className='w-full h-20 lg:h-36 relative'>
                  <ImageLoader src={post.image} alt={post.title} className='w-full h-full object-cover hover:scale-105 ease-in duration-200' />
                  <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'></div>
                </div>
                <p className='text-[9px] md:text-xs text-gray-500 uppercase'>{post.created}</p>
                <div className='flex flex-col md:gap-1'>
                  <h1 className='text-[10px] md:text-base lg:text-lg font-semibold'>{post.title}</h1>
                  <p className='hidden md:flex text-gray-500 text-[10px] md:text-sm'>{post.body?.slice(0, 50)} ...</p>
                  <p className='md:hidden text-gray-500 text-[10px] md:text-sm'>{post.body?.slice(0, 30)} ...</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* pagination */}
        <div className='flex gap-1 md:gap-2'>
          <MdOutlineKeyboardArrowLeft onClick={handlePreviosPage} className={`w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 p-1 border border-orange-300 hover:cursor-pointer hover:bg-orange-300 ease-in duration-150 ${page <= 1 ? 'bg-orange-300 hover:cursor-default' : ''}`} />
          <p className='text-xs sm:text-sm md:text-base'>{page}</p>
          <MdKeyboardArrowRight onClick={handleNextPage} className={`w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 p-1 border border-orange-300 hover:cursor-pointer hover:bg-orange-300 ease-in duration-150 ${page >= Math.ceil(total / postsPerPage) ? 'bg-orange-300 hover:cursor-default' : ''}`} />
        </div>
      </div>
    </div>
  )
}
