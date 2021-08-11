import { useState, useEffect } from "react";
import "../Styles/Skills.css";

const Skills = ({ data }) => {
  const [myData, setMyData] = useState([]);
  const [skill, setSkill] = useState("");
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  const [showText, setShowText] = useState(false);
  const skills = ["Front-end", "Backend", "All"];

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

  const toggle = () => {
    setShowText(!showText);
  };
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
  const selectOption = skills.map((skill, i) => (
    <option value={skill} key={i}>
      {skill}
    </option>
  ));
  return (
    <div>
      <div className="row mb-3">
        <h1 className="mt-5">Skills</h1>
        <p id="category">
          Choose a category:
          <select value={skill} onChange={handleChange} className="select">
            <option value=""> Select Skills</option>
            {selectOption}
          </select>
        </p>
      </div>

      <div className="images">
        {images.map((image, i) => {
          return (
            <div key={i}>
              <i
                className={image}
                onMouseLeave={toggle}
                onMouseEnter={toggle}
              />
            </div>
          );
        })}
      </div>
      <div className="Skills">
        {showText
          ? texts.map((text, i) => {
              return (
                <div key={i}>
                  <p>{text}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Skills;
