import React from 'react';
import {Carousel} from "react-bootstrap";
import './HomePage.css';

const HomePage = () => (
    <>
        <Carousel>
            <Carousel.Item className="carousel-item">
                <img
                    className="d-block w-100"
                    id="carousel-image"
                    src={process.env.PUBLIC_URL + '/assets/images/london.jpg'}
                    alt="London Cityscape at night."
                />
                <Carousel.Caption>
                    <h3 className="carousel-caption-h3">Born</h3>
                    <p className="carousel-caption-p">in England.</p>
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
                    <h3 className="carousel-caption-h3">Raised</h3>
                    <p className="carousel-caption-p">in Lexington Massachusetts.</p>
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
                    <h3 className="carousel-caption-h3">Studying</h3>
                    <p className="carousel-caption-p">Software Engineering at the Rochester Institute of Technology.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        {/*<div>*/}
        {/*    <p>"All that is gold does not glitter,<br/>*/}
        {/*    Not all those who wander are lost"<br/>*/}
        {/*        - J.R.R. Tolkien</p>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <h2>Other text</h2>*/}
        {/*    <p>Paragraph</p>*/}
        {/*</div>*/}
    </>
);

export default HomePage;