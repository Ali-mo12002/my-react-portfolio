import React from 'react';

const Project = ({ title, image, deployedLink, repoLink, description }) => {
  return (
    <div className="project">
      {/* Image on the left side */}
      <div style={{ flex: '1 1 50%', position: 'relative' }}>
        <img src={image} alt={title} />
        <div className="description-overlay">
          <p>{description}</p>
        </div>
      </div>

      {/* Text content on the right side */}
      <div className="text-container" style={{ flex: '1 1 50%' }}>
        <h3 style={{ margin: '0 0 20px 0', color:'white' }}>{title}</h3>
        <p>
          <a href={deployedLink} style={{ marginRight: '20px', padding:'4px', color: 'white', textDecoration: 'none'}}>Try it out</a>
          <a href={repoLink} style={{ color: 'white', padding:'4px', textDecoration: 'none'}}>GitHub Repo</a>
        </p>
      </div>
    </div>
  );
};

export default Project;
