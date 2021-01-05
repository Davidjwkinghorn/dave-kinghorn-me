import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Courses from "./pages/Courses";
import WorkHistory from "./pages/WorkHistory";
import {ParallaxProvider} from "react-scroll-parallax";
import { IconContext } from "react-icons";


export default class App extends Component {
    render() {
        return (
            <ParallaxProvider>
                <IconContext.Provider value={{ color: "grey", className: "global-icon" }}>
                    <Router>
                        <div className="App">
                            <NavBar/>
                            <Route exact path={"/"} component={HomePage}/>
                            <Route path={"/ContactMe"} component={ContactMe}/>
                            <Route path={"/Projects"} component={Projects}/>
                            <Route path={"/Publications"} component={Publications}/>
                            <Route path={"/Courses"} component={Courses}/>
                            <Route path={"/WorkHistory"} component={WorkHistory}/>
                        </div>
                    </Router>
                </IconContext.Provider>
            </ParallaxProvider>
        )
    }
}
