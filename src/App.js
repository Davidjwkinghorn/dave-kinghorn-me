import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Courses from "./pages/Courses";
import WorkExperience from "./pages/WorkExperience";
import { Row, Col, Container } from "react-bootstrap";
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
                <footer className="footer">
                  <Container>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <h1>Dave Whitman-Kinghorn</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <hr className="solid" />
                      </Col>
                      <Col style={{ textAlign: "center" }}>
                        <Row>
                          <Col>
                            <a href="mailto:davidreact@gmail.com">
                              <i
                                className="social"
                                style={{
                                  background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-gmail-4-240.png`,
                                }}
                              />
                            </a>
                          </Col>
                          <Col>
                            <a href="https://www.linkedin.com/in/davewk/">
                              <i
                                className="social"
                                style={{
                                  background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-linkedin-4-240.png`,
                                }}
                              />
                            </a>
                          </Col>
                          <Col>
                            <a href="https://github.com/Davidjwkinghorn/">
                              <i
                                className="social"
                                style={{
                                  background: `url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-github-1-240.png`,
                                }}
                              />
                            </a>
                          </Col>
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
                      <Col style={{ textAlign: "center" }}>
                        <hr className="solid" />
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col style={{ textAlign: "center" }}>
                        <p>Copyright 2021 David Whitman-Kinghorn</p>
                      </Col>
                    </Row> */}
                    <Row>
                      <Col style={{ textAlign: "center" }}>
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
    );
  }
}
