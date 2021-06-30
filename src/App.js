import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <div className="App">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
