// FormHandel.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Mysection from "../Mysection/Index";
import "./index.css";

const FormHandel = ({ onAddProject }) => {
  const array = [
    "https://res.cloudinary.com/dufyrxyey/image/upload/v1706169110/pexels-elly-fairytale-3823207_1_jw7keb.png",
    "https://res.cloudinary.com/dufyrxyey/image/upload/v1706169119/Rectangle_7_zsvcbg.png",
    "https://res.cloudinary.com/dufyrxyey/image/upload/v1706169128/Rectangle_7_1_siapgc.png",
  ];

  const getRandomFromArray = (array) => {
    if (!Array.isArray(array) || array.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  const [project, setProject] = useState({
    projectName: "",
    projectLink: "",
    description: "",
    imageUrl: "",
  });

  const randomImageUrl = getRandomFromArray(array);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [id]: value,
      imageUrl: randomImageUrl,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the required fields are filled before submitting
    if (
      project.projectName.trim() === "" ||
      project.projectLink.trim() === ""
    ) {
      // You may want to display an error message or handle this case appropriately
      return;
    }

    // Pass the project data back to the parent component
    onAddProject(project);

    // You may want to reset the form or perform other actions after submission
    setProject({
      projectName: "",
      projectLink: "",
      description: "",
    });
  };

  return (
    <div className="main">
      <Navbar />
      <Mysection />

      <div className="form-container">
        <h1 className="heading">Add Project</h1>
        <hr />
        <form onSubmit={handleSubmit} className="form-control">
          <div className="fields-container">
            <div className="input-fields">
              <label htmlFor="projectName" className="label">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                value={project.projectName}
                onChange={handleChange}
              />
            </div>
            <div className="input-fields">
              <label htmlFor="projectLink" className="label">
                Project Link
              </label>
              <input
                type="text"
                id="projectLink"
                value={project.projectLink}
                onChange={handleChange}
              />
            </div>
            <div className="input-fields">
              <label htmlFor="description" className="label">
                Description
              </label>
              <textarea
                rows="4"
                cols="60"
                id="description"
                value={project.description}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="button-add"
              onClick={() => getRandomFromArray()}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormHandel;
