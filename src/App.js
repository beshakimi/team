
import './App.css';
import AnimatedCursor from "react-animated-cursor"
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import ForgetPassword from './Components/User/ForgetPassword';

function App() {
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
    <Routes> 
      <Route path='/' element={ <Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signUp' element={<SignUp/>} />
      <Route path='/forgetPassword' element={<ForgetPassword/>} />
    </Routes>
  </BrowserRouter>
  
    
   </div>
  )
}

export default App;
