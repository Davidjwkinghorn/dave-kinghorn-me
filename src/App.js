import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import WorkHistory from "./pages/WorkHistory";

import {ParallaxProvider} from "react-scroll-parallax";
import { IconContext } from "react-icons";
import { Row, Col, Container } from 'react-bootstrap';

export default class App extends Component {
    render() {
        return (
            <ParallaxProvider>
                <IconContext.Provider value={{ color: "grey", className: "global-icon" }}>
                    <Router>
                        <div className="App">
                            <div><NavBar/></div>
                            <div>
                                <Route exact path={"/"} component={HomePage}/>
                                <Route path={"/ContactMe"} component={ContactMe}/>
                                <Route path={"/Projects"} component={Projects}/>
                                <Route path={"/Publications"} component={Publications}/>
                                <Route path={"/WorkHistory"} component={WorkHistory}/>
                            </div>
                            <div class="d-flex flex-column">
                                <footer class="footer">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <h1>Site map</h1>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Col 1</p>
                                            </Col>
                                            <Col>
                                                <p>Col 1</p>
                                            </Col>
                                            <Col>
                                                <p>Col 1</p>
                                            </Col>
                                            <Col>
                                                <p>Col 1</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Social media Links</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h1>Dave Whitman-Kinghorn</h1>
                                            </Col>
                                        </Row>
                                        {/* <Row>
                                            <Col>
                                                <p>Copyright 2021 David Whitman-Kinghorn</p>
                                            </Col>
                                        </Row> */}
                                        <Row>
                                            <Col>
                                                <p>Credits</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </footer>
                            </div>
                        </div>
                    </Router>
                </IconContext.Provider>
            </ParallaxProvider>
        )
    }
}
