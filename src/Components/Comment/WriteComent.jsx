import axios from 'axios';
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useParams } from 'react-router-dom';

export default function WriteComent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [Error, setError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
    const { id } = useParams();
    const Url = `http://127.0.0.1:8000/posts/${id}/comments`;

    const nameRegex = /^([a-zA-Z\u0600-\u06FF]+[\s]?)+$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    const OnSubmit = (e) => {
        e.preventDefault();

        if (message === "") {
            setMessageError('Please write a message!');
            const timer = setTimeout(() => {
                setMessageError('')
            }, 5000)
            return () => clearTimeout(timer);
            return;
        }

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
            return;
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
        <div>
            {/* get in touch */}
            <div className=''>

                <form className='flex flex-col gap-4 mt-4'>

                    <h1 className='font-semibold text-lg'>Leave a Reply</h1>

                    {/* message  */}
                    <div className={`w-full px-2 py-[6px] border border-orange-100 bg-orange-100 rounded-md relative ${messageError ? 'border-red-500' : ''}`}>
                        {messageError && <div className=' absolute top-2 right-2 text-red-600 text-sm z-20'>{messageError}</div>}

                        <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' className='w-full h-28 text-gray-600 text-sm bg-transparent focus:outline-none' />
                    </div>

                    {/* name and email  */}
                    <div className='grid grid-cols-2 gap-4'>
                        {/* name  */}
                        <div className={`w-full px-2 py-2 border border-orange-100 bg-orange-100 rounded-md flex gap-1 items-center relative ${nameError ? 'border-red-500' : ''}`}>
                            {nameError && <div className=' absolute top-2 right-2 text-red-600 text-sm z-20'>{nameError}</div>}
                            <FaUser className='text-gray-500' />
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                        </div>

                        {/* email  */}
                        <div className={`w-full px-2 py-2 border border-orange-100 bg-orange-100 rounded-md flex gap-1 items-center relative ${emailError ? 'border-red-500' : ''}`}>
                            {emailError && <div className=' absolute top-2 right-2 text-red-600 text-sm z-20'>{emailError}</div>}
                            <MdEmail className='text-gray-500' />
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <input onClick={OnSubmit} type="submit" value='Post Comment' className='text-white w-fit text-center px-4 py-[6px] bg-[#e87a35] rounded-md hover:cursor-pointer hover:bg-orange-600 transition-all duration-150' />
                        {successMessage && <p className='text-sm text-green-600'>{successMessage}</p>}
                    </div>
                </form>
            </div>

        </div>
    )
}
