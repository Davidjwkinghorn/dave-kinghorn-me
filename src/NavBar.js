import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavBar.scss";

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        className="navbar"
        bg="dark"
        variant="dark"
        expand="lg"
        style={{"position": "fixed", "top": "0", "width": "100%", zIndex: "2"}}
      >
        <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>
          Dave Whitman-Kinghorn
        </Navbar.Brand>
        <Nav>
          <Nav.Link href={process.env.PUBLIC_URL + "/"}>Home</Nav.Link>
          <Nav.Link href={process.env.PUBLIC_URL + "/WorkExperience"}>Work Experience</Nav.Link>
          {/*<Nav.Link href={process.env.PUBLIC_URL + "/Projects"}>Projects</Nav.Link>*/}
          {/*<Nav.Link href={process.env.PUBLIC_URL + "/Publications"}>Publications</Nav.Link>*/}
          <Nav.Link href={process.env.PUBLIC_URL + "/Courses"}>
            Courses
          </Nav.Link>
          <Nav.Link href={"https://www.linkedin.com/in/davewk/"}
          target="_blank"
          rel="noopener noreferrer"
          >
            LinkedIn
          </Nav.Link>
          <Nav.Link href={"https://github.com/Davidjwkinghorn"}
          target="_blank"
          rel="noopener noreferrer"
          >
            GitHub
          </Nav.Link>
          <Nav.Link
            href={
              process.env.PUBLIC_URL +
              "/assets/documents/Dave_Whitman-Kinghorn_SE_Resume_1.1.2.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Software Engineer Resume
          </Nav.Link>
          <Nav.Link
            href={
              process.env.PUBLIC_URL +
              "/assets/documents/Dave_Whitman-Kinghorn_PM_Resume_1.0.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Product Manager Resume
          </Nav.Link>
          {/*<Nav.Link href={process.env.PUBLIC_URL + "/ContactMe"}>Contact Me</Nav.Link>*/}
        </Nav>
      </Navbar>
    );
  }
}
