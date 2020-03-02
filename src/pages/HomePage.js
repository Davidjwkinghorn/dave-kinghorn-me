import React from 'react';
import {Carousel} from "react-bootstrap";
import './HomePage.css';

const HomePage = () => (
    <>
        <div className="home-carousel">
            <Carousel>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        id="carousel-image"
                        src={process.env.PUBLIC_URL + '/assets/images/london.jpg'}
                        alt="London Cityscape at night."
                    />
                    <Carousel.Caption>
                        <h3>Born</h3>
                        <p>in England.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        id="carousel-image"
                        src={process.env.PUBLIC_URL + '/assets/images/lexington1.jpg'}
                        alt="Lexington Massachusetts Depot Square."
                    />
                    <Carousel.Caption>
                        <h3>Raised</h3>
                        <p>in Lexington Massachusetts.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        id="carousel-image"
                        src={process.env.PUBLIC_URL + '/assets/images/rit.jpg'}
                        alt="Rochester Institute of Technology"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>Studying</h3>
                        <p>Software Egnineering at the Rochester Institute of Technology.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </>
);

export default HomePage;