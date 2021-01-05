import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import './NavBar.scss';


export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar className="nav-bar" bg="dark" variant="dark" expand="lg" sticky={"top"} >
                <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>Dave Whitman-Kinghorn</Navbar.Brand>
                <Nav>
                    <Nav.Link href={process.env.PUBLIC_URL + "/"}>Home</Nav.Link>
                    {/*<Nav.Link href={process.env.PUBLIC_URL + "/WorkHistory"}>Work History</Nav.Link>*/}
                    {/*<Nav.Link href={process.env.PUBLIC_URL + "/Projects"}>Projects</Nav.Link>*/}
                    {/*<Nav.Link href={process.env.PUBLIC_URL + "/Publications"}>Publications</Nav.Link>*/}
                    <Nav.Link href={process.env.PUBLIC_URL + '/Courses'}>Courses</Nav.Link>
                    <Nav.Link href={process.env.PUBLIC_URL + '/assets/documents/Dave_Whitman-Kinghorn_Resume.pdf'}>Resume</Nav.Link>
                    <Nav.Link href={'https://www.linkedin.com/in/davewk/'}>LinkedIn</Nav.Link>
                    <Nav.Link href={'https://github.com/Davidjwkinghorn'}>GitHub</Nav.Link>
                    {/*<Nav.Link href={process.env.PUBLIC_URL + "/ContactMe"}>Contact Me</Nav.Link>*/}
                </Nav>
            </Navbar>
        );
    }
}
