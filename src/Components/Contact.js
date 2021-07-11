import { Link, NavLink } from "react-router-dom";
import Darkmode from "./Darkmode";
const Contact = () => {
  return (
    <div>
      <nav id="nav" className="navbar navbar-expand-xl navbar-dark bg-dark">
        <NavLink to="/" id="navlink" className="nav-link active">
          Exit
        </NavLink>
        <NavLink to="/home" id="navlink" className="nav-link active">
          Home
        </NavLink>
        <NavLink to="/skills" id="navlink" className="nav-link active">
          Skills
        </NavLink>
        <NavLink to="/contact" id="navlink" className="nav-link active">
          Contact
        </NavLink>
        <NavLink to="/projects" id="navlink" className="nav-link active">
          Projects
        </NavLink>
        <Darkmode />
      </nav>
      <div className="Contact-Info">
        <h1>Contact Information</h1>
        <p id="email">
          Feel free to send me an
          <a href="mailto:jeffreysebastian@pursuit.org">email</a>!
        </p>
        <p id="github">
          You can also check my
          <Link
            href="https://github.com/JeffreySebastian-Pursuit?tab=repositories"
            target="_blank"
          >
            GitHub
          </Link>
          .
        </p>
        <p id="linkedin">
          I also invite you to connect with me on
          <Link
            href="https://www.linkedin.com/in/jeffrey-sebastian/"
            target="_blank"
          >
            LinkedIn
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
