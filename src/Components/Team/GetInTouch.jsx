import React, { useState } from 'react'
import axios from 'axios';

import { GrContact } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function GetInTouch(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [Error, setError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
    const Url = 'http://127.0.0.1:8000/developers/contact';

    const nameRegex = /^([a-zA-Z\u0600-\u06FF]+[\s]?)+$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    const OnSubmit = (e) => {
        e.preventDefault();

        if (!nameRegex.test(name)) {
            setNameError('Name is invalid!');
            const timer = setTimeout(() => {
                setNameError('');
            }, 5000);

            return () => clearTimeout(timer);
            return;
        }

        if (!emailRegex.test(email)) {
            setEmailError('Email is invalid!');
            const timer = setTimeout(() => {
                setEmailError('');
            }, 5000);
            return () => clearTimeout(timer);
            return;
        }

        if (message === "") {
            setMessageError('Please write a message!');
            const timer = setTimeout(() => {
                setMessageError('')
            }, 5000)
            return

        }

        else {
            try {

                axios.post(Url, {
                    email,
                    name,
                    message,
                });

                setSuccessMessage('Your message successfully sent.');
                const timer = setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
                setName('');
                setEmail('');
                setMessage('');
            } catch (error) {

                setError('An error occurred while submitting the form. Please try again later.');
            }
        }
    };
    return (
        <div id ={props.id} className=''>

            {successMessage && <div className=' fixed z-50 top-10 right-0 flex  w-full justify-center text-green-500'>
                <p className='bg-orange-200 py-2 px-4 rounded-md'> {successMessage}</p>
            </div>}

            {/* icon and text  */}
            <div className='flex gap-2 items-center'>

                {/* icon  */}
                <div className='p-2 rounded-full border-2 text-gray-400 border-100'>
                    <GrContact />
                </div>
                <p className='w-full border-b-2 pb-1 text-orange-400 font-semibold border-gray-200'>Get in Touch</p>
            </div>

            <form action="" className='flex flex-col gap-4 mt-4'>

                <div className='grid grid-cols-2 gap-4'>
                    {/* name  */}
                    <div className={`w-full px-2 py-[6px] border border-orange-100 bg-orange-100 rounded-md flex gap-1 items-center relative ${nameError ? 'border-red-500' : ''}`}>
                        {nameError && <div className='text-sm text-red-500 absolute top-1 right-2'>{nameError}</div>}
                        <FaUser className='text-gray-500' />
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                    </div>

                    {/* email  */}
                    <div className={`w-full px-2 py-[6px] border border-orange-100 bg-orange-100 rounded-md flex gap-1 items-center relative ${emailError ? 'border-red-500' : ''}`}>
                        {emailError && <div className='text-sm text-red-500 absolute top-1 right-2'>{emailError}</div>}
                        <MdEmail className='text-gray-500' />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                    </div>

                </div>

                {/* message  */}
                <div className={`w-full px-2 py-[6px] border border-orange-100 bg-orange-100 rounded-md relative ${messageError ? 'border-red-500' : ''}`}>
                    {messageError && <div className='text-sm text-red-500 absolute top-[6px] right-2'>{messageError}</div>}
                    <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' className='w-full h-28 text-gray-600 text-sm bg-transparent focus:outline-none' />
                </div>
                <input type="submit" onClick={OnSubmit} value='Send Message' className='text-white w-full text-center py-[6px] bg-[#e87a35] rounded-md hover:cursor-pointer hover:bg-orange-600 transition-all duration-150' />
            </form>
        </div>
    )
}
