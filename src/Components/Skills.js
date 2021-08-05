import { useState, useEffect } from "react";
import "../Styles/Skills.css";

const Skills = ({ data }) => {
  const [myData, setMyData] = useState([]);
  const [skill, setSkill] = useState("");
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
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
        <select value={skill} onChange={handleChange} className="select">
          <option value="">
            {" "}
            Select Skills
          </option>
          {selectOption}
        </select>
      </div>
      <div className="text">
        {texts.map((text, i) => {
          return (
            <div key={i}>
              <p >{text}</p>
            </div>
          );
        })}
      </div>
      <div className="images">
        {images.map((image, i) => {
          return (
            <div id="image" key={i}>
              <i className={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

// return <div id="image">{ image.isAnIcon ? <i> : <img> }</div>;
