import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink exact="true" to="/" activeclassname="active">About Me</NavLink></li>
        <li><NavLink to="/portfolio" activeclassname="active">Check Out My Portfolio</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">Contact Me</NavLink></li>
        <li><NavLink to="/cv" activeclassname="active">My CV</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
