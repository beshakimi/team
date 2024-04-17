import React from 'react'
import About from '../Components/About'
import Hero from '../Components/Hero'
import Portfolio from '../Components/Portfolio'
import Services from '../Components/Services'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Blog from '../Components/Blog/Blog'

export default function Home() {
  return (
    <div className='bg-orange-100 bg-opacity-50'>
      <Header />
      <Hero />

      <div className='flex flex-col gap-10 w-[80%] mx-auto mt-10'>
        <About />
        <Portfolio />
        <Services />
        <Blog/>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
