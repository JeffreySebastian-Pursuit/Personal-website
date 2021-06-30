import "./Homepage.css";
import { NavLink } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/skills" >
          Skills
        </NavLink>
        <NavLink to="/contact" >
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
