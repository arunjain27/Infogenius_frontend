// App.js
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import '../css/Signin.css';

function App() {
 
  
 // Inside your React component where you handle sign-in
 const navigate = useNavigate();
const handleSignIn = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/signin', { email, password });
    
    // Check if login was successful
    if (response.data.success) {
     
      
      navigate('/');      
      // ... (redirect the user or perform other actions as needed)
    } else {
    
      
      // ... (handle login failure)
    }
  } catch (error) {
    console.error('Error signing in:', error);
    localStorage.setItem('isLoggedIn', 'false');
  }
};

 
 
 
 
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className='signin'>
      <h2>Sign In</h2>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <form onSubmit={handleSignIn}>
          <MDBInput
            wrapperClass='mb-4'
            label='Email address'
            id='form1'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='form2'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="#!">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4" type="submit">Sign in</MDBBtn>
    
        </form>

        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>

          <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}

export default App;
