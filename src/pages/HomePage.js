import React from 'react';
import {Carousel} from "react-bootstrap";


const HomePage = () => (
    <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    id="carousel-image"
                    src={process.env.PUBLIC_URL + '/assets/images/london.jpg'}
                    alt="London Cityscape at night"
                />
                <Carousel.Caption>
                    <h3>Born</h3>
                    <p>in England.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
);

export default HomePage;