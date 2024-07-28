import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { TfiGallery } from "react-icons/tfi";
import { useParams } from 'react-router-dom';


export default function Portfolio() {
    const [Portfolioes, setPortfolio] = useState([]);
    const {id} = useParams();
    const ImageUrl = 'http://127.0.0.1:8000/';
    const Url = `http://127.0.0.1:8000/developers/${id}/projects`;
  
    useEffect(()=>{
        axios.get(Url)
        .then((res) =>{
            setPortfolio(res.data);
        })
    }, [])

    return (

        <div className=''>

            {/* icon and text  */}
            <div className='flex gap-2 items-center'>

                {/* icon  */}
                <div className='p-1 md:p-2 rounded-full border-2 text-gray-400 border-100'>
                    <TfiGallery className='text-xs md:text-base' />
                </div>
                <p className='w-full border-b md:border-b-2 pb-1 text-orange-400 text-xs md:text-base font-semibold border-gray-200'>Portfolio</p>
            </div>

            <div className='mt-4 grid grid-cols-4 md:grid-cols-3 gap-2 md:gap-4'>
                {Portfolioes.map(portfolio =>(
                    <Link onClick={()=> window.scrollTo(0,0)} to={`/project/${portfolio.id}`} className='w-full h-16 sm:20 md:h-40 overflow-hidden'>
                        <img src={`${ImageUrl}${portfolio.image}`} className='w-full h-full object-cover hover:scale-105 hover:cursor-pointer ease-in duration-200' />

                    </Link>
                ))

                }
                

            </div>
        </div>
    )
}
