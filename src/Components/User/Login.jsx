import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";



export default function Login() {
    return (
        <div className='bg-orange-100 bg-opacity-50 h-screen py-10 my-36'>

            <div className='grid grid-cols-5 lg:w-[60%] mx-auto'>

                <img src="media/images/login.jpg" alt="" className='col-span-3 h-[400px] object-cover' />

                <div className='col-span-2 px-6 flex flex-col gap-4 bg-white justify-center relative'>

                    {/* close icon  */}
                    <Link to='/' className='absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-orange-400 rounded-md border border-orange-400 hover:cursor-pointer hover:text-white hover:bg-orange-400 ease-in duration-150'>
                        <IoClose />
                    </Link>

                    {/* login  */}
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold w-full text-center text-orange-400 '>Loge in</h1>
                        <p className='text-sm w-full text-center text-gray-500'>Enter valid email & password to contenue </p>
                    </div>

                    <form action="" className='flex flex-col gap-4 mt-2'>

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

                        {/* remember me */}
                        <div className='flex justify-between items-center'>
                            <div className='ml-1 flex gap-2 items-center'>
                                <input type='checkbox' className='checked:border-orange-400' />
                                <p className='text-sm text-gray-500'>Remember me</p>

                            </div>
                            {/* <Link to='/forgetPassword'>
                                <p className='text-sm text-orange-400 hover:cursor-pointer hover:underline ease-in duration-150'>Forget password</p>
                            </Link> */}
                        </div>

                        {/* login  */}
                        <input type="submit" value='Login' className='w-full text-white py-[6px] rounded-md text-center bg-orange-400 hover:cursor-pointer hover:bg-orange-500 ease-in duration-150' />

                        {/* <div className='flex flex-col gap-4'>

                           
                            <div className='flex gap-2 items-center justify-center'>
                                <hr className='h-[2px] w-6 rounded-full bg-gray-100' />
                                <p className='text-gray-500 text-sm'>Or continue with</p>
                                <hr className='h-[2px] w-6 rounded-full bg-gray-100' />

                            </div>

                            
                            <div className='flex gap-4'>

                               
                                <div className='flex items-center px-4 py-1 bg-orange-100 rounded-lg hover:cursor-pointer hover:bg-orange-200 ease-in duration-150 '>
                                    <img src="media/icons/google.png" alt="google icon" className='w-8 h-8 object-cover' />
                                    <p className='text-gray-500 text-sm'>Google</p>
                                </div>

                               
                                <div className='flex items-center px-4 py-1 bg-orange-100 rounded-lg hover:cursor-pointer hover:bg-orange-200 ease-in duration-150 '>
                                    <img src="media/icons/face.png" alt="google icon" className='w-5 h-5  object-cover' />
                                    <p className='text-gray-500 text-sm'>Facebook</p>
                                </div>
                            </div>
                        </div> */}

                        
                        <div className='flex gap-1 justify-center mt-4'>
                            <p className='text-gray-500'>Haven't any account?</p>
                            <Link onClick={() => {window.scrollTo(0,0)}} to='/signUp'>
                                <p className='font-semibold text-orange-400 hover:cursor-pointer hover:underline ease-in duration-150'>Sign Up</p>
                            </Link>
                        </div>
                    </form>


                </div>

            </div>

        </div>
    )
}
