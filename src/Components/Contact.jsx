import React, { useState } from 'react'

import { FaLocationDot, FaUser } from "react-icons/fa6";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [successMessage, setSuccessMessage] = useState('');

    const nameRegex = /^([a-zA-Z\u0600-\u06FF]+[\s]?)+$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const OnSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        if (!nameRegex.test(name)) {
            setNameError('Name is invalid!');
            setTimeout(() => setNameError(''), 5000);
            valid = false;
        }

        if (!emailRegex.test(email)) {
            setEmailError('Email is invalid!');
            setTimeout(() => setEmailError(''), 5000);
            valid = false;
        }

        if (message.trim() === "") {
            setMessageError('Please write a message!');
            setTimeout(() => setMessageError(''), 5000);
            valid = false;
        }

        if (!valid) return;

        // شبیه‌سازی ارسال موفق
        setSuccessMessage('Your message successfully sent.');
        setTimeout(() => setSuccessMessage(''), 5000);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='bg-white pt-6 rounded-sm flex flex-col gap-2 md:gap-4'>
            {successMessage && <div className=' fixed z-50 top-10 right-0 flex  w-full justify-center text-green-500'>
                <p className='bg-orange-200 py-2 px-4 rounded-md'> {successMessage}</p>
            </div>}
            
            <h1 id={props.id} className='text-lg md:text-3xl text-[#e87a35] font-bold w-full text-center '>Contact</h1>
            <p className='w-[90%] md:w-[50%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi distinctio.</p>

            <div className='relative bg-orange-200 mt-20 md:mt-28 px-4 md:px-10 py-16 md:py-20 '>
                {/* icons  */}
                <div className='absolute top-[-50px] md:top-[-100px] left-0 w-full h-fit'>
                    <div className='w-full flex gap-6 justify-center'>
                        <div className='flex flex-col gap-1 md:gap-2 p-4 justify-center items-center bg-[#e87a35] w-24 h-24 md:w-40 md:h-40 '>
                            <FaLocationDot className='w-8 h-8 md:w-16 md:h-16 text-white' />
                            <h1 className='text-[8px] md:text-xs whitespace-nowrap text-gray-700 font-bold uppercase'>Our Main Address</h1>
                            <p className='text-[8px] md:text-sm whitespace-nowrap'>Kabul Afghanistan</p>
                        </div>
                        <div className='flex flex-col gap-1 md:gap-2 p-4 justify-center items-center bg-[#e87a35] w-24 h-24 md:w-40 md:h-40 '>
                            <PiPhoneThin className='w-8 h-8 md:w-16 md:h-16 text-white' />
                            <h1 className='text-[8px] md:text-xs whitespace-nowrap text-gray-700 font-bold uppercase'>Phone</h1>
                            <p className='text-[8px] md:text-sm whitespace-nowrap'>+93 748294735</p>
                        </div>
                        <div className='flex flex-col gap-1 md:gap-2 p-4 justify-center items-center bg-[#e87a35] w-24 h-24 md:w-40 md:h-40 '>
                            <HiOutlineMail className='w-8 h-8 md:w-16 md:h-16 text-white' />
                            <h1 className='text-[8px] md:text-xs whitespace-nowrap text-gray-700 font-bold uppercase'>Email</h1>
                            <p className='text-[8px] md:text-sm whitespace-nowrap'>w.user2022@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* form  */}
                <div className='w-full rounded-md bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6 '>
                    <div className=''>
                        <form action="" className='flex flex-col gap-4' onSubmit={OnSubmit}>
                            <div className={`w-full p-2 border border-orange-100 bg-orange-100 rounded-md flex gap-2 items-center relative ${nameError ? 'border-red-500' : ''}`}>
                                {nameError && <div className='text-sm text-red-500 absolute top-[6px] right-2'>{nameError}</div>}
                                <FaUser className='text-gray-500' />
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                            </div>
                            <div className={`w-full p-2 border border-orange-100 bg-orange-100 rounded-md flex gap-2 items-center relative ${emailError ? 'border-red-500' : ''}`}>
                                {emailError && <div className='text-sm text-red-500 absolute top-[6px] right-2'>{emailError}</div>}
                                <MdEmail className='text-gray-500' />
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                            </div>
                            <div className={`w-full px-2 py-[6px] border border-orange-100 bg-orange-100 rounded-md relative ${messageError ? 'border-red-500' : ''}`}>
                                {messageError && <div className='text-sm text-red-500 absolute top-1 right-2'>{messageError}</div>}
                                <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' className='w-full h-28 text-gray-600 text-sm bg-transparent focus:outline-none' />
                            </div>
                            <input type="submit" value='Send Message' className='text-white w-full text-center py-[6px] bg-[#e87a35] rounded-md hover:cursor-pointer hover:bg-orange-600 transition-all duration-150' />
                        </form>
                    </div>

                    {/* image */}
                    <div className='p-4'>
                        <img src="media/images/contact.png" alt="contact image" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}
