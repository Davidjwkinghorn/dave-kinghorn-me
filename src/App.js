import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import ContectMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import WorkHistory from "./pages/WorkHistory";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/AboutMe" component={AboutMe} />
                    <Route path="/ContectMe" component={ContectMe} />
                    <Route path="/Projects" component={Projects} />
                    <Route path="/WorkHistory" component={WorkHistory} />
                </div>
            </Router>
        )
    }
}

export default App;
