import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// داده شبیه‌سازی شده اولیه
const initialComments = [
  { id: 1, name: "Ali Hakimi", email: "ali@example.com", message: "Great post!" },
  { id: 2, name: "Fatima Ahmadi", email: "fatima@example.com", message: "Very informative!" }
];

export default function WriteComent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
    const [comments, setComments] = useState(initialComments);

    const nameRegex = /^([a-zA-Z\u0600-\u06FF]+[\s]?)+$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const OnSubmit = (e) => {
        e.preventDefault();

        if (!message) {
            setMessageError('Please write a message!');
            setTimeout(() => setMessageError(''), 5000);
            return;
        }
        if (!nameRegex.test(name)) {
            setNameError('Name is invalid!');
            setTimeout(() => setNameError(''), 5000);
            return;
        }
        if (!emailRegex.test(email)) {
            setEmailError('Email is invalid!');
            setTimeout(() => setEmailError(''), 5000);
            return;
        }

        // اضافه کردن کامنت جدید به آرایه شبیه‌سازی شده
        const newComment = {
            id: comments.length + 1,
            name,
            email,
            message
        };
        setComments([newComment, ...comments]);

        setSuccessMessage('Your message successfully sent.');
        setTimeout(() => setSuccessMessage(''), 5000);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <form className='flex flex-col gap-4 mt-4'>
                <h1 className='font-semibold text-sm md:text-lg'>Leave a Reply</h1>

                {/* message */}
                <div className={`w-full px-2 py-[6px] border border-orange-100 bg-orange-100 rounded-md relative ${messageError ? 'border-red-500' : ''}`}>
                    {messageError && <div className=' absolute top-2 right-2 text-red-600 text-sm z-20'>{messageError}</div>}
                    <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' className='w-full h-20 md:h-28 text-gray-600 text-xs md:text-sm bg-transparent focus:outline-none' />
                </div>

                {/* name and email */}
                <div className='grid grid-cols-2 gap-4'>
                    <div className={`w-full px-2 py-1 md:py-2 border border-orange-100 bg-orange-100 rounded-md flex gap-1 items-center relative ${nameError ? 'border-red-500' : ''}`}>
                        {nameError && <div className=' absolute top-2 right-2 text-red-600 text-sm z-20'>{nameError}</div>}
                        <FaUser className='text-xs md:text-base text-gray-500' />
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='w-full h-full text-gray-600 text-xs md:text-sm bg-transparent focus:outline-none' />
                    </div>

                    <div className={`w-full px-2 py-1 md:py-2 border border-orange-100 bg-orange-100 rounded-md flex gap-1 items-center relative ${emailError ? 'border-red-500' : ''}`}>
                        {emailError && <div className=' absolute top-2 right-2 text-red-600 text-sm z-20'>{emailError}</div>}
                        <MdEmail className='text-xs md:text-base text-gray-500' />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-full h-full text-gray-600 text-xs md:text-sm bg-transparent focus:outline-none' />
                    </div>
                </div>

                <div className='flex gap-2'>
                    <input onClick={OnSubmit} type="submit" value='Post Comment' className='text-white text-xs md:text-base w-fit text-center px-4 py-1 md:py-[6px] bg-[#e87a35] rounded-md hover:cursor-pointer hover:bg-orange-600 transition-all duration-150' />
                    {successMessage && <p className='text-sm text-green-600'>{successMessage}</p>}
                </div>
            </form>
        </div>
    )
}
