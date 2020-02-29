import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import WorkHistory from "./pages/WorkHistory";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar/>
                    <Route path={process.env.PUBLIC_URL + "/"} component={HomePage} exact/>
                    <Route path={process.env.PUBLIC_URL + "/AboutMe"} component={AboutMe} />
                    <Route path={process.env.PUBLIC_URL + "/ContactMe"} component={ContactMe} />
                    <Route path={process.env.PUBLIC_URL + "/Projects"} component={Projects} />
                    <Route path={process.env.PUBLIC_URL + "/WorkHistory"} component={WorkHistory} />
                </div>
            </Router>
        )
    }
}

export default App;
