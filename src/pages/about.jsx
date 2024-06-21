import React from 'react';
import {FaArrowDown} from 'react-icons/fa'
const AboutMe = () => {
  const ArrowIcon = FaArrowDown;

  return (
    <>
      <section style={{ padding: '20px', background: 'white', margin: '30px 10px', color: '#1976d2', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '6px solid #1976d2' }}>
        <h2 style={{ lineHeight: '1.6', fontSize: '5rem', textAlign: 'center' }}>
          Welcome! I'm thrilled to have you here. Scroll down to get to know more about me.<br/>  <br/>        <ArrowIcon />

        </h2>
      </section>

      <section style={{ padding: '20px', background: 'white', margin: '30px 10px' }}>
        <h2 style={{ marginBottom: '30px', fontSize: '3rem', color: '#1976d2', textAlign: 'center' }}>A bit about myself</h2>
        <p style={{ lineHeight: '1.6', fontSize: '1.5rem', color: '#1976d2' }}>
          Hello there! My name is Ali, and I've been immersing myself in the exciting world of full-stack coding at the University of Birmingham. As a dedicated student nearing the end of my course, I am eagerly anticipating completion by the end of June. Throughout this journey, I've gained proficiency in a diverse range of technologies and frameworks that empower me to develop comprehensive web solutions from front to back end.

          Now, I'm on the lookout for opportunities to apply my skills and knowledge in real-world projects. I'm passionate about giving purpose to what I've learned, and I'm eager to showcase my abilities in practical settings. Whether it's crafting intuitive user interfaces or optimising server-side performance, I'm ready to contribute and grow as a professional in the field of full-stack development.

          If you have any exciting projects or opportunities where I can make an impact, I would love to connect and discuss how I can contribute to your team. Let's build something great together!  <br/><br/>
          Don't forget to check out my projects to see what I've been working on. You'll find a variety of applications that demonstrate my skills and creativity. Your feedback and suggestions are always welcome!
        </p>
      </section>
    </>
  );
};

export default AboutMe;
