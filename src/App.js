import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Courses from "./pages/Courses";
import WorkExperience from "./pages/WorkExperience";
import { ParallaxProvider } from "react-scroll-parallax";
import { IconContext } from "react-icons";
import "./App.scss";


export default class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <IconContext.Provider
          value={{ color: "grey", className: "global-icon" }}
        >
          <Router>
            <div className="App">
              <div>
                <NavBar />
              </div>
              <div style={{marginTop: "50px", zIndex: "1"}}>
                <Route exact path={"/"} component={HomePage} />
                <Route path={"/WorkExperience"} component={WorkExperience} />
                <Route path={"/Courses"} component={Courses} />
                <Route path={"/ContactMe"} component={ContactMe} />
                <Route path={"/Projects"} component={Projects} />
                <Route path={"/Publications"} component={Publications} />
              </div>
              <div className="d-flex flex-column">
                <Footer />
              </div>
            </div>
          </Router>
        </IconContext.Provider>
      </ParallaxProvider>
    );
  }
}
