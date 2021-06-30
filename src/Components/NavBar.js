import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/home" id="nav1">
        Home
      </NavLink>
      <NavLink to="/about" id="nav2">
        About
      </NavLink>
      <NavLink to="/skills" id="nav3">
        Skills
      </NavLink>
      <NavLink to="/contact" id="nav4">
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
