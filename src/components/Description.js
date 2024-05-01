import React from 'react';
import DOMPurify from 'dompurify';

const Description = ({ data }) => {
  // Replace markdown bold syntax with HTML <strong> tags
  const boldedHtml = data
    .replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>') // Bold for **text** or __text__
    .replace(/\n/g, '<br />'); // Replace newline characters with <br />

  // Sanitize the HTML string with DOMPurify to prevent XSS attacks
  const cleanHtml = DOMPurify.sanitize(boldedHtml);

  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
};

export default Description;
