import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css"

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/home" id="nav1" class="nav">
        Home
      </NavLink>
      <NavLink to="/about" id="nav2" class="nav">
        About
      </NavLink>
      <NavLink to="/skills" id="nav3" class="nav">
        Skills
      </NavLink>
      <NavLink to="/contact" id="nav4" class="nav">
        Contact
      </NavLink>
      <NavLink to="/project" id="nav5" class="nav">
        Project
      </NavLink>
    </nav>
  );
};

export default NavBar;
