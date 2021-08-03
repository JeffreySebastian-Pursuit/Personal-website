import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";
import Darkmode from "./Darkmode";
const NavBar = () => {
  return (
    <div>
      <nav className="d-flex justify-content-around navbar navbar-expand-xl navbar-dark bg-dark">
        <NavLink to="/home" id="nav1" className="text-white d-flex align-items-center" >
          Home
        </NavLink>
        <NavLink to="/about" id="nav2" className="text-white">
          About
        </NavLink>
        <NavLink to="/skills" id="nav3" className="text-white">
          Skills
        </NavLink>
        <NavLink to="/contact" id="nav4" className="text-white">
          Contact
        </NavLink>
        <NavLink to="/projects" id="nav5" className="text-white">
          Projects
        </NavLink>
        <Darkmode id="button"  className= "w-25 "/>
      </nav>
    </div>
  );
};

export default NavBar;
