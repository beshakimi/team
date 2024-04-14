import React from 'react'
import About from '../Components/About'
import Hero from '../Components/Hero'
import Portfolio from '../Components/Portfolio'
import Services from '../Components/Services'
import Contact from '../Components/Contact'

export default function Home() {
  return (
    <div className='bg-[#f6f0ec]'>
        <Hero/>
        <div className='flex flex-col gap-10 w-[80%] mx-auto mt-10'>
            <About/>
            <Portfolio/>
            <Services/>
            <Contact/>

        </div>
    </div>
  )
}
