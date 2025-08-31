import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import { format } from 'date-fns';
import commentsData from '../../data/commentsData';

export default function ShowComments() {
    const comments = commentsData;

    return (
        <div className='w-full flex flex-col gap-4 p-2 md:p-6 lg:p-10'>
            {comments.map(comment => (
                <div key={comment.id} className='flex gap-4 p-2 md:p-4 lg:p-6 rounded-lg bg-orange-50'>
                    <div className='min-w-8 max-w-8 max-h-8 min-h-8 sm:min-w-10 sm:max-w-10 sm:max-h-10 sm:min-h-10 md:min-w-14 md:max-w-14 md:max-h-14 md:min-h-14 lg:min-w-20 lg:max-w-20 lg:max-h-20 lg:min-h-20 bg-gray-100 p-1 rounded-full flex items-center justify-center'>
                        <FaRegUser className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-gray-600' />
                    </div>

                    <div className='flex flex-col md:gap-1'>
                        <h1 className='text-xs md:text-base lg:text-lg font-semibold text-orange-500'>{comment.name}</h1>
                        <p className='text-gray-400 text-[8px] md:text-sm'>{format(new Date(comment.created), 'MMM dd, yyyy \'at\' hh:mm a')}</p>
                        <p className='text-gray-500 text-xs sm:text-base mt-1 md:mt-4'>{comment.message}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
