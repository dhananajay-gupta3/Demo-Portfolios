import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';
import More from './Components/More';
import Moreme from './Components/Moreme';
import Edu from './Components/Edu';


function App() {
 
 
  return (
    <div >
    <BrowserRouter>
   <Navbar/>
    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} >
    <Route path='more' element={<More/>}/>
     <Route path='moreme' element={<Moreme/>}/>
     <Route path='edu' element={<Edu/>}/>
    
    </Route>
    <Route path='/contact' element={<Contact/>}/ >
    
     
    
    </Routes>
    </BrowserRouter>
  
     

     
    </div>
  );
}

export default App;
