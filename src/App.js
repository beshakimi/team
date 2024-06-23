
import './App.css';
import AnimatedCursor from "react-animated-cursor"
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import ForgetPassword from './Components/User/ForgetPassword';
import TeamDetails from './Pages/TeamDetails';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProjectDetails from './Pages/ProjectDetails';
import { ImOpt } from 'react-icons/im';
import PostDetails from './Pages/PostDetails';

function App() {

  function scrollToAbout() {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function scrollToPortfolio() {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


  function scrollToServices() {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function scrollToBlog() {
    const blogElement = document.getElementById('blog');
    if (blogElement) {
      blogElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function scrollToContact() {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <div className='w-full'>
      {/* <AnimatedCursor 
    innerSize={8}
    outerSize={35}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    outerStyle={{
      border: '2px solid rgb(235, 137, 52)'
    }}
    /> */}


      <BrowserRouter>
        <Header
          scrollToAbout={scrollToAbout}
          scrollToPortfolio={scrollToPortfolio}
          scrollToServices={scrollToServices}
          scrollToBlog={scrollToBlog}
          scrollToContact={scrollToContact}
        />
        <Routes>
          <Route path='/' element={<Home
            aboutId='about'
            portfolioId='portfolio'
            servicesId='services'
            blogId='blog'
            contactId='contact'

          />} />
          <Route path='/developer/:id' element={<TeamDetails />} />
          <Route path='/project/:id' element={<ProjectDetails />} />
          <Route path='/post/:id' element={<PostDetails />} />
        </Routes>
        <Footer
          scrollToAbout={scrollToAbout}
          scrollToPortfolio={scrollToPortfolio}
          scrollToServices={scrollToServices}
          scrollToBlog={scrollToBlog}
          scrollToContact={scrollToContact}
        />
      </BrowserRouter>


    </div>
  )
}

export default App;
