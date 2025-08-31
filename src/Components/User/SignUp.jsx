import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

export default function SignUp() {

    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullNameError, setFullNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const nameRegex = /^([a-zA-Z\u0600-\u06FF]+[\s]?)+$/;
    const fakeExistingEmails = ["test@example.com", "user@gmail.com"]; // ایمیل‌های شبیه‌سازی شده موجود

    const signUp = (e) => {
        e.preventDefault();

        setFullNameError("");
        setEmailError("");
        setPasswordError("");
        setSuccessMessage("");

        if (password.length < 6) {
            setPasswordError('Password must be longer than 6 characters.');
            return;
        }

        if (!nameRegex.test(fullName)) {
            setFullNameError('Name is invalid!');
            return;
        }

        if (fakeExistingEmails.includes(email.toLowerCase())) {
            setEmailError('User with this email already exists.');
            return;
        }

        // شبیه‌سازی موفقیت
        setSuccessMessage('Registered successfully!');
        setFullName('');
        setEmail('');
        setPassword('');

        setTimeout(() => {
            setSuccessMessage('');
            navigate('/'); // بعد از 2 ثانیه به صفحه اصلی برود
        }, 2000);
    }

    return (
        <div className='bg-orange-100 bg-opacity-50 h-screen py-10 my-36'>

            <div className='grid grid-cols-5 lg:w-[60%] mx-auto mt-6 mb-10'>

                <img src="media/blog/5.jpg" alt="" className='col-span-3 h-[420px] object-cover' />

                <div className='col-span-2 px-6 flex flex-col gap-4 bg-white justify-center relative'>

                    {successMessage && (
                        <div className='absolute top-2 left-1/2 -translate-x-1/2 bg-green-200 text-green-800 py-1 px-4 rounded-md'>
                            {successMessage}
                        </div>
                    )}

                    <div className='flex flex-col gap-2'>
                        <h1 className='w-full text-center text-2xl font-bold text-orange-400 '>Sign Up</h1>
                        <p className='text-sm w-full text-center text-gray-500'>Use proper information to continue </p>
                    </div>

                    <form className='flex flex-col gap-4 mt-2' onSubmit={signUp}>

                        {/* full name */}
                        <div className='flex gap-2 items-center relative'>
                            <FiUser className='text-orange-400' />
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder='Full name'
                                className='w-full outline-none p-1 border border-gray-300 rounded'
                            />
                            {fullNameError && <span className='absolute right-0 top-0 text-red-500 text-xs'>{fullNameError}</span>}
                        </div>

                        {/* email */}
                        <div className='flex gap-2 items-center relative'>
                            <HiOutlineMail className='text-orange-400' />
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='jhon.smit@gmail.com'
                                className='w-full outline-none p-1 border border-gray-300 rounded'
                            />
                            {emailError && <span className='absolute right-0 top-0 text-red-500 text-xs'>{emailError}</span>}
                        </div>

                        {/* password */}
                        <div className='flex gap-2 items-center relative'>
                            <RiLockPasswordLine className='text-orange-400' />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='*************'
                                className='w-full outline-none p-1 border border-gray-300 rounded'
                            />
                            {passwordError && <span className='absolute right-0 top-0 text-red-500 text-xs'>{passwordError}</span>}
                        </div>

                        {/* sign up button */}
                        <input
                            type="submit"
                            value='Sign Up'
                            className='w-full text-white py-[6px] rounded-md text-center bg-orange-400 hover:bg-orange-500 cursor-pointer transition-all duration-150'
                        />

                        {/* already have account */}
                        <div className='flex gap-1 justify-center mt-4'>
                            <p className='text-gray-500'>Already have an Account</p>
                            <Link to='/login'>
                                <p className='font-semibold text-orange-400 hover:underline cursor-pointer'>Log In</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
