import { useState } from "react";
import "../Styles/Darkmode.css";

const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    setIsDarkMode(!isDarkMode);
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <button  className="btn-outline-dark d-flex flex-row-reverse"
      onClick={(e) => switchTheme(e)}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default Darkmode;
