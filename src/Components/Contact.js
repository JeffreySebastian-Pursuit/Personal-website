import { Link, NavLink } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" id="navlink">
          Back
        </NavLink>
        <NavLink to="/home" id="navlink">
          Home
        </NavLink>
        <NavLink to="/skills" id="navlink">
          Skills
        </NavLink>
        <NavLink to="/contact" id="navlink">
          Contact
        </NavLink>
      </nav>
      <div class="Contact-Info">
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
