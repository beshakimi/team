import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function WriteComent() {
    return (
        <div>
            {/* get in touch */}
            <div className=''>

                <form action="" className='flex flex-col gap-4 mt-4'>

                    <h1 className='font-semibold text-lg'>Leave a Reply</h1>

                    {/* message  */}
                    <div className='w-full px-2 py-[6px] bg-orange-100 rounded-md'>
                        <textarea type="text" placeholder='Message' className='w-full h-28 text-gray-600 text-sm bg-transparent focus:outline-none' />
                    </div>

                    {/* name and email  */}
                    <div className='grid grid-cols-2 gap-4'>
                        {/* name  */}
                        <div className='w-full px-2 py-2 bg-orange-100 rounded-md flex gap-1 items-center'>
                            <FaUser className='text-gray-500' />
                            <input type="text" placeholder='Name' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                        </div>

                        {/* email  */}
                        <div className='w-full px-2 py-2 bg-orange-100 rounded-md flex gap-1 items-center'>
                            <MdEmail className='text-gray-500' />
                            <input type="text" placeholder='Email' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                        </div>

                    </div>

                    <input type="submit" value='Post Comment' className='text-white w-fit text-center px-4 py-[6px] bg-[#e87a35] rounded-md hover:cursor-pointer hover:bg-orange-600 transition-all duration-150' />
                </form>
            </div>

        </div>
    )
}
