import React from 'react';
import Project from '../components/projects';

const projects = [
  {
    title: 'Move Easy - Group Project',
    image: '/images/moveeasy.png',
    deployedLink: 'https://move-easy-h1t1.onrender.com/',
    repoLink: 'https://github.com/Sahanaroy1/Move_Easy',
    description: 'https://github.com/Sahanaroy1/Move_Easy',
    technologies: ['html', 'node', 'react','javascript', 'express', 'mongoDb','css', 'webpack' ]

  },
  {
    title: 'Beefy Stock - Group Project',
    image: '/images/beefy stock.png',
    deployedLink: 'https://beefy-stock.onrender.com/',
    repoLink: 'https://github.com/LWSE13/Beefy-Stock',
    description: 'Introducing our all-in-one solution for easy inventory management. Track, manage and optimise your inventory effortlessly. Whether you’re a small business or a large company, our website saves you time, money and stress. Our team created beefy stock to appeal to influencers, dropshippers and side hustlers as an attractive and more mainstream way of handling your inventory. A large part of our product was branding and we felt as if we had to get this right to appeal to our audience',
    technologies: ['html', 'node', 'javascript', 'sequelize', 'postgres','css', 'handlebars']

  },
  {
    title: 'Carnival Monkey - Group Project',
    image: '/images/cm2.png',
    deployedLink: 'https://lwse13.github.io/Carnival-Monkey/',
    repoLink: 'https://github.com/LWSE13/Carnival-Monkey',
    description: 'Our team project, Carnival Monkey was designed to solve the problem of uncertainty and repetitiveness whilst planning your night out. Simply enter your city into the search bar and let us do the work by reccomending local events ranging from comedy shows to concerts. We wanted to make this project in order to gain experience in producing a project as a team which was probably also the hardest part of this project as before this we were all solo developers so delegating tasks and working without bumping into one another was an obstacle we had to navigate. We used the google maps API and the ticketmaster API to bring this vision to fuition ',
    technologies: ['html', 'javascript','css']
  },
  {
    title: 'Tech Blog',
    image: '/images/tech blog.png',
    deployedLink: 'https://tech-blog-llix.onrender.com/',
    repoLink: 'https://github.com/Ali-mo12002/Tech-blog',
    description: 'A Tech Blog create for users to share and interact with posts created by like minded individuals.',
    technologies: ['html', 'node', 'javascript', 'sequelize', 'postgres','css', 'handlebars']
  },
  {
    title: 'Greatest-Text-Editor',
    image: '/images/Greatest text editor.png',
    deployedLink: 'https://text-editor-747g.onrender.com/',
    repoLink: 'https://github.com/Ali-mo12002/Greatest-Text-Editor',
    description: 'An text editor that saves your progress each time you click off the app. It also allows user to run offline. It can also be installed as a web app.',
    technologies: ['html', 'node', 'javascript', 'webpack', 'mongoDb','css', '']
  },
  {
    title: 'Social media backend',
    image: '/images/Socialmedia.png',
    deployedLink: '',
    repoLink: 'https://github.com/Ali-mo12002/Greatest-Text-Editor',
    description: 'This is a RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. ',
    technologies: ['node', 'javascript','mongoDb']
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
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default Portfolio;
