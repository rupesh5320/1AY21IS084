import './index.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Random from './components/Random';
import Prime from './components/Prime';
import Even from './components/Even';
import Fibonacci from './components/Fibonacci';
import NotFound from './components/NotFound';

const App = () => {

 
  return (
    <div className="flex gap-10 ">

      <nav>
        <ul className='flex gap-10 justify-between w-full text-center'>
          <li >
            <NavLink to="/" >Random Numbers</NavLink>
          </li>
          <li>
            <NavLink to="/Prime">Prime Numbers</NavLink>
          </li>
          <li>
            <NavLink to="/Even"> Even Numbers</NavLink>
          </li>
          <li>
            <NavLink to="/Fibonacci">Fibonacci Numbers</NavLink>
          </li>
                        
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Random />}/>
        <Route path="/Prime" element={<Prime />}/>
        <Route path="/Even" element={<Even/>}/>
        <Route path="/Fibonacci" element={<Fibonacci/>}/>
        <Route path="*" element={<NotFound/>}/>
       
      </Routes>


    </div>

  )
};

export default App;
