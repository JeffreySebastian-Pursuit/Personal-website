import "../Styles/Homepage.css";
import { NavLink } from "react-router-dom";
import Darkmode from "./Darkmode";
const Homepage = () => {
  return (
    <div>
   <nav id="nav" className="navbar navbar-expand-xl navbar-dark bg-dark">
        <NavLink to="/" id="navlink" className="nav-link active" >
          Exit
        </NavLink>
        <NavLink to="/home" id="navlink" className="nav-link active" >
          Home
        </NavLink>
        <NavLink to="/skills" id="navlink" className="nav-link active" >
          Skills
        </NavLink>
        <NavLink to="/contact" id="navlink" className="nav-link active" >
          Contact
        </NavLink>
        <NavLink to="/projects" id="navlink" className="nav-link active" >
          Projects
        </NavLink>
        <Darkmode />
      </nav>
      <div id="homepage">
        <h1 id="greetings">Welcome to my page!</h1>
      </div>
    </div>
  );
};

export default Homepage;
