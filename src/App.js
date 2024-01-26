// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormHandel from "./Components/Formhandel";
import Projectspage from "./Components/Projectspage";
import "./App.css";

const App = () => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return (
    <Router>
      <div className="app-container">
        <div className="top-section">
          <Routes>
            <Route
              path="/"
              element={<FormHandel onAddProject={handleAddProject} />}
            />
            <Route
              path="/projects"
              element={<Projectspage projects={projects} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
