import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { MdPreview } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import axios from 'axios';
import IsLoading from '../isLoading/IsLoading.jsx';
import Error from '../Error/Error.jsx';

export default function Blog(props) {
  const [LastPost, setLastPost] = useState([]);
  const [AllPosts, setAllPosts] = useState([]);
  const [page, changePage] = useState(1);
  const [total, setTotal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 

  const LastPostUrl = 'http://127.0.0.1:8000/posts/latest';
  const AllPostUrl = `http://127.0.0.1:8000/posts/?page=${page}`;
  const totalPostUrl = 'http://127.0.0.1:8000/posts/total';
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
      .catch((error) =>{
        setError(error.message);
      })
      .finally (()=>{
        setIsLoading(false);
      })
  }, [page]);

  useEffect(()=>{
    axios.get(totalPostUrl)
    .then((res) => {
      setTotal(res.data.total);
    }
    )
  },[])


  const handlePreviosPage = () => {
    if (page <= 1) {
      changePage(page)
    }
    else {
      changePage(page - 1)
    }
  }

  const handleNextPage = () => {
    if (page <= total / 4) {
      changePage(page + 1)
    }
    else {
      changePage(page)
    }
  }

  if (isLoading) {
    return <IsLoading/>
  }

  if (error) {
    return <Error error ={error}/>
  }


  return (
    <div className='bg-white p-6 rounded-sm flex flex-col gap-2 md:gap-4'>
      {/* < IsLoading/> */}
      <h1 id={props.id} className='text-lg md:text-3xl text-[#e87a35] font-bold w-full text-center '>Blog</h1>
      <p className='w-[90%] md:w-[50%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi distinctio.</p>

      <div className='grid grid-cols-2 gap-4 md:gap-6 my-4 md:my-8'>

        {/* LastPost */}
        <Link onClick={() => window.scrollTo(0, 0)} to={`post/${LastPost.id}`}>
          <div className='flex flex-col gap-2 md:gap-4 w-full hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>
            <div className='w-full relative'>
              <img src={`${imageUrl}${LastPost.image}`} alt="" className='w-full hover:scale-105 ease-in duration-200' />
              <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>

              </div>
            </div>

            <div className='flex flex-col gap-1 md:gap-2'>
              <div className='flex gap-1 items-center text-gray-500 text-sm'>
                <p className='text-xs md:text-sm lg:text-base uppercase'>{LastPost.created}</p>
              </div>

              <h1 className='text-base md:text-xl lg:text-3xl font-semibold'>{LastPost.title}</h1>
              <p className='text-xs md:text-base text-gray-500'>{LastPost.body?.slice(1, 150)} ...</p>
            </div>


          </div>
        </Link>


        <div className='grid grid-cols-2 gap-y-4 gap-x-2 md:gap-4'>

          {/* All Posts*/}
          {AllPosts.map(post => (
            <Link onClick={() => window.scrollTo(0, 0)} key={post.id} to={`post/${post.id}`}>
              <div className='flex flex-col gap-1 w-full hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>

                {/* image */}
                <div className='w-full h-16 md:h-20 lg:h-36 relative'>
                  <img src={`${imageUrl}${post.image}`} alt="" className='w-full h-full object-cover hover:scale-105 ease-in duration-200' />
                  <div className='absolute top-0 left-0 w-full h-full hover:cursor-pointer hover:bg-orange-500 hover:bg-opacity-25 ease-in duration-200'>
                  </div>
                </div>

                <p className='text-[9px] md:text-xs text-gray-500 uppercase'>
                  {/* {new Intl.DateTimeFormat('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  }).format(new Date(post.created))} */}
                  {post.created}
                </p>

                <div className='flex flex-col md:gap-1'>
                  <h1 className='text-[10px] md:text-base lg:text-lg font-semibold'>{post.title}</h1>
                  <p className='hidden md:flex text-gray-500 text-[10px] md:text-sm'>{post.body?.slice(1, 50)} ...</p>
                  <p className='md:hidden text-gray-500 text-[10px] md:text-sm'>{post.body?.slice(1, 30)} ...</p>
                </div>

              </div>
            </Link>
          ))

          }


        </div>

        {/* pagination */}
        <div className='flex gap-1 md:gap-2'>
          <MdOutlineKeyboardArrowLeft onClick={handlePreviosPage} className={`w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 p-1 border border-orange-300 hover:cursor-pointer hover:bg-orange-300 ease-in duration-150 ${page <= 1 ? 'bg-orange-300 hover:cursor-default' : ''}`} />
          <p className='text-xs sm:text-sm md:text-base'>{page}</p>
          <MdKeyboardArrowRight onClick={handleNextPage} className={`w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 p-1 border border-orange-300 hover:cursor-pointer hover:bg-orange-300 ease-in duration-150 ${page >= total / 4 ? 'bg-orange-300 hover:cursor-default' : ''}`} />
        </div>

      </div>

    </div>
  )
}
