import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";
import Darkmode from "./Darkmode";
const NavBar = () => {
  return (
    <div>
        <Darkmode id="button"  className= "d-flex flex-row-reverse"/>
      <nav>
        <NavLink to="/home" id="nav1" className="navLink">
          Home
        </NavLink>
        <NavLink to="/about" id="nav2" className="navLink">
          About
        </NavLink>
        <NavLink to="/skills" id="nav3" className="navLink">
          Skills
        </NavLink>
        <NavLink to="/contact" id="nav4" className="navLink">
          Contact
        </NavLink>
        <NavLink to="/projects" id="nav5" className="navLink">
          Projects
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
