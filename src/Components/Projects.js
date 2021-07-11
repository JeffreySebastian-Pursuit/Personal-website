import "../Styles/Project.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Darkmode from "./Darkmode";
import Image1 from "../Images/text-adventurePart1.png";
import Image2 from "../Images/text-adventurePart2.png";
import Image3 from "../Images/text-adventurePart3.png";
import Image4 from "../Images/text-adventurePart4.png";
import Image5 from "../Images/text-adventurePart5.png";
import Image6 from "../Images/text-adventurePart6.png";
import Image7 from "../Images/text-adventurePart7.png";
import Snowman1 from "../Images/snowmanProjectStart.png";
import Snowman2 from "../Images/snowmanProjectPreview.png";
import Snowman3 from "../Images/snowman-project-guessing-word.png";
import Snowman4 from "../Images/snowman-project-game-over.png";
import Snowman5 from "../Images/snowman-project-displayed-guessed-letters.png";

const Projects = () => {
  const [showText, setShowtext] = useState(true);
  const [secondButton, setSecondButton] = useState(true);

  const handleClick = () => {
    debugger;
    setShowtext(!showText);
  };
  const handleSecondButton = () => {
    debugger;
    setSecondButton(!secondButton);
  };
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
      <div className="all">
        <h1 className="Project-Heading">Projects</h1>
        <h2 className="Text-adventure-heading">Text Adventure</h2>
        <button type="button" id="show-text" onClick={handleClick}>
          {showText ? "Hide" : "Show"}
        </button>
        {showText ? (
          <div id="text-adventure">
            <p>
              Text Adventure is an adventure game where a user must go on a
              quest to save the princess and a user will get three attempts on
              each question from the enemy.
            </p>
            <ul>
              <li>Developed Text Adventure game using JavaScript</li>
              <li>Designed the workflow of the project</li>
              <li>
                Implemented 10 opportunities for the user to make decisions
                throughout the game
              </li>
              <li>
                Created a prompt for the user to start and restart the game
              </li>
              <li>
                Created Trello board to tracked and visualized the workflow of
                the project
              </li>
            </ul>
            <br />
            <h4 id="Image">Images</h4>
            <div id="Images-container">
              <img src={Image1} alt="textAdventure" />
              <img src={Image2} alt="textAdventure" />
              <img src={Image3} alt="textAdventure" />
              <img src={Image4} alt="textAdventure" />
              <img src={Image5} alt="textAdventure" />
              <img src={Image6} alt="textAdventure" />
              <img src={Image7} alt="textAdventure" />
            </div>
          </div>
        ) : null}

        <br />
        <h2>Snowman</h2>
        <button type="button" onClick={handleSecondButton} id="showBtn">
          {secondButton ? "Hide" : "Show"}
        </button>
        {secondButton ? (
          <div id="Snowman-text">
            <p>
              Snowman is a word-guessing game, where a user must guess the
              secret word, but when a player guesses a letter that isn’t part of
              the word a player loses a life or chances to guess the word
            </p>
            <ul>
              <li>Developed Snowman game using JavaScript</li>
              <li>
                Created a word that will be generated on the game that will be
                able for a player to guess
              </li>
              <li>
                Created a message when a user enters right and wrong guesses and
                validated if the user guesses by deducting the remaining guesses
              </li>
              <li>
                Established a prompt to notify the user when they lose or win
                the game
              </li>
              <li>Analyzed the code functionality and issues</li>
            </ul>
            <br />
            <h4 id="Image">Images</h4>
            <div id="Images-container">
              <img src={Snowman1} alt="Snowman" />
              <img src={Snowman2} alt="Snowman" />
              <img src={Snowman3} alt="Snowman" />
              <img src={Snowman4} alt="Snowman" />
              <img src={Snowman5} alt="Snowman" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Projects;