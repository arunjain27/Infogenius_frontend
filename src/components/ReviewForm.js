import React, { useState } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit'; // Assuming MDBRating is provided by the library
import axios from 'axios';

export default function ReviewForm() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [sendCopy, setSendCopy] = useState(false);
  const [rating, setRating] = useState(0); // State for rating

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/add-review',{ name, title, message, rating }); // Pass data to backend
      // Clear form fields after submission
      setName('');
      setTitle('');
      setMessage('');
      setSendCopy(false);
      setRating(0);
      alert('Review submitted successfully');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review');
    }
  };

  return (
   
   <form onSubmit={handleSubmit}>
     <h4 style={{textAlign:'center'}}>Review form</h4>
    <label>Name</label>
      <MDBInput id='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4'/>
      <label>Title</label>

      <MDBInput type='text' id='Title' value={title} onChange={(e) => setTitle(e.target.value)} wrapperClass='mb-4' />
      <label>Message</label>

      <MDBInput wrapperClass='mb-4' type='text' textarea id='form4Example3' value={message} onChange={(e) => setMessage(e.target.value)} rows={4}  />
      <label>Rating</label>
      <MDBInput wrapperClass='mb-4' textarea id='form4Example4' value={rating} onChange={(e) => setRating(e.target.value)} rows={4} />
   
      <MDBBtn type='submit' className='mb-4' block>
        Submit
      </MDBBtn>
    </form>
  );
}
