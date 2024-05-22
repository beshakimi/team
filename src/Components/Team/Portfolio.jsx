import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { TfiGallery } from "react-icons/tfi";


export default function Portfolio() {
  

    return (

        <div className=''>

            {/* icon and text  */}
            <div className='flex gap-2 items-center'>

                {/* icon  */}
                <div className='p-2 rounded-full border-2 text-gray-400 border-100'>
                    <TfiGallery />
                </div>
                <p className='w-full border-b-2 pb-1 text-orange-400 font-semibold border-gray-200'>Portfolio</p>
            </div>

            <div className='mt-4 grid grid-cols-3 gap-4'>
                <img src="media/projects/1.jpg" className='w-full h-40 object-cover' />
                <img src="media/projects/2.jpg" className='w-full h-40 object-cover' />
                <img src="media/projects/3.jpg" className='w-full h-40 object-cover' />
                <img src="media/projects/2.jpg" className='w-full h-40 object-cover' />
                <img src="media/projects/3.jpg" className='w-full h-40 object-cover' />
                <img src="media/projects/1.jpg" className='w-full h-40 object-cover' />

            </div>
        </div>
    )
}
