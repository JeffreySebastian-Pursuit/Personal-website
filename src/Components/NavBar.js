import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";
import Darkmode from "./Darkmode";
const NavBar = () => {
  return (
    <div>
      <nav className="d-flex justify-content-around navbar navbar-expand-xl bg-dark">
        <NavLink to="/" id="nav" className="text-white d-flex align-items-center" >
          Home
        </NavLink>
        <NavLink to="/about" id="nav" className="text-white">
          About
        </NavLink>
        <NavLink to="/skills" id="nav" className="text-white">
          Skills
        </NavLink>
        <NavLink to="/contact" id="nav" className="text-white">
          Contact
        </NavLink>
        <NavLink to="/projects" id="nav" className="text-white">
          Projects
        </NavLink>
        <Darkmode id="button" />
      </nav>
    </div>
  );
};

export default NavBar;
