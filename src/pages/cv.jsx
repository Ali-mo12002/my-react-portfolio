import React from 'react';

const Cv = () => {
  return (
    <section style={{ padding: '20px', background: '#f5f5f5', margin: '30px 10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <a href="/cv/Ali Mohamed Ali - cv (3).pdf" download style={{ textDecoration: 'none', color: '#fff', background: '#1976d2', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          Download Resume
        </a>
      </div>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Tech Stack</h2>
      <ul style={{ listStyle: 'none', padding: '0', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <li style={{ background: '#1976d2', color: '#fff', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>HTML</li>
        <li style={{ background: '#1976d2', color: '#fff', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>CSS</li>
        <li style={{ background: '#1976d2', color: '#fff', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>JavaScript</li>
        <li style={{ background: '#1976d2', color: '#fff', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>React</li>
        <li style={{ background: '#1976d2', color: '#fff', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>Node</li>
        <li style={{ background: '#1976d2', color: '#fff', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>MongoDb</li>
        <li style={{ background: '#1976d2', color: '#fff', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>postgres</li>
        <li style={{ background: '#1976d2', color: '#fff', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>sequelize</li>
      </ul>
    </section>
  );
};

export default Cv;
