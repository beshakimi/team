import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { FaRegUser } from "react-icons/fa6";


export default function ShowComments() {
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const Url = `http://127.0.0.1:8000/posts/${id}/comments`

    useEffect(() => {
        axios.get(Url)
            .then((res) => {
                setComments(res.data)
            })
    }, [id])

    return (
        <div className='w-full flex flex-col gap-4 p-10 '>

            {/* comments */}
            {comments.map(comment => (

                <div key={comment.id} className='flex gap-4 p-6 rounded-lg bg-orange-50'>
                    <div className='min-w-20 max-w-20 max-h-20 min-h-20 bg-gray-100 p-1 rounded-full flex items-center justify-center'>
                        <FaRegUser className='w-10 h-10 text-gray-600' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='text-lg font-semibold text-orange-500'>{comment.name}</h1>
                        <p className='text-gray-400 text-sm'>{format(new Date(comment.created), 'MMM dd,yyyy \'at\' hh:mm a')}</p>
                        <p className='text-gray-500 mt-4'>{comment.message}</p>
                    </div>
                </div>

            ))

            }

        </div>
    )
}
