import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";
import Darkmode from "./Darkmode";
const NavBar = () => {
  return (
    <div>
      <nav className="d-flex justify-content-around navbar navbar-expand-xl bg-dark">
        <NavLink to="/" id="nav" className="text-white">
          Home
        </NavLink>
        <NavLink to="/skills" id="nav" className="text-white">
          Skills
        </NavLink>
        <NavLink to="/projects" id="nav" className="text-white">
          Projects
        </NavLink>
        <NavLink to="/contact" id="nav" className="text-white">
          Contact
        </NavLink>
        <Darkmode />
      </nav>
    </div>
  );
};

export default NavBar;
