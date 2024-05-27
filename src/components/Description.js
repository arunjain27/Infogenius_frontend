import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

const Description = ({ data, imageUrl }) => {
  const [speaking, setSpeaking] = useState(false);
  const [speechInstance, setSpeechInstance] = useState(null);
  const [chunkIndex, setChunkIndex] = useState(0);
  const [chunks, setChunks] = useState([]);

  let cleanHtml = '';

  if (typeof data === 'string') {
    // Replace markdown bold syntax with HTML <strong> tags
    const boldedHtml = data
      .replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>') // Bold for **text** or __text__
      .replace(/\n/g, '<br />'); // Replace newline characters with <br />

    // Sanitize the HTML string with DOMPurify to prevent XSS attacks
    cleanHtml = DOMPurify.sanitize(boldedHtml);
  }

  useEffect(() => {
    if (typeof data === 'string') {
      const words = data.split(' ');
      const chunkSize = 20; // Adjust the chunk size as needed
      const textChunks = [];

      for (let i = 0; i < words.length; i += chunkSize) {
        textChunks.push(words.slice(i, i + chunkSize).join(' '));
      }

      setChunks(textChunks);
      setChunkIndex(0);
    }
  }, [data]);

  const speak = () => {
    if (chunks.length === 0) return;

    const speech = new SpeechSynthesisUtterance(chunks[chunkIndex]);
    window.speechSynthesis.speak(speech);
    setSpeechInstance(speech);
    setSpeaking(true);

    speech.onend = () => {
      if (chunkIndex < chunks.length - 1) {
        setChunkIndex((prevIndex) => prevIndex + 1);
      } else {
        setSpeaking(false);
      }
    };
  };

  useEffect(() => {
    if (chunkIndex > 0 && speaking) {
      speak();
    }
  }, [chunkIndex, speaking]);

  const stopSpeaking = () => {
    if (speechInstance) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      setChunkIndex(0);
    }
  };

  return (
    <div style={{  backgroundColor: '#6a6478', color: 'white', padding: '20px',fontSize:'1.2rem' }}>
      {imageUrl && (
        <>
          <h2 style={{ fontWeight: 'bold' }}>Uploaded Image</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
          </div>
        </>
      )}
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      <button onClick={speak} disabled={speaking}>
        {speaking ? 'Speaking...' : 'Read Description'}
      </button>
      <button onClick={stopSpeaking} disabled={!speaking}>
        Stop
      </button>
    </div>
  );
};

export default Description;
