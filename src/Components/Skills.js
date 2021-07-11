import Darkmode from "./Darkmode";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Skills = ({ data }) => {
  const [myData, setMyData] = useState([]);
  const [skill, setSkill] = useState("");
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  const skills = ["Front-end", "Backend", "Project Management", "All"];

  useEffect(() => {
    const fecthMyData = (e) => {
      try {
        setMyData(data);
      } catch (error) {
        console.log(error);
        setMyData([]);
      }
    };
    fecthMyData();
  }, [data]);

  const handleChange = (e) => {
      setImages([]);
      setTexts([]);
      const target = e.target.value;
      for (let i = 0; i < myData.length; i++) {
          if (myData[i].name === target) {
              setImages((prevImg) => [myData[i].image, ...prevImg]);
              setTexts((prevText) => [myData[i].text, ...prevText]);
            }
        }
    setSkill(e.target.value);
  };

  const selectOption = skills.map((skill) => (
    <option value={skill}>{skill}</option>
  ));

  return (
    <div>
      <nav id="nav" className="navbar navbar-expand-xl navbar-dark bg-dark">
        <NavLink to="/" id="navlink" className="nav-link active">
          Exit
        </NavLink>
        <NavLink to="/home" id="navlink" className="nav-link active">
          Home
        </NavLink>
        <NavLink to="/skills" id="navlink" className="nav-link active">
          Skills
        </NavLink>
        <NavLink to="/contact" id="navlink" className="nav-link active">
          Contact
        </NavLink>
        <NavLink to="/projects" id="navlink" className="nav-link active">
          Projects
        </NavLink>
        <Darkmode />
      </nav>
      <select value={skill} onChange={handleChange}>
        <option value="" disabled selected>
          {" "}
          Select Skills
        </option>
        {selectOption}
      </select>
      <div>
        {images.map((image) => {
          return <img src={image} alt="skill" />;
        })}
        {texts.map((text) => {
          return <h3>{text}</h3>;
        })}
      </div>
    </div>
  );
};

export default Skills;
