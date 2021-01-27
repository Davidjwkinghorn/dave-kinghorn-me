import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Courses from "./pages/Courses";
import WorkHistory from "./pages/WorkHistory";

import {ParallaxProvider} from "react-scroll-parallax";
import { IconContext } from "react-icons";
import { Row, Col, Container } from 'react-bootstrap';
import './App.scss';


// class Footer extends Component {
//     renter() {
//         return ;
//     }
// }

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
                                <Route path={"/Courses"} component={Courses}/>
                                <Route path={"/ContactMe"} component={ContactMe}/>
                                <Route path={"/Projects"} component={Projects}/>
                                <Route path={"/Publications"} component={Publications}/>
                                <Route path={"/WorkHistory"} component={WorkHistory}/>
                            </div>
                            <div class="d-flex flex-column">
                                <footer class="footer">
                                    <Container>
                                        <Row>
                                            <Col style={{textAlign: "center"}}>
                                                <h1>Dave Whitman-Kinghorn</h1>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{textAlign: "center"}}>
                                                <hr className="solid"/>
                                            </Col>
                                            <Col style={{textAlign: "center"}}>
                                                <Row >
                                                    <Col><a href="mailto:davidreact@gmail.com?subject=I'd Like to Give You a Job!"><i className="social" 
                                                    style={{background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-gmail-4-240.png`}}/></a></Col>
                                                    <Col><a href="https://www.linkedin.com/in/davewk/"><i className="social" 
                                                    style={{background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-linkedin-4-240.png`}}/></a></Col>
                                                    <Col><a href="https://github.com/Davidjwkinghorn/"><i className="social" 
                                                    style={{background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-github-1-240.png`}}/></a></Col>
                                                    {/* <Col><a href="https://www.facebook.com/DJ.WHitKing/"><i className="social"
                                                    style={{background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-facebook-4-240.png)`}}/></a></Col> */}
                                                    {/* <Col><a href="https://www.instagram.com/kingofhorns/"><i className="social" 
                                                    style={{background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-instagram-14-240.png`}}/></a></Col> */}
                                                    {/* <Col><a href="https://twitter.com/davidwkdjwk/"><i className="social" 
                                                    style={{background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-twitter-4-240.png`}}/></a></Col> */}
                                                    {/* <Col><a href="https://www.vivino.com/users/dave.kinghorn/"><i className="social" 
                                                    style={{background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-reddit-4-240.png`}}/></a></Col> */}
                                                    {/* <Col><a href="https://untappd.com/user/Airc0/"><i className="social" 
                                                    style={{background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-reddit-4-240.png`}}/></a></Col> */}
                                                    {/* <Col><a href="https://www.reddit.com/user/MrRaymondLuxuryYacht/"><i className="social" 
                                                    style={{background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-reddit-4-240.png`}}/></a></Col> */}
                                                </Row>
                                            </Col>
                                            <Col style={{textAlign: "center"}}>
                                            <hr className="solid"/>
                                            </Col>
                                        </Row>
                                        {/* <Row>
                                            <Col style={{textAlign: "center"}}>
                                                <p>Copyright 2021 David Whitman-Kinghorn</p>
                                            </Col>
                                        </Row> */}
                                        <Row>
                                            <Col style={{textAlign: "center"}}>
                                                <p>Email: davidreact@gmail.com</p>
                                                <p>Phone: 339-223-8090</p>
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
