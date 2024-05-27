import React, { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import Description from './Description';

const Home = () => {
  const [img, setImg] = useState("");
  const [text, setText] = useState(""); // For storing text input
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [displayText, setDisplayText] = useState('none');
  const [displayImage, setDisplayImage] = useState('none'); 
  const [display, setDisplay] = useState('block'); 
  const [imageUrl, setImageUrl] = useState(""); // To store the image URL
  
  function aboutDisplay(value) {
    if (value === "text") {
      setDisplayText("block");
      setDisplayImage("none");
      setDisplay("none");
    } else if (value === "image") {
      setDisplayText("none");
      setDisplayImage("block");
      setDisplay("none");
    }
  }
 
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmitImage = async (event) => {
    event.preventDefault();
    setLoading(true); 
    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImg(response.data.textContent); // Ensure this matches the backend response
      setImageUrl(response.data.imageUrl);
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
    setLoading(false); 
  };

  const handleSubmitText = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/analyze-text', { text }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setImg(response.data.textContent); // Ensure this matches the backend response
      setImageUrl(""); // Clear the imageUrl if analyzing text
      console.log('Text processed successfully:', response.data);
    } catch (error) {
      console.error('Error processing text:', error);
    }
    setLoading(false); 
  };
  
  return (
    <>
      <div className='html'>
        <div className='head'>
          <div className="App">
            <button style={{backgroundColor: 'black', color: 'white', margin: '5px', display: `${display}`}} onClick={() => { aboutDisplay("text") }}>
              <h6>Analyze Text</h6>
            </button>
            <button style={{backgroundColor: 'black', color: 'white', margin: '5px', display: `${display}`}} onClick={() => { aboutDisplay("image") }}>
              <h6>Analyze Image</h6>
            </button>
            <form onSubmit={handleSubmitImage} className='form' style={{display: `${displayImage}`}}>
              <div className='input'>
                <input type="file" onChange={handleFileChange} />
              </div>
              <button type="submit" className='form-button'>Upload Image</button>
            </form>
            <div style={{display: `${displayText}`}}>
              <form onSubmit={handleSubmitText} className='form' id='text' style={{display: 'flex', flexDirection: 'row'}}>
                <textarea onChange={handleTextChange} placeholder="Enter text to analyze" value={text} />
                <button type="submit" className='form-button'>Analyze Text</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="spinner-container" style={{marginLeft: '46%'}}>
          <ThreeDots
            type="ThreeDots" // You can choose other spinner types
            color="black" // Spinner color
            height={100} // Spinner height
            width={100} // Spinner width
          />
        </div>
      ) : (
        <Description data={img} imageUrl={imageUrl} />
      )}
    </>
  );
};

export default Home;
