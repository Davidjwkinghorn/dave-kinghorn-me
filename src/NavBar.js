import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import './NavBar.css';

const NavBar = () => (
    <Navbar className="NavBar" bg="dark" variant="dark" expand="lg" sticky={"top"} >
        <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>Dave Whitman-Kinghorn</Navbar.Brand>
        <Nav className="nav">
            <Nav.Link href={process.env.PUBLIC_URL + "/"}>Home</Nav.Link>
            {/*<Nav.Link href={process.env.PUBLIC_URL + "/AboutMe"}>About Me</Nav.Link>*/}
            {/*<Nav.Link href={process.env.PUBLIC_URL + "/WorkHistory"}>Work History</Nav.Link>*/}
            {/*<Nav.Link href={process.env.PUBLIC_URL + "/Projects"}>Projects</Nav.Link>*/}
            <Nav.Link href={process.env.PUBLIC_URL + '/assets/documents/Dave_Whitman-Kinghorn_Resume.pdf'}>Resume</Nav.Link>
            {/*<Nav.Link href={process.env.PUBLIC_URL + "/ContactMe"}>Contact Me</Nav.Link>*/}
        </Nav>
    </Navbar>
);

export default NavBar;