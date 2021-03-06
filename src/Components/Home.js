import "../Styles/Home.css";
const AboutMe = () => {
  return (
    <div>
      <div className="aboutMe">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHmjj1I9EaR7Q/profile-displayphoto-shrink_800_800/0/1603469546218?e=1630540800&v=beta&t=OAg1AX2Xvz93AhG1c9WxxZpERirqhblUSoYIkHNM05Q"
          alt="Jeffrey Sebastian"
          id="MyPhoto"
        />
        <div>
          <div id="AboutMe">
            <h1 className="h2">Welcome to my page!</h1>
          </div>
          <div>
            <p id="about">
              My name is Jeffrey Sebastian, I am a Full Stack Developer at
              Pursuit. I am fascinated by creating an application that would benefit
              other people in different countries. Back home in the Philippines,
              people are struggling with pursuing their education due to a lack
              of resources. Therefore, I decided to pursue Software Engineering
              to help the less fortunate get jump-started on their careers.
              Through Pursuit, I gained my skills includes HTML, CSS,
              Javascript, Node, Express, React/Redux, PostgreSQL, Sprints,
              Agile, Code Reviews, and Pair Programming. Pursuit, an intensive
              12 - month software engineering fellowship with a 9% acceptance
              rate.
            </p>
            <p id="about">
              Apart from my career as a Full Stack Developer, I am an
              experienced financial operation and quality assurance professional
              with a demonstrated history of working in hospitality. Along with
              my expertise, I consider myself to be an innovative, tenacious,
              and accountable professional with highly developed communication
              and interpersonal skills. My professional aspiration is to gain
              new skill sets that apply to future career opportunities. And
              empower other people by giving them the right resources through
              technology.
            </p>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/JeffreySebastian-Pursuit"
        target="_blank"
        rel="noreferrer"
      >
        <i id="aboutIcon" className="devicon-github-original"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/jeffrey-sebastian/"
        target="_blank"
        rel="noreferrer"
      >
        <i id="aboutIcon" className="devicon-linkedin-plain"></i>
      </a>
    </div>
  );
};

export default AboutMe;
