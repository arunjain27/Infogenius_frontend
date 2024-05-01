import React, { useState } from 'react';
import axios from 'axios';
import FruitsVegetable from './JsonData/FruitsVegetable.json'
import { Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import '../src/css/App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Signin from'./components/Signin'
import Signup from'./components/Signup'
function App() {
   
   
        return (
    <>
      
       <Navbar/> 
         <Routes>
         <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />}  />
        <Route path="/signup" element={<Signup />} />
        
        {/* Define more routes as needed */}
        </Routes> 
 
  
</>
  
);
}

export default App;
