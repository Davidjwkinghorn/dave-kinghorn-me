import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const NavBar = () => (
    <Navbar className="NavBar" bg="dark" variant="dark" expand="lg" sticky={"top"} >
        <Navbar.Brand href="/">Dave Whitman-Kinghorn</Navbar.Brand>
        <Nav className="nav">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="AboutMe">About Me</Nav.Link>
            <Nav.Link href="WorkHistory">Work History</Nav.Link>
            <Nav.Link href="Projects">Projects</Nav.Link>
            <Nav.Link href="ContactMe">Contact Me</Nav.Link>
        </Nav>
    </Navbar>
);

export default NavBar;