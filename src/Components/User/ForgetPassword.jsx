import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";

export default function ForgetPassword() {
  return (
    <div className='bg-orange-100 h-screen '>

    <div className='w-full h-screen flex justify-center items-center'>

        <div className='w-96 py-10 px-6 flex flex-col gap-4 rounded-md bg-white justify-center relative'>
            
            {/* login  */}
            <div className='flex flex-col gap-2'>
                <h1 className='w-full text-center text-2xl font-bold text-orange-400 '>Forget Password</h1>
                <p className='w-full text-center text-sm text-gray-500'>Don't worry it happens. Please enter the address associate with your account </p>
            </div>

            <form action="" className='flex flex-col gap-4 mt-2'>

                {/* email  */}
                <div className='flex gap-2 input items-center'>
                    <HiOutlineMail className='text-orange-400' />
                    <input type="text" placeholder='jhon.smit@gmail.com' className='w-full outline-none' />
                </div>

                {/* Send email  */}
                <input type="submit" value='Send email' className='w-full text-white py-[6px] rounded-md text-center bg-orange-400 hover:cursor-pointer hover:bg-orange-500 ease-in duration-150' />

                
                {/* remember password  */}
                <div className='flex gap-1 justify-center mt-4'>
                    <p className='text-gray-500'>You remember your Password?</p>
                    <Link to='/login'>
                    <p className='font-semibold text-orange-400 hover:cursor-pointer hover:underline ease-in duration-150'>Login Up</p>
                    </Link>
                </div>
            </form>


        </div>

    </div>

</div>
  )
}
