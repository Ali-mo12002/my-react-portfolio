import React from 'react';

const Contact = () => {
  return (
    <section style={{ padding: '20px', background: '#1976d2', margin: '30px 10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <h2 style={{ marginBottom: '30px', fontSize: '2rem', color: 'white', textAlign: 'center' }}>How to Get in Touch</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: 'white', marginBottom: '10px' }}>
          <strong>Email:</strong> 
          <a href="mailto:alimohamedali20041@outlook.com" style={{ color: 'white', marginLeft: '5px', textDecoration: 'underline' }}>
            alimohamedali20041@outlook.com
          </a>
        </p>
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: 'white', marginBottom: '10px' }}>
          <strong>Phone Number:</strong> 
          <a href="tel:+447534054056" style={{ color: 'white', marginLeft: '5px', textDecoration: 'underline' }}>
            07534054056
          </a>
        </p>
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: 'white', marginBottom: '10px' }}>
          <strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/ali-m-574056289/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '5px', textDecoration: 'underline' }}>
            https://www.linkedin.com/in/ali-m-574056289/
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
