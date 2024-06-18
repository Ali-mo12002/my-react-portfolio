import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => {
    return (
        <div className="project">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <a href={deployedLink}>Live Demo</a>
            <a href={repoLink}>GitHub Repo</a>
        </div>
    );
};

export default Project;
a