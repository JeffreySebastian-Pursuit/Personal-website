import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Data from "./Data/Data";

function App() {
  return (
    <div className="App">
      <Router>
            <NavBar />
        <Switch>
          <Route exact path="/">
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
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/Skills">
            <Skills data={Data}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
