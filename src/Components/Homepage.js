import "../Styles/Homepage.css";
import { NavLink } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <nav >
        <NavLink to="/" id="navlink" >
          Back
        </NavLink>
        <NavLink to="/about" id="navlink">
          About
        </NavLink>
        <NavLink to="/skills"  id="navlink">
          Skills
        </NavLink>
        <NavLink to="/contact"  id="navlink">
          Contact
        </NavLink>
      </nav>
      <div id="homepage">
        <h1 id="greetings">Welcome to my page!</h1>
      </div>
    </div>
  );
};

export default Homepage;
