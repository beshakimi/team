import React, { useState } from 'react'
import { GrContact } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function GetInTouch(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const nameRegex = /^([a-zA-Z\u0600-\u06FF]+[\s]?)+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const OnSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setNameError('');
        setEmailError('');
        setMessageError('');

        let hasError = false;

        if (!nameRegex.test(name)) {
            setNameError('Name is invalid!');
            hasError = true;
            setTimeout(() => setNameError(''), 5000);
        }

        if (!emailRegex.test(email)) {
            setEmailError('Email is invalid!');
            hasError = true;
            setTimeout(() => setEmailError(''), 5000);
        }

        if (!message.trim()) {
            setMessageError('Please write a message!');
            hasError = true;
            setTimeout(() => setMessageError(''), 5000);
        }

        if (!hasError) {
            // Simulate successful submission
            setSuccessMessage('Your message was sent successfully!');
            setTimeout(() => setSuccessMessage(''), 5000);

            // Reset form
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div>
            {successMessage && (
                <div className='fixed z-50 top-10 right-0 flex w-full justify-center text-green-500'>
                    <p className='bg-orange-200 py-2 px-4 rounded-md'>{successMessage}</p>
                </div>
            )}

            {/* icon and text */}
            <div className='flex gap-2 items-center'>
                <div className='p-1 md:p-2 rounded-full border-2 text-gray-400 border-100'>
                    <GrContact className='text-xs md:text-base' />
                </div>
                <h1 id={props.id} className='w-full border-b md:border-b-2 pb-1 text-orange-400 text-xs md:text-base font-semibold border-gray-200'>
                    Get in Touch
                </h1>
            </div>

            <form className='flex flex-col gap-4 mt-4' onSubmit={OnSubmit}>

                <div className='grid grid-cols-2 gap-4'>
                    {/* Name */}
                    <div className={`w-full px-2 py-[6px] border border-orange-100 bg-orange-100 rounded-md flex gap-1 items-center relative ${nameError ? 'border-red-500' : ''}`}>
                        {nameError && <div className='text-sm text-red-500 absolute top-1 right-2'>{nameError}</div>}
                        <FaUser className='text-gray-500' />
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                    </div>

                    {/* Email */}
                    <div className={`w-full px-2 py-[6px] border border-orange-100 bg-orange-100 rounded-md flex gap-1 items-center relative ${emailError ? 'border-red-500' : ''}`}>
                        {emailError && <div className='text-sm text-red-500 absolute top-1 right-2'>{emailError}</div>}
                        <MdEmail className='text-gray-500' />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                    </div>
                </div>

                {/* Message */}
                <div className={`w-full px-2 py-[6px] border border-orange-100 bg-orange-100 rounded-md relative ${messageError ? 'border-red-500' : ''}`}>
                    {messageError && <div className='text-sm text-red-500 absolute top-[6px] right-2'>{messageError}</div>}
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' className='w-full h-28 text-gray-600 text-sm bg-transparent focus:outline-none' />
                </div>

                <input type="submit" value='Send Message' className='text-white w-full text-center py-[6px] bg-[#e87a35] rounded-md hover:cursor-pointer hover:bg-orange-600 transition-all duration-150' />

            </form>
        </div>
    );
}
