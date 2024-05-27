import React, { useState } from 'react';
import axios from 'axios';

import '../App.css'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signup', { name, email, password });

      // Check if signup was successful
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // Redirect the user to home page
        window.location.href = '/';
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Error signing up. Please try again later.');
    }
  };

  return (
    <div className="Form-container">
      <div className="sub-form-container">
        <h1 className="login-heading">New Register</h1>
        <form onSubmit={handleSignUp}>
        <label  style={{color:'grey', fontSize:'1rem' ,marginTop:'10px'}}>Name</label>
          <input
          style={{width:'100%',height:'35px',marginTop:'5px'}}
            type="text"
            id="name"
            name="name"
            label="Name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
         <label  style={{color:'grey', fontSize:'1rem' ,marginTop:'10px'}}>Email address</label>
          <input
          style={{width:'100%',height:'35px',marginTop:'5px'}}
            type="email"
            id="email"
            name="email"
            label="Email Address"
            placeholder="me@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        <label  style={{color:'grey', fontSize:'1rem' ,marginTop:'10px'}}>Password</label>
          <input
          style={{width:'100%',height:'35px',marginTop:'5px'}}
            type="password"
            id="password"
            name="password"
            label="Password"
            placeholder="••••••••••"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
