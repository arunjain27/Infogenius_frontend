// App.js (assuming this is your sign-up component)
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { MDBContainer, MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import '../css/Signin.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Inside your React component where you handle sign-up
  const navigate = useNavigate();
const handleSignUp = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/signup', { name, email, password });
    
    // Check if signup was successful
    if (response.data.success) {
      alert("successfully Sign Up");
      navigate('/');
    
      // ... (redirect the user or perform other actions as needed)
    } else {
      alert("please sign up the correct details");
      // ... (handle signup failure)
    }
  } catch (error) {
    console.error('Error signing up:', error);
    localStorage.setItem('isSignedUp', 'false');
  }
};


  return (
    <div className='signin'>
      <h2>Sign Up</h2>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <form onSubmit={handleSignUp}>
          <MDBInput
            wrapperClass='mb-4'
            label='Name'
            id='form1'
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Email address'
            id='form2'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='form3'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <MDBBtn className="mb-4" type="submit">Sign Up</MDBBtn>
        </form>
        {/* ...rest of your code */}
      </MDBContainer>
    </div>
  );
}

export default App;
