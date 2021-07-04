import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Darkmode from "./Components/Drakmode";

function App() {

  return (
    <div className="App">
      <Darkmode />
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
          </Route>
          <Route exact path="/home">
            <Homepage />
          </Route>
          <Route exact path="/about">
            <AboutMe />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
