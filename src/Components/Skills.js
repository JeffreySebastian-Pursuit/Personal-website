import { useState, useEffect } from "react";
import '../Styles/Skills.css'

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
  const selectOption = skills.map((skill) => (
    <option value={skill} key={skill}>
      {skill}
    </option>
  ));
  return (
    <div>
      <div className="row mb-3">
        <select
          value={skill}
          onChange={handleChange}
          className="select"
        >
          <option value="" disabled selected>
            {" "}
            Select Skills
          </option>
          {selectOption}
        </select>
      </div>
      <div className="text" >
        {texts.map((text) => {
          return <p>{text}</p>;
        })}
      </div>
      <div className="images">
        {images.map((image, i) => {
          return (
            <div id="image">
              <i className={image} key={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

// return <div id="image">{ image.isAnIcon ? <i> : <img> }</div>;
