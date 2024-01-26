import "./index.css";
import { Link } from "react-router-dom";
const Mysection = () => {
  return (
    <div className="about">
      <p className="role">UI/UX DESIGNER</p>
      <h1 className="intro">
        Hello,My name is
        <br /> Madelyn Torff
      </h1>
      <p className="description">
        Short text with details about you, what you
        <br /> do or your professional career. You can add
        <br /> more information on the about page.
      </p>
      <div>
        <Link to="/projects">
          <button className="projects-button">Projects</button>
        </Link>
        <button className="linked-button">LinkedIn</button>
      </div>
    </div>
  );
};

export default Mysection;
