import React, {Component} from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Player from "./Player";
import * as $ from "jquery";
import "./App.css";

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "521b62d58e624470aa01604e85aa60f7";
// const redirectUri = "http://kinghorn.me";
const redirectUri = "http://localhost:3000";
const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
];

// Get the hash of the url
const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});
window.location.hash = "";

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            token: null,
            item: {
                album: {
                    images: [{url: ""}]
                },
                name: "",
                artists: [{name: ""}],
                duration_ms: 0,
            },
            is_playing: "Paused",
            progress_ms: 0
        };
        this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    }

    getCurrentlyPlaying(token) {
        // Make a call using the token
        $.ajax({
            url: "https://api.spotify.com/v1/me/player",
            type: "GET",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            success: (data) => {
                this.setState({
                    item: data.item,
                    is_playing: data.is_playing,
                    progress_ms: data.progress_ms,
                });
            }
        });
    }


    componentDidMount() {
        // Set token
        let _token = hash.access_token;
        if (_token) {
            // Set token
            this.setState({
                token: _token
            });
        }
    }

    render() {
        return (
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
                    <div >
                        {!this.state.token && (
                            <Nav.Link
                                className="btn btn--loginApp-link"
                                href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                            >
                                Login to Spotify
                            </Nav.Link>
                        )}
                        {this.state.token && (
                            <Player
                                item={this.state.item}
                                is_playing={this.state.is_playing}
                                progress_ms={this.progress_ms}
                            />
                        )
                        }
                    </div>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;