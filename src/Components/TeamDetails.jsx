import React from 'react'

import { FaShareNodes } from "react-icons/fa6";
import { IoIosCloudDownload } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { PiFileHtmlFill } from "react-icons/pi";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { TfiGallery } from "react-icons/tfi";
import { GrContact } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function TeamDetails({showModal}) {
    return (
        <div className='flex flex-col gap-10 w-[80%] h-screen mx-auto mt-6 mb-10 '>
            <IoClose onClick={()=> showModal(false)} className='absolute top-6 right-6 w-6 h-6 text-white border hover:cursor-pointer hover:border-orange-400 hover:bg-orange-400 ease-in duration-150'/>
            <div className='w-full flex gap-4'>

                {/* profile  */}
                <div className='flex flex-col gap-4'>

                    {/* avatar and more  */}
                    <div className='pt-6 bg-white rounded-md flex flex-col gap-2 justify-center items-center'>
                        <img src="media/team/user.jpg" alt="avatar" className='p-[2px] w-28 h-28 object-cover rounded-full border-4 border-gray-100' />
                        <h1 className='font-bold'>Besmill Hakimi</h1>
                        <p className='bg-orange-200 py-1 px-2 rounded-full text-orange-500 font-semibold text-sm'>Front-end Developer</p>

                        {/* years,per-hour,projects  */}
                        <div className='mt-6 w-full grid grid-cols-3'>

                            {/* Years */}
                            <div className='flex flex-col gap-1 items-center'>
                                <p className='font-bold text-xl text-gray-600'>3</p>
                                <p className='font-semibold text-sm text-gray-400'>Years</p>
                            </div>

                            {/* per-hour  */}
                            <div className='flex flex-col gap-1 items-center'>
                                <p className='font-bold text-xl text-gray-600'>25</p>
                                <p className='font-semibold text-sm text-gray-400'>Per - Hour</p>
                            </div>

                            {/* projects */}
                            <div className='flex flex-col gap-1 items-center'>
                                <p className='font-bold text-xl text-gray-600'>6</p>
                                <p className='font-semibold text-sm text-gray-400'>Projects</p>
                            </div>

                        </div>

                        {/* shard, download cd, message  */}
                        <div className='mt-4 w-full flex gap-2  p-2'>

                            {/* share */}
                            <div className='flex gap-1 items-center rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                                <FaShareNodes className='' />
                                <p>Share</p>
                            </div>

                            {/* download cv */}
                            <div className='flex gap-1 items-center whitespace-nowrap rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                                <IoIosCloudDownload className='' />
                                <p>Download CV</p>
                            </div>

                            <div className='flex gap-1 items-center rounded-full text-sm py-1 px-3 border border-orange-400 text-orange-500 hover:cursor-pointer hover:bg-orange-400 hover:text-white ease-in duration-150'>
                                <MdAttachEmail className='' />
                                <p>Message</p>
                            </div>

                        </div>

                    </div>

                    {/* sotial linl */}
                    <div className='pb-2 bg-white rounded-md flex flex-col justify-center items-center'>

                        {/* facebook */}
                        <div className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>

                            <div className='flex gap-1 items-center '>
                                <TiSocialFacebook />
                                <p>Facebook</p>
                            </div>
                            <p className='text-gray-400'>Facebook id</p>
                        </div>

                        {/* linkden */}
                        <div className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>

                            <div className='flex gap-1 items-center '>
                                <FaLinkedin />
                                <p>Linkedln</p>
                            </div>
                            <p className='text-gray-400'>Linkedln id</p>
                        </div>

                        {/* WhatsApp */}
                        <div className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>

                            <div className='flex gap-1 items-center '>
                                <TbBrandWhatsapp />
                                <p>WhatsApp</p>
                            </div>
                            <p className='text-gray-400'>WhatsApp</p>
                        </div>

                        {/* GitHup */}
                        <div className='py-2 px-4 w-full flex text-sm text-gray-800 items-center justify-between border-b border-gray-300 hover:cursor-pointer hover:text-orange-400 ease-in duration-150'>

                            <div className='flex gap-1 items-center '>
                                <FaGithub />
                                <p>GitHup</p>
                            </div>
                            <p className='text-gray-400'>GitHup id</p>
                        </div>

                    </div>

                </div>

                {/* about  */}
                <div className='pb-10 w-full h-screen flex flex-col gap-4 bg-white rounded-md p-6 overflow-scroll no-scroll'>

                    {/* icon and name  */}
                    <div className='flex gap-2 items-center'>

                        {/* icon  */}
                        <div className='p-2 rounded-full border-2 text-gray-400 border-100'>
                            <MdOutlineCastForEducation />
                        </div>
                        <p className='w-full border-b-2 pb-1 text-orange-400 font-semibold border-gray-200'>About Besmill Hakimi</p>
                    </div>

                    {/* image and information */}
                    <div className='grid grid-cols-3 gap-4'>
                        <img src="media/team/8.jpg" alt="image" className='col-span-1 w-full h-80 object-cover' />

                        <div className='col-span-2 flex flex-col gap-2'>
                            <h1 className='font-semibold text-gray-700'>Hello I'm front-end Developer | UI Designer</h1>
                            <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor tempore veniam distinctio aliquid aliquam ratione, beatae, unde soluta maiores tenetur obcaecati consequatur minus a quas cupiditate odio cum impedit voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo similique qui impedit ullam assumenda mollitia corrupti voluptates iste, eos libero dolorem omnis deserunt veniam numquam veritatis exercitationem ex est.</p>

                            {/* phone,address,email  */}
                            <div className='flex flex-col gap-2 mt-6'>

                                {/* address  */}
                                <div className='flex gap-2 items-center mt-2'>
                                    <FaLocationDot className='text-orange-500' />
                                    <p className='text-sm text-gray-600'>Kabul Afghanistan</p>
                                </div>

                                {/* phone number  */}
                                <div className='flex gap-2 items-center'>
                                    <PiPhoneThin className='text-orange-500' />
                                    <p className='text-sm text-gray-600'>+93 798762319</p>
                                </div>

                                {/* email address  */}
                                <div className='flex gap-2 items-center'>
                                    <HiOutlineMail className='text-orange-500' />
                                    <p className='text-sm text-gray-600'>b.hakimi@gmail.com</p>
                                </div>


                            </div>

                        </div>
                    </div>

                    {/* skills */}
                    <div className=''>

                        {/* icon and skills  */}
                        <div className='flex gap-2 items-center'>

                            {/* icon  */}
                            <div className='p-2 rounded-full border-2 text-gray-400 border-100'>
                                <GiSkills />
                            </div>
                            <p className='w-full border-b-2 pb-1 text-orange-400 font-semibold border-gray-200'>Skills</p>
                        </div>
                        <div className='mt-4 grid grid-cols-2 gap-x-8 gap-y-6'>

                            {/* skill 1 */}
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <PiFileHtmlFill className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                                    <div className='flex flex-col'>
                                        <h1 className='font-semibold uppercase text-orange-500'>Html</h1>
                                        <p className='text-orange-500 text-xs font-semibold'>expert in html5</p>
                                    </div>
                                </div>

                                <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                                    <div className='absolute top-0 left-0 w-[98%] h-full bg-orange-500 '>

                                    </div>
                                </div>
                            </div>

                            {/* skill 2 */}
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <FaCss3Alt className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                                    <div className='flex flex-col'>
                                        <h1 className='font-semibold uppercase text-orange-500'>css</h1>
                                        <p className='text-orange-500 font-semibold text-xs'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>

                                <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                                    <div className='absolute top-0 left-0 w-[95%] h-full bg-orange-500 '>

                                    </div>
                                </div>
                            </div>

                            {/* skill 3 */}
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <DiJavascript1 className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                                    <div className='flex flex-col'>
                                        <h1 className='font-semibold text-orange-500'>JavaScript</h1>
                                        <p className='text-orange-500 font-semibold text-xs'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>

                                <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                                    <div className='absolute top-0 left-0 w-[85%] h-full bg-orange-500 '>

                                    </div>
                                </div>
                            </div>

                            {/* skill 4 */}
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <RiReactjsLine className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                                    <div className='flex flex-col'>
                                        <h1 className='font-semibold text-orange-500'>React JS</h1>
                                        <p className='text-orange-500 font-semibold text-xs'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>

                                <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                                    <div className='absolute top-0 left-0 w-[85%] h-full bg-orange-500 '>

                                    </div>
                                </div>
                            </div>

                            {/* skill 5 */}
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <SiTailwindcss className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                                    <div className='flex flex-col'>
                                        <h1 className='font-semibold text-orange-500'>Tailwind CSS</h1>
                                        <p className='text-orange-500 font-semibold text-xs'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>

                                <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                                    <div className='absolute top-0 left-0 w-[95%] h-full bg-orange-500 '>

                                    </div>
                                </div>
                            </div>

                            {/* skill 6 */}
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <TbSeo className='p-2 w-10 h-10 rounded-sm bg-orange-500 text-white' />
                                    <div className='flex flex-col'>
                                        <h1 className='font-semibold text-orange-500'>SEO</h1>
                                        <p className='text-orange-500 font-semibold text-xs'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>

                                <div className='h-3 w-full rounded-sm border-2 bg-white border-orange-500 overflow-hidden relative'>
                                    <div className='absolute top-0 left-0 w-[90%] h-full bg-orange-500 '>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* portfolio */}
                    <div className=''>

                        {/* icon and text  */}
                        <div className='flex gap-2 items-center'>

                            {/* icon  */}
                            <div className='p-2 rounded-full border-2 text-gray-400 border-100'>
                                <TfiGallery />
                            </div>
                            <p className='w-full border-b-2 pb-1 text-orange-400 font-semibold border-gray-200'>Portfolio</p>
                        </div>

                        <div className='mt-4 grid grid-cols-3 gap-4'>
                            <img src="media/projects/1.jpg" className='w-full h-40 object-cover' />
                            <img src="media/projects/2.jpg" className='w-full h-40 object-cover' />
                            <img src="media/projects/3.jpg" className='w-full h-40 object-cover' />
                            <img src="media/projects/2.jpg" className='w-full h-40 object-cover' />
                            <img src="media/projects/3.jpg" className='w-full h-40 object-cover' />
                            <img src="media/projects/1.jpg" className='w-full h-40 object-cover' />

                        </div>
                    </div>

                    {/* get in touch */}
                    <div className=''>

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
                                <div className='w-full px-2 py-[6px] bg-orange-100 rounded-md flex gap-1 items-center'>
                                    <FaUser className='text-gray-500' />
                                    <input type="text" placeholder='Name' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                                </div>

                                {/* email  */}
                                <div className='w-full px-2 py-[6px] bg-orange-100 rounded-md flex gap-1 items-center'>
                                    <MdEmail className='text-gray-500' />
                                    <input type="text" placeholder='Email' className='w-full h-full text-gray-600 text-sm bg-transparent focus:outline-none' />
                                </div>

                            </div>

                            {/* message  */}
                            <div className='w-full px-2 py-[6px] bg-orange-100 rounded-md'>
                                <textarea type="text" placeholder='Message' className='w-full h-28 text-gray-600 text-sm bg-transparent focus:outline-none' />
                            </div>
                            <input type="submit" value='Send Message' className='text-white w-full text-center py-[6px] bg-[#e87a35] rounded-md hover:cursor-pointer hover:bg-orange-600 transition-all duration-150' />
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}
