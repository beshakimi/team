import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";


export default function SignUp() {

    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullNameError, setFullNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [error, setError] = useState(false);
    const nameRegex = /^([a-zA-Z\u0600-\u06FF]+[\s]?)+$/;


    const signUp = (e) => {
        e.preventDefault();

        if (password.length <= 1) {
            setPasswordError('Password must be longer than 6 characters.')
        }

        else if (!nameRegex.test(fullName)) {
            setFullNameError('Name is invalid!');
            const timer = setTimeout(() => {
                setFullNameError('');
            }, 5000);

            return () => clearTimeout(timer);
            return;
        }

        else {
            let item = { fullName, email, password };
            // console.log(item)
            fetch('http://127.0.0.1:8000/developers/register', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(item)
            }).then((res) => {
                return res.json();


                // toast.success('Registered succsessfully');
                // navigate('/profile')
            }).then((data) => {
                if (data.email[0] === "User with this email already exists.") {
                    setEmailError('User with this email already exists.');
                    console.log(data);
                } else {
                    successMessage('Registered succsessfully')
                    navigate('/')
                }
            }).catch((err) => {
                error('Failed :' + err.message);

            }
            )
        }
    }


    return (
        <div className='bg-orange-100 bg-opacity-50 h-screen py-10 my-36'>

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
                            <input onChange={(e)=> {setFullName(e.target.value)}} type="text" value={fullName} name='fullName' placeholder='Full name' className='w-full outline-none' />
                        </div>

                        {/* email  */}
                        <div className='flex gap-2 input items-center'>
                            <HiOutlineMail className='text-orange-400' />
                            <input onChange={(e) => {setEmail(e.target.value)}} type="text" value={email} name='email' placeholder='jhon.smit@gmail.com' className='w-full outline-none' />
                        </div>

                        {/* password */}
                        <div className='flex gap-2 input items-center'>
                            <RiLockPasswordLine className='text-orange-400' />
                            <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} name='password' placeholder='*************' className='w-full outline-none' />
                        </div>

                        {/* sign up  */}
                        <input onClick={SignUp} type="submit" value='Sign Up' className='w-full text-white py-[6px] rounded-md text-center bg-orange-400 hover:cursor-pointer hover:bg-orange-500 ease-in duration-150' />


                        {/* have not any account  */}
                        <div className='flex gap-1 justify-center mt-4'>
                            <p className='text-gray-500'>Already have an Account</p>
                            <Link onClick={() => { window.scrollTo(0, 0) }} to='/login'>
                                <p className='font-semibold text-orange-400 hover:cursor-pointer hover:underline ease-in duration-150'>Log In</p>
                            </Link>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    )
}
