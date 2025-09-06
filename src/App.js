import { useEffect, useState, Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import IsLoading from './Components/isLoading/IsLoading';

// 🔹 lazy load برای روت‌ها
const Home = lazy(() => import('./Pages/Home'));
const TeamDetails = lazy(() => import('./Pages/TeamDetails'));
const ProjectDetails = lazy(() => import('./Pages/ProjectDetails'));
const PostDetails = lazy(() => import('./Pages/PostDetails'));
const Login = lazy(() => import('./Components/User/Login'));
const SignUp = lazy(() => import('./Components/User/SignUp'));

function App() {
  const [loading, setLoading] = useState(true);

  // فقط برای Splash Loader (بار اول ورود)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  function scrollToAbout() {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToPortfolio() {
    const el = document.getElementById('portfolio');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToServices() {
    const el = document.getElementById('services');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToBlog() {
    const el = document.getElementById('blog');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToContact() {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  // 🔹 فقط بار اول ورود → Splash Loader
  if (loading) {
    return <IsLoading />;
  }

  return (
    <div className="w-full">
      <BrowserRouter>
        <Header
          scrollToAbout={scrollToAbout}
          scrollToPortfolio={scrollToPortfolio}
          scrollToServices={scrollToServices}
          scrollToBlog={scrollToBlog}
          scrollToContact={scrollToContact}
        />

        {/* 🔹 وقتی هر Route آماده نیست → Loader */}
        <Suspense fallback={<IsLoading />}>
          <Routes>
            <Route path="/" element={<Home
              aboutId="about"
              portfolioId="portfolio"
              servicesId="services"
              blogId="blog"
              contactId="contact"
            />} />
            <Route path="/developer/:id" element={<TeamDetails />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </Suspense>

        <Footer
          scrollToAbout={scrollToAbout}
          scrollToPortfolio={scrollToPortfolio}
          scrollToServices={scrollToServices}
          scrollToBlog={scrollToBlog}
          scrollToContact={scrollToContact}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
