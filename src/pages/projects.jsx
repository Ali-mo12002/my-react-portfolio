import React from 'react';
import Project from '../components/projects';

const projects = [
  {
    title: 'Beefy Stock',
    image: '/images/beefy stock.png',
    deployedLink: 'https://beefy-stock.onrender.com/',
    repoLink: 'https://github.com/LWSE13/Beefy-Stock',
    description: 'An advanced inventory management app that helps you keep track of stock.'
  },
  {
    title: 'Tech Blog',
    image: '/images/tech blog.png',
    deployedLink: 'https://tech-blog-llix.onrender.com/',
    repoLink: 'https://github.com/Ali-mo12002/Tech-blog',
    description: 'A Tech Blog create for users to share and interact with posts created by like minded individuals.'
  },
  
];

const Portfolio = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          repoLink={project.repoLink}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default Portfolio;
