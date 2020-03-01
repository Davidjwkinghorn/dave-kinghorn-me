import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavBar = () => (
    <Navbar className="NavBar" bg="dark" variant="dark" expand="lg" sticky={"top"}>
        <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>Dave Whitman-Kinghorn</Navbar.Brand>
        <Nav className="nav">
            <Nav.Link href={process.env.PUBLIC_URL + "/"}>Home</Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/AboutMe"}>About Me</Nav.Link>
            <NavDropdown title="Hobbies" id="basic-nav-dropdown" bg="dark" variant="dark">
                <NavDropdown.Item href="/">Guitar</NavDropdown.Item>
                <NavDropdown.Item href="/">Sailing</NavDropdown.Item>
                <NavDropdown title="Drinks" id="basic-nav-dropdown" drop={'right'} bg="dark" variant="dark">
                    <NavDropdown.Item href="/">Coffees</NavDropdown.Item>
                    <NavDropdown.Item href="/">Teas</NavDropdown.Item>
                    <NavDropdown.Item href="/">Wines</NavDropdown.Item>
                    <NavDropdown.Item href="/">Beers</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="/">Dabblings</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={process.env.PUBLIC_URL + "/WorkHistory"}>Work History</Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/Projects"}>Projects</Nav.Link>
            <Nav.Link
                href={process.env.PUBLIC_URL + '/assets/documents/Dave_Whitman-Kinghorn_Resume.pdf'}>Resume</Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/ContactMe"}>Contact Me</Nav.Link>
        </Nav>
    </Navbar>
);

export default NavBar;