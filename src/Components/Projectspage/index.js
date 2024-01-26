// ProjectsPage.js
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from "react";
import "./index.css";

const ProjectsPage = ({ projects }) => {
  return (
    <div className="s">
      <h1 className="heading">Projects</h1>

      <div className="projectspage">
        <ul className="container-list">
          {projects.map((project, index) => (
            <li key={index} className="container">
              <div className="project-container">
                <div className="project-details">
                  <div>
                    <h2>{project.projectName}</h2>
                    <p>{project.description}</p>
                    <a
                      href={`http://${project.projectLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>View Project</button>
                    </a>
                  </div>
                </div>

                <img
                  src={project.imageUrl}
                  className="prfile-image"
                  alt="image"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="icons-container">
        <RiInstagramFill className="insta" />
        <FaLinkedin className="insta" />
        <MdEmail className="insta" />
        <p className="copy">Copyright © 2024. All rights reserved</p>
      </div>
    </div>
  );
};

export default ProjectsPage;
