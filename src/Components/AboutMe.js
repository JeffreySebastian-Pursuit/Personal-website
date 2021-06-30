import { NavLink } from "react-router-dom";

const AboutMe = () => {
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
      <div id="Photo-and-Heading">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHmjj1I9EaR7Q/profile-displayphoto-shrink_800_800/0/1603469546218?e=1630540800&v=beta&t=OAg1AX2Xvz93AhG1c9WxxZpERirqhblUSoYIkHNM05Q"
          alt="Jeffrey Sebastian"
          id="MyPhoto"
        />
        <h2 class="Aboutme-heading">About Me</h2>
      </div>
      <div id="AboutMe">
        <p>
          I am a Full Stack Developer at Pursuit, fascinated by creating an
          application that would benefit other people in different countries.
          Back home in the Philippines, people are struggling with pursuing
          their education due to a lack of resources. Therefore, I decided to
          pursue Software Engineering to help the less fortunate get
          jump-started on their careers. <br />
          Through Pursuit, I gained my skills includes HTML, CSS, Javascript,
          Node, Express, React/Redux, PostgreSQL, Sprints, Agile, Code Reviews,
          and Pair Programming. Pursuit, an intensive 12 - month software
          engineering fellowship with a 9% acceptance rate.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
