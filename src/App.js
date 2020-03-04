import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import * as $ from "jquery";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import WorkHistory from "./pages/WorkHistory";
import Player from "./Player";

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const clientId = "521b62d58e624470aa01604e85aa60f7";
// const redirectUri = "http://kinghorn.me";
const redirectUri = "http://localhost:3000";
const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
];

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

class App extends Component {

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

    componentDidMount() {
        // Set token
        console.log(hash);
        let _token = hash.access_token;
        if (_token) {
            // Set token
            this.setState({
                token: _token
            });
        }
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

    render() {
        return (
            <Router>
                <header className="App-header">
                    {!this.state.token && (
                        <a
                            className="btn btn--loginApp-link"
                            href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                        >
                            Login to Spotify
                        </a>
                    )}
                    {this.state.token && (
                        <Player
                            item={this.state.item}
                            is_playing={this.state.is_playing}
                            progress_ms={this.progress_ms}
                        />
                    )
                    }
                </header>
                <div className="App">
                    <NavBar/>
                    <Route path={process.env.PUBLIC_URL + "#"} component={HomePage} exact/>
                    <Route path={process.env.PUBLIC_URL + "#AboutMe"} component={AboutMe}/>
                    <Route path={process.env.PUBLIC_URL + "#ContactMe"} component={ContactMe}/>
                    <Route path={process.env.PUBLIC_URL + "#Projects"} component={Projects}/>
                    <Route path={process.env.PUBLIC_URL + "#WorkHistory"} component={WorkHistory}/>
                </div>
            </Router>
        )
    }
}

export default App;
