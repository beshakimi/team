import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";



export default function SignUp() {
    return (
        <div className='bg-orange-100 h-screen py-10'>

            <div className='grid grid-cols-5 lg:w-[60%] mx-auto mt-6 mb-10'>

                <img src="media/blog/5.jpg" alt="" className='col-span-3 h-[420px] object-cover' />

                <div className='col-span-2 px-6 flex flex-col gap-4 bg-white justify-center relative'>
                
                    <div className='flex flex-col gap-2'>
                        <h1 className='w-full text-center text-2xl font-bold text-orange-400 '>Sign Up</h1>
                        <p className='text-sm w-full text-center text-gray-500'>Use proper information to continue </p>
                    </div>

                    <form action="" className='flex flex-col gap-4 mt-2'>

                        {/* full name  */}
                        <div className='flex gap-2 input items-center'>
                            <FiUser className='text-orange-400' />
                            <input type="text" placeholder='Full name' className='w-full outline-none' />
                        </div>

                        {/* email  */}
                        <div className='flex gap-2 input items-center'>
                            <HiOutlineMail className='text-orange-400' />
                            <input type="text" placeholder='jhon.smit@gmail.com' className='w-full outline-none' />
                        </div>

                        {/* password */}
                        <div className='flex gap-2 input items-center'>
                            <RiLockPasswordLine className='text-orange-400' />
                            <input type="password" placeholder='*************' className='w-full outline-none' />
                        </div>

                        {/* privacy policy */}
                            <div className='ml-1 flex gap-2 items-center'>
                                <p className='text-center text-sm text-gray-500'>By signin up, you are agree to our <span className='text-orange-400 font-semibold hover:cursor-pointer hover:underline'>Terms & Privacy Policy</span></p>
                            </div>

                        {/* sign up  */}
                        <input type="submit" value='Sign Up' className='w-full text-white py-[6px] rounded-md text-center bg-orange-400 hover:cursor-pointer hover:bg-orange-500 ease-in duration-150' />

                        
                        {/* have not any account  */}
                        <div className='flex gap-1 justify-center mt-4'>
                            <p className='text-gray-500'>Already have an Account</p>
                            <Link to='/login'>
                            <p className='font-semibold text-orange-400 hover:cursor-pointer hover:underline ease-in duration-150'>Log In</p>
                            </Link>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    )
}
