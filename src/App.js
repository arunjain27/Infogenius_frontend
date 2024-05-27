import React, { useState } from 'react';
import '../src/App.css'
import { Routes, Route } from 'react-router-dom';
import '../src/css/App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Contact from './components/Contact';
import Home from './components/Home.js';
import Signin from'./components/Signin'
import Signup from'./components/Signup'
import Upload from './components/Upload'
function App() {
 return (
    <>
       <Navbar/> 
         <Routes>
         <Route path="/" element={<Home />}  />
         <Route path="/upload" element={<Upload />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />}  />
        <Route path="/signup" element={<Signup />} />
        
        {/* Define more routes as needed */}
        </Routes> 
         <Footer/>
  
</>
  
);
}

export default App;
