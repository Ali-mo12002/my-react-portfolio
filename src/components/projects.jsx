import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // Import necessary icons from react-icons
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiPostgresql, SiSequelize, SiHandlebarsdotjs,SiWebpack } from "react-icons/si";

const icons = {
    react: <FaReact />,
    node: <FaNodeJs />,
    mongoDb: <SiMongodb />,
    javascript:<IoLogoJavascript/>,
    postgres: <SiPostgresql/>,
    html: <FaHtml5/>,
    sequelize: <SiSequelize />,
    css: <FaCss3Alt/>,
    handlebars: <SiHandlebarsdotjs/>,
    webpack: <SiWebpack/>
};
const Project = ({ title, image, deployedLink, repoLink, description, technologies  }) => {
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
        <div className="technologies" style={{ marginTop: '20px' }}>
          {technologies.map((tech, index) => (
            <span key={index} style={{ marginRight: '10px', fontSize: '24px' }}>
              {icons[tech]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
