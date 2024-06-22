import React from 'react'
import About from '../Components/About/About'
import Hero from '../Components/Hero'
import Portfolio from '../Components/Portfolio'
import Services from '../Components/Services'
import Contact from '../Components/Contact'
import Blog from '../Components/Blog/Blog'

export default function Home(props) {

  
  return (
    <div className='bg-orange-100 bg-opacity-50'>
      
      <Hero />

      <div className='flex flex-col gap-10 w-[80%] mx-auto mt-10'>
        <About id = {props.aboutId}  />
        <Portfolio id = {props.portfolioId} />
        <Services id = {props.servicesId} />
        <Blog id = {props.blogId}/>
        <Contact id = {props.contactId} />
      </div>
      
    </div>
  )
}
