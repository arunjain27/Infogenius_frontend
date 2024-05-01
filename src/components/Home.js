import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer.js'
import Description from './Description.js';
import {ThreeDots} from 'react-loader-spinner';
const Home = () => {
  const [img, setImg] = useState("");
  const [text, setText] = useState(""); // For storing text input
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); 
 const [displaytext,setdisplaytext]=useState('none');
 const [displayimage,setdisplayimage]=useState('none'); 
 const[display,setdisplay]=useState('block'); 
 
     
 
 function aboutdisplay(value){

  if(value=="text")
 {
       setdisplaytext("block");
       setdisplayimage("none");
       setdisplay("none");
 }
 else if(value=="image")
 {
       setdisplaytext("none");
       setdisplayimage("block");
       setdisplay("none");
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
    formData.append('image', file)
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImg(response.data);
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
     
      setImg(response.data); // Assuming the response is directly the processed text
    
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
         
             <button style={{backgroundColor:'black' ,color:'white',margin:'5px',display:`${display}`}} onClick={()=>{aboutdisplay("text")}}><h6>analyse text</h6></button>
             <button style={{backgroundColor:'black' ,color:'white',margin:'5px',display:`${display}`}} onClick={()=>{aboutdisplay("image")}}><h6>analyse image</h6></button>
             
             
            <form onSubmit={handleSubmitImage} className='form' style={{display:`${displayimage}`}}>
              <div className='input'>
                <input type="file" onChange={handleFileChange} />
              </div>
              <button type="submit" className='form-button'>Upload Image</button>
            </form>
       <div style={{display:`${displaytext}`}}>       
        <form onSubmit={handleSubmitText} className='form' id='text'  style={{display:'flex',flexDirection:'row'}}>
              <textarea onChange={handleTextChange} placeholder="Enter text to analyze" value={text} />
              <button type="submit" className='form-button' >Analyze Text</button>
            </form>
            </div>

          </div>
        </div>
      </div>
      {loading ? (
        <div className="spinner-container" style={{marginLeft:'46%'}}>
          <ThreeDots
            type="ThreeDots" // You can choose other spinner types
            color="black" // Spinner color
            height={100} // Spinner height
            width={100} // Spinner width
          />
        </div>
      ) : (
       
        <Description data={img} />
      )}
      
     
     <Footer/>
    </>
  );
};

export default Home;
