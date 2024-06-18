import React from 'react';
import Project from '../components/projects';

const projects = [
  {
    title: 'Beefy Stock',
    image: './public/images/beefy stock.png',
    deployedLink: 'https://beefy-stock.onrender.com/',
    repoLink: 'https://github.com/LWSE13/Beefy-Stock'
  },
  {
    title: 'Project 2',
    image: 'path-to-image.jpg',
    deployedLink: 'https://deployed-link.com',
    repoLink: 'https://github.com/your-github/project1'
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
