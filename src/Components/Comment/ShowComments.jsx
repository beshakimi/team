import React from 'react'


export default function ShowComments() {
  return (
    <div className='w-full flex flex-col gap-4 p-10 '>
        
        {/* comment 1 */}
        <div className='flex gap-4 p-6 rounded-lg bg-orange-50'>
            <img src="media/team/2.jpg" alt="user avatar" className='w-20 h-20 rounded-full object-cover' />
            
            <div className='flex flex-col gap-1'>
                <h1 className='text-lg font-semibold text-orange-500'>Manizha Rasoli</h1>
                <p className='text-gray-400 text-sm'>May 04,2024 at 07:43 pm</p>
                <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel totam ad veritatis mollitia quia labore impedit.</p>
            </div>
        </div>

        {/* comment 2 */}
        <div className='flex gap-4 p-6 rounded-lg bg-orange-50'>
            <img src="media/team/3.jpg" alt="user avatar" className='w-20 h-20 rounded-full object-cover' />
            
            <div className='flex flex-col gap-1'>
                <h1 className='text-lg font-semibold text-orange-500'>Manizha Rasoli</h1>
                <p className='text-gray-400 text-sm'>May 04,2024 at 07:43 pm</p>
                <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel totam ad veritatis mollitia quia labore impedit.</p>
            </div>
        </div>

        {/* comment 3 */}
        <div className='flex gap-4 p-6 rounded-lg bg-orange-50'>
            <img src="media/team/4.jpg" alt="user avatar" className='w-20 h-20 rounded-full object-cover' />
            
            <div className='flex flex-col gap-1'>
                <h1 className='text-lg font-semibold text-orange-500'>Manizha Rasoli</h1>
                <p className='text-gray-400 text-sm'>May 04,2024 at 07:43 pm</p>
                <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel totam ad veritatis mollitia quia labore impedit.</p>
            </div>
        </div>

    </div>
  )
}
