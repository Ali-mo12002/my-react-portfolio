import React from 'react';

const Resume = () => {
  return (
    <section>
      <a href="path-to-resume.pdf" download>Download Resume</a>
      <h2>Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;
