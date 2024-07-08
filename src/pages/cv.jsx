import React from 'react';

const Cv = () => {
  return (
    <section style={{ padding: '20px', background: 'white', margin: '30px 10px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <a href="/cv/Ali Mohamed Ali - cv (6).pdf" download style={{ textDecoration: 'none', color: '#1976d2', background: 'white', padding: '10px 20px', border: '2px solid #1976d2', borderRadius: '4px' }}>
          Download my CV
        </a>
      </div>
      <h2 style={{ textAlign: 'center', color: '#1976d2', marginBottom: '20px' }}>Tech Stack</h2>
      <ul style={{ listStyle: 'none', padding: '0', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <li style={{ color: '#1976d2', background: 'white', padding: '10px 20px', border: '2px solid #1976d2', borderRadius: '4px' }}>HTML</li>
        <li style={{ color: '#1976d2', background: 'white', padding: '10px 20px', border: '2px solid #1976d2', borderRadius: '4px' }}>CSS</li>
        <li style={{ color: '#1976d2', background: 'white', padding: '10px 20px', border: '2px solid #1976d2', borderRadius: '4px' }}>JavaScript</li>
        <li style={{ color: '#1976d2', background: 'white', padding: '10px 20px', border: '2px solid #1976d2', borderRadius: '4px' }}>React</li>
        <li style={{ color: '#1976d2', background: 'white', padding: '10px 20px', border: '2px solid #1976d2', borderRadius: '4px' }}>Node</li>
        <li style={{ color: '#1976d2', background: 'white', padding: '10px 20px', border: '2px solid #1976d2', borderRadius: '4px' }}>MongoDb</li>
        <li style={{ color: '#1976d2', background: 'white', padding: '10px 20px', border: '2px solid #1976d2', borderRadius: '4px' }}>Postgres</li>
        <li style={{ color: '#1976d2', background: 'white', padding: '10px 20px', border: '2px solid #1976d2', borderRadius: '4px' }}>Sequelize</li>
      </ul>
    </section>
  );
};

export default Cv;
