import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import blogPosts from '../../data/blogPosts';
import ImageLoader from '../ImageLoader';

export default function RelatedPost() {
    const navigate = useNavigate();
    const { id } = useParams();
    const imageUrl = '/images/';

    const relatedPosts = blogPosts.filter(post => post.id.toString() !== id);

    const handleLinkClick = (postId) => {
        navigate(`/post/${postId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='w-full flex flex-col gap-4 my-10'>
            <h1 className='font-semibold text-base md:text-lg'>Related Posts</h1>

            <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6'>
                {relatedPosts.map((post) => (
                    <div key={post.id} onClick={() => handleLinkClick(post.id)} className='flex flex-col gap-1 w-full bg-orange-100 p-2 md:p-4 rounded-sm hover:cursor-pointer hover:text-orange-500 ease-in duration-150'>
                        {/* image */}
                        <div className='w-full h-32 sm:h-36 md:h-48 relative'>
                            <ImageLoader src={post.image} alt={post.title} className='w-full h-full object-cover hover:scale-105 ease-in duration-200' />
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-orange-500 hover:bg-opacity-25'></div>
                        </div>

                        <p className='text-[8px] md:text-xs text-gray-500 uppercase'>{post.created}</p>

                        <div className='flex flex-col md:gap-1'>
                            <h1 className='text-[9px] sm:text-xs md:text-lg font-semibold'>{post.title}</h1>
                            <p className='text-gray-500 text-[9px] sm:text-xs md:text-sm'>{post.body?.slice(0, 50)}...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
