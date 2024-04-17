
import './App.css';
import AnimatedCursor from "react-animated-cursor"
import Home from './Pages/Home';

function App() {
  return (
   <div className='w-full'>
    <AnimatedCursor 
    innerSize={8}
    outerSize={35}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    hasBlendMode={true}
    outerStyle={{
      border: '2px solid rgb(235, 137, 52)'
    }}
    
    />
   <Home/>
    
   </div>
  )
}

export default App;
