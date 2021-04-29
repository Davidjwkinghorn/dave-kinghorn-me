import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Footer.scss";

class FooterIcon extends React.Component {
  constructor(props) {
    super(props);
    this.href = props.href;
    this.className = props.className;
    this.idcon = props.icon;
  }

  render() {
    return (
      <a href={this.href}>
        <i
          className={this.className}
          style={{
            background: this.icon,
          }}
        />
      </a>
    );
  }
}

// TODO: modularize following
export default class Footer extends Component {
  render() {
    return (
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
                  <FooterIcon
                    href="mailto:davidreact@gmail.com"
                    className="social"
                    icon={`url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-gmail-4-240.png`}
                  />
                </Col>
                <Col>
                  <FooterIcon
                    href="https://www.linkedin.com/in/davewk/"
                    className="social"
                    icon={`url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-linkedin-4-240.png`}
                  />
                </Col>
                <Col>
                  <FooterIcon
                    href="https://github.com/Davidjwkinghorn/"
                    className="social"
                    icon={`url(${process.env.PUBLIC_URL}/assets/icons/iconmonstr-github-1-240.png`}
                  />
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
    );
  }
}
